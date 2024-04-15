'use client';

import { Box } from '@chakra-ui/react';

import { IServiceDetailsProps } from '~/lib/utilities/Context/schemas';

import FirstSection from './sections/FirstSection';
import FourthSection from './sections/FourthSection';
import SecondSection from './sections/SecondSection';
import ThirdSection from './sections/ThirdSection';

const index = ({ data }: IServiceDetailsProps) => {
  const { service, ratings, studios } = data;
  return (
    <Box as="section">
      <FirstSection data={service} />
      <SecondSection data={service} />
      <ThirdSection data={ratings} service={service} />
      {(studios?.value?.length as any) > 0 && (
        <FourthSection
          data={studios}
          studioName={service?.studio?.name as string}
        />
      )}
    </Box>
  );
};

export default index;
