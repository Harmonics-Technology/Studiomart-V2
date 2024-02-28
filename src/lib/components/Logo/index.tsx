import { Box } from '@chakra-ui/react';
import Image from 'next/image';

const index = () => {
  return (
    <Box>
      <Image
        src="/assets/logo.svg"
        width={211}
        height={46}
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
        width={251}
        height={57}
        alt="studiomart logo"
      />
    </Box>
  );
};
