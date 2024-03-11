import { Box, Heading, Flex, Stack, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { IoChevronForwardCircleOutline } from 'react-icons/io5';

import {
  IconButtonComponent,
  IconButtonLinkComponent,
} from '~/lib/components/Button/Button';
import Wrapper from '~/lib/components/Wrapper';

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
                  bg="brand.100"
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

export default FourthSection;
