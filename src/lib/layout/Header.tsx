'use client';
import { Box, Flex, Text, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { signIn, useSession, signOut } from 'next-auth/react';

import ButtonComponent from '../components/Button/Button';
import Logo from '../components/Logo';

const Header = () => {
  const [activeLink, setActiveLink] = useState(0);
  const pathname = usePathname();
  const { userData: session } = useSession();

  const hideNavbarRoutes = ['/signin', '/signup'];

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
        <Box>
          <Logo />
        </Box>
        <Box>
          <Flex alignItems="center">
            <Box>
              <Flex alignItems="center" gap="45px">
                {links.map((item, index) => {
                  return (
                    <Box position="relative">
                      {index === activeLink && (
                        <Image
                          src="/assets/active-star.svg"
                          width={10}
                          height={10}
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
                      bg="#1570FA"
                      color="#FFFFFF"
                      text="Get Started"
                      onClick={() => signIn()}
                    />
                    <ButtonComponent
                      width="125px"
                      bg="#1570FA"
                      color="#FFFFFF"
                      text="Get Out"
                      onClick={() => signOut()}
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
