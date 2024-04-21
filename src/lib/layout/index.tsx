'use client';

import { Box } from '@chakra-ui/react';
import { useCookies } from 'next-client-cookies';
import { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';
import UserHeader from './UserHeader';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const cookies = useCookies();
  const isLoggedIn = cookies.get('studiomart-user');
  // useEffect(() => {
  //   (
  //     async () => {
  //       const LocomotiveScroll = (await import('locomotive-scroll')).default;
  //       const locomotiveScroll = new LocomotiveScroll();
  //     }
  //   )()
  // }, [])

  return (
    <Box margin="0 auto" transition="0.5s ease-out">
      <Box>
        {isLoggedIn ? <UserHeader /> : <Header />}
        <Box as="main">{children}</Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
