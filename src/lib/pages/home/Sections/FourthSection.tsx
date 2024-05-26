import {
  Box,
  Heading,
  Flex,
  Stack,
  Text,
  VStack,
  Image,
  useMediaQuery,
} from '@chakra-ui/react';
import { IoChevronForwardCircleOutline } from 'react-icons/io5';

import {
  IconButtonComponent,
  IconButtonLinkComponent,
} from '~/lib/components/Button/Button';
import Wrapper from '~/lib/components/Wrapper';

const FourthSection = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <Box bg="#FCF8FB" py="12">
      <Wrapper>
        <Flex
          justifyContent="space-between"
          alignItems="flex-start"
          flexWrap="wrap"
        >
          <Box w={['100%', '48%']}>
            <VStack spacing={8} w="100%">
              <Heading fontSize={[30, 40]} fontWeight={[900, 700]}>
                Studio of the Week
              </Heading>
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
                      borderRadius="40px"
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
                        borderRadius="40px"
                        alt="a lady and flower"
                      />
                      <Image
                        src="/assets/ninth-image.png"
                        width={200}
                        height={150}
                        objectFit="cover"
                        borderRadius="40px"
                        alt="image of kids playing"
                      />
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </VStack>
          </Box>
          <Box w={['100%', '48%']}>
            <Box mb="12" display="flex" justifyContent="flex-end">
              <IconButtonLinkComponent
                flip={false}
                text="Explore all Studios"
                icon={IoChevronForwardCircleOutline}
              />
            </Box>
            <Box>
              <Stack spacing={8}>
                <Heading
                  fontSize={[32, 62]}
                  fontWeight={[900, 700]}
                  color="#1570FA"
                >
                  ColorSplash Studios
                </Heading>
                <Text lineHeight="30px">
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
                  width={isMobile ? '100%' : '200px'}
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
