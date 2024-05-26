import { Box, Heading, Flex, Image } from '@chakra-ui/react';

const SideText = () => {
  return (
    <Box
      w="100%"
      h={['auto', '300px']}
      bgImage={['none', "url('/assets/side-text-illustration.png')"]}
      backgroundRepeat="no-repeat"
      backgroundPosition={['bottom right', 'bottom left']}
      backgroundSize="contain"
      py="2"
      px={['5', '10']}
    >
      <Box>
        <Flex alignItems="center" justifyContent="space-between">
          <Image
            src="/assets/side-text-star.png"
            alt="star image"
            width="80px"
            height="80px"
          />
          <Box>
            <Heading fontWeight={900} fontSize={[40, 58]}>
              Studios
            </Heading>
            {/* <Heading fontWeight={900} fontSize={58} ml="6">
              Service
            </Heading> */}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default SideText;
