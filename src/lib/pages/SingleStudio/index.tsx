'use client';

import { Box, Stack } from '@chakra-ui/react';

import { StudioView, StudioViewPagedCollection } from '~/services';

import FifthSection from './Sections/FifthSection';
import FirstSection from './Sections/FirstSection';
import SecondSection from './Sections/SecondSection';
import ThirdSection from './Sections/ThirdSection';

const index = ({
  data,
  services,
  similarServiceStudios,
}: {
  data: StudioView;
  services: StudioViewPagedCollection;
  similarServiceStudios: StudioView[];
}) => {
  return (
    <Box as="section">
      <Stack spacing={0}>
        <FirstSection data={data} />
        <SecondSection data={services} studio={data} />
        <ThirdSection />
        <FifthSection
          similarServiceStudios={similarServiceStudios as StudioView[]}
        />
      </Stack>
    </Box>
  );
};

export default index;
