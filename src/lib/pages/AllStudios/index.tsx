import { Box } from '@chakra-ui/react';

import HeroSection from './sections/HeroSection';
import OtherStudios from './sections/OtherStudios';
import StudioList from './sections/StudioList';

const index = () => {
  return (
    <Box as="section">
      {/* <Stack> */}
      <HeroSection />
      <StudioList />
      <OtherStudios />
      {/* </Stack> */}
    </Box>
  );
};

export default index;
