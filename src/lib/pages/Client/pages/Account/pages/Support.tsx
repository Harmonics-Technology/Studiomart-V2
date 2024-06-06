import {
  Box,
  Stack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Image,
  Button,
  Text,
} from '@chakra-ui/react';

import ChatIcon from '~/lib/components/Icons/ChatIcon';
import SearcIcon from '~/lib/components/Icons/SearcIcon';

const SingleAccordionItem = () => {
  return (
    <AccordionItem
      borderBottom="1px solid lightgray"
      pb="10px"
      borderTop="none"
      mb="30px"
    >
      <h2>
        <AccordionButton px="0">
          <Box as="span" flex="1" textAlign="left">
            <Flex alignItems="center" gap="12px">
              <Image src="/assets/green-star.png" w="28px" h="28px" />
              <Heading fontSize={20}>
                What is Studio Mart and how does it work?
              </Heading>
            </Flex>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </AccordionPanel>
    </AccordionItem>
  );
};

const Support = () => {
  return (
    <Box position="relative">
      <Stack spacing="50px">
        <Heading fontSize={25} textAlign="center">
          Frequently Asked Questions
        </Heading>
        <Box w="80%" mx="auto">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearcIcon />
            </InputLeftElement>
            <Input type="tel" placeholder="Search for answers" />
          </InputGroup>
        </Box>
        <Box>
          <Accordion allowToggle>
            {[1, 2, 3, 4, 5].map(() => (
              <SingleAccordionItem />
            ))}
          </Accordion>
        </Box>
        <Box position="absolute" bottom="-30px" right="-50px">
          <Button
            bg="brand.100"
            borderRadius="50px"
            color="brand.400"
            boxShadow="lg"
            px="30px"
            py="25px"
            fontWeight="normal"
          >
            <Flex alignItems="center" gap="10px">
              <Text>Chat with us</Text>
              <ChatIcon />
            </Flex>
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Support;
