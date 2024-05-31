import { Box, Flex, Heading, Stack, Image } from '@chakra-ui/react';
import { IoChevronForwardCircleOutline } from 'react-icons/io5';

import { IconButtonComponent } from '~/lib/components/Button/Button';
import CustomText from '~/lib/components/Text';
import Wrapper from '~/lib/components/Wrapper';

const StudioGroupImages = () => {
  return (
    <Box position="relative" w="100%">
      <Flex gap={['16px', '30px']}>
        <Box>
          <Stack justifyContent="space-between" h="100%">
            <Image
              src="/assets/studio-image-1.png"
              alt="studio image"
              width="154px"
              height="100%"
              objectFit="cover"
              borderRadius="40px"
            />
            <Image
              src="/assets/studio-image-2.png"
              alt="studio image"
              width="155px"
              height="100%"
              objectFit="cover"
              borderRadius="40px"
            />
            <Image
              src="/assets/studio-image-3.png"
              alt="studio image"
              width="155px"
              height="100%"
              objectFit="cover"
              borderRadius="40px"
            />
          </Stack>
        </Box>
        <Box>
          <Stack spacing={8}>
            <Image
              src="/assets/studio-image-4.png"
              alt="studio image"
              width="226px"
              height="100%"
              objectFit="cover"
            />
            <Image
              src="/assets/studio-image-5.png"
              alt="studio image"
              width="288px"
              height="100%"
              objectFit="cover"
            />
          </Stack>
        </Box>
      </Flex>
      <Box position="absolute" left="140px" bottom="10%">
        <Image
          src="/assets/small-illustration.png"
          alt="studio image"
          w="75px"
          h="19px"
        />
      </Box>
      <Box position="absolute" right="0" bottom="40%">
        <Image
          src="/assets/studio-image-overlay.png"
          alt="studio image"
          width="124px"
          height="80px"
        />
      </Box>
    </Box>
  );
};

const FourthSection = () => {
  return (
    <Box py="8">
      <Wrapper>
        <Box>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap-reverse"
            gap="30px"
          >
            <Box w={['100%', '40%']}>
              <StudioGroupImages />
            </Box>
            <Box w={['100%', '55%']}>
              <Stack spacing={5}>
                <Heading fontWeight={[900, 700]}>Studio Gallery</Heading>
                <CustomText text="Creativity finds its truest expression in vivid hues and captivating compositions." />

                <CustomText text="Explore a curated collection of artworks, photographs, and creations that have come to life within the vibrant walls of ColorSplash Studios." />

                <CustomText text="Each piece tells a unique story, capturing moments of inspiration, passion, and boundless imagination." />

                <IconButtonComponent
                  bg="brand.100"
                  color="white"
                  text="Book a Service"
                  icon={IoChevronForwardCircleOutline}
                  width="208px"
                  flip
                />
              </Stack>
            </Box>
          </Flex>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default FourthSection;
