import { Box, Flex, Stack, Heading, Image } from '@chakra-ui/react';

const SideImages = () => {
  return (
    <Box w="100%" h="100%">
      <Flex columnGap="30px" alignItems="center">
        <Stack
          direction="column"
          justifyContent="space-between"
          w="100%"
          h="100%"
          spacing="30px"
        >
          <Image
            src="/assets/bg-1.png"
            alt="image 1"
            width={240}
            height={156}
          />
          <Box position="relative">
            <Image
              src="/assets/bg-2.png"
              alt="image 2"
              width={240}
              height={240}
            />
            <Image
              src="/assets/tiny-star.png"
              alt="star overlay"
              width={60}
              height={60}
              style={{
                position: 'absolute',
                top: '-7px',
                left: '-7px',
                zIndex: '-1',
              }}
            />
          </Box>
          <Box position="relative">
            <Image
              src="/assets/bg-3.png"
              alt="image 3"
              width={240}
              height={456}
            />
            <Image
              src="/assets/side-text-star.png"
              width={100}
              height={100}
              alt="star image"
              style={{ position: 'absolute', top: '140px', right: '-80px' }}
            />
          </Box>
        </Stack>
        <Stack justifyContent="space-between" w="100%" h="100%" spacing="30px">
          <Box>
            <Image
              src="/assets/bg-4.png"
              alt="image 1"
              width={240}
              height={362}
            />
          </Box>
          <Box
            w="240px"
            h="240px"
            borderRadius="50%"
            bgImage="url('/assets/bg-5.png')"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            backgroundSize="cover"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Heading fontSize={60} fontWeight={400} color="white">
              S.
            </Heading>
          </Box>
          <Box>
            <Image
              src="/assets/bg-6.png"
              alt="image 3"
              width={240}
              height={400}
            />
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default SideImages;
