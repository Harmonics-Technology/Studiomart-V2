'use client';

import { Box, Flex, Heading, Stack, Button, HStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import { BackButton } from '~/lib/components/Button/Button';
import './styles.css';
import Wrapper from '~/lib/components/Wrapper';
import SearchInput from '~/lib/pages/AllStudios/sections/SearchInput';

const Header = () => {
  const router = useRouter();
  return (
    <Box as="section">
      <Wrapper>
        <Flex alignItems="flex-start" justifyContent="space-between">
          <Box w="full">
            <Stack spacing={['30px', '50px']}>
              <Button
                bg="none"
                p="0"
                w="100px"
                _hover={{ bg: 'none', p: 0 }}
                onClick={() => router.back()}
              >
                <BackButton linkTo="" />
              </Button>
              <Heading fontSize={[25, 40]} fontWeight={900}>
                All Studios
              </Heading>
              <HStack justify="space-between" w="full">
                <SearchInput />
              </HStack>
            </Stack>
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default Header;
