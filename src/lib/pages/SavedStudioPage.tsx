'use client';

import { Box, Flex, Heading, Grid } from '@chakra-ui/react';
import Link from 'next/link';

import { NotFound } from '../components/SearchComponents/NotFound';
import ServiceCard from '../components/ServiceCard';
import Pagination from '../utilities/Layouts/Paginatio';
import { SavedServiceView, SavedServiceViewPagedCollection } from '~/services';

const SavedStudioPage = ({
  savedStudios,
}: {
  savedStudios: SavedServiceViewPagedCollection;
}) => {
  return (
    <Box mx="auto" py="1rem" bgColor="white">
      <Box w="90%" mx="auto">
        {/* <BackToPage name="Back to the homepage" /> */}
        <Heading mt="3rem">Saved Studio</Heading>
      </Box>
      <Box w="90%" m="3rem auto">
        {(savedStudios?.size as number) > 0 ? (
          <Box>
            <Grid templateColumns={['1fr', 'repeat(3,1fr)']} gap="2rem">
              {savedStudios?.value?.map((item: SavedServiceView) => (
                <Link passHref href={`/services/details/${item?.serviceId}`}>
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
              <Pagination data={savedStudios} />
            </Flex>
          </Box>
        ) : (
          <NotFound />
        )}
      </Box>
    </Box>
  );
};

export default SavedStudioPage;
