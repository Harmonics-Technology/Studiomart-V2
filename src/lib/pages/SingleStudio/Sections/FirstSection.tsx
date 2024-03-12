import { Box, Flex, Heading, Stack, Text, Image } from '@chakra-ui/react';
import { IoChevronBackCircleOutline } from 'react-icons/io5';

import { IconButtonLinkComponent } from '~/lib/components/Button/Button';
import QuoteIcon from '~/lib/components/Icons/Quote';
import CustomText from '~/lib/components/Text';
import Wrapper from '~/lib/components/Wrapper';

const FirstSection = () => {
  return (
    <Box>
      <Wrapper>
        <Flex alignItems="flex-start" justifyContent="space-between" w="100%">
          <Box w="44%">
            <Stack
              alignItems="flex-start"
              justifyContent="space-between"
              spacing={20}
            >
              <IconButtonLinkComponent
                text="Back"
                flip
                icon={IoChevronBackCircleOutline}
              />
              <Image
                src="assets/studio-girl.png"
                alt="studio girl"
                width={466}
                height={544}
              />
            </Stack>
          </Box>
          <Box w="60%">
            <Stack spacing={3}>
              <Box>
                <Image
                  src="assets/glasses-lady.png"
                  alt="lady on glasses"
                  width={732}
                  height={200}
                />
              </Box>
              <Box>
                <Box position="relative" p="9">
                  <Image
                    src="assets/star-like.svg"
                    alt="star-like image"
                    width="52px"
                    height="54px"
                    style={{ position: 'absolute', top: 0, left: 0 }}
                  />
                  <Heading fontSize={40} color="#1570FA" fontWeight={900}>
                    ColorSplash Studios
                  </Heading>
                </Box>
                <Box px="8" mb="6">
                  <Stack spacing={5}>
                    <CustomText text=" Our vibrant space is more than a studio; it's your artistic playground. Equipped with the best tools and embraced by a calming atmosphere, we're the ideal spot for artists, photographers, and creators." />
                    <CustomText text="Inspiration is everywhere at ColorSplash Studios. Whether you're capturing moments or exploring innovative ideas, our studio is your perfect companion." />
                    <CustomText text="Ready to add a splash of color? Book our services!" />
                  </Stack>
                </Box>
                <Box px="8">
                  <Flex justifyContent="space-between">
                    <Box w="160px">
                      <Stack spacing={2}>
                        <Text color="#0C090A" fontSize={12}>
                          Over 100 clients
                        </Text>
                        <Image
                          src="assets/people.png"
                          alt="People avatars"
                          width="160px"
                          height="40px"
                        />
                      </Stack>
                    </Box>
                    <Box w="317px">
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
                    </Box>
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
