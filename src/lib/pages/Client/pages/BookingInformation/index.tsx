'use client';

import { Box } from '@chakra-ui/react';

import { BackButton } from '~/lib/components/Button/Button';

import FirstSection from './Sections/FirstSection';
import SecondSection from './Sections/SecondSection';

const index = () => {
  return (
    <Box as="section" maxW="1280px" mx="auto" my="80px">
      <Box mb="50px">
        <BackButton linkTo="/" />
      </Box>
      <FirstSection />
      <SecondSection />
    </Box>
  );
};

export default index;
