import { Grid, Box } from '@chakra-ui/react';
import Link from 'next/link';

import ServiceCard from '~/lib/components/ServiceCard';
import { ServiceView, ServiceViewPagedCollection } from '~/services';

const Services = ({
  services,
}: {
  services: ServiceViewPagedCollection | undefined;
}) => {
  return (
    <Box pb="56px">
      <Grid templateColumns={['1fr', 'repeat(3,1fr)']} gap="2rem">
        {services?.value?.slice(0, 6)?.map((item: ServiceView) => (
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
      </Grid>
      {/* <Flex justify="center" my="3rem">
        <Pagination data={services} />
      </Flex> */}
    </Box>
  );
};

export default Services;
