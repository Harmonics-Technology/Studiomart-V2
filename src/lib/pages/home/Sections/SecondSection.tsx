import {
  Box,
  Heading,
  Flex,
  Stack,
  Text,
  VStack,
  Image,
} from '@chakra-ui/react';
import { IoChevronForwardCircleOutline } from 'react-icons/io5';

import { IconButtonLinkComponent } from '~/lib/components/Button/Button';
import Wrapper from '~/lib/components/Wrapper';

const SecondSection = () => {
  return (
    <Box bg="#D6E7FF" w="full" py="5">
      <Wrapper>
        <Flex justifyContent="space-between" alignItems="center">
          <Box maxW="60%" color="#2D2327">
            <Stack spacing={5}>
              <Image
                src="/assets/star.svg"
                width="40px"
                height="40px"
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
                  width="200px"
                  height="280px"
                  src="/assets/section-image2.png"
                  alt="single image"
                />
              </Box>
              <Box h="100%">
                <VStack justifyContent="space-between" spacing={6}>
                  <Image
                    src="/assets/people.png"
                    height="40px"
                    width="160px"
                    alt="People's avatar image"
                  />
                  <Image
                    src="/assets/section-image3.png"
                    width="200px"
                    height="200px"
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

export default SecondSection;
