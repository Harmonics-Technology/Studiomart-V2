import {
  Box,
  Heading,
  Stack,
  Flex,
  Text,
  Icon,
  Grid,
  HStack,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import type { ReactNode } from 'react';

import CalendarIcon from '~/lib/components/Icons/CalendarIcon';
import ClockIcon from '~/lib/components/Icons/ClockIcon';
import EyeIcon from '~/lib/components/Icons/EyeIcon';
import ShieldIcon from '~/lib/components/Icons/ShieldIcon';
import CustomText from '~/lib/components/Text';
import { ContainerBox } from '~/lib/layout/ContainerBox';
import type {
  ISingleBook,
  SingleDetailProps,
} from '~/lib/utilities/Context/schemas';
import CustomCheckbox from '~/lib/utilities/FormInput/CustomCheckbox';
import { Cur } from '~/lib/utilities/Functions/Naira';

const SingleDetail: React.FC<SingleDetailProps> = ({
  label,
  icon,
  description,
}) => {
  return (
    <Box>
      <Flex alignItems="center" gap={1} mb="2">
        <Icon as={icon} fontSize={24} />
        <Text>{label}</Text>
      </Flex>
      <Text fontWeight={500} color="#2D2327" fontSize={20}>
        {description}
      </Text>
    </Box>
  );
};

const BookingDetailsWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Box w="100%" borderTop="1px solid #CECDCD" pt="44px">
      {children}
    </Box>
  );
};

const BookingDetails = ({
  addToArray,
  selectedAddon,
  viewers,
  service,
  date,
  time,
}: ISingleBook) => {
  return (
    <ContainerBox w="100%">
      <Stack spacing="54px">
        <Heading fontWeight={900} fontSize={40}>
          Review your booking
        </Heading>

        <Box
          w="100%"
          bg="brand.900"
          border="1px solid #4787E8"
          py="12px"
          px="16px"
          borderRadius="12px"
        >
          <Flex alignItems="center" justifyContent="space-between">
            <Box>
              <Heading fontSize={16} fontWeight={700}>
                People are eyeing this service!
              </Heading>
              <CustomText
                text={`${viewers} Others are looking at this time and date to book it`}
              />
            </Box>
            <Box>
              <EyeIcon />
            </Box>
          </Flex>
        </Box>

        <Box>
          <Stack spacing="28px">
            <Heading fontSize={24} fontWeight={700}>
              1 Day in {service?.studio?.name}&apos;s studio
            </Heading>
            <Box>
              <Flex alignItems="center" gap="52px">
                <SingleDetail
                  icon={CalendarIcon}
                  label="Date"
                  description={dayjs(date as string).format('MMM DD, dddd')}
                />
                <SingleDetail
                  icon={ClockIcon}
                  label="Time"
                  description={time}
                />
              </Flex>
            </Box>
          </Stack>
        </Box>

        <BookingDetailsWrapper>
          {(service?.additionalServices as any)?.length > 0 && (
            <Box
              borderTop="1px solid"
              borderColor="#e5e5e5"
              py="2rem"
              mb="0rem"
            >
              <Text fontSize="1rem" fontFamily="BR Firma" fontWeight="700">
                Additional Service
              </Text>
              <Grid
                templateColumns={{ base: 'repeat(1fr)', lg: 'repeat(2, 1fr)' }}
                w={{ base: 'full', lg: '100%' }}
                gap={{ base: '2rem', lg: '2rem' }}
                mb={{ base: '0rem', lg: '0rem' }}
              >
                {service?.additionalServices?.map((x: any) => (
                  <HStack key={x.id} align="center">
                    <CustomCheckbox
                      onChange={() => addToArray(x)}
                      checked={selectedAddon.find((e: any) => e.id === x.id)}
                    />
                    <Text fontSize="18px" color="#3d3d3d" mb="0">
                      {x.name}
                      {' - '}
                      <span style={{ fontWeight: '500' }}>
                        {Cur(x.price as number)} NGN
                      </span>
                    </Text>
                  </HStack>
                ))}
              </Grid>
            </Box>
          )}
        </BookingDetailsWrapper>

        <Box
          w="100%"
          border="1px solid #C9C7C7"
          py="16px"
          px="20px"
          borderRadius="12px"
        >
          <Flex alignItems="center" gap="48px">
            <Box>
              <Heading fontSize={24} mb="8px" fontWeight={900}>
                Cancellation Policy
              </Heading>
              <Text lineHeight="26px">
                Only bookings cancelled before the vendor accepts your booking
                guarantees a full refund.{' '}
                <Box as="span" color="brand.100">
                  More details
                </Box>
              </Text>
            </Box>
            <Box>
              <ShieldIcon />
            </Box>
          </Flex>
        </Box>
      </Stack>
    </ContainerBox>
  );
};

export default BookingDetails;
