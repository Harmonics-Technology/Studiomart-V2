'use client';

import {
  Box,
  Heading,
  Flex,
  Stack,
  Text,
  VStack,
  Icon,
  Grid,
} from '@chakra-ui/react';
import Image from 'next/image';
import { BiLogoPlayStore } from 'react-icons/bi';
import {
  IoChevronForwardCircleOutline,
  IoChevronBackCircleOutline,
} from 'react-icons/io5';

import SocialLinks from '../../components/SocialLinks';
import Wrapper from '../../components/Wrapper';
import ButtonComponent, {
  IconButtonComponent,
  IconButtonLinkComponent,
} from '~/lib/components/Button/Button';
import QuoteIcon from '~/lib/components/Icons/Quote';
import { StudioCard } from '~/lib/components/StudioCard';

interface FlipImageProps {
  image: string;
  heading: string;
  flip: boolean;
  align: string;
}

const FlipImage: React.FC<FlipImageProps> = ({
  image,
  heading,
  flip,
  align,
}) => {
  return (
    <Box mb="7">
      <Flex
        flexDirection={flip ? 'row-reverse' : 'row'}
        alignItems={align}
        justifyContent="space-between"
      >
        <Image src={image} alt="first image" width={300} height={100} />
        <Heading fontSize={64} fontWeight={900}>
          {heading}
        </Heading>
      </Flex>
    </Box>
  );
};

const FirstSection = () => {
  return (
    <Box as="section">
      <Wrapper>
        <Flex alignItems="center" justifyContent="space-between" w="100%">
          <Box w="93%">
            <Grid templateColumns={['1fr', 'repeat(3, 1fr)']} gap="3.25rem">
              <StudioCard img="assets/face.png" rating="4.1" />
            </Grid>
            <Stack direction="column" spacing={6} w="100%">
              {/* first section */}
              <Box>
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  w="100%"
                >
                  <Box w="80%">
                    <Box w="100%">
                      <FlipImage
                        image="/assets/first-image.png"
                        heading="Discover and Book"
                        flip={false}
                        align="flex-end"
                      />
                    </Box>
                    <Box w="93%" mx="auto">
                      <FlipImage
                        image="/assets/face-image.png"
                        heading="Creative Studios"
                        flip
                        align="center"
                      />
                    </Box>
                  </Box>
                  <Box w="auto">
                    <Image
                      src="/assets/studio.png"
                      alt="Studio Image"
                      width={200}
                      height={218}
                    />
                  </Box>
                </Flex>
              </Box>

              {/* second section */}
              <Box>
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  w="100%"
                >
                  <Box position="relative" w="70%">
                    <Image
                      src="/assets/studio-image2.png"
                      objectFit="contain"
                      width={857}
                      height={275}
                      alt="Studio Image"
                    />
                    <Image
                      src="/assets/illustration.png"
                      width={161}
                      height={70}
                      alt="Illustration image"
                      style={{
                        position: 'absolute',
                        bottom: '-40px',
                        left: '-30px',
                      }}
                    />
                  </Box>
                  <Box w="25%">
                    <Stack spacing={5}>
                      <Box>
                        <Flex alignItems="center" gap="10px">
                          <Heading fontSize={24}>01</Heading>
                          <Box w="94px" h="1.5px" bg="#0C090A" />
                          <Heading fontSize={24}>05</Heading>
                        </Flex>
                      </Box>
                      <Text lineHeight="26px">
                        Your ultimate destination for discovering, booking, and
                        unlocking the full potential of every studio adventure
                      </Text>
                      <IconButtonComponent
                        flip={false}
                        width="268px"
                        text="Download on Google Play"
                        bg="#1570FA"
                        color="white"
                        icon={BiLogoPlayStore}
                      />
                    </Stack>
                  </Box>
                </Flex>
              </Box>
            </Stack>
          </Box>
          {/* Social links */}
          <Box>
            <SocialLinks direction="column" spacing={6} />
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  );
};

const SecondSection = () => {
  return (
    <Box bg="#D6E7FF" w="full" py="5">
      <Wrapper>
        <Flex justifyContent="space-between" alignItems="center">
          <Box maxW="60%" color="#2D2327">
            <Stack spacing={5}>
              <Image
                src="/assets/star.svg"
                width={40}
                height={40}
                alt="Star image"
              />
              <Heading fontSize={40}>Why StudioMart?</Heading>
              <Text lineHeight="26px">
                StudioMart offers seamless access to a diverse range of studios
                tailored to your creative pursuits. Our user-friendly interface
                simplifies your search, ensuring you find the perfect space
                effortlessly. Direct communication with studio owners is at your
                fingertips, fostering collaborations built on clarity and
                understanding. With our dedicated customer support, any query or
                concern is swiftly addressed, enhancing your experience. Plus,
                our secure payment system guarantees hassle-free transactions,
                allowing you to focus entirely on your creative endeavors.
              </Text>
              <Text>Choose StudioMart – where artistry meets convenience.</Text>
              <IconButtonLinkComponent
                text="Learn more"
                flip={false}
                icon={IoChevronForwardCircleOutline}
              />
            </Stack>
          </Box>
          <Box w="35%" h="280px">
            <Flex justifyContent="space-between">
              <Box>
                <Image
                  width={200}
                  height={280}
                  src="/assets/section-image2.png"
                  alt="single image"
                />
              </Box>
              <Box h="100%">
                <VStack justifyContent="space-between" spacing={6}>
                  <Image
                    src="/assets/people.png"
                    height={40}
                    width={160}
                    alt="People's avatar image"
                  />
                  <Image
                    src="/assets/section-image3.png"
                    width={200}
                    height={200}
                    alt="single image"
                  />
                </VStack>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  );
};

const ThirdSection = () => {
  return (
    <Box>
      <Wrapper>
        <Flex justifyContent="space-between" alignItems="flex-end">
          <Box w="40%">
            <Image
              src="/assets/fifth-image.png"
              width={466}
              height={504}
              alt="image"
              objectFit="cover"
            />
          </Box>
          <Box w="57%">
            <VStack spacing={5}>
              <Image
                src="/assets/sixth-image.png"
                height={200}
                width={732}
                alt="image"
              />
              <Box p="8">
                <Stack spacing={7}>
                  <Heading>How StudioMart Works</Heading>
                  <Text>
                    <b>Create Your Account.</b> Sign up on StudioMart in a
                    breeze. It’s quick, easy, and absolutely free.
                  </Text>
                  <Text>
                    <b> Explore Vibrant Studios.</b> Explore a myriad of
                    studios, from photography gems to music havens. Our
                    intuitive search and filters make discovering the ideal
                    space a delightful journey.
                  </Text>
                  <Text>
                    <b>Book Your Dream Studio.</b> Found the studio for you?
                    Booking is just a click away! Choose your date, time, and
                    any additional services you need. Secure your spot
                    hassle-free.
                  </Text>

                  <Box>
                    <Flex alignItems="center" gap="20px">
                      <ButtonComponent
                        text="Get Started"
                        bg="#1570FA"
                        color="white"
                        width="150px"
                      />
                      <IconButtonComponent
                        flip={false}
                        width="268px"
                        text="Download on Google Play"
                        icon={BiLogoPlayStore}
                        color="#1570FA"
                        bg="white"
                      />
                    </Flex>
                  </Box>
                </Stack>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  );
};

const FourthSection = () => {
  return (
    <Box bg="#FCF8FB" py="12">
      <Wrapper>
        <Flex justifyContent="space-between" alignItems="flex-start">
          <Box w="48%">
            <VStack spacing={8} w="100%">
              <Heading fontSize={40}>Studio of the Week</Heading>
              <Box>
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  gap="20px"
                >
                  <Box>
                    <Image
                      src="/assets/seventh-image.png"
                      width={362}
                      height={400}
                      objectFit="cover"
                      alt="image of a woman"
                    />
                  </Box>
                  <Box h="100%">
                    <Flex
                      flexDir="column"
                      justifyContent="space-between"
                      alignItems="center"
                      gap="20px"
                    >
                      <Image
                        src="/assets/eight-image.png"
                        width={200}
                        height={219}
                        objectFit="cover"
                        alt="a lady and flower"
                      />
                      <Image
                        src="/assets/ninth-image.png"
                        width={200}
                        height={150}
                        objectFit="cover"
                        alt="image of kids playing"
                      />
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </VStack>
          </Box>
          <Box w="48%">
            <Box mb="12" display="flex" justifyContent="flex-end">
              <IconButtonLinkComponent
                flip={false}
                text="Explore all Studios"
                icon={IoChevronForwardCircleOutline}
              />
            </Box>
            <Box>
              <Stack spacing={8}>
                <Heading fontSize={62} color="#1570FA">
                  ColorSplash Studios
                </Heading>
                <Text lineHeight="26px">
                  Introducing ColorSplash Studio, our featured studio of the
                  week! Offering a comprehensive range of photography and video
                  services, ColorSplash is your go-to destination for capturing
                  memorable moments. From stunning portraits to captivating
                  event coverage, their talented team brings creativity and
                  expertise to every project With ColorSplash Studio, your
                  vision comes to life in vibrant colors and cinematic quality.
                  Explore the possibilities and make your next shoot an
                  unforgettable experience!
                </Text>
                <IconButtonComponent
                  bg="#1570FA"
                  text="View Services"
                  icon={IoChevronForwardCircleOutline}
                  color="white"
                  width="200px"
                  flip
                />
              </Stack>
            </Box>
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  );
};

const FifthSection = () => {
  return (
    <Box>
      <Wrapper>
        <Box bg="#D6E7FF" w="100%" borderRadius="40px" p="10">
          <Stack spacing={7}>
            <Heading fontSize={40} fontWeight={900} color="#0C090A">
              Our Partners
            </Heading>
            <QuoteIcon />
            <Text color="#0C090A" lineHeight="26px">
              StudioMart has revolutionized the way we connect with our
              audience. Their user-friendly interface and extensive network have
              significantly expanded our reach, bringing our creative endeavors
              to a wider audience. Their innovative platform and dedicated
              support have truly transformed our creative journey.
            </Text>
            <Text color="#0C090A" lineHeight="26px">
              Partnering with StudioMart has elevated our studio experience to
              new heights. StudioMart is not just a platform; it's a
              game-changer for anyone passionate about exploring creativity.
            </Text>
            <Box>
              <Flex alignItems="center" justifyContent="space-between">
                <Box>
                  <Flex gap={3} alignItems="center">
                    <Image
                      alt="Adelowo Ajibola, CEO HT"
                      src="/assets/ceo.png"
                      width={60}
                      height={60}
                      style={{ borderRadius: '50%' }}
                      objectFit="contain"
                    />
                    <Box>
                      <Heading fontSize={16} mb="1">
                        Adelowo Ajibola
                      </Heading>
                      <Text>Co-Founder, HT.</Text>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <Flex alignItems="center" gap={2}>
                    <Icon
                      as={IoChevronBackCircleOutline}
                      fontSize={25}
                      color="#1570FA"
                    />
                    <Icon
                      as={IoChevronForwardCircleOutline}
                      fontSize={25}
                      color="#1570FA"
                    />
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Stack>
        </Box>
      </Wrapper>
    </Box>
  );
};

export const Home = () => {
  return (
    <Box>
      <Stack direction="column" spacing={10}>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
      </Stack>
    </Box>
  );
};
