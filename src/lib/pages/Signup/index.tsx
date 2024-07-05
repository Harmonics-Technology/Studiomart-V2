'use client';

import { Box, Stack } from '@chakra-ui/react';
import { useState } from 'react';

import FirstStep from './Sections/FirstStep';
import FormFooter from './Sections/FormFooter';
import Header from './Sections/Header';
import SecondStep from './Sections/SecondStep';
import ThirdStep from './Sections/ThirdStep';

const Index = () => {
  const [formStep, setFormStep] = useState<number>(1);
  return (
    <Box as="section" w="100%" minH="100vh" position="relative">
      <Box
        position="absolute"
        backgroundImage="url('/assets/thick-star-illustration.png')"
        backgroundRepeat="no-repeat"
        width={['80px', '120px']}
        height={['80px', '120px']}
        top="25%"
        right="0"
      />
      <Box
        backgroundImage="url('/assets/bg-illustration.png')"
        backgroundRepeat="no-repeat"
        position="absolute"
        w={['200px', '386px']}
        h={['200px', '250px']}
        backgroundSize="contain"
        top="50%"
        left="0"
      />
      <Stack>
        <Header />
        <Box maxW="640px" mx="auto">
          {formStep === 1 && (
            <FirstStep step={formStep} setStep={setFormStep} />
          )}
          {formStep === 2 && <SecondStep />}
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
