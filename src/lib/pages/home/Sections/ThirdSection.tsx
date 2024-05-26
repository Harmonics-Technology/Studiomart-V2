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
import { BiLogoPlayStore } from 'react-icons/bi';

import ButtonComponent, {
  IconButtonComponent,
} from '~/lib/components/Button/Button';
import Wrapper from '~/lib/components/Wrapper';

const ThirdSection = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <Box>
      <Wrapper>
        <Flex
          justifyContent="space-between"
          alignItems="flex-end"
          flexWrap="wrap-reverse"
        >
          <Box w={['100%', '100%', '40%']}>
            <Image
              src="/assets/fifth-image.png"
              width={['100%', 466]}
              height={['100%', 504]}
              alt="image"
              objectFit="cover"
            />
          </Box>
          <Box w={['100%', '100%', '57%']} mb="7">
            <VStack spacing={5}>
              <Image
                src="/assets/sixth-image.png"
                height="100%"
                width={['100%', 732]}
                alt="image"
                objectFit="cover"
                borderRadius="80px"
              />
              <Box p={['2', '8']}>
                <Stack spacing={7}>
                  <Heading fontSize={[25, 40]} fontWeight={[900, 700]}>
                    How StudioMart Works
                  </Heading>
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
                    <Flex alignItems="center" gap="20px" flexWrap="wrap">
                      <ButtonComponent
                        text="Get Started"
                        bg="brand.100"
                        color="white"
                        width={isMobile ? '100%' : '150px'}
                        onClick={() => {}}
                      />
                      <IconButtonComponent
                        flip={false}
                        width={isMobile ? '100%' : '268px'}
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

export default ThirdSection;
