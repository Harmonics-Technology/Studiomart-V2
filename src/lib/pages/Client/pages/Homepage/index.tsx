'use client';

import { Box } from '@chakra-ui/react';

import { IHomePage } from '~/lib/utilities/Context/schemas';

import Filter from './Filter';
import Header from './Header';
import RecentlyViewed from './RecentlyViewed';
import Services from './Services';

const index = ({ data }: IHomePage) => {
  const { services, recents } = data;
  return (
    <Box as="section">
      <Filter />
      <Header />
      <Services services={services} />
      {(recents?.length as any) > 0 && <RecentlyViewed recents={recents} />}
    </Box>
  );
};

export default index;
