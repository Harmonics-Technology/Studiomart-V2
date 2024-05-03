'use client';

import {
  Box,
  Heading,
  // FormLabel,
  Avatar,
  // Stack,
  VStack,
  FormControl,
} from '@chakra-ui/react';
// import { useState } from 'react';

import {
  BackButton,
  OutlineButtonComponent,
} from '~/lib/components/Button/Button';
// import FormInput from '~/lib/utilities/FormInput/FormInput';

const Index = () => {
  // const [firstName, setFirstName] = useState<string>('');
  const isEditing = false;
  return (
    <Box as="section" maxW="1280px" mx="auto" py="48px">
      <Box mb="35px">
        <BackButton linkTo="/" />
      </Box>
      <Box maxW="640px" mx="auto">
        <VStack spacing="28px" mb="24px">
          <Heading fontSize={40} fontWeight={900}>
            My Profile Details
          </Heading>
          <Avatar size="xl" src="" />
        </VStack>

        <Box>
          <FormControl>
            {/* <Stack spacing="20px" mb="26px">
              <Box>
                <FormLabel
                  textTransform="uppercase"
                  fontSize={10}
                  fontWeight={700}
                  color="text.100"
                >
                  Full Name
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
                  last Name
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
                  email
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
                  phone number
                </FormLabel>
                <FormInput
                  type="text"
                  width="100%"
                  value={firstName}
                  setValue={setFirstName}
                />
              </Box>
            </Stack> */}
            <OutlineButtonComponent
              text={isEditing ? 'Save' : 'Edit Profile'}
              color="brand.100"
              width="100%"
            />
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
