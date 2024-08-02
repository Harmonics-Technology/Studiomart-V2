'use client';

import { Box, Stack } from '@chakra-ui/react';

import { StudioView } from '~/services';

import FifthSection from './Sections/FifthSection';
import FirstSection from './Sections/FirstSection';
import FourthSection from './Sections/FourthSection';
import SecondSection from './Sections/SecondSection';
import ThirdSection from './Sections/ThirdSection';

export const Home = ({
  studioOfTheWeek,
}: {
  studioOfTheWeek: StudioView[];
}) => {
  return (
    <Box>
      <Stack direction="column" spacing={10}>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection studioOfTheWeek={studioOfTheWeek} />
        <FifthSection />
      </Stack>
    </Box>
  );
};
