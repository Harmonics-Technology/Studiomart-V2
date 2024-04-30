import {
  Box,
  Flex,
  Avatar,
  Heading,
  Text,
  Stack,
  InputGroup,
  Input,
  InputLeftElement,
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';

import { OpenSideNavProps } from '../utilities/Context/schemas';
import { useLoggedUser } from '../utilities/Hooks/useLoggedUser';
import BookmarkIcon from '~/lib/components/Icons/BookmarkIcon';
import NotificationIcon from '~/lib/components/Icons/NotificationIcon';
import SearchIcon from '~/lib/components/Icons/SearcIcon';
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
          <Box onClick={onClick}>
            <FaBars />
          </Box>
          <Logo />
          <Box w="599px">
            <InputGroup w="100%">
              <InputLeftElement pointerEvents="none">
                <SearchIcon />
              </InputLeftElement>
              <Input
                type="tel"
                placeholder="Phone number"
                px="40px"
                py="12px"
                _placeholder={{ color: 'text.200', fontWeight: 400 }}
              />
            </InputGroup>
          </Box>
          <Box>
            <Flex alignItems="center" gap="20px">
              <NotificationIcon />
              <BookmarkIcon />
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
