import { Box, Flex } from '@chakra-ui/react';

import ServiceCard from '~/lib/components/ServiceCard';

const Services = () => {
  const services = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
        {services.map(() => (
          <ServiceCard
            image="/assets/mask-1.png"
            rating={4.8}
            price={34000}
            title="Product Photography"
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Services;
