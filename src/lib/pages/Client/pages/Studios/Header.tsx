'use client';

import { Box, Flex, Heading, Stack, Text, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { BackButton } from '~/lib/components/Button/Button';
import CustomFilter from '~/lib/components/CustomFilter';
import FilterIcon from '~/lib/components/Icons/FilterIcon';
import './styles.css';
import Wrapper from '~/lib/components/Wrapper';
import { ServiceTypeView } from '~/services';

const Header = ({ categories }: { categories: ServiceTypeView[] }) => {
  const router = useRouter();
  const [openFilterModal, setOpenFilterModal] = useState<boolean>(false);
  return (
    <Box as="section">
      <Wrapper>
        <Flex alignItems="flex-start" justifyContent="space-between">
          <Box>
            <Stack spacing="50px">
              <Button
                bg="none"
                p="0"
                w="100px"
                _hover={{ bg: 'none', p: 0 }}
                onClick={() => router.back()}
              >
                <BackButton linkTo="" />
              </Button>
              <Heading fontSize={40} fontWeight={900}>
                All Studios
              </Heading>
            </Stack>
          </Box>
          <Box className="dropdown" onClick={() => setOpenFilterModal(true)}>
            <button className="dropbtn" type="button">
              <Flex alignItems="center" gap="9px" justifyContent="center">
                <FilterIcon />
                <Text>Filter</Text>
              </Flex>
            </button>
          </Box>
        </Flex>
      </Wrapper>
      {openFilterModal && (
        <CustomFilter
          onClick={() => setOpenFilterModal(false)}
          categories={categories}
        />
      )}
    </Box>
  );
};

export default Header;
