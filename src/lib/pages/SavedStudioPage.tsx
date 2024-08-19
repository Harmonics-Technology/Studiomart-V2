'use client';

import { Box, Flex, Heading, Grid, Stack, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
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
  const [activeBtn, setActiveBtn] = useState<string>('services');
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
    <Box mx="auto" py="2rem" bg="scheme.700">
      <Stack w="90%" mx="auto">
        <Stack spacing="20px">
          <Heading fontSize={24} fontWeight={700}>
            Bookmarks
          </Heading>
          <Box>
            <Flex alignItems="center" gap="10px">
              <Button
                bg={activeBtn === 'services' ? 'brand.100' : 'none'}
                py="8px"
                px="16px"
                color={activeBtn === 'services' ? 'brand.400' : 'text.300'}
                fontWeight={500}
                borderRadius="60px"
                onClick={() => setActiveBtn('services')}
              >
                Services
              </Button>
              <Button
                fontWeight={500}
                onClick={() => setActiveBtn('studios')}
                bg={activeBtn === 'studios' ? 'brand.100' : 'none'}
                py="8px"
                px="16px"
                color={activeBtn === 'studios' ? 'brand.400' : 'text.300'}
                borderRadius="60px"
              >
                Studios
              </Button>
            </Flex>
          </Box>
        </Stack>
        {/* Saved Studios and services list */}
        <Box>
          {activeBtn === 'services' ? (
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
          ) : (
            <Box w="100%" m="3rem auto">
              {(savedStudios?.size as number) > 0 ? (
                <Box>
                  <Grid templateColumns={['1fr', 'repeat(3,1fr)']} gap="2rem">
                    {savedStudios?.value?.map((item: SavedStudioView) => (
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
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default SavedStudioPage;
