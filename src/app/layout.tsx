import type { Viewport } from 'next';
import { CookiesProvider } from 'next-client-cookies/server';

import '../lib/styles/globals.css';
import Providers from '~/app/providers';
import Layout from '~/lib/layout';
import { MetadataValue } from '~/lib/utilities/Layouts/Metadata';

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata = MetadataValue();

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
