import { Box, Flex, Avatar, Heading, Text, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

import { GlobalSearch } from '../components/SearchComponents/GlobalSearch';
import { OpenSideNavProps } from '../utilities/Context/schemas';
import { useLoggedUser } from '../utilities/Hooks/useLoggedUser';
import BookmarkIcon from '~/lib/components/Icons/BookmarkIcon';
import NotificationIcon from '~/lib/components/Icons/NotificationIcon';
import Logo from '~/lib/components/Logo';

const UserHeader = ({ onClick }: OpenSideNavProps) => {
  const { user } = useLoggedUser();
  return (
    <Box
      as="header"
      px="30px"
      py="20px"
      maxW="1440px"
      mx="auto"
      mb="41px"
      position="sticky"
      top="0"
      bg="brand.400"
      zIndex="2"
      boxShadow="sm"
    >
      <Box as="nav">
        <Flex alignItems="center" gap="40px">
          <Box onClick={onClick} cursor="pointer">
            <FaBars />
          </Box>
          <Logo />
          <Box w="599px">
            <GlobalSearch />
          </Box>
          <Box>
            <Flex alignItems="center" gap="20px">
              <Link passHref href="/notification">
                <NotificationIcon />
              </Link>
              <Link passHref href="/saved">
                <BookmarkIcon />
              </Link>
              <Stack direction="row" spacing="4px">
                <Avatar size="sm" />
                <Box color="brand.700">
                  <Heading fontSize={16} fontWeight={500}>
                    {user?.firstName}
                  </Heading>
                  <Text fontSize={8}>{user?.email}</Text>
                </Box>
              </Stack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default UserHeader;
