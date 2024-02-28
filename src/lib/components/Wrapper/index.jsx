import { Box } from '@chakra-ui/react';

const index = ({ children }) => {
  return (
    <Box w="90%" py="8" mx="auto">
      {children}
    </Box>
  );
};

export default index;
