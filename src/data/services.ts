export type Service = {
  id: string;
  title: string;
  slug: string;
  description: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    id: '01',
    title: 'CHATGPT ADS',
    slug: 'chatgpt-ads',
    description: 'Leverage AI-driven advertising strategies to maximize reach, engagement, and conversion with cutting-edge ChatGPT ad placements.',
    capabilities: [
      'AI ad strategy',
      'Campaign optimization',
      'Audience targeting',
      'Performance analytics'
    ]
  },
  {
    id: '02',
    title: 'SOCIAL MEDIA MANAGEMENT',
    slug: 'social-media-management',
    description: 'From strategy to execution, we build consistent social presence that keeps your brand visible, relevant and connected.',
    capabilities: [
      'Campaign strategy',
      'Content planning',
      'Publishing',
      'Community management',
      'Performance reporting'
    ]
  },
  {
    id: '03',
    title: 'SOCIAL MEDIA COACHING',
    slug: 'social-media-coaching',
    description: 'Build the confidence and systems to manage your social presence effectively.',
    capabilities: [
      'Social strategy',
      'Platform best practices',
      'Content planning',
      'Engagement',
      'Performance optimization'
    ]
  },
  {
    id: '04',
    title: 'ANALYTICS & REPORTING',
    slug: 'analytics-reporting',
    description: 'Turn digital activity into actionable business insight.',
    capabilities: [
      'KPI tracking',
      'Campaign analysis',
      'Audience insights',
      'Engagement trends',
      'Conversion tracking',
      'ROI analysis'
    ]
  },
  {
    id: '05',
    title: 'CONTENT CREATION',
    slug: 'content-creation',
    description: 'Create visual content that makes your brand recognizable and memorable.',
    capabilities: [
      'Social media creatives',
      'Visual campaigns',
      'Image content',
      'Video content',
      'Brand consistency',
      'SEO aware content'
    ]
  },
  {
    id: '06',
    title: 'WEBSITE DEVELOPMENT',
    slug: 'website-development',
    description: 'Turn your digital presence into an experience designed to build trust and drive action.',
    capabilities: [
      'Custom design',
      'UX/UI',
      'Responsive development',
      'SEO foundations',
      'Ecommerce where required',
      'Maintenance'
    ]
  }
];
