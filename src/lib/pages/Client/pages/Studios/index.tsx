import { Box, Stack } from '@chakra-ui/react';

import { StudioViewPagedCollection } from '~/services';

import Header from './Header';
import StudioList from './StudioList';

const index = ({ data }: { data: StudioViewPagedCollection }) => {
  return (
    <Box as="section" pt={['15px', '40px']}>
      <Stack>
        <Header />
        <StudioList data={data} />
      </Stack>
    </Box>
  );
};

export default index;
