import type { Viewport } from 'next';
import { CookiesProvider } from 'next-client-cookies/server';
// import { SessionProvider } from 'next-auth/react';
import '../lib/styles/globals.css';
import NextTopLoader from 'nextjs-toploader';

import Providers from '~/app/providers';
import Layout from '~/lib/layout';
import { ProgressBar } from '~/lib/utilities/Hooks/progress-bar';
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
        {/* <SessionProvider> */}
        <NextTopLoader color="#1570FA" showSpinner={false} />
        <ProgressBar className="progress">
          <CookiesProvider>
            <Providers>
              <Layout>{children}</Layout>
            </Providers>
          </CookiesProvider>
        </ProgressBar>
        {/* </SessionProvider> */}
      </body>
    </html>
  );
};

export default RootLayout;
