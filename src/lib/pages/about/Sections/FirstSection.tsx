import {
  Box,
  Stack,
  Heading,
  Text,
  Flex,
  Image,
  useMediaQuery,
} from '@chakra-ui/react';

import ButtonComponent, {
  OutlineButtonComponent,
} from '~/lib/components/Button/Button';
import SocialLinks from '~/lib/components/SocialLinks';
import Wrapper from '~/lib/components/Wrapper';

const MobileView = () => {
  return (
    <Box w="90%" mx="auto" py="5">
      <Stack spacing="28px">
        <Flex alignItems="center" justifyContent="space-between">
          <Box w="75%">
            <Image
              src="/assets/face.png"
              width="100%"
              objectFit="cover"
              alt="face image"
            />
          </Box>
          <Box w="10%">
            <SocialLinks direction="column" spacing={6} />
          </Box>
        </Flex>
        <Box w="100%">
          <Stack spacing={6}>
            <Heading color="#0C090A" fontWeight={900} fontSize={32}>
              {' '}
              About StudioMart{' '}
            </Heading>
            <Text lineHeight="26px">
              Hey there, creative minds! Ever felt like your awesome studio
              isn't getting the attention it truly deserves? Well, worry no more
              because StudioMart is here to light up your creative space!
            </Text>
            <Text lineHeight="26px">
              Imagine a place where studio owners like you can easily showcase
              your dance floors, capture your photography magic, or let your
              music vibe flow – that's exactly what StudioMart is all about!
              We've crafted a super easy-peasy platform that lets you flaunt
              your studio's uniqueness and connect with folks who can't wait to
              dive into your creative world.
            </Text>
            <Text lineHeight="26px">
              At StudioMart, we&apos;re not just a platform; we're your partners
              in success. Our mission? To empower studio owners like you, no
              matter if you're into photography, dance, music, or any other
              creative wonderland. We're all about making your studio journey as
              smooth as your favorite melody. So, why wait? Be a part of
              StudioMart today!
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
                  bg="brand.100"
                  width="174px"
                  onClick={() => {}}
                />
              </Flex>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

const DesktopView = () => {
  return (
    <Box>
      <Wrapper>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          w="100%"
        >
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
                    bg="brand.100"
                    width="174px"
                    onClick={() => {}}
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

const FirstSection = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return <Box as="section">{isMobile ? <MobileView /> : <DesktopView />}</Box>;
};

export default FirstSection;
