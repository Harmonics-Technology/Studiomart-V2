import { Box } from '@chakra-ui/react';

import Filter from './Filter';
import Header from './Header';
import RecentlyViewed from './RecentlyViewed';
import Services from './Services';

const index = () => {
  return (
    <Box as="section">
      <Filter />
      <Header />
      <Services />
      <RecentlyViewed />
    </Box>
  );
};

export default index;
