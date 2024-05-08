import { Box } from '@chakra-ui/react';

import { BackButton } from '~/lib/components/Button/Button';

const index = () => {
  return (
    <Box maxW="1288px" mx="auto" mb="150px">
      <BackButton linkTo="/client" />
    </Box>
  );
};

export default index;
