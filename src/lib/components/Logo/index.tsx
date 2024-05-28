import { Box, Image } from '@chakra-ui/react';

const index = () => {
  return (
    <Box>
      <Image
        src="/assets/logo.svg"
        maxW={[170, 170, 211]}
        h="auto"
        // height={46}
        alt="studiomart logo"
      />
    </Box>
  );
};

export default index;

export const WhiteLogo = () => {
  return (
    <Box>
      <Image
        src="/assets/white-logo.svg"
        maxW={[160, 160, 211]}
        height="auto"
        alt="studiomart logo"
      />
    </Box>
  );
};
