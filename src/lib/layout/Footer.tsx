import {
  Flex,
  Text,
  Box,
  Stack,
  Button,
  UnorderedList,
  ListItem,
  Heading,
  Image,
} from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { WhiteLogo } from '../components/Logo';
import SocialLinks from '../components/SocialLinks';

type ListItemsProps = {
  items: { title: string; url: string }[];
};

const ListItems: React.FC<ListItemsProps> = ({ items }) => {
  return (
    <Box>
      {items.map((item, index) => (
        <Link href={item.url} key={index}>
          <ListItem
            color="#AFAFAF"
            mb="6"
            key={index}
            fontWeight={500}
            fontSize={15}
          >
            {item?.title}
          </ListItem>
        </Link>
      ))}
    </Box>
  );
};

type FooterListProps = {
  headingText: string;
  items: { title: string; url: string }[];
};

const FooterList: React.FC<FooterListProps> = ({ headingText, items }) => {
  return (
    <Box mb="5">
      <UnorderedList listStyleType="none">
        <Heading mb="5" fontSize={24} fontWeight={700} color="white">
          {headingText}
        </Heading>
        <ListItems items={items} />
      </UnorderedList>
    </Box>
  );
};

const Footer = () => {
  const pathname = usePathname();

  const studioFooterLinks = [
    {
      title: 'Music Studio',
      url: '/studios',
    },
    {
      title: 'Photo Studio',
      url: '/studios',
    },
    {
      title: 'Makeup Studio',
      url: '/studios',
    },
    {
      title: 'Art Studio',
      url: '/studios',
    },
    {
      title: 'Podcast Studio',
      url: '/studios',
    },
  ];

  const companyFooterLinks = [
    {
      title: 'About Us',
      url: '/about',
    },
    {
      title: 'Contact',
      url: '/contact',
    },
  ];

  const supportFooterLinks = [
    {
      title: 'Contact Support',
      url: '/contact-support',
    },
    {
      title: 'Studio Fee',
      url: '/studios',
    },
    {
      title: 'Terms and Conditions',
      url: '/terms-and-conditions',
    },
    {
      title: 'Privacy Policy',
      url: '/privacy-policy',
    },
  ];

  const hideNavbarRoutes = [
    '/sign-in',
    '/register',
    '/forgot-password',
    '/email-confirmation',
    '/reset-password',
    '/password-reset-success',
    '/vendor',
  ];

  if (hideNavbarRoutes.includes(pathname)) {
    return null;
  }

  const goBackToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <Box as="footer" bg="#2D2327" w="100%" py="10">
      <Stack direction="column" spacing={8} w="90%" mx="auto">
        {/* First section */}
        <Box as="section">
          <Flex
            justifyContent="space-between"
            alignItems="flex-start"
            flexWrap="wrap"
          >
            {/* First column */}
            <Box>
              <Stack direction="column" spacing={3} mb="12">
                <WhiteLogo />
                <SocialLinks direction="row" spacing={6} />
              </Stack>
              <Box color="#AFAFAF" mb="12">
                <Stack spacing={4}>
                  <Box as="a" href="/sign-in">
                    Rent a Studio
                  </Box>
                  <Box as="a" href="/register">
                    Add a Studio
                  </Box>
                </Stack>
              </Box>
              <Box mb="10">
                <Button bg="none" _hover={{ bg: 'none' }} m="0" p="0">
                  <Image
                    src="/assets/playstore.svg"
                    width={161}
                    height={65}
                    alt="playsore image"
                  />
                </Button>
              </Box>
            </Box>

            {/* Second column */}
            <Box>
              <Flex
                gap={[0, '60px']}
                justifyContent={['space-between', 'flex-start']}
                flexWrap="wrap"
              >
                <FooterList
                  headingText="Studio Cateory"
                  items={studioFooterLinks}
                />
                <FooterList headingText="Company" items={companyFooterLinks} />
                <FooterList headingText="Support" items={supportFooterLinks} />
              </Flex>
            </Box>
          </Flex>
        </Box>

        {/* footer line */}
        <Box w="100%" bg="#6DD3CE" h="1px" />

        {/* footer copywright */}
        <Box>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            color="#AFAFAF"
            fontSize="sm"
          >
            <Text>
              &copy; StudioMart {new Date().getFullYear()}. All Rights Reserved.
            </Text>

            <Text onClick={goBackToTop} cursor="pointer">
              Back to top
            </Text>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
