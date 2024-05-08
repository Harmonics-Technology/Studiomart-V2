/* eslint-disable no-unsafe-optional-chaining */
import {
  Box,
  Flex,
  Image,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import { useContext, useEffect, useRef } from 'react';

import { ImageLightBox } from '~/lib/pages/home/ImageLightBox';
import { AuthContext } from '~/lib/utilities/Context/AuthContext';

export const Message = ({ message }: any) => {
  const { currentUser } = useContext(AuthContext);
  dayjs.extend(calendar);
  const ref = useRef<any>();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [message]);

  const send = message.senderId === currentUser.uid;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex ref={ref} flexDirection={send ? 'row-reverse' : 'row'} mb="1.5rem">
      <VStack align={send ? 'flex-end' : 'flex-start'}>
        {message?.img && (
          <Image src={message?.img} alt="" maxW="200px" onClick={onOpen} />
        )}

        {message?.text && (
          <Box
            p=".8rem 1rem"
            bgColor={send ? 'gray.400' : 'brand.100'}
            color="white"
            borderRadius={send ? '90px 90px 0px 90px' : '90px 90px 90px 0px'}
            maxW="25rem"
          >
            {message?.text}
          </Box>
        )}
        <Text fontSize=".6rem" color="gray.500">
          {dayjs(
            message?.date?.seconds * 1000 +
              Math.round(message?.date.nanoseconds / 1000000)
          ).calendar()}
        </Text>
      </VStack>
      <ImageLightBox isOpen={isOpen} onClose={onClose} image={message?.img} />
    </Flex>
  );
};
