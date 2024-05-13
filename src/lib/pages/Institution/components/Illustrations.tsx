import { Box, Image } from '@chakra-ui/react';

const Illustrations = () => {
  return (
    <Box
      bgImage="/assets/road.png"
      position="relative"
      w="100%"
      h="210px"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Image
        src="/assets/danfo.png"
        alt="danfo-image"
        position="absolute"
        top="-35px"
        left="50px"
      />
      <Image
        src="/assets/chat.png"
        alt="chat-bubble image"
        position="absolute"
        top="-130px"
        left="190px"
      />
    </Box>
  );
};

export default Illustrations;
