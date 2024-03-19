import { Box, Stack, Heading, Text, Flex, Image } from '@chakra-ui/react';

import Wrapper from '~/lib/components/Wrapper';
import type { SingleQuestionProp } from '~/lib/utilities/Context/schemas';

const SingleQuestion: React.FC<SingleQuestionProp> = ({ question, answer }) => {
  return (
    <Box mb="10" w="480px">
      <Flex alignItems="flex-start" justifyContent="space-between">
        <Image
          src="assets/green-star.png"
          alt="star image"
          width="40px"
          height="40px"
          objectFit="contain"
        />
        <Box w="420px">
          <Stack spacing={5}>
            <Heading fontSize={24} fontWeight={700} color="#0C090A">
              {question}
            </Heading>
            <Text lineHeight="26px" color="#0C090A">
              {answer}
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

const ThirdSection = () => {
  const questions = [
    {
      question: 'What is StudioMart?',
      answer:
        'StudioMart is a vibrant online marketplace connecting studio owners with customers, providing a seamless platform to explore, book, and create in inspiring spaces.',
    },
    {
      question: 'Where to book a service?',
      answer:
        'Booking a service on StudioMart is as easy as a few clicks. Browse through diverse studios, explore their offerings, select a service that suits your needs, and book your spot.',
    },
    {
      question: 'How do I add a studio?',
      answer:
        'Adding your studio to StudioMart is effortless. Simply create an account, provide your studio details, showcase your services, and instantly connect with a community of creative enthusiasts.',
    },
    {
      question: 'Why StudioMart?',
      answer:
        'StudioMart offers unparalleled convenience, empowering both studio owners and customers.Easy accessibility, secure transactions, and a vast array of creative spaces.',
    },
  ];
  return (
    <Box as="section">
      <Wrapper>
        <Box
          w="100%"
          border="4px solid #1570FA"
          h="auto"
          borderRadius="40px"
          p="10"
        >
          <Stack spacing={14}>
            <Box textAlign="center">
              <Heading fontSize={40} fontWeight={900}>
                Frequently{' '}
                <Box as="span" textDecoration="underline" color="#1570FA">
                  Asked
                </Box>{' '}
                Questions
              </Heading>
            </Box>
            <Flex flexWrap="wrap" justifyContent="space-between">
              {questions.map((item, index) => (
                <SingleQuestion
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </Flex>
          </Stack>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default ThirdSection;
