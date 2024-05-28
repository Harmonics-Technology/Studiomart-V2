import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';

import StudioCard from '~/lib/components/SingleStudioCard';
import { ContainerBox } from '~/lib/layout/ContainerBox';
import { StudioView, StudioViewPagedCollection } from '~/services';

const StudioList = ({ data }: { data: StudioViewPagedCollection }) => {
  return (
    <Box mb="14">
      <ContainerBox>
        <Flex
          alignItems="center"
          rowGap="50px"
          columnGap={1}
          justifyContent="space-between"
          flexWrap="wrap"
        >
          {data?.value?.map((studio: StudioView) => {
            return (
              <Link passHref href={`/studios/details/${studio.id}`}>
                <StudioCard
                  images={[
                    '/assets/face.png',
                    '/assets/studio-girl2.png',
                    '/assets/other-studios.png',
                  ]}
                  studioName={studio?.name as string}
                  address={studio?.address as string}
                  services={['Music', 'Photography']}
                  isLoggedIn={false}
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
