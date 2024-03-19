'use client';

import { Box, Stack } from '@chakra-ui/react';
import { useState } from 'react';

import FirstStep from './Sections/FirstStep';
import FormFooter from './Sections/FormFooter';
import Formheader from './Sections/Formheader';
import SecondStep from './Sections/SecondStep';
import ThirdStep from './Sections/ThirdStep';

const Index = () => {
  const [formStep, setFormStep] = useState<number>(1);
  return (
    <Box as="section" w="100%" h="100%" position="relative" py="5">
      <Box
        position="absolute"
        backgroundImage="url('assets/thick-star-illustration.png')"
        backgroundRepeat="no-repeat"
        width="120px"
        height="120px"
        top="25%"
        right="0"
      />
      <Box
        backgroundImage="url('assets/bg-illustration.png')"
        backgroundRepeat="no-repeat"
        position="absolute"
        w="386px"
        h="250px"
        backgroundSize="contain"
        top="50%"
        left="0"
      />
      <Stack spacing={12}>
        <Formheader />
        <Box maxW="640px" mx="auto">
          {formStep === 1 && (
            <FirstStep step={formStep} setStep={setFormStep} />
          )}
          {formStep === 2 && (
            <SecondStep step={formStep} setStep={setFormStep} />
          )}
          {formStep === 3 && (
            <ThirdStep step={formStep} setStep={setFormStep} />
          )}
        </Box>
        <FormFooter />
      </Stack>
    </Box>
  );
};

export default Index;
