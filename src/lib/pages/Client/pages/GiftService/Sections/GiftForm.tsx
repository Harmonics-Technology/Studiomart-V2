'use client';

import { Box, FormLabel, FormControl, Heading, Stack } from '@chakra-ui/react';
import { useState } from 'react';

import ButtonComponent from '~/lib/components/Button/Button';
import FormInput from '~/lib/utilities/FormInput/FormInput';

const GiftForm = () => {
  const [recipientname, setRecipientName] = useState<string>('');
  return (
    <Box maxW="640px" mx="auto" mt={[8, 0]}>
      <Stack spacing="36px">
        <Box>
          <Heading fontSize={40}>Gift this Service</Heading>
        </Box>
        <Box>
          <FormControl mb="26px">
            <Stack spacing="20px">
              <Box>
                <FormLabel
                  textTransform="uppercase"
                  fontSize={10}
                  fontWeight={700}
                >
                  Recipient name
                </FormLabel>
                <FormInput
                  type="text"
                  width="100%"
                  value={recipientname}
                  setValue={setRecipientName}
                  placeholder="John doe"
                />
              </Box>
              <Box>
                <FormLabel
                  textTransform="uppercase"
                  fontSize={10}
                  fontWeight={700}
                >
                  Recipient email
                </FormLabel>
                <FormInput
                  type="text"
                  width="100%"
                  value={recipientname}
                  setValue={setRecipientName}
                  placeholder="john@gmail.com"
                />
              </Box>
              <Box>
                <FormLabel
                  textTransform="uppercase"
                  fontSize={10}
                  fontWeight={700}
                >
                  Recipient phone number
                </FormLabel>
                <FormInput
                  type="text"
                  width="100%"
                  value={recipientname}
                  setValue={setRecipientName}
                  placeholder="+23456789"
                />
              </Box>
              <Box>
                <FormLabel
                  textTransform="uppercase"
                  fontSize={10}
                  fontWeight={700}
                >
                  from
                </FormLabel>
                <FormInput
                  type="text"
                  width="100%"
                  value={recipientname}
                  setValue={setRecipientName}
                  placeholder="Suberu"
                />
              </Box>
              <Box>
                <FormLabel
                  textTransform="uppercase"
                  fontSize={10}
                  fontWeight={700}
                >
                  message (optional)
                </FormLabel>
                <FormInput
                  type="text"
                  width="100%"
                  value={recipientname}
                  setValue={setRecipientName}
                  placeholder="Have fun and enjoy!"
                />
              </Box>
            </Stack>
          </FormControl>
          <ButtonComponent
            text="Confirm gift details"
            color="brand.400"
            bg="brand.100"
            width="100%"
            onClick={() => {}}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default GiftForm;
