import {
  Box,
  Flex,
  Avatar,
  Heading,
  Text,
  Stack,
  useMediaQuery,
  Button,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

import MobileNotificationIcon, {
  MobileHamburgerIcon,
} from '../components/Icons/MobileNotificationIcon';
import { GlobalSearch } from '../components/SearchComponents/GlobalSearch';
import { OpenSideNavProps } from '../utilities/Context/schemas';
import { useLoggedUser } from '../utilities/Hooks/useLoggedUser';
import BookmarkIcon from '~/lib/components/Icons/BookmarkIcon';
import NotificationIcon from '~/lib/components/Icons/NotificationIcon';
import Logo from '~/lib/components/Logo';

const MobileHeaderView = ({ onClick }: { onClick: () => void }) => {
  const { user } = useLoggedUser();
  return (
    <Box pt="5">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        w="90%"
        mx="auto"
        mb="30px"
      >
        <Button bg="none" onClick={onClick} p="0" _hover={{ bg: 'none', p: 0 }}>
          <MobileHamburgerIcon />
        </Button>
        <Box>
          <Flex alignItems="center" gap="12px">
            <Button bg="none" p="0" _hover={{ bg: 'none', p: 0 }}>
              <MobileNotificationIcon />
            </Button>
            <Avatar
              w="40px"
              h="40px"
              bg="brand.100"
              name={`${user?.firstName} ${user?.lastName}`}
              color="brand.400"
            />
          </Flex>
        </Box>
      </Flex>
      <Box w="90%" mx="auto">
        <GlobalSearch />
      </Box>
    </Box>
  );
};

const UserHeader = ({ onClick }: OpenSideNavProps) => {
  const { user } = useLoggedUser();
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <Box>
      {isMobile ? (
        <MobileHeaderView onClick={onClick} />
      ) : (
        <Box
          as="header"
          px="30px"
          py="20px"
          maxW="1440px"
          mx="auto"
          // mb="41px"
          position="sticky"
          top="0"
          bg="brand.400"
          zIndex="2"
          boxShadow="sm"
        >
          <Box as="nav">
            <Flex alignItems="center" gap="40px">
              <Box onClick={onClick} cursor="pointer">
                <FaBars size={18} />
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
                    <Avatar size="sm" src={user?.profilePicture as string} />
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
      )}
    </Box>
  );
};

export default UserHeader;
