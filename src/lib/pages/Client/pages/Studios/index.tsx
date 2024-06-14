import { Box, Stack } from '@chakra-ui/react';

import { StudioViewPagedCollection } from '~/services';

import Header from './Header';
import StudioList from './StudioList';

const index = ({ data }: { data: StudioViewPagedCollection }) => {
  return (
    <Box as="section" pt="40px">
      <Stack spacing="60px">
        <Header />
        <StudioList data={data} />
      </Stack>
    </Box>
  );
};

export default index;
