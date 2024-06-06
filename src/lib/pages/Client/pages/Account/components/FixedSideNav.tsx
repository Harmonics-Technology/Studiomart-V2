'use client';

import { Box, Stack, Flex, Text } from '@chakra-ui/react';

import {
  ProfileIcon,
  SecurityIcon,
  DeleteIcon,
  SupportIcon,
} from '~/lib/components/Icons/AccountIcons';
import {
  NavPositionProps,
  NavItemProps,
} from '~/lib/utilities/Context/schemas';

const SideNavItem = ({ label, Icon, isActive, onClick }: NavItemProps) => {
  return (
    <Box
      w="100%"
      py="12px"
      px="18px"
      borderRadius="4px"
      bg={isActive ? 'scheme.800' : 'none'}
      onClick={onClick}
      cursor="pointer"
    >
      <Flex alignItems="center" gap="12px">
        <Icon isActive={isActive} />
        <Text
          color={isActive ? 'brand.100' : 'brand.600'}
          fontWeight={isActive ? 700 : 400}
        >
          {label}
        </Text>
      </Flex>
    </Box>
  );
};

const FixedSideNav = ({ navPosition, setNavPosition }: NavPositionProps) => {
  return (
    <Box h="400px" py="24px">
      <Stack spacing="20px">
        <SideNavItem
          label="My Profile"
          Icon={ProfileIcon}
          isActive={navPosition === 1}
          onClick={() => setNavPosition(1)}
        />
        <SideNavItem
          label="Security"
          Icon={SecurityIcon}
          isActive={navPosition === 2}
          onClick={() => setNavPosition(2)}
        />
        <SideNavItem
          label="Support"
          Icon={SupportIcon}
          isActive={navPosition === 3}
          onClick={() => setNavPosition(3)}
        />
        <Box
          w="100%"
          py="12px"
          px="18px"
          borderRadius="4px"
          bg={navPosition === 4 ? 'studioStatus.300' : 'none'}
          onClick={() => setNavPosition(4)}
          cursor="pointer"
        >
          <Flex alignItems="center" gap="12px">
            <DeleteIcon />
            <Text color="scheme.900">Delete Account</Text>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default FixedSideNav;
