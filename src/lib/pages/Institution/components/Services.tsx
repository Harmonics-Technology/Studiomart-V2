'use client';

import {
  Box,
  Heading,
  Stack,
  Flex,
  Text,
  //  Grid
} from '@chakra-ui/react';
import { useContext } from 'react';

import { ServiceTypeContext } from '~/lib/utilities/Context/ServiceTypeContext';
import useQueryParams from '~/lib/utilities/Hooks/useQueryParams';
import { ServiceTypeView } from '~/services';
// import ServiceCard from '~/lib/components/ServiceCard';
// import Pagination from '~/lib/utilities/Layouts/Paginatio';
// import { ServiceView, ServiceViewPagedCollection } from '~/services';
// import Link from 'next/link';

// const Services = ({
//     services,
// }: {
//     services: ServiceViewPagedCollection | undefined;
// }) => {
//     return (
//         <Box>
//             <Grid templateColumns={['1fr', 'repeat(3,1fr)']} gap="2rem">
//                 {services?.value?.map((item: ServiceView) => (
//                     <Link passHref href={`/services/details/${item?.id}`}>
//                         <ServiceCard
//                             image={item?.bannerImageURL || item?.media?.at(0)?.url}
//                             rating={item?.averageRating}
//                             price={item?.price}
//                             title={item?.name}
//                             key={item?.id}
//                         />
//                     </Link>
//                 ))}
//             </Grid>
//             <Flex justify="center" my="3rem">
//                 <Pagination data={services} />
//             </Flex>
//         </Box>
//     );
// };

const Filters = () => {
  const { serviceTypes } = useContext(ServiceTypeContext);
  const { queryParams, setQueryParams } = useQueryParams();

  const restructedTypes = [{ id: null, name: 'all' }, ...(serviceTypes || [])];

  const setFilterItem = (searchTerm: any) => {
    setQueryParams({ serviceType: searchTerm });
  };
  return (
    <Box>
      <Flex gap="10px" alignItems="center" overflow="auto">
        {restructedTypes?.map((item: ServiceTypeView) => {
          const activeFilter = queryParams.get('serviceType') === item?.id;
          return (
            <Box
              px="16px"
              py="6px"
              color={activeFilter ? 'brand.400' : 'text.300'}
              bg={activeFilter ? 'scheme.100' : 'none'}
              borderRadius="60px"
              cursor="pointer"
              onClick={() => setFilterItem(item?.id)}
              _hover={activeFilter ? { bg: 'brand.100' } : { bg: '#ededed' }}
            >
              <Text textTransform="capitalize">
                {item?.name?.toLowerCase()}
              </Text>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

const Header = () => {
  return (
    <Box maxW="1304px" mx="auto" mb="64px">
      <Stack spacing="32px">
        <Heading as="h2" fontSize={40} fontWeight={900} color="text.100">
          Popular Services
        </Heading>
        <Filters />
      </Stack>
    </Box>
  );
};

const Index = () => {
  return (
    <Box py="16" px="10">
      <Header />
      {/* <Services /> */}
    </Box>
  );
};

export default Index;
