'use client';

import { useState } from 'react';

import CustomFilter from '~/lib/components/CustomFilter';
import { ContainerBox } from '~/lib/layout/ContainerBox';
import { IHomePage } from '~/lib/utilities/Context/schemas';

import Filter from './Filter';
import Header from './Header';
import RecentlyViewed from './RecentlyViewed';
import Services from './Services';

const Index: React.FC<IHomePage> = ({ data, categories }) => {
  const { services, recents } = data;
  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
  return (
    <ContainerBox>
      <Filter onClick={() => setShowFilterModal(true)} />
      <Header />
      <Services services={services} />
      {showFilterModal && (
        <CustomFilter
          onClick={() => setShowFilterModal(false)}
          categories={categories ?? []}
        />
      )}
      {(recents?.length as any) > 0 && <RecentlyViewed recents={recents} />}
    </ContainerBox>
  );
};

export default Index;
