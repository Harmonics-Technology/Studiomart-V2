import { Box, Stack, Icon, Heading, Text, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { IoChevronBackCircleOutline } from 'react-icons/io5';

import StarIcon from '~/lib/components/Icons/StarIcon';
import CustomText from '~/lib/components/Text';
import Wrapper from '~/lib/components/Wrapper';

const FirstSection = () => {
  return (
    <Box mb="10">
      <Wrapper>
        <Box color="#636363" mb="8">
          <Link href="/studios">
            <Flex alignItems="center" gap={1.5}>
              <Icon
                as={IoChevronBackCircleOutline}
                fontSize={25}
                color="#AFAFAF"
              />
              <Text>Photo Studio / Lensboy Photography</Text>
            </Flex>
          </Link>
        </Box>

        <Box>
          <Flex justifyContent="space-between" alignItems="flex-start">
            <Box w="50%">
              <Image
                src="/assets/studio-girl2.png"
                alt="main image of a studio"
                width={600}
                height={700}
                style={{ border: '4px solid #1570FA', borderRadius: '80px' }}
              />
            </Box>
            <Box w="45%">
              <Stack spacing={7}>
                <Box>
                  <Stack spacing={4}>
                    <Heading fontSize={40} fontWeight={600} color="#171717">
                      Birthday Shoot
                    </Heading>
                    <Text color="#1570FA">
                      <Box as="strong" color="#171717">
                        Studio:
                      </Box>{' '}
                      Lensboy Photography | Similar services by Lensboy
                    </Text>
                    <Box>
                      <Flex alignItems="center" gap={2}>
                        <Text>4.5 Star</Text>
                        <StarIcon />
                        <Text>(15 reviews)</Text>
                      </Flex>
                    </Box>
                  </Stack>
                </Box>

                <Box>
                  <Heading fontSize={24} color="#171717" fontWeight={700}>
                    About this service
                  </Heading>
                </Box>

                <Box>
                  <Stack spacing={5}>
                    <CustomText text="Capture the Joy of Your Special Day with a Birthday Photoshoot!" />

                    <CustomText
                      text="At Lensboy Photography
                      , we believe that birthdays are a time of celebration, joy, and beautiful memories. That's why we offer an exclusive service tailored specifically for capturing the magic of your birthday through our professional birthday photoshoots"
                    />

                    <CustomText text="Our skilled team of photographers is dedicated to creating stunning images that will preserve the essence of your special day for years to come. Whether you're celebrating a milestone birthday, a sweet 16, a first birthday, or any other age, we'll ensure that every precious moment is beautifully documented." />

                    <CustomText text="What sets our birthday photoshoot service apart is our commitment to personalization. We understand that each birthday is unique, and we strive to reflect your individuality and style in every photograph. From the moment you step into our studio, we'll work closely with you to understand your vision, preferences, and desired outcomes." />
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Flex>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default FirstSection;
