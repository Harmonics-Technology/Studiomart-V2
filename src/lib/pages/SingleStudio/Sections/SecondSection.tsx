import { Box, Flex, Heading, Stack } from '@chakra-ui/react';
import Link from 'next/link';

import { ServiceCard } from '~/lib/components/StudioCard';
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
            <Flex
              alignItems="center"
              justifyContent="space-between"
              flexWrap="wrap"
              rowGap={10}
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
            </Flex>
          </Box>
        </Stack>
      </Wrapper>
    </Box>
  );
};

export default SecondSection;
