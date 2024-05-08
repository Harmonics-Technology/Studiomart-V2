/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Input,
  Text,
} from '@chakra-ui/react';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { useContext, useState } from 'react';

import { db } from '../firebase/firebase';
import { AuthContext } from '~/lib/utilities/Context/AuthContext';
import { ChatContext } from '~/lib/utilities/Context/ChatContext';

export const Search = () => {
  const [userName, setuserName] = useState<any>('');
  const [user, setuser] = useState<any>('');
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  const generateUserUid = async (item: string) => {
    try {
      const usersCollection = collection(db, 'users');
      const displayNameToSearch = item;
      const userQuery = query(
        usersCollection,
        where('displayName', '==', displayNameToSearch)
      );
      const userSnapshot = await getDocs(userQuery);
      if (!userSnapshot.empty) {
        // Assuming there is only one user with the given displayName
        return userSnapshot.docs[0].data();
      }
      return {};
    } catch (error) {
      console.error('User not found with the given displayName.', error);
      return error;
    }
  };

  const handleSearch = async () => {
    const chatUser = await generateUserUid(userName);
    if (chatUser) {
      // const combinedUser =
      //   currentUser?.uid > chatUser.uid
      //     ? currentUser?.uid + chatUser.uid
      //     : chatUser.uid + currentUser?.uid;
      //  const foundUser = chat.find((x)=> x)
    }

    // const q = query(
    //   collection(db, "userChats"),
    //   where("userInfo.displayName" as string, "==", userName)
    // );
    // //
    // try {
    //   const querySnapshot = await getDocs(q);

    //   querySnapshot?.forEach((doc) => {
    //     setuser(doc.data());
    //     setChat(undefined);
    //   });
    // } catch (error) {}
  };

  const handleKey = (e: any) => {
    e.code === 'Enter' && handleSearch();
  };
  const handleSelect = async (user: any) => {
    const combinedId =
      currentUser?.uid > user?.uid
        ? currentUser?.uid + user?.uid
        : user?.uid + currentUser?.uid;
    try {
      const res = await getDoc(doc(db, 'chats', combinedId));

      if (!res.exists()) {
        await setDoc(doc(db, 'chats', combinedId), { messages: [] });
        await updateDoc(doc(db, 'userChats', currentUser?.uid), {
          [`${combinedId}.userInfo`]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [`${combinedId}.date`]: serverTimestamp(),
        });
        await updateDoc(doc(db, 'userChats', user.uid), {
          [`${combinedId}.userInfo`]: {
            uid: currentUser?.uid,
            displayName: currentUser?.displayName,
            photoURL: currentUser?.photoURL,
          },
          [`${combinedId}.date`]: serverTimestamp(),
        });
      } else {
        dispatch({ type: 'CHANGE_USER', payload: user });
      }
    } catch (error) {
      console.error({ error });
    }
    setuser(null);
    setuserName('');
  };

  return (
    <Box>
      <Box w="90%" mx="auto">
        <Input
          onChange={(e) => setuserName(e.target.value)}
          onKeyDown={handleKey}
          value={userName}
          borderRadius="25px"
          placeholder="Search..."
          borderColor="gray.300"
        />
      </Box>
      {/* <Button onClick={handleSearch}>Search</Button> */}
      {user && (
        <Box mt="1rem">
          <Text textAlign="center" fontSize=".9rem">
            User: {userName} found:
          </Text>
          <Flex
            justify="space-between"
            px="1rem"
            key={user?.uid}
            onClick={() => handleSelect(user)}
            cursor="pointer"
          >
            <HStack spacing={2} w="78%">
              <Avatar src={user?.photoURL} name={user?.displayName} size="md" />
              <Box>
                <Heading fontSize="1rem" color="#333333" mb=".1rem">
                  {user?.displayName}
                </Heading>
                <Text mb="0" fontSize=".9rem" noOfLines={1}>
                  {user?.text}
                </Text>
              </Box>
            </HStack>
          </Flex>
        </Box>
      )}
    </Box>
  );
};
