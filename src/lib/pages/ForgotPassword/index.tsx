import { Box, Flex } from '@chakra-ui/react';

import SideImages from '../Signin/Sections/SideImages';

import ForgotPasswordForm from './components/ForgotPasswordForm';

const index = () => {
  return (
    <Box as="section">
      <Flex
        alignItems="center"
        gap="97px"
        w="95%"
        mx="auto"
        h="100vh"
        overflow="hidden"
      >
        <Box w="40%">
          <SideImages />
        </Box>
        <Box w="45%">
          <ForgotPasswordForm />
        </Box>
      </Flex>
    </Box>
  );
};

export default index;
