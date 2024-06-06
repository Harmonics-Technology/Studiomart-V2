import { Box, Image, Heading, Text, Stack } from '@chakra-ui/react';

import ButtonComponent from '~/lib/components/Button/Button';

const index = () => {
  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box maxW="640px">
        <Stack spacing="40px">
          <Image
            src="/assets/email-confirmation.gif"
            w="200px"
            h="200px"
            display="block"
            mx="auto"
          />
          <Box textAlign="center">
            <Heading>Check your mail!</Heading>
            <Text>
              A link to reset your password been sent to
              Munira********u@gmail.com
            </Text>
          </Box>
          <ButtonComponent
            text="Open Mail"
            bg="brand.100"
            width="100%"
            color="brand.400"
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default index;
