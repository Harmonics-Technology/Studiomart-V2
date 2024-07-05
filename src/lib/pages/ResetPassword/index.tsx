import { Box, Flex } from '@chakra-ui/react';

import SideImages from '../Signin/Sections/SideImages';

import ResetpasswordForm from './components/ResetpasswordForm';

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
        <Box w="40%" display={['none', 'block']}>
          <SideImages />
        </Box>
        <Box w={['90%', '45%']} mx="auto">
          <ResetpasswordForm />
        </Box>
      </Flex>
    </Box>
  );
};

export default index;
