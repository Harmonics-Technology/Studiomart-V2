'use client';

import {
  Box,
  Flex,
  Text,
  Stack,
  Button,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  Image,
} from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiChevronDown } from 'react-icons/fi';

import MobileCloseIcon from '../components/Icons/MobileCloseIcon';
import {
  MobileSidenavItemProps,
  MobileSideNavProps,
} from '../utilities/Context/schemas';
import { WhiteLogo } from '~/lib/components/Logo';

const SideNavItem = ({
  label,
  link,
  isActive,
  onClick,
}: MobileSidenavItemProps) => {
  return (
    <Link href={link} passHref>
      <Box
        w="100%"
        p="12px"
        borderBottom="1px solid"
        borderBottomColor="scheme.600"
        onClick={onClick}
      >
        <Text
          color={isActive ? 'text.100' : 'brand.700'}
          fontWeight={isActive ? 700 : 500}
          pb="20px"
          fontSize={16}
        >
          {label}
        </Text>
      </Box>
    </Link>
  );
};

const MobileSideNav = ({ setOpenSideNav }: MobileSideNavProps) => {
  const pathname = usePathname();
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
    <Box
      w="100%"
      h="100vh"
      overflow="hidden"
      position="fixed"
      top="0"
      left="0"
      zIndex="3"
      transition="2s ease"
    >
      <Box w="100%" bg="brand.400" h="100%" transition="2s ease">
        <Box h="100%">
          <Flex
            flexDirection="column"
            height="100%"
            justifyContent="space-between"
          >
            <Box>
              <Box
                w="100%"
                mb="50px"
                h="100px"
                bg="brand.100"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Flex
                  w="100%"
                  px="16px"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Link passHref href="/">
                    <WhiteLogo />
                  </Link>
                  <Button
                    _hover={{ bg: 'none' }}
                    bg="none"
                    p="0"
                    onClick={() => setOpenSideNav(false)}
                  >
                    <MobileCloseIcon />
                  </Button>
                </Flex>
              </Box>
              <Stack spacing="20px" w="80%" mx="auto">
                <SideNavItem
                  label="Home"
                  link="/"
                  onClick={() => setOpenSideNav(false)}
                  isActive={pathname === '/'}
                />
                <SideNavItem
                  label="About"
                  link="/about"
                  onClick={() => setOpenSideNav(false)}
                  isActive={pathname === '/about'}
                />
                <SideNavItem
                  label="Studios"
                  link="/studios"
                  onClick={() => setOpenSideNav(false)}
                  isActive={pathname === '/studios'}
                />
                <Menu>
                  <MenuButton
                    bg="none"
                    _hover={{ bg: 'none' }}
                    fontWeight={400}
                    as={Button}
                    w="100%"
                  >
                    <Flex alignItems="center" justifyContent="space-between">
                      <Text>Institutions</Text>
                      <FiChevronDown />
                    </Flex>
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
                <Link href="/sign-in">
                  <Button
                    mt="45px"
                    w="100%"
                    bg="brand.100"
                    color="brand.400"
                    fontWeight={400}
                    py="10px"
                  >
                    Get Started
                  </Button>
                </Link>
                <Link href="/become-a-vendor">
                  <Text color="status.300" textAlign="center" fontWeight={500}>
                    Become a Vendor
                  </Text>
                </Link>
              </Stack>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default MobileSideNav;
