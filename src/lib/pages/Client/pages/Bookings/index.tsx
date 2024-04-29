'use client';

import { Box, Flex, Stack, Heading, Text, Grid } from '@chakra-ui/react';
import dayjs from 'dayjs';
import Link from 'next/link';

import ServiceCard from '~/lib/components/ServiceCard';
import { ContainerBox } from '~/lib/layout/ContainerBox';
import useQueryParams from '~/lib/utilities/Hooks/useQueryParams';
import { BookingView } from '~/services';

const Filters = () => {
  const { queryParams, setQueryParams } = useQueryParams();
  const setFilterItem = (searchTerm: any) => {
    setQueryParams({ status: searchTerm });
  };
  const status = queryParams.get('status');
  const filterTexts = [
    { id: '', title: 'All' },
    { id: 1, title: 'Pending' },
    { id: 2, title: 'Completed' },
  ];
  return (
    <Box>
      <Flex gap="10px" alignItems="center" overflow="auto">
        {filterTexts?.map((item: any) => {
          const activeFilter = (status ? Number(status) : '') === item?.id;
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
              <Text>{item.title}</Text>
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
          Bookings
        </Heading>
        <Filters />
      </Stack>
    </Box>
  );
};

const index = ({ data }: { data: any }) => {
  return (
    <ContainerBox my="80px">
      <Header />
      <Grid templateColumns={['1fr', 'repeat(3,1fr)']} gap="2rem">
        {data?.value?.map((item: BookingView) => (
          <Link passHref href={`/user/bookings/details/${item.id}`}>
            <ServiceCard
              key={item.id}
              withStatus
              status={item.status?.toLowerCase() as string}
              image={
                (item?.service?.bannerImageURL ||
                  item?.service?.media?.at(0)?.url) as string
              }
              title={item?.service?.name as string}
              bookingId={item?.bookingReference as string}
              dateAndTime={`${dayjs(item.date).format('DD/MM/YYYY')} - ${dayjs(
                `${dayjs().format('YYYY-MM-DD')}T${item.time}Z`
              )
                .subtract(1, 'hour')
                .format('hh:mm A')}`}
              rating={item?.service?.averageRating as number}
            />
          </Link>
        ))}
      </Grid>
    </ContainerBox>
  );
};

export default index;
