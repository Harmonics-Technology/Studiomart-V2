'use client';

import { Box, Flex, Heading, Stack, Text, Image } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { IoChevronBackCircleOutline } from 'react-icons/io5';

import { IconButtonLinkComponent } from '~/lib/components/Button/Button';
import CustomText from '~/lib/components/Text';
import Wrapper from '~/lib/components/Wrapper';
import { StudioView } from '~/services';

const FirstSection = ({ data }: { data: StudioView }) => {
  const router = useRouter();
  return (
    <Box>
      <Wrapper>
        <Flex w="100%">
          <Box w="100%">
            <Stack spacing={3}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
              >
                <Box mb="5" onClick={() => router.back()} cursor="pointer">
                  <IconButtonLinkComponent
                    text="Back"
                    flip
                    icon={IoChevronBackCircleOutline}
                  />
                </Box>
                <Image
                  src={data?.coverPhoto as string}
                  alt="lady on glasses"
                  width="100%"
                  height="300px"
                  objectFit="cover"
                  borderRadius="100px"
                />
              </Box>
              <Box>
                <Box position="relative" p="9">
                  <Image
                    src="/assets/star-like.svg"
                    alt="star-like image"
                    width={['45px', '52px']}
                    height={['45px', '54px']}
                    style={{ position: 'absolute', top: 10, left: 0 }}
                  />
                  <Heading fontSize={[26, 40]} color="#1570FA" fontWeight={900}>
                    {data?.name}
                  </Heading>
                </Box>
                <Box px={[3, '8']} mb="6">
                  <Stack spacing={5}>
                    <CustomText text={data?.description} />
                  </Stack>
                </Box>
                <Box px={[3, '8']}>
                  <Flex
                    justifyContent="space-between"
                    flexWrap={['wrap', 'nowrap']}
                  >
                    <Box w="160px">
                      <Stack spacing={2}>
                        <Text color="#0C090A" fontSize={12}>
                          Over 100 clients
                        </Text>
                        <Image
                          src="/assets/people.png"
                          alt="People avatars"
                          width="160px"
                          height="40px"
                        />
                      </Stack>
                    </Box>
                    {/* <Box w="317px">
                      <Stack spacing={4}>
                        <QuoteIcon color="#2D2327" width="40" height="30" />
                        <Text color="#267E79">
                          Colors speak louder than words, painting life's canvas
                          with emotions.
                        </Text>
                        <Heading
                          fontSize={20}
                          color="#0C090A"
                          textAlign="right"
                        >
                          The_Designer
                        </Heading>
                      </Stack>
                    </Box> */}
                  </Flex>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default FirstSection;
