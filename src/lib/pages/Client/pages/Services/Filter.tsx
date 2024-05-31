import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { IoChevronBackCircleOutline } from 'react-icons/io5';

import FilterIcon from '~/lib/components/Icons/FilterIcon';
import './styles.css';

const Filter = () => {
  return (
    <Box mb="40px" maxW="1290px" mx="auto">
      <Flex w="100%" justifyContent="space-between" alignItems="center">
        <Link href="/user">
          <Flex alignItems="center" gap="10px">
            <Icon
              as={IoChevronBackCircleOutline}
              fontSize={27}
              color="text.400"
            />
            <Text fontSize={18} color="text.500">
              Home
            </Text>
          </Flex>
        </Link>
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
