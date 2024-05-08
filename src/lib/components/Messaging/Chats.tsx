/* eslint-disable no-unsafe-optional-chaining */
import {
  Avatar,
  Box,
  Circle,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useContext } from 'react';
import { BsCheckAll } from 'react-icons/bs';

import { AuthContext } from '~/lib/utilities/Context/AuthContext';

export const Chats = ({ chat, handleSelect }: any) => {
  const { currentUser } = useContext(AuthContext);
  dayjs.extend(relativeTime);

  return (
    <Box>
      {!chat ? (
        <Box />
      ) : (
        <Box
          py="1rem"
          borderBottom="1px solid"
          borderColor="gray.200"
          mt="1rem"
        >
          {Object?.entries(chat)?.map((chats: any) => (
            <Flex
              justify="space-between"
              px="1rem"
              key={chats[1]?.userInfo?.id}
              onClick={() => handleSelect(chats[1])}
              cursor="pointer"
            >
              <HStack spacing={2} w="78%">
                <Avatar
                  src={chats[1]?.userInfo?.photoURL}
                  name={chats[1]?.userInfo?.displayName}
                  size="md"
                />
                <Box>
                  <Heading fontSize="1rem" color="#333333" mb=".1rem">
                    {chats[1]?.userInfo?.displayName}
                  </Heading>
                  <Text mb="0" fontSize=".9rem" noOfLines={1}>
                    {chats[1]?.lastMessage?.text}
                  </Text>
                </Box>
              </HStack>
              <VStack h="full" justify="space-between" align="flex-end">
                <Text mb="0" fontSize=".9rem" noOfLines={1}>
                  {dayjs(
                    chats[1]?.date?.seconds * 1000 +
                      Math.round(chats[1]?.date?.nanoseconds / 1000000)
                  ).fromNow()}
                </Text>
                {chats[1]?.lastMessage?.isRead === true &&
                chats[1].lastMessage.senderId === currentUser.uid ? (
                  <Icon as={BsCheckAll} color="green" fontSize=".9rem" />
                ) : chats[1]?.lastMessage?.isRead === false &&
                  chats[1].lastMessage.senderId === currentUser.uid ? (
                  <Icon as={BsCheckAll} color="gray.300" fontSize=".9rem" />
                ) : chats[1]?.lastMessage?.isRead === false &&
                  chats[1].lastMessage.senderId !== currentUser.uid ? (
                  <Circle
                    bgColor="red"
                    color="white"
                    size=".9rem"
                    fontSize=".6rem"
                  >
                    1
                  </Circle>
                ) : (
                  ''
                )}
              </VStack>
            </Flex>
          ))}
        </Box>
      )}
    </Box>
  );
};
