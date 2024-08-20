'use client';

import { Box, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import StudioCard from '~/lib/components/SingleStudioCard';
import { ContainerBox } from '~/lib/layout/ContainerBox';
import Pagination from '~/lib/utilities/Layouts/Paginatio';
import {
  StudioService,
  StudioView,
  StudioViewPagedCollection,
} from '~/services';

const StudioList = ({ data }: { data: StudioViewPagedCollection }) => {
  const router = useRouter();

  const saveServiceForLater = async (id: string) => {
    try {
      const result = await StudioService.saveStudio({
        studioId: id,
      });
      if (result.status) {
        router.refresh();
        toast.success('Added to saved studios');
        return;
      }
      toast.error(result.message as string);
    } catch (err: any) {
      toast.error(err?.body?.message || err?.message, {
        className: 'loginToast',
      });
    }
  };

  const removeSaved = async (id: string) => {
    try {
      const result = await StudioService.removeSavedStudio({
        id,
      });
      if (result.status) {
        toast.success('Removed from saved studios');
        router.refresh();
        return;
      }
      toast.error(result.message as string);
    } catch (err: any) {
      toast.error(err?.body?.message || err?.message, {
        className: 'loginToast',
      });
    }
  };

  return (
    <Box mb="14">
      <ContainerBox>
        <Flex
          alignItems="flex-start"
          rowGap="50px"
          columnGap={['10px', 0]}
          justifyContent="space-between"
          flexWrap="wrap"
        >
          {data?.value?.map((studio: StudioView) => {
            return (
              // <Link
              //   key={studio?.id}
              //   passHref
              //   href={`/studios/details/${studio.id}`}
              // >
              <StudioCard
                // images={[
                //   '/assets/face.png',
                //   '/assets/studio-girl2.png',
                //   '/assets/other-studios.png',
                // ]}
                image={studio?.coverPhoto as string}
                studioName={studio?.name as string}
                address={studio?.address as string}
                services={['Music', 'Photography']}
                addToFavourites={() =>
                  saveServiceForLater(studio?.id as string)
                }
                removeFromFavourites={() => removeSaved(studio?.id as string)}
                onClick={() => router.push(`/studios/details/${studio?.id}`)}
                key={studio?.id}
              />
              // </Link>
            );
          })}
        </Flex>
        <Flex justify="center" my="3rem">
          <Pagination data={data} />
        </Flex>
      </ContainerBox>
    </Box>
  );
};

export default StudioList;
