'use client';

import { Box, Stack } from '@chakra-ui/react';

import FirstSection from './Sections/FirstSection';
import SecondSection from './Sections/SecondSection';
import ThirdSection from './Sections/ThirdSection';

const index = () => {
  return (
    <Box as="section">
      <Stack spacing={12}>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </Stack>
    </Box>
  );
};

export default index;
