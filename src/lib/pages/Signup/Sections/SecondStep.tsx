import {
  Box,
  Text,
  Flex,
  VStack,
  Stack,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Checkbox,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';

import ButtonComponent from '~/lib/components/Button/Button';
import HeadingWithStar from '~/lib/components/HeadingWithStar';
import SigninOption from '~/lib/components/SigninOptions';
import type { FormStepProps } from '~/lib/utilities/Context/schemas';
import FormInput from '~/lib/utilities/FormInput/FormInput';

const SecondStep = ({ step, setStep }: FormStepProps) => {
  const [email, setEmail] = useState<string>('');

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <Box>
      <Stack spacing="36px">
        <Box>
          <VStack spacing={6}>
            <HeadingWithStar
              title="Hey there, explorer!"
              flipStar
              width="508px"
            />
            <Text fontSize={24} fontWeight={500}>
              Let’s get started! Already have an account? Sign in
            </Text>
            <SigninOption text="or sign up with" />
          </VStack>
        </Box>
        <Box>
          <FormControl>
            <Stack spacing="20px" mb="26px">
              <Box>
                <FormLabel fontSize="10px" fontWeight={700}>
                  EMAIL ADDRESS/PHONE NUMBER
                </FormLabel>
                <FormInput
                  type="text"
                  width="100%"
                  value={email}
                  setValue={setEmail}
                />
              </Box>
              <Box>
                <FormLabel fontSize="10px" fontWeight={700}>
                  FULLNAME
                </FormLabel>
                <FormInput
                  type="text"
                  width="100%"
                  value={email}
                  setValue={setEmail}
                />
              </Box>
              <Box>
                <FormLabel fontSize="10px" fontWeight={700}>
                  USERNAME
                </FormLabel>
                <FormInput
                  type="text"
                  width="100%"
                  value={email}
                  setValue={setEmail}
                />
              </Box>
              <Box>
                <FormLabel fontSize="10px" fontWeight={700}>
                  ARE YOU A STUDENT
                </FormLabel>
                <RadioGroup>
                  <Flex gap="16px">
                    <Radio value="Yes" size="lg">
                      Yes
                    </Radio>
                    <Radio value="No" size="lg">
                      No
                    </Radio>
                  </Flex>
                </RadioGroup>
              </Box>
              <Box>
                <FormLabel fontSize="10px" fontWeight={700}>
                  INSTITUTION
                </FormLabel>
                <FormInput
                  type="text"
                  width="100%"
                  value={email}
                  setValue={setEmail}
                />
                <Text m="2">
                  Can’t find school?{' '}
                  <Box as="span" color="brand.100">
                    Add School
                  </Box>
                </Text>
              </Box>
              <Box>
                <FormLabel fontSize="10px" fontWeight={700}>
                  PASSWORD
                </FormLabel>
                <FormInput
                  type="text"
                  width="100%"
                  value={email}
                  setValue={setEmail}
                />
              </Box>
              <Box>
                <FormLabel fontSize="10px" fontWeight={700}>
                  RE-TYPE PASSWORD
                </FormLabel>
                <FormInput
                  type="text"
                  width="100%"
                  value={email}
                  setValue={setEmail}
                />
                <Text fontSize={14} color="brand.100" m="2">
                  Verifying...
                </Text>
              </Box>
              <Box>
                <Checkbox defaultChecked colorScheme="blue">
                  I accept the{' '}
                  <Link href="/terms-and-conditions">
                    <Box as="span" color="brand.100">
                      Terms & Conditions
                    </Box>
                  </Link>
                </Checkbox>
              </Box>
            </Stack>
            <ButtonComponent
              text="Next"
              color="brand.400"
              bg="brand.100"
              width="100%"
              onClick={nextStep}
            />
          </FormControl>
        </Box>
      </Stack>
    </Box>
  );
};

export default SecondStep;
