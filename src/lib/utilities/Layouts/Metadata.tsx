export const MetadataValue = () => {
  const APP_NAME = 'Studiomart V2';
  return {
    metadataBase: new URL('http://localhost:3000'),
    title: { default: APP_NAME, template: '%s | Creativity meets inovation' },
    description: 'Next.js + chakra-ui + TypeScript template',
    applicationName: APP_NAME,
    appleWebApp: {
      capable: true,
      title: APP_NAME,
      statusBarStyle: 'default',
    },
    formatDetection: {
      telephone: false,
    },
    openGraph: {
      url: 'https://studiomart.io',
      title: 'studiomart',
      description: 'Next.js + chakra-ui + TypeScript template',
      images: {
        url: '',
        alt: 'studiomart.io og-image',
      },
    },
    twitter: {
      creator: '@studiomart',
      card: 'summary_large_image',
    },
  };
};
