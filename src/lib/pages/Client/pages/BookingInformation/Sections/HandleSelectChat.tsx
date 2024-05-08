/* eslint-disable no-unsafe-optional-chaining */

'use client';

import { Box } from '@chakra-ui/react';
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { ReactNode, useContext } from 'react';

import { db } from '~/lib/components/firebase/firebase';
import { AuthContext } from '~/lib/utilities/Context/AuthContext';
import { ChatContext } from '~/lib/utilities/Context/ChatContext';

export default function HandleSelectChat({
  chatsUser,
  url,
  setLoading,
  children,
}: {
  chatsUser: any;
  url: string;
  setLoading: any;
  children: ReactNode;
}) {
  const { dispatch } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();
  const handleSelect = async (chatUser: any) => {
    setLoading(true);
    const combinedId =
      currentUser?.uid > chatUser.uid
        ? currentUser?.uid + chatUser.uid
        : chatUser.uid + currentUser?.uid;

    try {
      const res = await getDoc(doc(db, 'chats', combinedId));

      if (!res.exists()) {
        await setDoc(doc(db, 'chats', combinedId), {
          messages: [],
        });
        await updateDoc(doc(db, 'userChats', currentUser?.uid), {
          [`${combinedId}.userInfo`]: {
            uid: chatUser.uid,
            displayName: chatUser.displayName,
            photoURL: chatUser.photoURL,
          },
          [`${combinedId}.date`]: serverTimestamp(),
        });
        await updateDoc(doc(db, 'userChats', chatUser.uid), {
          [`${combinedId}.userInfo`]: {
            uid: currentUser?.uid,
            displayName: currentUser?.displayName,
            photoURL: currentUser?.photoURL,
          },
          [`${combinedId}.date`]: serverTimestamp(),
        });
        setLoading(false);
        router.push(url);
      } else {
        console.error('nope');
        dispatch({ type: 'CHANGE_USER', payload: chatUser });
        setLoading(false);
        router.push(url);
      }
    } catch (error) {
      setLoading(false);
      console.error({ error });
    }
  };
  return (
    <Box
      onClick={() => handleSelect(chatsUser)}
      cursor="pointer"
      w="fit-content"
    >
      {children}
    </Box>
  );
}
