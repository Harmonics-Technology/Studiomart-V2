'use client';

import { Box, Stack } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';

import FormFooter from './Sections/FormFooter';
import Header from './Sections/Header';
import VendorSignupForm from './Sections/VendorSignupForm';

const Index = () => {
  const pathname = usePathname();
  // useLayoutEffect(() => {
  //   const routesToHideNavbar = [
  //     '/signup',
  //     '/signin',
  //     '/forgot-password',
  //     '/reset-password',
  //   ];
  //   setIsLoggedIn(
  //     routesToHideNavbar.some((route) => pathname.includes(route))
  //   );
  // }, [pathname]);

  // if (isLoggedIn) {
  //   return null;
  // }

  return (
    <Box as="section" w="100%" minH="100vh" position="relative">
      <Box
        position="absolute"
        backgroundImage="url('/assets/thick-star-illustration.png')"
        backgroundRepeat="no-repeat"
        width={['80px', '120px']}
        height={['80px', '120px']}
        top="25%"
        right="0"
      />
      <Box
        backgroundImage="url('/assets/bg-illustration.png')"
        backgroundRepeat="no-repeat"
        position="absolute"
        w={['200px', '386px']}
        h={['200px', '250px']}
        backgroundSize="contain"
        top="50%"
        left="0"
      />
      <Stack>
        {pathname.includes('/user') ? null : <Header />}
        <Box maxW="640px" mx="auto">
          <VendorSignupForm />
        </Box>
        <FormFooter />
      </Stack>
    </Box>
  );
};

export default Index;
