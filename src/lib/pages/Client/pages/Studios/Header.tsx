'use client';

import { Box, Flex, Heading, Stack, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import { BackButton } from '~/lib/components/Button/Button';
import './styles.css';
import Wrapper from '~/lib/components/Wrapper';

const Header = () => {
  const router = useRouter();
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
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default Header;
