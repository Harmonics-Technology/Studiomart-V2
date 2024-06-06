'use client';

import { Box } from '@chakra-ui/react';

import { ContainerBox } from '~/lib/layout/ContainerBox';
import { IHomePage } from '~/lib/utilities/Context/schemas';

import Header from './Header';
import PopularStudios from './PopularStudios';
import Services from './Services';
import StudioOfTheWeek from './StudioOfTheWeek';

const index = ({ data }: IHomePage) => {
  const { services } = data;
  return (
    <Box w="100%" pt="40px">
      <ContainerBox>
        <Header />
        <Services services={services} />
        <PopularStudios />
      </ContainerBox>
      <StudioOfTheWeek />
    </Box>
  );
};

export default index;
