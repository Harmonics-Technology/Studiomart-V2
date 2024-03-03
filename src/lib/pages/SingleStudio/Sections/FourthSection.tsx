import { Box, Flex, Heading, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import { IoChevronForwardCircleOutline } from 'react-icons/io5';

import { IconButtonComponent } from '~/lib/components/Button/Button';
import CustomText from '~/lib/components/Text';
import Wrapper from '~/lib/components/Wrapper';

const StudioGroupImages = () => {
  return (
    <Box position="relative" w="100%">
      <Flex justifyContent="space-between">
        <Box>
          <Stack spacing={5}>
            <Image
              src="/assets/studio-image-1.png"
              alt="studio image"
              width={154}
              height={144}
            />
            <Image
              src="/assets/studio-image-2.png"
              alt="studio image"
              width={155}
              height={217}
            />
            <Image
              src="/assets/studio-image-3.png"
              alt="studio image"
              width={155}
              height={168}
            />
          </Stack>
        </Box>
        <Box>
          <Stack spacing={8}>
            <Image
              src="/assets/studio-image-4.png"
              alt="studio image"
              width={226}
              height={346}
            />
            <Image
              src="/assets/studio-image-5.png"
              alt="studio image"
              width={288}
              height={216}
            />
          </Stack>
        </Box>
      </Flex>
      <Box position="absolute" left="140px" bottom="10%">
        <Image
          src="/assets/small-illustration.png"
          alt="studio image"
          width={75}
          height={19}
        />
      </Box>
      <Box position="absolute" right="0" bottom="40%">
        <Image
          src="/assets/studio-image-overlay.png"
          alt="studio image"
          width={124}
          height={80}
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
          <Flex alignItems="center" justifyContent="space-between">
            <Box w="40%">
              <StudioGroupImages />
            </Box>
            <Box w="55%">
              <Stack spacing={5}>
                <Heading>Studio Gallery</Heading>
                <CustomText text="Creativity finds its truest expression in vivid hues and captivating compositions." />

                <CustomText text="Explore a curated collection of artworks, photographs, and creations that have come to life within the vibrant walls of ColorSplash Studios." />

                <CustomText text="Each piece tells a unique story, capturing moments of inspiration, passion, and boundless imagination." />

                <IconButtonComponent
                  bg="#1570FA"
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
