'use client';

import {
  Box,
  Heading,
  Flex,
  Stack,
  Text,
  Image,
  Icon,
  Button,
} from '@chakra-ui/react';

import ButtonComponent from '~/lib/components/Button/Button';
import PlaystoreIcon from '~/lib/components/Icons/PlaystoreIcon';
import Wrapper from '~/lib/components/Wrapper';

const HowItWorks = () => {
  return (
    <Box py="8">
      <Wrapper>
        <Flex justifyContent="space-between" alignItems="center">
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
            <Box>
              <Stack spacing={7}>
                <Heading>How StudioMart Works</Heading>
                <Text>
                  <b>Create Your Account.</b> Sign up on StudioMart in a breeze.
                  It’s quick, easy, and absolutely free.
                </Text>
                <Text>
                  <b> Explore Vibrant Studios.</b> Explore a myriad of studios,
                  from photography gems to music havens. Our intuitive search
                  and filters make discovering the ideal space a delightful
                  journey.
                </Text>
                <Text>
                  <b>Book Your Dream Studio.</b> Found the studio for you?
                  Booking is just a click away! Choose your date, time, and any
                  additional services you need. Secure your spot hassle-free.
                </Text>

                <Box>
                  <Flex alignItems="center" gap="20px">
                    <ButtonComponent
                      text="Get Started"
                      bg="scheme.100"
                      color="white"
                      width="150px"
                      onClick={() => {}}
                    />
                    <Button
                      bg="brand.400"
                      color="scheme.100"
                      px="16px"
                      py="23px"
                      borderRadius="8px"
                      fontWeight="normal"
                      border="1px solid"
                      _hover={{ bg: 'brand.400' }}
                      width="267px"
                      borderColor="scheme.100"
                    >
                      <Flex alignItems="center" gap={2} flexDir="row">
                        <Icon as={PlaystoreIcon} fontSize={20} />
                        <Text>Download on Google Play</Text>
                      </Flex>
                    </Button>
                  </Flex>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default HowItWorks;
