'use client';

import { Box } from '@chakra-ui/react';

import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Illustrations from './components/Illustrations';
import NearStudios from './components/NearStudios';
import Partners from './components/Partners';
import Services from './components/Services';
import StudioOfTheWeek from './components/StudioOfTheWeek';

const index = () => {
  return (
    <Box as="section">
      <Box bg="scheme.100">
        <Header />
        <Hero />
      </Box>
      <Illustrations />
      <Services />
      <NearStudios />
      <HowItWorks />
      <StudioOfTheWeek />
      <Partners />
    </Box>
  );
};

export default index;
