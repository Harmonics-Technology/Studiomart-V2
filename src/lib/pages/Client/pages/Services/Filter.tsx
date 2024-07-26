import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { IoChevronBackCircleOutline } from 'react-icons/io5';

import FilterIcon from '~/lib/components/Icons/FilterIcon';
import './styles.css';

const Filter = ({ onClick }: { onClick: () => void }) => {
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
        <Box className="dropdown" onClick={onClick}>
          <button className="dropbtn" type="button">
            <Flex alignItems="center" gap="9px" justifyContent="center">
              <FilterIcon />
              <Text>Filter</Text>
            </Flex>
          </button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Filter;
