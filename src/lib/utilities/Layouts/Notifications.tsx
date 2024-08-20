'use client';

import {
  Avatar,
  Box,
  Circle,
  Flex,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
  Stack,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
// import { NotificationTop } from "src/utils/NotificationTop";
import toast from 'react-hot-toast';
import { BsCheckAll, BsFillTrashFill } from 'react-icons/bs';

import BigNotificationsBellIcon from '~/lib/components/Icons/BigNotificationsBellIcon';
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
    <Box py="2rem" bg="scheme.700">
      <Stack w="80%" mx="auto" justify="center" mb="1rem">
        <Heading fontSize="24px">Notifications</Heading>
        <Text>Stay Updated with Your Studio Activities</Text>
      </Stack>
      <Box w={{ base: 'full', lg: '80%' }} mx="auto" px="2rem" py="2rem">
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
            w="50%"
            overflow="hidden"
            align="center"
            justify="center"
            mx="auto"
            h="80vh"
            textAlign="center"
          >
            <Stack
              justifyContent="center"
              alignItems="center"
              spacing="30px"
              textAlign="center"
            >
              <BigNotificationsBellIcon />
              <Heading fontSize={20} fontWeight={700}>
                No Notifications Yet
              </Heading>
              <Text lineHeight="26px" color="brand.600">
                When you start receiving updates, they'll appear here. Stay
                tuned for new bookings, messages, and other important
                notifications.
              </Text>
            </Stack>
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default Notification;
