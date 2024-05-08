/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Box } from '@chakra-ui/react';
import { doc, onSnapshot } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';

import { db } from '../firebase/firebase';
import { ChatContext } from '~/lib/utilities/Context/ChatContext';

import { Message } from './Message';

export const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, 'chats', data.chatId), (docs) => {
      docs.exists() && setMessages(docs.data().messages);
    });
    return () => {
      unSub();
    };
  }, [data.chatId]);

  //
  return (
    <Box>
      <Box
        h={{ base: '60vh', lg: '58vh' }}
        py="2rem"
        overflow="hidden auto"
        px="1rem"
        boxShadow="md"
      >
        {messages.map((m: any) => (
          <Message message={m} key={m?.id} />
        ))}
      </Box>
    </Box>
  );
};
