'use client';

import { Box } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { useState, type ReactNode, useEffect } from 'react';

import Footer from './Footer';
import Header from './Header';
import UserHeader from './UserHeader';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoggedIn(pathname.includes('/user'));
  }, [pathname]);

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
