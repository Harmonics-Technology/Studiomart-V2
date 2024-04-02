import { Box, Flex, Text, Icon, Button} from '@chakra-ui/react';

import FacebookIcon from '../Icons/FacebookIcon';
import GoogleIcon from '../Icons/GoogleIcon';
import {signIn} from 'next-auth/react'

interface IconLinkProps {
  icon: any;
  linkText: string;
  onClick?: () => {};
}

const IconLink = ({ icon, linkText, onClick}: IconLinkProps) => {
  return (
    <Box>
      <Flex alignItems="center" gap="7px">
        <Icon as={icon} />
        <Button color="brand.100" onClick={() => onClick()}>{linkText}</Button>
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
        <IconLink icon={FacebookIcon} linkText="Facebook" onClick={() => {}}/>
        <Box w="1px" h="40px" bg="brand.300" />
        <IconLink icon={GoogleIcon} linkText="Google" onClick={() => signIn('google')}/>
      </Flex>
    </Box>
  );
};

export default index;
