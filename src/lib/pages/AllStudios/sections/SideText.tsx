import { Box, Heading, Flex } from '@chakra-ui/react';
import Image from 'next/image';

const SideText = () => {
  return (
    <Box
      w="100%"
      h="300px"
      bgImage="url('/assets/side-text-illustration.png')"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom left"
      backgroundSize="contain"
      py="2"
      px="10"
    >
      <Box>
        <Flex alignItems="flex-start" justifyContent="space-between">
          <Image
            src="/assets/side-text-star.png"
            alt="star image"
            width={80}
            height={80}
          />
          <Box>
            <Heading fontWeight={900} fontSize={58}>
              Book A
            </Heading>
            <Heading fontWeight={900} fontSize={58} ml="6">
              Service
            </Heading>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default SideText;
