import { Box, Flex, Text, Stack } from '@chakra-ui/react';
import Link from 'next/link';

import HistoryIcon from '../components/Icons/HistoryIcon';
import HomeIcon from '../components/Icons/HomeIcon';
import LogoutIcon from '../components/Icons/LogoutIcon';
import MessagesIcon from '../components/Icons/MessagesIcon';
import StudioIcon from '../components/Icons/StudioIcon';
import SupportIcon from '../components/Icons/SupportIcon';
import {
  SideNavItemProps,
  CloseSideNavProps,
} from '../utilities/Context/schemas';
import Logo from '~/lib/components/Logo';

const SideNavItem = ({ label, Icon, link, isActive }: SideNavItemProps) => {
  return (
    <Link href={link}>
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

const SideNav = ({ onClick }: CloseSideNavProps) => {
  return (
    <Box
      w="100%"
      bg="rgba(0,0,0,0.5)"
      h="100vh"
      overflow="hidden"
      position="fixed"
      zIndex="3"
      onClick={onClick}
    >
      <Box w="300px" bg="brand.400" h="100%" py="8" px="7">
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
                  link="/services"
                  isActive
                />
                <SideNavItem
                  label="Studios"
                  Icon={StudioIcon}
                  link="/studios"
                  isActive={false}
                />
                <SideNavItem
                  label="Messages"
                  Icon={MessagesIcon}
                  link="/services"
                  isActive={false}
                />
                <SideNavItem
                  label="History"
                  Icon={HistoryIcon}
                  link="/services"
                  isActive={false}
                />
                <SideNavItem
                  label="Customer Support"
                  Icon={SupportIcon}
                  link="/services"
                  isActive={false}
                />
              </Stack>
            </Box>
            <Box>
              <Stack spacing="22px">
                <Link href="/">
                  <Text color="status.300" fontWeight={500}>
                    Become a Vendor
                  </Text>
                </Link>
                <SideNavItem
                  label="Log Out"
                  Icon={LogoutIcon}
                  link="/services"
                  isActive={false}
                />
              </Stack>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default SideNav;
