'use client';

import { Box, Heading, FormLabel, Stack, FormControl } from '@chakra-ui/react';
import { useState } from 'react';

import ButtonComponent, { BackButton } from '~/lib/components/Button/Button';
import FormInput from '~/lib/utilities/FormInput/FormInput';

const Index = () => {
  const [firstName, setFirstName] = useState<string>('');
  return (
    <Box as="section" maxW="1280px" mx="auto" py="48px">
      <Box mb="35px">
        <BackButton linkTo="/" />
      </Box>
      <Box maxW="640px" mx="auto">
        <Box mb="24px">
          <Heading fontSize={40} fontWeight={400}>
            Transfer Service Ownership
          </Heading>
        </Box>

        <Box>
          <FormControl>
            <Stack spacing="20px" mb="26px">
              <Box>
                <FormLabel
                  textTransform="uppercase"
                  fontSize={10}
                  fontWeight={700}
                  color="text.100"
                >
                  recipient Name
                </FormLabel>
                <FormInput
                  type="text"
                  width="100%"
                  value={firstName}
                  setValue={setFirstName}
                />
              </Box>
              <Box>
                <FormLabel
                  textTransform="uppercase"
                  fontSize={10}
                  fontWeight={700}
                  color="text.100"
                >
                  recipient email
                </FormLabel>
                <FormInput
                  type="email"
                  width="100%"
                  value={firstName}
                  setValue={setFirstName}
                />
              </Box>
              <Box>
                <FormLabel
                  textTransform="uppercase"
                  fontSize={10}
                  fontWeight={700}
                  color="text.100"
                >
                  from
                </FormLabel>
                <FormInput
                  type="text"
                  width="100%"
                  value={firstName}
                  setValue={setFirstName}
                />
              </Box>
              <Box>
                <FormLabel
                  textTransform="uppercase"
                  fontSize={10}
                  fontWeight={700}
                  color="text.100"
                >
                  message (optional)
                </FormLabel>
                <FormInput
                  type="text"
                  width="100%"
                  value={firstName}
                  setValue={setFirstName}
                />
              </Box>
            </Stack>
            <ButtonComponent
              text="Transfer"
              bg="brand.100"
              color="brand.400"
              width="100%"
              onClick={() => {}}
            />
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
