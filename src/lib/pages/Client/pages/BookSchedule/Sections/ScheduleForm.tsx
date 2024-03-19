'use client';

import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  VStack,
  Stack,
} from '@chakra-ui/react';
import { useState } from 'react';

import ButtonComponent from '~/lib/components/Button/Button';
import CustomText from '~/lib/components/Text';
import FormInput from '~/lib/utilities/FormInput/FormInput';

const ScheduleForm = () => {
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  return (
    <Box
      maxW="889px"
      py={['20px', '100px']}
      px={['20px', '120px']}
      mx="auto"
      h="607px"
      borderRadius="12px"
      border="1px solid #C3C3C3"
    >
      <Box mb="48px">
        <VStack spacing="8px">
          <Heading fontSize={40} fontWeight={900} color="brand.600">
            Studio Scheduling
          </Heading>
          <CustomText text="Please select a time and date for booking" />
        </VStack>
      </Box>
      <Box w={['320px', '540px']}>
        <FormControl>
          <Stack spacing="24px">
            <Box>
              <FormLabel
                textTransform="uppercase"
                fontSize={10}
                fontWeight={700}
              >
                Date
              </FormLabel>
              <FormInput
                width="100%"
                type="text"
                value={date}
                setValue={setDate}
              />
            </Box>
            <Box>
              <FormLabel
                textTransform="uppercase"
                fontSize={10}
                fontWeight={700}
              >
                time
              </FormLabel>
              <FormInput
                width="100%"
                type="text"
                value={time}
                setValue={setTime}
              />
            </Box>
            <ButtonComponent
              text="Proceed"
              bg="brand.100"
              color="brand.400"
              width="100%"
              onClick={() => {}}
            />
          </Stack>
        </FormControl>
      </Box>
    </Box>
  );
};

export default ScheduleForm;
