'use client';

import { Box, Flex, Text, Stack, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { YellowLocationIcon } from '~/lib/components/Icons/LocationIcon';
import { WhiteLogo } from '~/lib/components/Logo';

const Header = () => {
  const pathname = usePathname();

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
            <WhiteLogo />
          </Box>
        </Link>
        <Box>
          <Flex alignItems="center">
            <Box>
              <Flex alignItems="center" gap="45px">
                {links.map((item, index) => {
                  const isActive = pathname === item.url;
                  return (
                    <Box position="relative" key={index}>
                      {isActive && (
                        <Image
                          src="/assets/active-star.svg"
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
                      <Link href={item.url} passHref>
                        <Text color="brand.400">{item.name}</Text>
                      </Link>
                    </Box>
                  );
                })}
                <Box>
                  <Stack direction="row" alignItems="center" gap="15px">
                    <Box bg="#6DD3CE" h="40px" w="2px" />
                    <Link href="/" passHref>
                      <Box>
                        <Flex alignItems="center" gap="8px">
                          <YellowLocationIcon />
                          <Text color="scheme.200">Services near you</Text>
                        </Flex>
                      </Box>
                    </Link>
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
