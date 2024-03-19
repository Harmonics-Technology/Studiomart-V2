'use client';

import {
  Box,
  FormControl,
  FormLabel,
  Text,
  Stack,
  Flex,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';

import ButtonComponent from '~/lib/components/Button/Button';
import HeadingWithStar from '~/lib/components/HeadingWithStar';
import SigninOption from '~/lib/components/SigninOptions';
import FormInput from '~/lib/utilities/FormInput/FormInput';

const FormContainer = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <Box>
      <Stack spacing="58px">
        <HeadingWithStar
          title="Welcome to StudioMart!"
          flipStar={false}
          width="100%"
        />
        <Box>
          <Stack spacing="21px">
            <Box>
              <FormControl>
                <FormLabel fontSize="10px" fontWeight={700}>
                  EMAIL ADDRESS/PHONE NUMBER
                </FormLabel>
                <FormInput
                  type="text"
                  width="100%"
                  value={email}
                  setValue={setEmail}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl mb="2">
                <FormLabel fontSize="10px" fontWeight={700}>
                  PASSWORD
                </FormLabel>
                <FormInput
                  type="text"
                  width="100%"
                  value={password}
                  setValue={setPassword}
                />
              </FormControl>
              <Flex justifyContent="space-between">
                <Text fontSize={14} color="brand.100">
                  Verifying...
                </Text>
                <Text fontSize={14} color="brand.200" fontStyle="italic">
                  Forgot Password?
                </Text>
              </Flex>
            </Box>
          </Stack>
        </Box>
        <Box>
          <SigninOption text="or sign in with" />
        </Box>
        <Box>
          <Stack spacing="13px" justifyContent="center" alignItems="center">
            <ButtonComponent
              text="Sign in"
              color="brand.400"
              bg="brand.100"
              width="100%"
              onClick={() => {}}
            />
            <Flex alignItems="center" gap="4px">
              <Text>Don't have an account yet?</Text>
              <Link href="/signup">
                <Text fontWeight={700} color="brand.100">
                  Sign up
                </Text>
              </Link>
            </Flex>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default FormContainer;
