import { Box, Stack } from '@chakra-ui/react';

import HeroSection from './sections/HeroSection';
import StudioList from './sections/StudioList';

const index = () => {
  return (
    <Box as="section" my="14">
      <Stack spacing={16}>
        <HeroSection />
        <StudioList />
      </Stack>
    </Box>
  );
};

export default index;
