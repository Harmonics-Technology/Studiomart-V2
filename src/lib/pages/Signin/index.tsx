'use client';

import { Box, Flex, useMediaQuery } from '@chakra-ui/react';

import FormContainer from './Sections/FormContainer';
import SideImages from './Sections/SideImages';

const Index = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
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
        <Box w="40%" display={isMobile ? 'none' : 'block'}>
          <SideImages />
        </Box>
        <Box w={isMobile ? '90%' : '45%'} mx="auto">
          <FormContainer />
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
