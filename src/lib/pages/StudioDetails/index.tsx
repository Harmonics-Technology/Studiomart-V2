'use client';

import { Box } from '@chakra-ui/react';

import FirstSection from './sections/FirstSection';
import FourthSection from './sections/FourthSection';
import SecondSection from './sections/SecondSection';
import ThirdSection from './sections/ThirdSection';

const index = () => {
  return (
    <Box as="section">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </Box>
  );
};

export default index;
