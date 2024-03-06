import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

import Logo from '~/lib/components/Logo';

const Formheader = () => {
  const links = [
    {
      text: 'Become a vendor ',
      url: '/signup',
    },
    {
      text: 'Privacy Policy',
      url: '/privacy-policy',
    },
    {
      text: 'Terms and Conditions',
      url: '/terms-and-conditions',
    },
  ];
  return (
    <Box as="nav" w="95%" mx="auto">
      <Flex alignItems="center" justifyContent="space-between">
        <Logo />
        <Box>
          <Flex alignItems="center" gap="40px">
            {links.map((item) => (
              <Link href={item.url}>
                <Text>{item.text}</Text>
              </Link>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Formheader;
