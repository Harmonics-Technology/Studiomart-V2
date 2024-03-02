'use client';

import { Box, Input, Flex, FormControl } from '@chakra-ui/react';
import { IoChevronForwardCircleOutline } from 'react-icons/io5';

import { IconButtonComponent } from '~/lib/components/Button/Button';

const SearchInput = () => {
  return (
    <Box>
      <Flex alignItems="center" gap="10px">
        <FormControl>
          <Input placeholder="Search" py="23px" />
        </FormControl>
        <IconButtonComponent
          width="150px"
          color="white"
          text="Search"
          bg="#1570FA"
          icon={IoChevronForwardCircleOutline}
          flip
        />
      </Flex>
    </Box>
  );
};

export default SearchInput;
