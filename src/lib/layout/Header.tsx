'use client';

import {
  Box,
  Flex,
  Text,
  Stack,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
// import { signIn, signOut } from 'next-auth/react';
import { FiChevronDown } from 'react-icons/fi';

import ButtonComponent from '../components/Button/Button';
import Logo from '../components/Logo';
import { useLoaderProgress } from '../utilities/Hooks/progress-bar';
// import Icon from 'react-multi-date-picker/components/icon';

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const showLoaderProgress = useLoaderProgress();

  const hideNavbarRoutes = ['/sign-in', '/register', '/institutions'];

  const hideNavbar = hideNavbarRoutes.some((route) => pathname.includes(route));

  if (hideNavbar) {
    return null;
  }

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

  const institutions = [
    {
      name: 'UI (University of Ibadan)',
      url: '/ui',
      icon: '/assets/ui.png',
    },
    {
      name: 'Unilag (University of Lagos)',
      url: '/unilag',
      icon: '/assets/unilag.png',
    },
    {
      name: 'OAU (Obafemi Awolowo University)',
      url: '/oau',
      icon: '/assets/oau.png',
    },
    {
      name: 'Yaba (Yaba College of Technology)',
      url: '/yabatech',
      icon: '/assets/yabatech.png',
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
                        <Text color={isActive ? '#1570FA' : '#0C090A'}>
                          {item.name}
                        </Text>
                      </Link>
                    </Box>
                  );
                })}
                <Menu>
                  <MenuButton
                    bg="none"
                    _hover={{ bg: 'none' }}
                    fontWeight={400}
                    as={Button}
                    rightIcon={<FiChevronDown />}
                  >
                    Institutions
                  </MenuButton>
                  <MenuList>
                    <Stack spacing="10px">
                      {institutions.map((institution, index) => {
                        return (
                          <Link
                            href={`/institutions/${institution.url}`}
                            passHref
                            key={index}
                          >
                            <MenuItem key={index} color="#0c090A" py="2">
                              <Flex gap="7px" alignItems="center">
                                <Image
                                  src={institution.icon}
                                  width="20px"
                                  height="20px"
                                />
                                <Text fontSize={15}>{institution.name}</Text>
                              </Flex>
                            </MenuItem>
                          </Link>
                        );
                      })}
                    </Stack>
                  </MenuList>
                </Menu>
                <Box>
                  <Stack direction="row" alignItems="center" gap="15px">
                    <Link href="/" passHref>
                      <Text color="#267E79">Become a Vendor</Text>
                    </Link>
                    <Box bg="#6DD3CE" h="40px" w="2px" />
                    <ButtonComponent
                      width="125px"
                      bg="brand.100"
                      color="#FFFFFF"
                      text="Get Started"
                      onClick={() =>
                        showLoaderProgress(() => router.push('/sign-in'))
                      }
                    />
                    {/* <ButtonComponent
                      width="125px"
                      bg="#1570FA"
                      color="#FFFFFF"
                      text="Get Out"
                      onClick={() => signOut()}
                    /> */}
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
