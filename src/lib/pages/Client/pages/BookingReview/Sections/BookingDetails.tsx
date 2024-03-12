import { Box, Heading, Stack, Flex, Text, Icon } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import CalendarIcon from '~/lib/components/Icons/CalendarIcon';
import { GrayCheckboxIcon } from '~/lib/components/Icons/CheckboxIcon';
import ClockIcon from '~/lib/components/Icons/ClockIcon';
import EyeIcon from '~/lib/components/Icons/EyeIcon';
import ShieldIcon from '~/lib/components/Icons/ShieldIcon';
import CustomText from '~/lib/components/Text';
import type { SingleDetailProps } from '~/lib/utilities/Context/schemas';

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

const BookingDetails = () => {
  return (
    <Box maxW="672px" mb="40px">
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
                People are eyeing this service!{' '}
              </Heading>
              <CustomText text="15 Others are looking at this time and date to book it" />
            </Box>
            <Box>
              <EyeIcon />
            </Box>
          </Flex>
        </Box>

        <Box>
          <Stack spacing="28px">
            <Heading fontSize={24} fontWeight={700}>
              1 day in Lensboy Studio
            </Heading>
            <Box>
              <Flex alignItems="center" gap="52px">
                <SingleDetail
                  icon={CalendarIcon}
                  label="Date"
                  description="Mar 28 . Wednesday"
                />
                <SingleDetail
                  icon={ClockIcon}
                  label="Time"
                  description="12:00 PM"
                />
              </Flex>
            </Box>
          </Stack>
        </Box>

        <BookingDetailsWrapper>
          <Text fontSize={18} fontWeight={700} mb="16px">
            Additional Service
          </Text>
          <Flex alignItems="center" gap="20px">
            <Box>
              <Flex alignItems="center" gap="6px">
                <GrayCheckboxIcon />
                <Text>Export</Text>
              </Flex>
            </Box>
            <Box>
              <Flex alignItems="center" gap="6px">
                <GrayCheckboxIcon />
                <Text>Export</Text>
              </Flex>
            </Box>
          </Flex>
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
    </Box>
  );
};

export default BookingDetails;
