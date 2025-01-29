'use client';

import { Box, Input, Flex, FormControl } from '@chakra-ui/react';
import { IoChevronForwardCircleOutline } from 'react-icons/io5';
import { useDebouncedCallback } from 'use-debounce';

import { IconButtonComponent } from '~/lib/components/Button/Button';
import useQueryParams from '~/lib/utilities/Hooks/useQueryParams';

const SearchInput = () => {
  const { setQueryParams } = useQueryParams();
  const searchFn = useDebouncedCallback((value: any) => {
    setQueryParams({ search: value });
  }, 500);
  return (
    <Box w="full">
      <Flex alignItems="center" gap="10px" w="full">
        <FormControl w="full">
          <Input
            placeholder="Search"
            py="23px"
            onChange={(e) => searchFn(e.target.value)}
            w="full"
          />
        </FormControl>
        <IconButtonComponent
          width="150px"
          color="white"
          text="Search"
          bg="brand.100"
          icon={IoChevronForwardCircleOutline}
          flip
        />
      </Flex>
    </Box>
  );
};

export default SearchInput;
