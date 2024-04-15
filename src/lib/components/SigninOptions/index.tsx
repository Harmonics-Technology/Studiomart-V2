import { Box, Flex, Text, Icon, Button } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';

import FacebookIcon from '../Icons/FacebookIcon';
import GoogleIcon from '../Icons/GoogleIcon';

interface IconLinkProps {
  icon: any;
  linkText: string;
  onClick?: any;
}

const IconLink = ({ icon, linkText, onClick }: IconLinkProps) => {
  return (
    <Box>
      <Flex alignItems="center" gap="7px">
        <Icon as={icon} />
        <Button color="brand.100" onClick={onClick}>
          {linkText}
        </Button>
      </Flex>
    </Box>
  );
};

const index = ({ text }: { text: string }) => {
  return (
    <Box>
      <Flex alignItems="center" gap="18px" justifyContent="center">
        <Text>{text}</Text>
        <IconLink icon={FacebookIcon} linkText="Facebook" />
        <Box w="1px" h="40px" bg="brand.300" />
        <IconLink
          icon={GoogleIcon}
          linkText="Google"
          onClick={() => signIn('google')}
        />
      </Flex>
    </Box>
  );
};

export default index;
