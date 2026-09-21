const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // 1. Generate Main Design System PDF
  const mainHtmlPath = `file://${path.join(__dirname, 'design-system.html')}`;
  await page.goto(mainHtmlPath, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 2000)); // Wait for Tailwind CDN
  
  await page.pdf({
    path: path.join(__dirname, '..', 'Daredevil_Digital_Brand_Design_System_2026.pdf'),
    format: 'A4',
    landscape: true,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });
  console.log('Successfully generated Daredevil_Digital_Brand_Design_System_2026.pdf');

  // 2. Generate Quick Reference PDF
  const quickRefPath = `file://${path.join(__dirname, 'quick-reference.html')}`;
  await page.goto(quickRefPath, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 2000)); // Wait for Tailwind CDN
  
  await page.pdf({
    path: path.join(__dirname, '..', 'Daredevil_Digital_Brand_Quick_Reference.pdf'),
    format: 'A4',
    landscape: false,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });
  console.log('Successfully generated Daredevil_Digital_Brand_Quick_Reference.pdf');

  await browser.close();
}

generatePDF().catch(console.error);
