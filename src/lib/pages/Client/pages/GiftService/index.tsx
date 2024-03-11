import { Box } from '@chakra-ui/react';

import { BackButton } from '~/lib/components/Button/Button';

import GiftForm from './Sections/GiftForm';

const index = () => {
  return (
    <Box maxW="1288px" mx="auto" mb="150px">
      <BackButton linkTo="/client" />
      <GiftForm />
    </Box>
  );
};

export default index;
