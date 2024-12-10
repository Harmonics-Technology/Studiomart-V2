import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

import Logo from '~/lib/components/Logo';

const Header = () => {
  const vendorUrl = process.env.NEXT_PUBLIC_VENDOR_URL;
  const links = [
    {
      text: 'Become a vendor ',
      url: `${vendorUrl}/register`,
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
    <Box position="sticky" top="0" bg="brand.400" zIndex="2" py="3">
      <Box as="nav" w="95%" mx="auto">
        <Flex alignItems="center" justifyContent="space-between">
          <Link href="/">
            <Logo />
          </Link>
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
    </Box>
  );
};

export default Header;
