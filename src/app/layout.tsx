import type { Metadata, Viewport } from 'next';
import { CookiesProvider } from 'next-client-cookies/server';

import '../lib/styles/globals.css';
import Providers from '~/app/providers';
import Layout from '~/lib/layout';

type RootLayoutProps = {
  children: React.ReactNode;
};

const APP_NAME = 'Studiomart V2';

export const metadata: Metadata = {
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <CookiesProvider>
          <Providers>
            <Layout>{children}</Layout>
          </Providers>
        </CookiesProvider>
      </body>
    </html>
  );
};

export default RootLayout;
