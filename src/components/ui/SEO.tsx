import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export default function SEO({ 
  title, 
  description, 
  canonicalUrl = 'https://daredevildigital.com', 
  ogImage = 'https://daredevildigital.com/images/hero-bg.png' 
}: SEOProps) {
  const defaultTitle = 'Daredevil Digital | Digital Marketing & Lead Generation Singapore';
  const defaultDescription = 'Daredevil Digital helps Singapore businesses strengthen their digital presence, improve paid social performance and build lead generation systems around real business outcomes.';
  
  const finalTitle = title ? `${title} | Daredevil Digital` : defaultTitle;
  const finalDescription = description || defaultDescription;

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={ogImage} />
      
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
}
