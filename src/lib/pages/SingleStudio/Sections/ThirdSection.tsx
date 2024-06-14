import {
  Box,
  Flex,
  Heading,
  Stack,
  Icon,
  Image,
  useMediaQuery,
} from '@chakra-ui/react';
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from 'react-icons/io5';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ReviewCard from '~/lib/components/ReviewCard';
import 'swiper/css';
import 'swiper/css/pagination';

const ThirdSection = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <Box as="section" bg="#D6E7FF" py="14" w="100%" position="relative">
      {/* <Wrapper> */}
      <Box position="absolute" top="30px" left="0px">
        <Image
          src="/assets/review-bg2.png"
          alt="illustration image"
          width="38px"
          height="32px"
          style={{ position: 'absolute', right: '-30px' }}
        />
        <Image
          src="/assets/review-bg1.png"
          alt="illustration-image"
          width="91px"
          height="100px"
        />
      </Box>
      <Box w={['90%', '85%']} mx="auto">
        <Stack spacing={14}>
          <Box>
            <Flex alignItems="center" justifyContent="space-between">
              <Box>
                <Heading fontSize={24} fontWeight={900}>
                  The{' '}
                  <Box as="span" textDecoration="underline" color="#1570FA">
                    Reviews
                  </Box>
                </Heading>
              </Box>
              <Box>
                <Flex gap={3} alignItems="center">
                  <Icon
                    as={IoChevronBackCircleOutline}
                    fontSize={30}
                    color="white"
                  />
                  <Icon
                    as={IoChevronForwardCircleOutline}
                    fontSize={30}
                    color="#1570FA"
                  />
                </Flex>
              </Box>
            </Flex>
          </Box>

          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            slidesPerView={isMobile ? 1 : 2}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            style={{ height: '100%', width: '100%', paddingBottom: '50px' }}
          >
            <SwiperSlide>
              <ReviewCard
                name="The_Designer_Ama"
                company="Chroma Magic, Rainbow Retreat, Colorful Captures"
                review="ColorSplash Studios is a creative haven! The vibrant ambiance and passionate staff make it a perfect spot for artists. I booked a Colorful Captures session for my birthday, and the photographs were stunning. The studio's professional approach and welcoming atmosphere made the experience delightful. Highly recommended!"
                date="21st October, 2023"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard
                name="The_Designer_Ama"
                company="Chroma Magic, Rainbow Retreat, Colorful Captures"
                review="ColorSplash Studios is a creative haven! The vibrant ambiance and passionate staff make it a perfect spot for artists. I booked a Colorful Captures session for my birthday, and the photographs were stunning. The studio's professional approach and welcoming atmosphere made the experience delightful. Highly recommended!"
                date="21st October, 2023"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard
                name="The_Designer_Ama"
                company="Chroma Magic, Rainbow Retreat, Colorful Captures"
                review="ColorSplash Studios is a creative haven! The vibrant ambiance and passionate staff make it a perfect spot for artists. I booked a Colorful Captures session for my birthday, and the photographs were stunning. The studio's professional approach and welcoming atmosphere made the experience delightful. Highly recommended!"
                date="21st October, 2023"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard
                name="The_Designer_Ama"
                company="Chroma Magic, Rainbow Retreat, Colorful Captures"
                review="ColorSplash Studios is a creative haven! The vibrant ambiance and passionate staff make it a perfect spot for artists. I booked a Colorful Captures session for my birthday, and the photographs were stunning. The studio's professional approach and welcoming atmosphere made the experience delightful. Highly recommended!"
                date="21st October, 2023"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard
                name="The_Designer_Ama"
                company="Chroma Magic, Rainbow Retreat, Colorful Captures"
                review="ColorSplash Studios is a creative haven! The vibrant ambiance and passionate staff make it a perfect spot for artists. I booked a Colorful Captures session for my birthday, and the photographs were stunning. The studio's professional approach and welcoming atmosphere made the experience delightful. Highly recommended!"
                date="21st October, 2023"
              />
            </SwiperSlide>
          </Swiper>
        </Stack>
      </Box>
      {/* </Wrapper> */}
    </Box>
  );
};

export default ThirdSection;
