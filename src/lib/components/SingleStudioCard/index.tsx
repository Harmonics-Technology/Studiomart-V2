'use client';

import { Box, Text, Image, Heading, Flex, Stack } from '@chakra-ui/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import FavouriteIcon from '../Icons/FavouriteIcon';
import { SingleStudioCardProps } from '~/lib/utilities/Context/schemas';
import 'swiper/css';
import 'swiper/css/pagination';

const Index = ({
  studioName,
  address,
  images,
  services,
  isLoggedIn,
}: SingleStudioCardProps) => {
  return (
    <Box as="section" w={['166px', '400px']} h="auto">
      <Box
        w="100%"
        mb="16px"
        h={['150px', '340px']}
        position="relative"
        overflow="hidden"
        border="4px solid"
        borderColor="brand.100"
        borderRadius="40px"
      >
        {isLoggedIn && (
          <Box position="absolute" top="24px" right="24px" zIndex="2">
            <FavouriteIcon />
          </Box>
        )}
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          style={{ height: '100%', width: '100%' }}
        >
          {images?.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  src={image}
                  alt="Studio"
                  w="100%"
                  h="100%"
                  borderRadius="25px"
                  objectFit="cover"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
      <Box>
        <Flex
          alignItems="flex-start"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Box>
            <Stack spacing="10px">
              <Heading fontSize={[16, 22]} fontWeight={700}>
                {studioName}
              </Heading>
              <Box display={['block', 'none']}>
                <Flex alignItems="center" gap="10px" flexWrap="wrap">
                  {services?.map((service) => (
                    <Text
                      py="4px"
                      px="12px"
                      fontSize={[12, 14]}
                      borderRadius="60px"
                      border="1px solid #6DD3CE"
                    >
                      {service}
                    </Text>
                  ))}
                </Flex>
              </Box>
              <Text color="brand.600" fontSize={[14, 16]}>
                {address}
              </Text>
            </Stack>
          </Box>
          <Box display={['none', 'block']}>
            <Flex alignItems="center" gap="10px" flexWrap="wrap">
              {services?.map((service) => (
                <Text
                  py="4px"
                  px="12px"
                  fontSize={14}
                  borderRadius="60px"
                  border="1px solid #6DD3CE"
                >
                  {service}
                </Text>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
