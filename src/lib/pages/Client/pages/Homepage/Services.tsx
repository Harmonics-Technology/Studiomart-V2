import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';

import ServiceCard from '~/lib/components/ServiceCard';
import { ServiceView, ServiceViewPagedCollection } from '~/services';

const Services = ({
  services,
}: {
  services: ServiceViewPagedCollection | undefined;
}) => {
  return (
    <Box as="section" maxW="1304px" mx="auto" mb="150px">
      <Flex
        flexWrap="wrap"
        rowGap="90px"
        alignItems="center"
        justifyContent={{
          base: 'center',
          md: 'space-between',
          lg: 'space-between',
        }}
      >
        {services?.value?.map((item: ServiceView) => (
          <Link passHref href={`/services/details/${item?.id}`}>
            <ServiceCard
              image={item?.bannerImageURL || item?.media?.at(0)?.url}
              rating={item?.averageRating}
              price={item?.price}
              title={item?.name}
              key={item?.id}
            />
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default Services;
