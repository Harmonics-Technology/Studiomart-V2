'use client';

import { Box } from '@chakra-ui/react';
import { useCookies } from 'next-client-cookies';
import { ReactNode, useState } from 'react';

import Footer from './Footer';
import Header from './Header';
import SideNav from './SideNav';
import UserHeader from './UserHeader';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const cookies = useCookies();
  const isLoggedIn = cookies.get('studiomart-user');
  const [openSideNav, setOpenSideNav] = useState<boolean>(false);
  return (
    <Box margin="0 auto" transition="0.5s ease-out">
      {openSideNav && <SideNav onClick={() => setOpenSideNav(false)} />}
      <Box>
        {isLoggedIn ? (
          <UserHeader onClick={() => setOpenSideNav(true)} />
        ) : (
          <Header />
        )}
        <Box as="main">{children}</Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
