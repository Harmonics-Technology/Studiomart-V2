import { Box, Flex, Text, Icon } from '@chakra-ui/react';

import FacebookIcon from '../Icons/FacebookIcon';
import GoogleIcon from '../Icons/GoogleIcon';

interface IconLinkProps {
  icon: any;
  linkText: string;
}

const IconLink = ({ icon, linkText }: IconLinkProps) => {
  return (
    <Box>
      <Flex alignItems="center" gap="7px">
        <Icon as={icon} />
        <Text color="brand.100">{linkText}</Text>
      </Flex>
    </Box>
  );
};

interface SigninOptionProp {
  text: string;
}

const index = ({ text }: SigninOptionProp) => {
  return (
    <Box>
      <Flex alignItems="center" gap="18px" justifyContent="center">
        <Text>{text}</Text>
        <IconLink icon={FacebookIcon} linkText="Facebook" />
        <Box w="1px" h="40px" bg="brand.300" />
        <IconLink icon={GoogleIcon} linkText="Google" />
      </Flex>
    </Box>
  );
};

export default index;
