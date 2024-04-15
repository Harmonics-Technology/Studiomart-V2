import { Box, Image, Heading, Flex, Text, Stack } from '@chakra-ui/react';

import StarIcon from '~/lib/components/Icons/StarIcon';

const FirstSection = () => {
  return (
    <Box w="100%" mb="45px">
      <Stack spacing="80px">
        <Box>
          <Heading fontSize={40} fontWeight={900}>
            Booking Information
          </Heading>
        </Box>
        <Box>
          <Flex alignItems="center" gap="72px" flexWrap="wrap">
            <Box maxW="521px" h="458px" borderRadius="71px">
              <Image
                src="//assets/booking-info.png"
                alt="studio-image"
                w="100%"
                h="100%"
                objectFit="cover"
                borderRadius="71px"
              />
            </Box>
            <Box maxW="487px">
              <Stack spacing="28px" mb="48px">
                <Box>
                  <Heading fontSize={28} fontWeight={700} mb="16px">
                    Birthday Photoshoot
                  </Heading>
                  <Flex alignItems="center" gap="12px">
                    <Text fontWeight={500}>
                      Lensby Photograpy{' '}
                      <Box as="span" fontSize={12} color="text.800">
                        4.5 Star
                      </Box>
                    </Text>
                    <StarIcon />
                    <Text fontSize={12} color="brand.600">
                      (15 reviews)
                    </Text>
                  </Flex>
                </Box>

                <Box>
                  <Flex alignItems="center" gap="67px" flexWrap="wrap">
                    <Box>
                      <Heading fontSize={18} fontWeight={700} mb="8px">
                        Booking reference
                      </Heading>
                      <Text fontSize={20} color="brand.600">
                        LTMAKSS
                      </Text>
                    </Box>
                    <Box>
                      <Heading fontSize={18} fontWeight={700} mb="8px">
                        Date
                      </Heading>
                      <Text fontSize={20} color="brand.600">
                        29/02/2024
                      </Text>
                    </Box>
                    <Box>
                      <Heading fontSize={18} fontWeight={700} mb="8px">
                        Time
                      </Heading>
                      <Text fontSize={20} color="brand.600">
                        10:05 AM
                      </Text>
                    </Box>
                  </Flex>
                </Box>

                <Box>
                  <Flex alignItems="center" gap="67px" flexWrap="wrap">
                    <Box>
                      <Heading fontSize={18} fontWeight={700} mb="8px">
                        Type of Service
                      </Heading>
                      <Text fontSize={20} color="brand.600">
                        Birthday photoshoot
                      </Text>
                    </Box>
                    <Box>
                      <Heading fontSize={18} fontWeight={700} mb="8px">
                        Service Charge
                      </Heading>
                      <Text fontSize={20} color="brand.600">
                        N15,000
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Stack>

              <Box
                w="100%"
                py="17px"
                px="18px"
                bg="text.900"
                border="1px solid"
                borderColor="status.500"
                borderRadius="12px"
              >
                <Heading fontSize={18} fontWeight={700} mb="4px">
                  Pending Confirmation
                </Heading>
                <Text color="status.600" fontSize={15}>
                  Your booking with reference LTMAKSS is pending confirmation
                </Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default FirstSection;
