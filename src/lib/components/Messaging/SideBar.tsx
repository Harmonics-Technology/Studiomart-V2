/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Box, Image, Text, VStack } from '@chakra-ui/react';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';

import { db } from '../firebase/firebase';
import { AuthContext } from '~/lib/utilities/Context/AuthContext';
import { ChatContext } from '~/lib/utilities/Context/ChatContext';

import { Chats } from './Chats';
import { Search } from './Search';

export const SideBar = ({ showChat, setShowChat }: any) => {
  const [chat, setChat] = useState<any>([]);
  const { currentUser } = useContext(AuthContext);
  // const { user } = useContext(UserContext);
  //

  const { dispatch } = useContext(ChatContext);

  const handleSelect = async (u: any) => {
    const combinedId =
      currentUser?.uid > u?.userInfo?.uid
        ? currentUser?.uid + u?.userInfo?.uid
        : u?.userInfo?.uid + currentUser?.uid;

    dispatch({ type: 'CHANGE_USER', payload: u?.userInfo });
    if (u.isRead === false && currentUser?.uid !== u?.lastMessage.senderId) {
      await updateDoc(doc(db, 'userChats', u.userInfo.uid), {
        [`${combinedId}.isRead`]: true,
        [`${combinedId}.lastMessage.isRead`]: true,
      });
      await updateDoc(doc(db, 'userChats', currentUser.uid), {
        [`${combinedId}.isRead`]: true,
        [`${combinedId}.lastMessage.isRead`]: true,
      });
    }
    setShowChat(true);
  };

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(
        doc(db, 'userChats', currentUser?.uid),
        (docs) => {
          setChat(docs.data());
        }
      );
      return () => {
        unsub();
      };
    };

    currentUser?.uid && getChats();
  }, [currentUser?.uid]);
  return (
    <Box
      bgColor="white"
      borderRadius="8px"
      h="78vh"
      w={{ base: '100%', lg: '28%' }}
      py="2rem"
      boxShadow={{ base: 'none', lg: 'lg' }}
      pos={{ base: 'absolute', lg: 'relative' }}
      left={{ base: !showChat ? '0%' : '-100%', lg: '0' }}
      transition="all .3s ease"
    >
      {chat === undefined ? (
        <>
          {/* <Search chat={chat} setChat={setChat} /> */}
          <Search />
          <Chats chat={chat} />
        </>
      ) : (
        <Box>
          {Object?.entries(chat)?.length > 0 ? (
            <>
              {/* <Search chat={chat} setChat={setChat} /> */}
              <Search />
              <Chats chat={chat} handleSelect={handleSelect} />
            </>
          ) : (
            <VStack spacing="1rem" justify="center" h="full">
              <Box w="60%">
                <Image src="/assets/no_chat.png" alt="" w="full" />
              </Box>
              <Text fontSize=".9rem" textAlign="center" w="70%">
                You currently don’t have any message, Messages sent to you will
                appear here.
              </Text>
            </VStack>
          )}
        </Box>
      )}
    </Box>
  );
};
