'use client';

import { Box, Flex, Heading, Grid, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import { NotFound } from '../components/SearchComponents/NotFound';
import ServiceCard from '../components/ServiceCard';
import StudioCard from '../components/SingleStudioCard';
import Pagination from '../utilities/Layouts/Paginatio';
import {
  SavedServiceView,
  SavedServiceViewPagedCollection,
  StudioService,
  SavedStudioViewPagedCollection,
  SavedStudioView,
} from '~/services';

const SavedStudioPage = ({
  savedServices,
  savedStudios,
}: {
  savedServices: SavedServiceViewPagedCollection;
  savedStudios: SavedStudioViewPagedCollection;
}) => {
  const router = useRouter();
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
    <Box mx="auto" py="1rem" bgColor="white">
      <Stack w="90%" mx="auto">
        {/* Saved services list */}
        <Box>
          <Box w="100%" mx="auto">
            {/* <BackToPage name="Back to the homepage" /> */}
            <Heading mt="3rem">Saved Services</Heading>
          </Box>
          <Box w="100%" m="3rem auto">
            {(savedServices?.size as number) > 0 ? (
              <Box>
                <Grid templateColumns={['1fr', 'repeat(3,1fr)']} gap="2rem">
                  {savedServices?.value?.map((item: SavedServiceView) => (
                    <Link
                      passHref
                      href={`/services/details/${item?.serviceId}`}
                    >
                      <ServiceCard
                        image={
                          item?.service?.bannerImageURL ||
                          item?.service?.media?.at(0)?.url
                        }
                        rating={item?.service?.averageRating}
                        price={item?.service?.price}
                        title={item?.service?.name}
                        key={item?.service?.id}
                      />
                    </Link>
                  ))}
                </Grid>
                <Flex justify="center" my="3rem">
                  <Pagination data={savedServices} />
                </Flex>
              </Box>
            ) : (
              <NotFound />
            )}
          </Box>
        </Box>

        {/* Saved studios list */}
        <Box>
          <Box w="100%" mx="auto">
            {/* <BackToPage name="Back to the homepage" /> */}
            <Heading mt="3rem">Saved Studios</Heading>
          </Box>
          <Box w="100%" m="3rem auto">
            {(savedStudios?.size as number) > 0 ? (
              <Box>
                <Grid templateColumns={['1fr', 'repeat(3,1fr)']} gap="2rem">
                  {savedStudios?.value?.map((item: SavedStudioView) => (
                    // <Link
                    //   passHref
                    //   href={`/services/details/${item?.studioId}`}
                    // >
                    <StudioCard
                      image={item?.studio?.coverPhoto as string}
                      studioName={item?.studio?.name as string}
                      address={item?.studio?.address as string}
                      services={['Music', 'Photography']}
                      key={item?.id}
                      isSaved={item?.studio?.isSaved}
                      onClick={() =>
                        router.push(`/studios/details/${item?.studioId}`)
                      }
                      removeFromFavourites={() =>
                        removeSaved(item?.studioId as string)
                      }
                    />
                    // </Link>
                  ))}
                </Grid>
                <Flex justify="center" my="3rem">
                  <Pagination data={savedServices} />
                </Flex>
              </Box>
            ) : (
              <NotFound />
            )}
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default SavedStudioPage;
