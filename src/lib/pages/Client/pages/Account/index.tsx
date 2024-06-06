'use client';

import { Box, Flex, Heading } from '@chakra-ui/react';
import { useState } from 'react';

import Wrapper from '~/lib/components/Wrapper';

import FixedSideNav from './components/FixedSideNav';
import AccountPages from './pages';

const Index = () => {
  const [navPosition, setNavPosition] = useState<number>(1);
  return (
    <Box bg="scheme.700" w="100%" h="100%" py="40px">
      <Wrapper>
        <Heading fontSize={24} mb="26px">
          Account
        </Heading>
        <Flex gap="43px" alignItems="flex-start">
          <Box w="25%">
            <FixedSideNav
              navPosition={navPosition}
              setNavPosition={setNavPosition}
            />
          </Box>
          <Box w="75%">
            <AccountPages
              navPosition={navPosition}
              setNavPosition={setNavPosition}
            />
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default Index;
