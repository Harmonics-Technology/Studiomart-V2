'use client';

import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';

import { BackButton } from '~/lib/components/Button/Button';
import FilterIcon from '~/lib/components/Icons/FilterIcon';
import './styles.css';
import Wrapper from '~/lib/components/Wrapper';

const Header = () => {
  return (
    <Box as="section">
      <Wrapper>
        <Flex alignItems="flex-start" justifyContent="space-between">
          <Box>
            <Stack spacing="40px">
              <BackButton linkTo="/user" />
              <Heading fontSize={40} fontWeight={900}>
                Popular Studios
              </Heading>
            </Stack>
          </Box>
          <div className="dropdown">
            <button className="dropbtn" type="button">
              <Flex alignItems="center" gap="9px" justifyContent="center">
                <FilterIcon />
                <Text>Filter</Text>
              </Flex>
            </button>
            <div className="dropdown-content">
              <a href="/user">Price</a>
              <a href="/user">Location</a>
              <a href="/user">Star rating</a>
            </div>
          </div>
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default Header;
