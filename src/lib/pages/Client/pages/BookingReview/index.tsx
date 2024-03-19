import { Box, Stack, Flex } from '@chakra-ui/react';

import { BackButton } from '~/lib/components/Button/Button';

import BookingDetails from './Sections/BookingDetails';
import BookingSummaryCard from './Sections/BookingSummaryCard';

const index = () => {
  return (
    <Box maxW="1288px" mx="auto" mt="80px" px="4">
      <Stack spacing="68px" w="100%" mb="150px">
        <BackButton linkTo="/client" />
        <Box>
          <Flex
            alignItems="flex-start"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <BookingDetails />
            <BookingSummaryCard />
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default index;
