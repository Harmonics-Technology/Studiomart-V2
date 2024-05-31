import { Box, Flex, Text, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';

import CalendarIcon from '../components/Icons/CalendarIcon';
import HomeIcon from '../components/Icons/HomeIcon';
import LogoutIcon from '../components/Icons/LogoutIcon';
import MessagesIcon from '../components/Icons/MessagesIcon';
import StudioIcon from '../components/Icons/StudioIcon';
import SupportIcon from '../components/Icons/SupportIcon';
import { PodcastIcon } from '../components/Icons/TagIcons';
import {
  SideNavItemProps,
  CloseSideNavProps,
} from '../utilities/Context/schemas';
import { useLoaderProgress } from '../utilities/Hooks/progress-bar';
import Logo from '~/lib/components/Logo';

const SideNavItem = ({ label, Icon, link, isActive }: SideNavItemProps) => {
  return (
    <Link href={link} passHref>
      <Box
        w="100%"
        bg={isActive ? 'brand.100' : 'none'}
        p="12px"
        borderRadius="4px"
      >
        <Flex alignItems="center" gap="10px">
          <Icon isActive={isActive} />
          <Text
            color={isActive ? 'brand.400' : 'brand.600'}
            fontWeight={isActive ? 700 : 500}
          >
            {label}
          </Text>
        </Flex>
      </Box>
    </Link>
  );
};

const SideNav = ({ onClick, openSideNav }: CloseSideNavProps) => {
  const cookies = useCookies();
  const router = useRouter();
  const pathname = usePathname();
  const showLoaderProgress = useLoaderProgress();

  const doLogout = async () => {
    cookies.remove('token');
    cookies.remove('studiomart-user');
    showLoaderProgress(() => router.push('/'));
  };

  return (
    <Box
      w="100%"
      left={openSideNav ? 0 : '-100%'}
      bg="rgba(0,0,0,0.5)"
      h="100vh"
      overflow="hidden"
      position="fixed"
      zIndex="3"
      onClick={onClick}
      transition=".5s ease"
    >
      <Box
        w="300px"
        bg="brand.400"
        h="100%"
        left={openSideNav ? 0 : '-100%'}
        py="8"
        px="7"
      >
        <Box h="100%">
          <Flex
            flexDirection="column"
            height="100%"
            justifyContent="space-between"
          >
            <Box>
              <Box mb="50px">
                <Logo />
              </Box>
              <Stack spacing="16px">
                <SideNavItem
                  label="Home"
                  Icon={HomeIcon}
                  link="/user"
                  isActive={pathname === '/user'}
                />
                <SideNavItem
                  label="Services"
                  Icon={PodcastIcon}
                  link="/user/services"
                  isActive={pathname === '/user/services'}
                />
                <SideNavItem
                  label="Studios"
                  Icon={StudioIcon}
                  link="/studios"
                  isActive={pathname === '/studios'}
                />
                <SideNavItem
                  label="Bookings"
                  Icon={CalendarIcon}
                  link="/user/bookings"
                  isActive={pathname === '/user/bookings'}
                />
                <SideNavItem
                  label="Messages"
                  Icon={MessagesIcon}
                  link="/user/message"
                  isActive={pathname === '/user/message'}
                />
                {/* <SideNavItem
                  label="History"
                  Icon={HistoryIcon}
                  link="/user/bookings"
                  isActive={pathname === '/user/bookings'}
                /> */}
                <SideNavItem
                  label="Customer Support"
                  Icon={SupportIcon}
                  link="/support"
                  isActive={pathname === '/support'}
                />
              </Stack>
            </Box>
            <Box>
              <Stack spacing="22px">
                <Link href="/become-a-vendor">
                  <Text color="status.300" fontWeight={500}>
                    Become a Vendor
                  </Text>
                </Link>
                <Box w="100%" p="12px">
                  <Flex
                    alignItems="center"
                    gap="10px"
                    onClick={doLogout}
                    cursor="pointer"
                  >
                    <LogoutIcon />
                    <Text color="brand.600" fontWeight={500}>
                      Logout
                    </Text>
                  </Flex>
                </Box>
              </Stack>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default SideNav;
