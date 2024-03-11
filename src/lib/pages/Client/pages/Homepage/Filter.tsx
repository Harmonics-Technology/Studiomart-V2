import { Box, Flex, Text } from '@chakra-ui/react';

import './styles.css';
import FilterIcon from '~/lib/components/Icons/FilterIcon';

const Filter = () => {
  return (
    <Box mb="40px" maxW="1290px" mx="auto">
      <Flex w="100%" justifyContent="flex-end" alignItems="center">
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
    </Box>
  );
};

export default Filter;
