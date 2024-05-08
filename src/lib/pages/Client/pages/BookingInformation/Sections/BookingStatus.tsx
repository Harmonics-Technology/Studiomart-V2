/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
import { Box, Heading, Text } from '@chakra-ui/react';

export const BookingStatus = ({
  response,
  reference,
}: {
  response: any;
  reference: any;
}) => {
  return (
    <Box
      w="100%"
      py="17px"
      px="18px"
      bg="text.900"
      border="1px solid"
      borderColor="status.500"
      borderRadius="12px"
      bgColor={
        response === 'pending'
          ? '#FDF3CA'
          : response === 'paid'
            ? '#D2F5DF'
            : response === 'approved'
              ? '#D5E2F9'
              : response === 'in-progress'
                ? '#FDF3CA'
                : response === 'completed'
                  ? '#bcf8dc'
                  : response === 'cancelled' || response === 'rejected'
                    ? '#FDC1C1'
                    : '#7cbcf2'
      }
      fontSize=".9rem"
    >
      <Heading fontSize={18} fontWeight={700} mb="4px">
        {response === 'pending'
          ? 'Pending Confirmation'
          : response === 'paid'
            ? 'Payment Confirmed'
            : response === 'approved'
              ? 'Awaiting payment'
              : response === 'in-progress'
                ? 'In progress'
                : response === 'completed'
                  ? 'Completed'
                  : response === 'rejected'
                    ? 'Rejected'
                    : 'Cancelled'}
      </Heading>
      <Text color="status.600" fontSize={15}>
        Your booking with reference {reference} is pending confirmation
      </Text>
      {response === 'pending'
        ? 'is pending confirmation'
        : response === 'paid'
          ? "now has it's payment confirmed"
          : response === 'approved'
            ? 'has been accepted by vendor and is awaiting payment'
            : response === 'in-progress'
              ? 'is currently in progress'
              : response === 'completed'
                ? 'has been completed. Thank you for using studiomart'
                : response === 'rejected'
                  ? 'has been rejected by the vendor'
                  : response === 'cancelled'
                    ? 'Cancelled by you'
                    : 'is undefined'}
    </Box>
  );
};
