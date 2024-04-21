import { Box } from '@chakra-ui/react';

import { StudioViewPagedCollection } from '~/services';

import HeroSection from './sections/HeroSection';
import OtherStudios from './sections/OtherStudios';
import StudioList from './sections/StudioList';

const index = ({ data }: { data: StudioViewPagedCollection }) => {
  return (
    <Box as="section">
      {/* <Stack> */}
      <HeroSection />
      <StudioList data={data} />
      <OtherStudios />
      {/* </Stack> */}
    </Box>
  );
};

export default index;
