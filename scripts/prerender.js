import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, '../dist');

// Define all routes to prerender
const routes = [
  '/',
  '/about',
  '/services',
  '/work',
  '/contact',
  '/signal-audit',
  '/audit',
  '/blueprint',
  '/faq',
  '/services/performance-marketing',
  '/services/chatgpt-ads',
  '/services/social-media-management',
  '/services/social-media-coaching',
  '/services/analytics-reporting',
  '/services/content-creation',
  '/services/website-development',
  '/404'
];

const app = express();
// Serve the static files from the dist directory
app.use(express.static(distDir));

// For SPA routing, fallback to index.html
app.use((req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

const PORT = 3005;

const isVercel = process.env.VERCEL === '1' || process.env.VERCEL;

const server = app.listen(PORT, async () => {
  console.log(`[Prerender] Started local server on port ${PORT}. Env: ${isVercel ? 'Vercel' : 'Local'}`);
  
  try {
    let browser;
    if (isVercel) {
      const puppeteer = (await import('puppeteer-core')).default;
      const chromium = (await import('@sparticuz/chromium')).default;
      browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
      });
    } else {
      const puppeteer = (await import('puppeteer')).default;
      browser = await puppeteer.launch({
        headless: true
      });
    }
    const page = await browser.newPage();
    
    for (const route of routes) {
      console.log(`[Prerender] Rendering ${route}...`);
      
      // Go to the page and wait for network to be idle (so React finishes rendering)
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });

      // Extra delay for React to safely render full content
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Get the full HTML
      const html = await page.content();
      
      // Calculate the output path
      let outputPath;
      if (route === '/') {
        // Only overwrite index.html at the very end to avoid messing up the SPA fallback for other routes
        outputPath = path.join(distDir, 'index-prerendered.html');
      } else {
        const routeDir = path.join(distDir, route);
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        outputPath = path.join(routeDir, 'index.html');
      }
      
      fs.writeFileSync(outputPath, html, 'utf-8');
      console.log(`[Prerender] Saved ${route}`);
    }
    
    // Now replace the main index.html with the prerendered home page
    const mainHtmlPath = path.join(distDir, 'index.html');
    const prerenderedHomePath = path.join(distDir, 'index-prerendered.html');
    if (fs.existsSync(prerenderedHomePath)) {
        fs.copyFileSync(prerenderedHomePath, mainHtmlPath);
        fs.unlinkSync(prerenderedHomePath);
    }
    
    await browser.close();
    console.log(`[Prerender] All pages pre-rendered successfully!`);
  } catch (error) {
    console.error(`[Prerender] Error during prerendering:`, error);
    process.exit(1);
  } finally {
    server.close();
  }
});
