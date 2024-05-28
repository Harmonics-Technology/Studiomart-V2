'use client';

import {
  Box,
  Heading,
  Image,
  Text,
  Flex,
  Icon,
  Button,
} from '@chakra-ui/react';

import { IconButtonComponent } from '~/lib/components/Button/Button';
import { YellowLocationIcon } from '~/lib/components/Icons/LocationIcon';
import PlaystoreIcon from '~/lib/components/Icons/PlaystoreIcon';

const Hero = () => {
  return (
    <Box as="section" px="8" py="16">
      <Box mb="60px">
        <Box textAlign="center" position="relative" maxW="700px" mx="auto">
          <Heading
            mt="5"
            mb="2"
            fontSize={50}
            fontWeight={900}
            color="brand.400"
            lineHeight="70px"
          >
            Discover and Book Creative Studios around Yabatech
          </Heading>
          <Text w="80%" mx="auto" color="brand.400" fontWeight={400}>
            Your ultimate destination for discovering, booking, and unlocking
            the full potential of every studio adventure
          </Text>
          <Image
            src="/assets/yellow-star.png"
            width="76px"
            height="76px"
            alt="star like image"
            position="absolute"
            top="-40px"
            left="-50px"
          />
        </Box>
      </Box>

      <Box>
        <Flex alignItems="center" justifyContent="center" gap="24px">
          <IconButtonComponent
            text="Download on Google Play"
            width="268px"
            color="brand.700"
            bg="scheme.200"
            icon={PlaystoreIcon}
            flip={false}
          />
          <Button
            bg="scheme.100"
            color="scheme.200"
            px="16px"
            py="23px"
            borderRadius="8px"
            fontWeight="normal"
            border="1px solid"
            _hover={{ bg: 'scheme.100' }}
            width="247px"
          >
            <Flex alignItems="center" gap={2} flexDir="row">
              <Icon as={YellowLocationIcon} fontSize={20} />
              <Text>Find Services near you</Text>
            </Flex>
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;
