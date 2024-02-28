import {
  Flex,
  Text,
  Box,
  Stack,
  Button,
  UnorderedList,
  ListItem,
  Heading,
} from '@chakra-ui/react';
import Image from 'next/image';

import { WhiteLogo } from '../components/Logo';
import SocialLinks from '../components/SocialLinks';

type ListItemsProps = {
  items: string[];
};

const ListItems: React.FC<ListItemsProps> = ({ items }) => {
  return (
    <Box>
      {items.map((item, index) => (
        <ListItem
          color="#AFAFAF"
          mb="6"
          key={index}
          fontWeight={500}
          fontSize={15}
        >
          {item}
        </ListItem>
      ))}
    </Box>
  );
};

type FooterListProps = {
  headingText: string;
  items: string[];
};

const FooterList: React.FC<FooterListProps> = ({ headingText, items }) => {
  return (
    <Box>
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
  return (
    <Box as="footer" bg="#2D2327" w="100%" py="10">
      <Stack direction="column" spacing={8} w="90%" mx="auto">
        {/* First section */}
        <Box as="section">
          <Flex justifyContent="space-between" alignItems="flex-start">
            {/* First column */}
            <Box>
              <Stack direction="column" spacing={3} mb="12">
                <WhiteLogo />
                <SocialLinks direction="row" spacing={6} />
              </Stack>
              <Box color="#AFAFAF" mb="12">
                <Stack spacing={4}>
                  <Box as="a" href="#">
                    Rent a Studio
                  </Box>
                  <Box as="a" href="#">
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
              <Flex gap="60px">
                <FooterList
                  headingText="Studio Cateory"
                  items={[
                    'Music Studio',
                    'Photo Studio',
                    'Makeup Studio',
                    'Art Studio',
                    'Podcast Studio',
                  ]}
                />
                <FooterList
                  headingText="Company"
                  items={['About Us', 'Contact']}
                />
                <FooterList
                  headingText="Support"
                  items={[
                    'Contact Support',
                    'Studio Fee',
                    'Terms and Conditions',
                    'Privacy Policy',
                  ]}
                />
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

            <Text>Back to top</Text>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
