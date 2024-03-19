import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';

import ButtonComponent from '~/lib/components/Button/Button';
import CheckboxIcon from '~/lib/components/Icons/CheckboxIcon';
import MusicIcon from '~/lib/components/Icons/MusicIcon';
import type { FormStepProps } from '~/lib/utilities/Context/schemas';

const OptionButton = () => {
  return (
    <Box
      w="192px"
      border="1px solid #1570FA"
      px="16px"
      py="12px"
      borderRadius="8px"
    >
      <Flex alignItems="center" gap="10px" justifyContent="center">
        <CheckboxIcon />
        <MusicIcon />
        <Text fontSize={14}>Music Studio</Text>
      </Flex>
    </Box>
  );
};

const FirstStep = ({ step, setStep }: FormStepProps) => {
  const optionLists = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <Box
      as="section"
      w="100%"
      h="auto"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Stack spacing="45px">
        <Box>
          <Heading fontWeight={900} fontSize={40} mb="3px">
            What are you looking for?
          </Heading>
          <Text color="brand.500">
            Don’t worry, you’ll have access to all our studios
          </Text>
        </Box>
        <Box>
          <Flex
            alignItems="center"
            flexWrap="wrap"
            justifyContent="space-between"
            rowGap="36px"
          >
            {optionLists.map((item, index) => (
              <OptionButton key={index} />
            ))}
          </Flex>
        </Box>
        <ButtonComponent
          text="Next"
          color="brand.400"
          bg="brand.100"
          width="100%"
          onClick={nextStep}
        />
      </Stack>
    </Box>
  );
};

export default FirstStep;
