'use client';

import { Box, Heading, Stack, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

import type { FilterButtonsProp } from '~/lib/utilities/Context/schemas';

const Filters = ({ filterList }: FilterButtonsProp) => {
  const [activeFilter, setActiveFilter] = useState<number>(0);
  return (
    <Box>
      <Flex gap="10px" alignItems="center" overflow="auto">
        {filterList?.map((item, index) => {
          return (
            <Box
              px="16px"
              py="6px"
              color={index === activeFilter ? 'brand.400' : 'text.300'}
              bg={index === activeFilter ? 'brand.100' : 'none'}
              borderRadius="60px"
              cursor="pointer"
              onClick={() => setActiveFilter(index)}
              _hover={
                index === activeFilter ? { bg: 'brand.100' } : { bg: '#ededed' }
              }
            >
              <Text>{item}</Text>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

const Header = () => {
  const filterTexts = [
    'All',
    'Music',
    'Photography',
    'Makeup',
    'Videography',
    'Others',
  ];
  return (
    <Box maxW="1304px" mx="auto" mb="64px">
      <Stack spacing="32px">
        <Heading as="h2" fontSize={40} fontWeight={900} color="text.100">
          Services
        </Heading>
        <Filters filterList={filterTexts} />
      </Stack>
    </Box>
  );
};

export default Header;