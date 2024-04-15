'use client';

import { Box, Flex, Stack, Heading, Text } from '@chakra-ui/react';
import { useState } from 'react';

import { ServiceCardWithStatus } from '~/lib/components/ServiceCard';
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
  const filterTexts = ['All', 'Pending', 'Completed'];
  return (
    <Box maxW="1304px" mx="auto" mb="64px">
      <Stack spacing="32px">
        <Heading as="h2" fontSize={40} fontWeight={900} color="text.100">
          Bookings
        </Heading>
        <Filters filterList={filterTexts} />
      </Stack>
    </Box>
  );
};

const index = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Box as="section" mx="auto" maxW="1304px" my="80px">
      <Header />
      <Flex
        alignItems="center"
        rowGap="70px"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        {cards.map((item) => (
          <ServiceCardWithStatus
            key={item}
            status="pending"
            image="/assets/studio-girl2.png"
            title="Wedding & Event Shoot"
            bookingId="76AA823"
            dateAndTime="14/02/2024 -1 2:00 PM"
            rating={4.6}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default index;
