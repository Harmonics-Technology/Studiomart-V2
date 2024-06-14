'use client';

import { Box, Heading, Stack, Flex, Text } from '@chakra-ui/react';
import { useContext } from 'react';

import { ServiceTypeContext } from '~/lib/utilities/Context/ServiceTypeContext';
import useQueryParams from '~/lib/utilities/Hooks/useQueryParams';
import { ServiceTypeView } from '~/services';

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
              bg={activeFilter ? 'brand.100' : 'none'}
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
          Services around you
        </Heading>
        <Filters />
      </Stack>
    </Box>
  );
};

export default Header;
