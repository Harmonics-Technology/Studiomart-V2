import { Box, Stack } from '@chakra-ui/react';

import { ServiceTypeView, StudioViewPagedCollection } from '~/services';

import Header from './Header';
import StudioList from './StudioList';

const index = ({
  data,
  categories,
}: {
  data: StudioViewPagedCollection;
  categories: ServiceTypeView[];
}) => {
  return (
    <Box as="section" pt="40px">
      <Stack spacing="0px">
        <Header categories={categories} />
        <StudioList data={data} />
      </Stack>
    </Box>
  );
};

export default index;
