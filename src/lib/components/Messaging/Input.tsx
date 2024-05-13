import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Square,
  Textarea,
} from '@chakra-ui/react';
import emojiData from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { uuidv4 } from '@firebase/util';
import { Widget } from '@uploadcare/react-widget';
import { arrayUnion, doc, Timestamp, updateDoc } from 'firebase/firestore';
import { useContext, useRef, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { BsFillEmojiSmileFill } from 'react-icons/bs';
import { MdAttachFile } from 'react-icons/md';

import { db } from '../firebase/firebase';
import { AuthContext } from '~/lib/utilities/Context/AuthContext';
import { ChatContext } from '~/lib/utilities/Context/ChatContext';
import useComponentVisible from '~/lib/utilities/Hooks/useComponentVisible';

export const Inputs = () => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const [text, setText] = useState('');
  const [file, setFile] = useState<any>(null);
  const [imageLoading, setImageLoading] = useState<any>({
    status: false,
    total: '0',
  });
  const handleEmojiSelect = (emoji: any) => {
    setText(text + emoji.native);
  };

  const widgetApi = useRef<any>(null);
  const onChangeImg = (files: any) => {
    if (files) {
      files.progress((info: any) => {
        setImageLoading({ status: true, total: info.progress });
        if (info.state === 'ready') {
          setImageLoading({ status: false, total: '' });
          setFile(info.incompleteFileInfo.originalUrl);
        }
      });
    }
  };

  const handleSend = async () => {
    setText('');
    setFile(null);
    if (file) {
      await updateDoc(doc(db, 'chats', data.chatId), {
        messages: arrayUnion({
          id: uuidv4(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
          img: file,
          isRead: false,
        }),
      });
    } else {
      await updateDoc(doc(db, 'chats', data.chatId), {
        messages: arrayUnion({
          id: uuidv4(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
          isRead: false,
        }),
      });
    }

    await updateDoc(doc(db, 'userChats', currentUser.uid), {
      [`${data.chatId}.lastMessage`]: {
        text,
        isRead: false,
        senderId: currentUser.uid,
      },
      [`${data.chatId}.date`]: new Date(),
      [`${data.chatId}.isRead`]: false,
    });

    await updateDoc(doc(db, 'userChats', data.user.uid), {
      [`${data.chatId}.lastMessage`]: {
        text,
        isRead: false,
        senderId: currentUser.uid,
      },
      [`${data.chatId}.date`]: new Date(),
      [`${data.chatId}.isRead`]: false,
    });
  };

  const handleSendWithEnter = (e: any) => {
    if (e.code === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  return (
    <Flex
      bgColor="#e8e8e8"
      borderRadius="4px"
      h="60px"
      justify="center"
      pos="relative"
    >
      <Flex justify="space-between" w="95%" align="center">
        <HStack px="1rem" w="80%">
          <Box display="none">
            <Widget
              publicKey="fda3a71102659f95625f"
              systemDialog
              imagesOnly
              onFileSelect={onChangeImg}
              ref={widgetApi}
              inputAcceptTypes=".jpeg,.jpg, .png"
            />
          </Box>

          <Square size="2rem">
            {imageLoading.status ? (
              <CircularProgressbar
                value={imageLoading.total}
                maxValue={1}
                text={`${imageLoading.total * 100}%`}
              />
            ) : (
              <Icon
                as={MdAttachFile}
                fontSize=".9rem"
                color="#292929"
                onClick={() => widgetApi.current.openDialog()}
              />
            )}
          </Square>

          <Icon
            as={BsFillEmojiSmileFill}
            fontSize=".9rem"
            color="#292929"
            cursor="pointer"
            onClick={() => setIsComponentVisible(true)}
          />

          <Textarea
            onChange={(e) => setText(e.target.value)}
            border="0"
            outline="0"
            color="#333333"
            fontSize=".8rem"
            minH="20px"
            placeholder="Type your message...."
            resize="none"
            value={text}
            onKeyDown={handleSendWithEnter}
            _focusVisible={{
              border: 0,
            }}
            _placeholder={{
              color: '#afafaf',
            }}
            w="full"
          />
        </HStack>
        <Button
          onClick={handleSend}
          isDisabled={text.trim().length < 1 && !file}
          bgColor={text.trim().length < 1 && !file ? '#afafaf' : 'brand.100'}
          color="white"
          h="2.2rem"
          px="1.5rem"
          fontSize=".9rem"
        >
          Send
        </Button>
      </Flex>

      {isComponentVisible && (
        <Box pos="absolute" bottom="20" left="0" ref={ref}>
          <Picker
            data={emojiData}
            onEmojiSelect={handleEmojiSelect}
            previewPosition="none"
          />
        </Box>
      )}

      {file && (
        <Box
          w="40%"
          h="10rem"
          bgColor="white"
          p=".3rem"
          borderRadius="8px"
          overflow="hidden"
          pos="absolute"
          bottom="20"
          left="0"
          zIndex="800"
          boxShadow="md"
        >
          <Image
            src={file}
            alt="Uploaded Image"
            w="full"
            h="full"
            borderRadius="8px"
            objectFit="cover"
          />
        </Box>
      )}
    </Flex>
  );
};