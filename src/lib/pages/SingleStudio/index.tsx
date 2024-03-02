'use client';

import { Box, Flex, Heading, Stack, Text, Icon } from '@chakra-ui/react';
import Image from 'next/image';
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from 'react-icons/io5';

import {
  IconButtonComponent,
  IconButtonLinkComponent,
} from '~/lib/components/Button/Button';
import QuoteIcon from '~/lib/components/Icons/Quote';
import ReviewCard from '~/lib/components/ReviewCard';
import ServiceCard from '~/lib/components/ServiceCard';
import CustomText from '~/lib/components/Text';
import Wrapper from '~/lib/components/Wrapper';

const FirstSection = () => {
  return (
    <Box>
      <Wrapper>
        <Flex alignItems="flex-start" justifyContent="space-between" w="100%">
          <Box w="44%">
            <Stack
              alignItems="flex-start"
              justifyContent="space-between"
              spacing={20}
            >
              <IconButtonLinkComponent
                text="Back"
                flip
                icon={IoChevronBackCircleOutline}
              />
              <Image
                src="/assets/studio-girl.png"
                alt="studio girl"
                width={466}
                height={544}
              />
            </Stack>
          </Box>
          <Box w="60%">
            <Stack spacing={3}>
              <Box>
                <Image
                  src="/assets/glasses-lady.png"
                  alt="lady on glasses"
                  width={732}
                  height={200}
                />
              </Box>
              <Box>
                <Box position="relative" p="9">
                  <Image
                    src="/assets/star-like.svg"
                    alt="star-like image"
                    width={52}
                    height={54}
                    style={{ position: 'absolute', top: 0, left: 0 }}
                  />
                  <Heading fontSize={40} color="#1570FA" fontWeight={900}>
                    ColorSplash Studios
                  </Heading>
                </Box>
                <Box px="8" mb="6">
                  <Stack spacing={5}>
                    <CustomText text=" Our vibrant space is more than a studio; it's your artistic playground. Equipped with the best tools and embraced by a calming atmosphere, we're the ideal spot for artists, photographers, and creators." />
                    <CustomText text="Inspiration is everywhere at ColorSplash Studios. Whether you're capturing moments or exploring innovative ideas, our studio is your perfect companion." />
                    <CustomText text="Ready to add a splash of color? Book our services!" />
                  </Stack>
                </Box>
                <Box px="8">
                  <Flex justifyContent="space-between">
                    <Box w="160px">
                      <Stack spacing={2}>
                        <Text color="#0C090A" fontSize={12}>
                          Over 100 clients
                        </Text>
                        <Image
                          src="/assets/people.png"
                          alt="People avatars"
                          width={160}
                          height={40}
                        />
                      </Stack>
                    </Box>
                    <Box w="317px">
                      <Stack spacing={4}>
                        <QuoteIcon color="#2D2327" width="40" height="30" />
                        <Text color="#267E79">
                          Colors speak louder than words, painting life's canvas
                          with emotions.
                        </Text>
                        <Heading
                          fontSize={30}
                          color="#0C090A"
                          textAlign="right"
                        >
                          The_Designer
                        </Heading>
                      </Stack>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  );
};

const SecondSection = () => {
  return (
    <Box as="section" w="100%" bg="#FCF8FB" py="10">
      <Wrapper>
        <Stack spacing={16}>
          <Box>
            <Heading fontSize={24} fontWeight={900}>
              Services by ColourSplash Studios
            </Heading>
          </Box>
          <Box>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              flexWrap="wrap"
            >
              <ServiceCard
                image="/assets/face.png"
                title="catering service"
                rating={3.5}
                price={5000}
              />
              <ServiceCard
                image="/assets/mask-1.png"
                title="catering service"
                rating={4.8}
                price={5000}
              />
              <ServiceCard
                image="/assets/face.png"
                title="catering service"
                rating={3.5}
                price={5000}
              />
              <ServiceCard
                image="/assets/mask-2.png"
                title="catering service"
                rating={3.5}
                price={5000}
              />
              <ServiceCard
                image="/assets/face.png"
                title="catering service"
                rating={3.5}
                price={5000}
              />
              <ServiceCard
                image="/assets/ninth-image.png"
                title="catering service"
                rating={3.5}
                price={5000}
              />
            </Flex>
          </Box>
        </Stack>
      </Wrapper>
    </Box>
  );
};

const ThirdSection = () => {
  return (
    <Box as="section" bg="#D6E7FF" py="8" w="100%">
      {/* <Wrapper> */}
      <Box w="90%" mx="auto" overflow="auto">
        <Stack spacing={14}>
          <Box>
            <Flex alignItems="center" justifyContent="space-between">
              <Box>
                <Heading fontSize={24} fontWeight={900}>
                  The{' '}
                  <Box as="span" textDecoration="underline" color="#1570FA">
                    Reviews
                  </Box>
                </Heading>
              </Box>
              <Box>
                <Flex gap={3} alignItems="center">
                  <Icon
                    as={IoChevronBackCircleOutline}
                    fontSize={30}
                    color="white"
                  />
                  <Icon
                    as={IoChevronForwardCircleOutline}
                    fontSize={30}
                    color="#1570FA"
                  />
                </Flex>
              </Box>
            </Flex>
          </Box>

          <Box overflow="auto">
            <Flex alignItems="center" overflowX="auto" gap="30px" w="100vw">
              <ReviewCard
                name="The_Designer_Ama"
                company="Chroma Magic, Rainbow Retreat, Colorful Captures"
                review="ColorSplash Studios is a creative haven! The vibrant ambiance and passionate staff make it a perfect spot for artists. I booked a Colorful Captures session for my birthday, and the photographs were stunning. The studio's professional approach and welcoming atmosphere made the experience delightful. Highly recommended!"
                date="21st October, 2023"
              />
              <ReviewCard
                name="The_Designer_Ama"
                company="Chroma Magic, Rainbow Retreat, Colorful Captures"
                review="ColorSplash Studios is a creative haven! The vibrant ambiance and passionate staff make it a perfect spot for artists. I booked a Colorful Captures session for my birthday, and the photographs were stunning. The studio's professional approach and welcoming atmosphere made the experience delightful. Highly recommended!"
                date="21st October, 2023"
              />
              <ReviewCard
                name="The_Designer_Ama"
                company="Chroma Magic, Rainbow Retreat, Colorful Captures"
                review="ColorSplash Studios is a creative haven! The vibrant ambiance and passionate staff make it a perfect spot for artists. I booked a Colorful Captures session for my birthday, and the photographs were stunning. The studio's professional approach and welcoming atmosphere made the experience delightful. Highly recommended!"
                date="21st October, 2023"
              />
            </Flex>
          </Box>
        </Stack>
      </Box>
      {/* </Wrapper> */}
    </Box>
  );
};

const FourthSection = () => {
  return (
    <Box py="8">
      <Wrapper>
        <Box>
          <Flex alignItems="center" justifyContent="space-between">
            <Box w="40%">
              <Image src="" alt="" />
            </Box>
            <Box w="55%">
              <Stack spacing={5}>
                <Heading>Studio Gallery</Heading>
                <CustomText text="Creativity finds its truest expression in vivid hues and captivating compositions." />

                <CustomText text="Explore a curated collection of artworks, photographs, and creations that have come to life within the vibrant walls of ColorSplash Studios." />

                <CustomText text="Each piece tells a unique story, capturing moments of inspiration, passion, and boundless imagination." />

                <IconButtonComponent
                  bg="#1570FA"
                  color="white"
                  text="Book a Service"
                  icon={IoChevronForwardCircleOutline}
                  width="208px"
                  flip
                />
              </Stack>
            </Box>
          </Flex>
        </Box>
      </Wrapper>
    </Box>
  );
};

const FifthSection = () => {
  const imageUrl = '/assets/other-studios.png';
  const studios = [
    {
      id: 1,
      image: imageUrl,
    },
    {
      id: 2,
      image: imageUrl,
    },
    {
      id: 3,
      image: imageUrl,
    },
  ];
  return (
    <Box bg="#FCF8FB" py="8">
      <Wrapper>
        <Stack spacing={10}>
          <Box position="relative" p="5">
            <Heading
              fontSize={24}
              fontWeight={900}
              position="absolute"
              zIndex="2"
            >
              Studios Offering Similar Services
            </Heading>
            <Image
              src="/assets/star-line.svg"
              alt="star image"
              width={60}
              height={60}
              style={{ position: 'absolute', top: '-10px', left: '-10px' }}
            />
          </Box>
          <Box>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              flexWrap="wrap"
            >
              {studios.map((item) => (
                <Image
                  src={item.image}
                  key={item.id}
                  alt="other studios"
                  width={390}
                  height={340}
                  style={{ borderRadius: '40px', border: '4px solid #1570FA' }}
                />
              ))}
            </Flex>
          </Box>
        </Stack>
      </Wrapper>
    </Box>
  );
};

const index = () => {
  return (
    <Box as="section">
      <Stack spacing={0}>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
      </Stack>
    </Box>
  );
};

export default index;
