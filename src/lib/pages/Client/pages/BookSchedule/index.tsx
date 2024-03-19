import { Box, Stack } from '@chakra-ui/react';

import { BackButton } from '~/lib/components/Button/Button';

import ScheduleForm from './Sections/ScheduleForm';

const index = () => {
  return (
    <Box maxW="1288px" mx="auto" mt="80px" px="4">
      <Stack spacing="68px" w="100%" mb="150px">
        <BackButton linkTo="/client" />
        <ScheduleForm />
      </Stack>
    </Box>
  );
};

export default index;
