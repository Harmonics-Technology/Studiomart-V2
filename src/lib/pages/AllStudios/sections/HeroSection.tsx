import { Box, Flex, Stack } from '@chakra-ui/react';

import FilterTags from './FilterTags';
import SearchInput from './SearchInput';
import SideText from './SideText';

const HeroSection = () => {
  return (
    <Box
      bgImage="url('/assets/green-illustration.png')"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
      py="5"
      my="14"
    >
      <Flex>
        <Box w="30%">
          <SideText />
        </Box>
        <Box w="68%">
          <Stack spacing={4}>
            <SearchInput />
            <FilterTags />
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroSection;
