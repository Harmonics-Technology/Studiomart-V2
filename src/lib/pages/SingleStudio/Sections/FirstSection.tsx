import { Box, Flex, Heading, Stack, Text, Image } from '@chakra-ui/react';
import { IoChevronBackCircleOutline } from 'react-icons/io5';

import { IconButtonLinkComponent } from '~/lib/components/Button/Button';
import CustomText from '~/lib/components/Text';
import Wrapper from '~/lib/components/Wrapper';

const FirstSection = () => {
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
                <Box mb="5">
                  <IconButtonLinkComponent
                    text="Back"
                    flip
                    icon={IoChevronBackCircleOutline}
                  />
                </Box>
                <Image
                  src="/assets/glasses-lady.png"
                  alt="lady on glasses"
                  width="100%"
                  height="auto"
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
                    ColorSplash Studios
                  </Heading>
                </Box>
                <Box px={[3, '8']} mb="6">
                  <Stack spacing={5}>
                    <CustomText text=" Our vibrant space is more than a studio; it's your artistic playground. Equipped with the best tools and embraced by a calming atmosphere, we're the ideal spot for artists, photographers, and creators." />
                    <CustomText text="Inspiration is everywhere at ColorSplash Studios. Whether you're capturing moments or exploring innovative ideas, our studio is your perfect companion." />
                    <CustomText text="Ready to add a splash of color? Book our services!" />
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
