'use client';

import {
  Avatar,
  Box,
  Circle,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
// import { NotificationTop } from "src/utils/NotificationTop";
import toast from 'react-hot-toast';
import { BsCheckAll, BsFillTrashFill } from 'react-icons/bs';

import {
  NotificationService,
  NotificationView,
  NotificationViewPagedCollection,
} from '~/services';

import { MenuDropdown } from './MenuDropdown';
import Pagination from './Paginatio';

interface NotificationProps {
  notifications: NotificationViewPagedCollection;
}
dayjs.extend(relativeTime);
const Notification = ({ notifications }: NotificationProps) => {
  const [loading, setLoading] = useState<any>({ status: false, id: '' });

  const router = useRouter();
  const markAsReadFunction = async (data: string) => {
    setLoading({ status: true, id: data });
    try {
      const result = await NotificationService.markAsRead({ id: data });
      if (result.status) {
        setLoading({ status: false, id: data });
        toast.success('Successful!');
        router.refresh();
        return;
      }
      setLoading({ status: false, id: data });
      toast.error(result.message as string);
    } catch (error: any) {
      setLoading({ status: false, id: data });
      toast.error(error?.body?.message || error?.message, {
        className: 'loginToast',
      });
    }
  };
  const deleteFunction = async (data: string) => {
    setLoading({ status: true, id: data });
    try {
      const result = await NotificationService.deleteNotification({ id: data });
      if (result.status) {
        setLoading({ status: false, id: data });
        toast.success('Successful!');
        router.refresh();
        return;
      }
      setLoading({ status: false, id: data });
      toast.error(result.message as string);
    } catch (error: any) {
      setLoading({ status: false, id: data });
      toast.error(error?.body?.message || error?.message, {
        className: 'loginToast',
      });
    }
  };
  //
  return (
    <Box fontFamily="DM Sans" mb="2.8rem">
      <VStack w="80%" mx="auto" mt="3rem" justify="center">
        <Heading fontSize="2rem">Notifications!</Heading>
      </VStack>
      <Box
        w={{ base: 'full', lg: '80%' }}
        bgColor="white"
        mx="auto"
        px="2rem"
        py="2rem"
        borderRadius="20px"
        boxShadow={{ base: 'none', lg: 'lg' }}
      >
        {(notifications?.value as any)?.length > 0 ? (
          <SimpleGrid bg="white">
            {notifications?.value?.map((info: NotificationView) => (
              <Flex
                w="full"
                justify="space-between"
                borderBottom="0.8px solid #D4DDDF"
                key={info.id}
                py="1rem"
                // flexDirection={{ base: "column", lg: "row" }}
              >
                <Flex align="center" gap="1.5rem" w="70%">
                  <Circle
                    bgColor={info.isRead ? 'gray.200' : 'brand.100'}
                    size="10px"
                  />
                  <Avatar
                    src={info?.user?.profilePicture as string}
                    name={info?.user?.fullName || ''}
                    display={{ base: 'none', lg: 'block' }}
                  />
                  <Text
                    pr={{ base: '0', lg: '4rem' }}
                    fontWeight="400"
                    mb="0"
                    color={info.isRead ? 'gray.300' : 'black'}
                  >
                    {info.message}
                    <Link passHref href={(info.url as string) || ''}>
                      <Text
                        as="a"
                        color={info.isRead ? 'gray.200' : 'brand.100'}
                        mb="0"
                        pl=".3rem"
                        display="inline"
                        cursor="pointer"
                      >
                        View
                      </Text>
                    </Link>
                  </Text>
                </Flex>
                <VStack gap=".7rem" ml="auto">
                  {loading.status && loading.id === info.id ? (
                    <Spinner size="md" />
                  ) : (
                    <MenuDropdown
                      menus={[
                        {
                          label: 'Mark as read',
                          id: 1,
                          onclick: () => markAsReadFunction(info.id as string),
                          icon: BsCheckAll,
                        },
                        {
                          label: 'Delete Notification',
                          id: 1,
                          onclick: () => deleteFunction(info.id as string),
                          icon: BsFillTrashFill,
                          color: 'red',
                        },
                      ]}
                    />
                  )}

                  <Text fontSize="10px">
                    {dayjs(info.dateCreated).fromNow()}
                  </Text>
                </VStack>
              </Flex>
            ))}
            <Pagination data={notifications} />
          </SimpleGrid>
        ) : (
          <Flex
            w="30%"
            overflow="hidden"
            align="center"
            justify="center"
            mx="auto"
            h="28rem"
          >
            <Image src="/assets/empty.png" alt="image" w="full" />
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default Notification;