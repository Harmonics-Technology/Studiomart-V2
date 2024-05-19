/* eslint-disable sonarjs/no-duplicate-string */

'use client';

import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Grid,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { BiSolidSearch } from 'react-icons/bi';
import { BsSortAlphaDownAlt, BsSortAlphaUp } from 'react-icons/bs';
import { FaRegCalendarAlt } from 'react-icons/fa';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import { useDebouncedCallback } from 'use-debounce';

import ServiceCard from '~/lib/components/ServiceCard';
import { ContainerBox } from '~/lib/layout/ContainerBox';
import { useLoaderProgress } from '~/lib/utilities/Hooks/progress-bar';
import useQueryParams from '~/lib/utilities/Hooks/useQueryParams';
import Pagination from '~/lib/utilities/Layouts/Paginatio';
import { BookingView } from '~/services';

const Filters = () => {
  const { queryParams, setQueryParams } = useQueryParams();
  const showLoaderProgress = useLoaderProgress();
  const setFilterItem = (searchTerm: any) => {
    setQueryParams({ status: searchTerm });
  };
  const status = queryParams.get('status');
  const filterTexts = [
    { id: '', label: 'All' },
    { id: 1, label: 'Pending' },
    { id: 2, label: 'Approved' },
    { id: 9, label: 'Rejected' },
    { id: 14, label: 'Cancelled' },
    { id: 15, label: 'Paid' },
  ];
  const order = queryParams.get('order');
  const sortResponse = () => {
    if (order === '1') {
      setQueryParams({ order: 2 });
    } else if (order === '2') {
      setQueryParams({ order: 1 });
    } else {
      setQueryParams({ order: 2 });
    }
  };
  const searchFn = useDebouncedCallback(
    (value) => {
      showLoaderProgress(() => setQueryParams({ search: value.trim() }));
    },
    // delay in ms
    1000
  );
  const [date, setDate] = useState<any>([
    new DateObject().subtract(4, 'days'),
    new DateObject().add(4, 'days'),
  ]);
  const dateRef = useRef<any>();
  const filterByDate = (value: any) => {
    setQueryParams({
      from: value[0].format('YYYY-MM-DD'),
      to: value[1].format('YYYY-MM-DD'),
    });

    dateRef.current.closeCalendar();
  };

  return (
    <Flex justify="space-between">
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
              onClick={() => showLoaderProgress(() => setFilterItem(item?.id))}
              _hover={activeFilter ? { bg: 'brand.100' } : { bg: '#ededed' }}
            >
              <Text>{item.label}</Text>
            </Box>
          );
        })}
      </Flex>
      <Flex gap="1rem">
        <InputGroup w={{ base: '60%', lg: '300px' }}>
          <InputLeftElement top=".2rem" color="gray.400" fontSize=".8rem">
            <BiSolidSearch />
          </InputLeftElement>
          <Input
            type="search"
            placeholder="Search Bookings"
            borderRadius="5px"
            h="2.5rem"
            w="100%"
            _placeholder={{
              fontSize: '.8rem',
            }}
            onChange={(e: any) => searchFn(e.target.value)}
          />
        </InputGroup>
        <DatePicker
          value={date}
          onChange={setDate}
          range
          ref={dateRef}
          onPropsChange={(e: any) =>
            e?.value?.length > 1 &&
            showLoaderProgress(() => filterByDate(e?.value))
          }
          // format="MMM DD, YYYY"
          render={(stringDates: any, openCalendar: any) => {
            const newStringDate = stringDates.split(' ~ ');
            const from = newStringDate[0] || '';
            const to = newStringDate[1] || '';
            const value = from && to ? `${from} - ${to}` : `${from} - ${from}`;
            return (
              <HStack
                w="fit-content"
                px="1rem"
                h="2.5rem"
                justifyContent="center"
                alignItems="center"
                border="1px solid"
                borderColor="#a6a6a6"
                color="gray.500"
                boxShadow="sm"
                borderRadius="7px"
                cursor="pointer"
                fontSize=".9rem"
                bgColor="white"
                onClick={openCalendar}
              >
                <Icon as={FaRegCalendarAlt} />
                <Text mb="0" whiteSpace="nowrap">
                  {value}
                </Text>
              </HStack>
            );
          }}
        />
        <Flex
          gap=".2rem"
          bgColor="gray.300"
          h="2.5rem"
          px=".5rem"
          align="center"
          onClick={() => showLoaderProgress(() => sortResponse())}
          cursor="pointer"
        >
          <Text>{order === '2' ? 'desc' : 'asc'}</Text>
          <Icon as={order === '1' ? BsSortAlphaDownAlt : BsSortAlphaUp} />
        </Flex>
      </Flex>
    </Flex>
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
      <Box>
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
        <Flex justify="center" my="3rem">
          <Pagination data={data} />
        </Flex>
      </Box>
    </ContainerBox>
  );
};

export default index;
