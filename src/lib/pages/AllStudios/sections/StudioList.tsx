import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';

import { StudioCard } from '~/lib/components/StudioCard';
import { ContainerBox } from '~/lib/layout/ContainerBox';
import { StudioView, StudioViewPagedCollection } from '~/services';

const StudioList = ({ data }: { data: StudioViewPagedCollection }) => {
  return (
    <Box mb="14">
      <ContainerBox>
        <Flex
          alignItems="center"
          rowGap={12}
          columnGap={1}
          justifyContent="space-between"
          flexWrap="wrap"
        >
          {data?.value?.map((studio: StudioView) => {
            return (
              <Link passHref href={`/studios/details/${studio.id}`}>
                <StudioCard
                  img={studio.coverPhoto as string}
                  companyName={studio?.name as string}
                  price={17000}
                  address={studio?.address as string}
                  tags={['Music', 'Photography']}
                  services={['amenity', 'amenity', 'amenity']}
                />
              </Link>
            );
          })}
        </Flex>
      </ContainerBox>
    </Box>
  );
};

export default StudioList;
