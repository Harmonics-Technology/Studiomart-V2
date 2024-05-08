import { Box, Image, Heading, Flex, Text, Stack } from '@chakra-ui/react';
import dayjs from 'dayjs';

import Ratings from '~/lib/components/Ratings';
import { IBookingDetails } from '~/lib/utilities/Context/schemas';
import Naira from '~/lib/utilities/Functions/Naira';
import { AdditionalServiceView } from '~/services';

import { BookingStatus } from './BookingStatus';

const FirstSection = ({ bookings }: IBookingDetails) => {
  const status = bookings.status?.toLowerCase();
  return (
    <Box w="100%" mb="45px">
      <Stack spacing="80px">
        <Box>
          <Heading fontSize={40} fontWeight={900}>
            Booking Information
          </Heading>
        </Box>
        <Box>
          <Flex alignItems="center" gap="72px" flexWrap="wrap">
            <Box maxW="521px" h="458px" borderRadius="71px">
              <Image
                src={
                  (bookings?.service?.bannerImageURL ||
                    bookings?.service?.media?.at(0)?.url) as string
                }
                alt="studio-image"
                w="100%"
                h="100%"
                objectFit="cover"
                borderRadius="71px"
              />
            </Box>
            <Box maxW="487px">
              <Stack spacing="28px" mb="48px">
                <Box>
                  <Heading fontSize={28} fontWeight={700} mb="16px">
                    {bookings?.service?.name}
                  </Heading>
                  <Flex alignItems="center" gap="12px">
                    <Text fontWeight={500}>
                      {bookings?.service?.studio?.name}{' '}
                      <Box as="span" fontSize={12} color="text.800">
                        {bookings?.service?.averageRating} Star
                      </Box>
                    </Text>
                    <Ratings value={bookings?.service?.averageRating || 0} />
                    <Text fontSize={12} color="brand.600">
                      ({bookings?.service?.totalReviewCount} reviews)
                    </Text>
                  </Flex>
                </Box>

                <Box>
                  <Flex alignItems="center" gap="67px" flexWrap="wrap">
                    <Box>
                      <Heading fontSize={18} fontWeight={700} mb="8px">
                        Booking reference
                      </Heading>
                      <Text fontSize={20} color="brand.600">
                        {bookings?.bookingReference}
                      </Text>
                    </Box>
                    <Box>
                      <Heading fontSize={18} fontWeight={700} mb="8px">
                        Date
                      </Heading>
                      <Text fontSize={20} color="brand.600">
                        {dayjs(bookings?.date).format('DD/MM/YYYY')}
                      </Text>
                    </Box>
                    <Box>
                      <Heading fontSize={18} fontWeight={700} mb="8px">
                        Time
                      </Heading>
                      <Text fontSize={20} color="brand.600">
                        {dayjs(
                          `${dayjs().format('YYYY-MM-DD')}T${bookings.time}Z`
                        )
                          .subtract(1, 'hour')
                          .format('hh:mm A')}
                      </Text>
                    </Box>
                  </Flex>
                </Box>

                {bookings?.additionalServices?.map(
                  (b: AdditionalServiceView) => (
                    <Box key={b.id}>
                      <Flex alignItems="center" gap="67px" flexWrap="wrap">
                        <Box>
                          <Heading fontSize={18} fontWeight={700} mb="8px">
                            Type of Service
                          </Heading>
                          <Text fontSize={20} color="brand.600">
                            {b?.name}
                          </Text>
                        </Box>
                        <Box>
                          <Heading fontSize={18} fontWeight={700} mb="8px">
                            Service Charge
                          </Heading>
                          <Text fontSize={20} color="brand.600">
                            N{Naira(b?.price as number)}
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                  )
                )}
              </Stack>
              <BookingStatus
                reference={bookings?.bookingReference}
                response={status}
              />
            </Box>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default FirstSection;
