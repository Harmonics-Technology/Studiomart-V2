import { Box, Heading, Stack } from '@chakra-ui/react';

import CustomText from '~/lib/components/Text';

const SecondSection = () => {
  return (
    <Box maxW="1288px" mx="auto" p={[3, 0]} mb="95px">
      <Stack spacing="32px">
        <Box>
          <Heading fontSize={24} color="#171717" fontWeight={700}>
            About this service
          </Heading>
        </Box>

        <Box>
          <Stack spacing={5}>
            <CustomText text="Capture the Joy of Your Special Day with a Birthday Photoshoot!" />
            <CustomText
              text="At Lensboy Photography
                      , we believe that birthdays are a time of celebration, joy, and beautiful memories. That's why we offer an exclusive service tailored specifically for capturing the magic of your birthday through our professional birthday photoshoots"
            />
            <CustomText text="Our skilled team of photographers is dedicated to creating stunning images that will preserve the essence of your special day for years to come. Whether you're celebrating a milestone birthday, a sweet 16, a first birthday, or any other age, we'll ensure that every precious moment is beautifully documented." />
            <CustomText text="What sets our birthday photoshoot service apart is our commitment to personalization. We understand that each birthday is unique, and we strive to reflect your individuality and style in every photograph. From the moment you step into our studio, we'll work closely with you to understand your vision, preferences, and desired outcomes." />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default SecondSection;
