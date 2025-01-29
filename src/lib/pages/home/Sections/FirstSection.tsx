'use client';

import {
  Box,
  Heading,
  Flex,
  Stack,
  Image,
  useMediaQuery,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { RiRestartFill } from 'react-icons/ri';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IconButtonComponent } from '~/lib/components/Button/Button';
import HomeFeatureCard from '~/lib/components/HomeFeatureCard';
import SocialLinks from '~/lib/components/SocialLinks';
import Wrapper from '~/lib/components/Wrapper';
// eslint-disable-next-line import/order
import type { FlipImageProps } from '~/lib/utilities/Context/schemas';

import 'swiper/css';
import 'swiper/css/pagination';

import { useLoaderProgress } from '~/lib/utilities/Hooks/progress-bar';

const FlipImage: React.FC<FlipImageProps> = ({
  image,
  heading,
  flip,
  align,
}) => {
  return (
    <Box mb="7">
      <Flex
        flexDirection={flip ? 'row-reverse' : 'row'}
        alignItems={align}
        justifyContent="space-between"
      >
        <Image src={image} alt="first image" width={300} height={100} />
        <Heading fontSize={64} fontWeight={900}>
          {heading}
        </Heading>
      </Flex>
    </Box>
  );
};

const MobileView = () => {
  const router = useRouter();
  const showLoaderProgress = useLoaderProgress();
  return (
    <Box as="section" p="3">
      <Stack spacing="48px">
        <Box>
          <Stack spacing="12px">
            <Box>
              <Flex alignItems="center" gap="10px">
                <Box w="25%">
                  <Image
                    src="/assets/mobile-first-image.png"
                    w="100%"
                    h="100%"
                    objectFit="cover"
                  />
                </Box>
                <Box w="75%">
                  <Heading fontWeight={600} fontSize={28}>
                    Discover and Book
                  </Heading>
                </Box>
              </Flex>
            </Box>

            <Box>
              <Flex alignItems="center" gap="10px">
                <Box w="70%">
                  <Heading fontWeight={600} fontSize={30}>
                    Creative Studios
                  </Heading>
                </Box>
                <Box w="30%">
                  <Image
                    src="/assets/mobile-first-image2.png"
                    w="100%"
                    h="100%"
                    objectFit="cover"
                  />
                </Box>
              </Flex>
            </Box>
          </Stack>
        </Box>
        <Box position="relative">
          <Image
            src="/assets/studio-image2.png"
            borderBottom="7px solid #D9D9D9"
            w="100%"
            h="100%"
            objectFit="cover"
            borderRadius="80px"
          />
          <Image
            src="/assets/thick-illustration.png"
            w="64px"
            h="auto"
            objectFit="cover"
            position="absolute"
            left="20px"
            bottom="-20px"
          />
        </Box>
        <Box>
          <Flex alignItems="flex-start" justifyContent="space-between" px="5">
            <Box w="85%">
              <Stack spacing={4}>
                <Box w="90%">
                  <Swiper
                    pagination={{ clickable: true }}
                    modules={[Autoplay]}
                    className="mySwiper"
                    slidesPerView={1}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    style={{ height: '100%', width: '100%' }}
                  >
                    <SwiperSlide>
                      <HomeFeatureCard
                        currentIndex={1}
                        description="Your ultimate destination for discovering, booking, and unlocking the full potential of every studio adventure"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <HomeFeatureCard
                        currentIndex={2}
                        description="Your ultimate destination for discovering, booking, and unlocking the full potential of every studio adventure"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <HomeFeatureCard
                        currentIndex={3}
                        description="Your ultimate destination for discovering, booking, and unlocking the full potential of every studio adventure"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <HomeFeatureCard
                        currentIndex={4}
                        description="Your ultimate destination for discovering, booking, and unlocking the full potential of every studio adventure"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <HomeFeatureCard
                        currentIndex={5}
                        description="Your ultimate destination for discovering, booking, and unlocking the full potential of every studio adventure"
                      />
                    </SwiperSlide>
                  </Swiper>
                </Box>
                <IconButtonComponent
                  flip={false}
                  width="fit-content"
                  text="Get Started"
                  bg="brand.100"
                  color="white"
                  icon={RiRestartFill}
                  onClick={() =>
                    showLoaderProgress(() => router.push('/register'))
                  }
                />
              </Stack>
            </Box>
            <SocialLinks direction="column" spacing={4} />
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

const DesktopView = () => {
  const router = useRouter();
  const showLoaderProgress = useLoaderProgress();
  return (
    <Box as="section">
      <Wrapper>
        <Flex alignItems="center" justifyContent="space-between" w="100%">
          <Box w="93%">
            <Stack direction="column" spacing={6} w="100%">
              {/* first section */}
              <Box>
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  w="100%"
                >
                  <Box w="80%">
                    <Box w="100%">
                      <FlipImage
                        image="/assets/first-image.png"
                        heading="Discover and Book"
                        flip={false}
                        align="flex-end"
                      />
                    </Box>
                    <Box w="93%" mx="auto">
                      <FlipImage
                        image="/assets/face-image.png"
                        heading="Creative Studios"
                        flip
                        align="center"
                      />
                    </Box>
                  </Box>
                  <Box w="auto">
                    <Image
                      src="/assets/studio.png"
                      alt="Studio Image"
                      width={200}
                      height={218}
                    />
                  </Box>
                </Flex>
              </Box>

              {/* second section */}
              <Box>
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  w="100%"
                >
                  <Box position="relative" w="70%">
                    <Image
                      src="/assets/studio-image2.png"
                      objectFit="contain"
                      width={857}
                      height={275}
                      alt="Studio Image"
                    />
                    <Image
                      src="/assets/illustration.png"
                      width={161}
                      height={70}
                      alt="Illustration image"
                      style={{
                        position: 'absolute',
                        bottom: '-40px',
                        left: '-30px',
                      }}
                    />
                  </Box>
                  <Box w="25%">
                    <Stack spacing={5}>
                      <Box>
                        <Swiper
                          pagination={{ clickable: true }}
                          modules={[Autoplay]}
                          className="mySwiper"
                          slidesPerView={1}
                          autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                          style={{ height: '100%', width: '100%' }}
                        >
                          <SwiperSlide>
                            <HomeFeatureCard
                              currentIndex={1}
                              description="Your ultimate destination for discovering, booking, and unlocking the full potential of every studio adventure"
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <HomeFeatureCard
                              currentIndex={2}
                              description="Your ultimate destination for discovering, booking, and unlocking the full potential of every studio adventure"
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <HomeFeatureCard
                              currentIndex={3}
                              description="Your ultimate destination for discovering, booking, and unlocking the full potential of every studio adventure"
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <HomeFeatureCard
                              currentIndex={4}
                              description="Your ultimate destination for discovering, booking, and unlocking the full potential of every studio adventure"
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <HomeFeatureCard
                              currentIndex={5}
                              description="Your ultimate destination for discovering, booking, and unlocking the full potential of every studio adventure"
                            />
                          </SwiperSlide>
                        </Swiper>
                      </Box>
                      <IconButtonComponent
                        flip={false}
                        width="fit-content"
                        text="Get Started"
                        bg="brand.100"
                        color="white"
                        icon={RiRestartFill}
                        onClick={() =>
                          showLoaderProgress(() => router.push('/register'))
                        }
                      />
                    </Stack>
                  </Box>
                </Flex>
              </Box>
            </Stack>
          </Box>
          {/* Social links */}
          <Box>
            <SocialLinks direction="column" spacing={6} />
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  );
};

const FirstSection = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  return <Box as="section">{isMobile ? <MobileView /> : <DesktopView />}</Box>;
};

export default FirstSection;
