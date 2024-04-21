'use client';

import { ContainerBox } from '~/lib/layout/ContainerBox';
import { IHomePage } from '~/lib/utilities/Context/schemas';

import Filter from './Filter';
import Header from './Header';
import RecentlyViewed from './RecentlyViewed';
import Services from './Services';

const index = ({ data }: IHomePage) => {
  const { services, recents } = data;
  return (
    <ContainerBox>
      <Filter />
      <Header />
      <Services services={services} />
      {(recents?.length as any) > 0 && <RecentlyViewed recents={recents} />}
    </ContainerBox>
  );
};

export default index;
