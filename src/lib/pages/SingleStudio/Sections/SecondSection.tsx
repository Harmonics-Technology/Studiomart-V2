import { Box, Heading, Stack, Grid } from '@chakra-ui/react';
import Link from 'next/link';

import ServiceCard from '~/lib/components/ServiceCard';
import Wrapper from '~/lib/components/Wrapper';
import {
  ServiceViewPagedCollection,
  ServiceView,
  StudioView,
} from '~/services';

const SecondSection = ({
  data,
  studio,
}: {
  data: ServiceViewPagedCollection;
  studio: StudioView;
}) => {
  return (
    <Box as="section" w="100%" bg="#FCF8FB" py="10">
      <Wrapper>
        <Stack spacing={16}>
          <Box>
            <Heading fontSize={24} fontWeight={900}>
              Services by {studio?.name}
            </Heading>
          </Box>
          <Box>
            <Grid
              templateColumns={['repeat(2,1fr)', 'repeat(3,1fr)']}
              gap="2rem"
              // alignItems="center"
              // justifyContent="space-between"
              // flexWrap="wrap"
              // rowGap={10}
            >
              {data?.value?.map((service: ServiceView) => (
                <Link href={`/services/details/${service?.id}`}>
                  <ServiceCard
                    image={service?.bannerImageURL}
                    title={service?.name}
                    rating={service?.averageRating}
                    price={service?.price}
                  />
                </Link>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Wrapper>
    </Box>
  );
};

export default SecondSection;
