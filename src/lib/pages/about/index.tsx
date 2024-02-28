import { Box, Stack, Heading, Text, Flex } from '@chakra-ui/react';
import Image from 'next/image';

import ButtonComponent, {
  OutlineButtonComponent,
} from '../../components/Button/Button';
import SocialLinks from '../../components/SocialLinks';
import Wrapper from '../../components/Wrapper';

const FirstSection = () => {
  return (
    <Box as="section">
      <Wrapper>
        <Flex justifyContent="space-between" alignItems="center" w="100%">
          <Box w="40%">
            <Image
              src="/assets/face.png"
              width={466}
              height={643}
              objectFit="cover"
              alt="face image"
            />
          </Box>
          <Box w="50%">
            <Stack spacing={6}>
              <Heading color="#0C090A" fontSize={64}>
                {' '}
                About StudioMart{' '}
              </Heading>
              <Text lineHeight="26px">
                Hey there, creative minds! Ever felt like your awesome studio
                isn't getting the attention it truly deserves? Well, worry no
                more because StudioMart is here to light up your creative space!
              </Text>
              <Text lineHeight="26px">
                Imagine a place where studio owners like you can easily showcase
                your dance floors, capture your photography magic, or let your
                music vibe flow – that's exactly what StudioMart is all about!
                We've crafted a super easy-peasy platform that lets you flaunt
                your studio's uniqueness and connect with folks who can't wait
                to dive into your creative world.
              </Text>
              <Text lineHeight="26px">
                At StudioMart, we&apos;re not just a platform; we're your
                partners in success. Our mission? To empower studio owners like
                you, no matter if you're into photography, dance, music, or any
                other creative wonderland. We're all about making your studio
                journey as smooth as your favorite melody. So, why wait? Be a
                part of StudioMart today!
              </Text>
              <Box>
                <Flex alignItems="center" gap={4}>
                  <OutlineButtonComponent
                    text="Become a Vendor"
                    color="#1570FA"
                  />
                  <ButtonComponent
                    text="Book a Service"
                    color="white"
                    bg="#1570FA"
                    width="174px"
                  />
                </Flex>
              </Box>
            </Stack>
          </Box>
          <Box w="5%">
            <SocialLinks direction="column" spacing={6} />
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  );
};

interface ListItemProps {
  index: number;
  title: string;
  text: string;
}

const ListItem: React.FC<ListItemProps> = ({ index, title, text }) => {
  return (
    <Box>
      <Flex alignItems="center" gap={4}>
        <Box
          w="30px"
          h="30px"
          borderRadius="50%"
          bg="#2D2327"
          color="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {index + 1}.
        </Box>
        <Text>
          <b>{title}</b> {text}
        </Text>
      </Flex>
    </Box>
  );
};

const SecondSection = () => {
  const features = [
    {
      title: 'Feature Your Space.',
      text: 'Grab the spotlight by creating a stunning studio profile.',
    },
    {
      title: 'Offer Unique Experiences.',
      text: 'Go beyond renting your studio.',
    },
    {
      title: 'Exclusive Deals and Package.',
      text: 'Attract more customers with irresistible offers.',
    },
  ];
  return (
    <Box as="section" bg="#D6E7FF" py="10">
      <Wrapper>
        <Flex alignItems="center" justifyContent="space-between">
          <Box w="40%">
            <Image
              src="/assets/feature-section-image.png"
              width={481}
              height={530}
              alt="image illustrations"
            />
          </Box>
          <Box w="50%">
            <Stack spacing={7}>
              <Heading fontSize={40} fontWeight={900}>
                Become a Vendor
              </Heading>
              <Text>
                Ready to promote your studio's presence? Becoming a vendor on
                StudioMart is your ticket to a world of opportunities! Showcase
                your studio in three exciting ways:
              </Text>
              <Box>
                <Stack spacing={4}>
                  {features.map((item, index) => (
                    <ListItem
                      key={index}
                      index={index}
                      title={item.title}
                      text={item.text}
                    />
                  ))}
                </Stack>
              </Box>
              <ButtonComponent
                text="Get Started"
                color="white"
                width="150px"
                bg="#1570FA"
              />
            </Stack>
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  );
};

interface SingleQuestionProp {
  question: string;
  answer: string;
}

const SingleQuestion: React.FC<SingleQuestionProp> = ({ question, answer }) => {
  return (
    <Box mb="10" w="480px">
      <Flex alignItems="flex-start" justifyContent="space-between">
        <Image
          src="/assets/green-star.png"
          alt="star image"
          width={40}
          height={40}
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

const index = () => {
  return (
    <Box as="section">
      <Stack spacing={12}>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </Stack>
    </Box>
  );
};

export default index;
