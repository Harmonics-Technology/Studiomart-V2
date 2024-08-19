'use client';

import { Box, Flex, Stack, Heading, Text } from '@chakra-ui/react';
import { useState } from 'react';

import { Chat } from './Chat';
import { SideBar } from './SideBar';

export const ChatHome = () => {
  const [showChat, setShowChat] = useState(false);
  return (
    <Box bg="scheme.700" py="2.5rem">
      <Stack w="90%" mx="auto">
        <Heading fontSize={24} fontWeight={700}>
          Messages
        </Heading>
        <Text>Here you can chat with your prospects</Text>
      </Stack>
      <Flex
        w="90%"
        mx="auto"
        mt="1.8rem"
        gap="2rem"
        h="78vh"
        overflow="hidden"
        pos="relative"
      >
        <SideBar showChat={showChat} setShowChat={setShowChat} />
        <Chat showChat={showChat} setShowChat={setShowChat} />
      </Flex>
    </Box>
  );
};
