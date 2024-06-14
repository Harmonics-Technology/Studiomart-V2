'use client';

import { Box } from '@chakra-ui/react';

import StudioOfTheWeek from '../Client/pages/Homepage/StudioOfTheWeek';
import { StudioViewPagedCollection } from '~/services';

import HeroSection from './sections/HeroSection';
import StudioList from './sections/StudioList';

const index = ({ data }: { data: StudioViewPagedCollection }) => {
  return (
    <Box as="section">
      {/* <Stack> */}
      <HeroSection />
      <StudioList data={data} />
      <StudioOfTheWeek />
      {/* <OtherStudios /> */}
      {/* </Stack> */}
    </Box>
  );
};

export default index;
