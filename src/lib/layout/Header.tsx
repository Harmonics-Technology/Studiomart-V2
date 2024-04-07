'use client';

import { Box, Flex, Text, Stack, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

import ButtonComponent from '../components/Button/Button';
import Logo from '../components/Logo';

const Header = () => {
  const [activeLink, setActiveLink] = useState(0);
  const pathname = usePathname();
  const router = useRouter();

  const hideNavbarRoutes = ['/signin', '/signup', '/client'];

  if (hideNavbarRoutes.includes(pathname)) {
    return null;
  }

  const changeActiveLink = (index: number) => {
    setActiveLink(index);
  };

  const links = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'Studios',
      url: '/studios',
    },
  ];

  return (
    <Box as="header" width="full" p="6">
      <Flex w="full" justifyContent="space-between" alignItems="center">
        <Link href="/">
          <Box>
            <Logo />
          </Box>
        </Link>
        <Box>
          <Flex alignItems="center">
            <Box>
              <Flex alignItems="center" gap="45px">
                {links.map((item, index) => {
                  return (
                    <Box position="relative" key={index}>
                      {index === activeLink && (
                        <Image
                          src="assets/active-star.svg"
                          width="10px"
                          height="10px"
                          alt="active link image"
                          style={{
                            position: 'absolute',
                            top: '-7px',
                            right: '-12px',
                          }}
                        />
                      )}
                      <Link href={item.url}>
                        <Text
                          onClick={() => changeActiveLink(index)}
                          color={index === activeLink ? '#1570FA' : '#0C090A'}
                        >
                          {item.name}
                        </Text>
                      </Link>
                    </Box>
                  );
                })}
                <Box>
                  <Stack direction="row" alignItems="center" gap="15px">
                    <Link href="/">
                      <Text color="#267E79">Become a Vendor</Text>
                    </Link>
                    <Box bg="#6DD3CE" h="40px" w="2px" />
                    <ButtonComponent
                      width="125px"
                      bg="brand.100"
                      color="#FFFFFF"
                      text="Get Started"
                      onClick={() => {
                        router.push('/sign-in');
                      }}
                    />
                  </Stack>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
