'use client';

import {
  Box,
  Text,
  Image,
  Heading,
  Flex,
  Stack,
  Button,
} from '@chakra-ui/react';
import { useDummyImage } from 'react-simple-placeholder-image';

import FavouriteIcon, { FavouriteIconFilled } from '../Icons/FavouriteIcon';
import { SingleStudioCardProps } from '~/lib/utilities/Context/schemas';
import 'swiper/css';
import 'swiper/css/pagination';
import { useLoaderProgress } from '~/lib/utilities/Hooks/progress-bar';
import { useLoggedUser } from '~/lib/utilities/Hooks/useLoggedUser';

const Index = ({
  studioName,
  address,
  // images,
  image,
  services,
  addToFavourites,
  removeFromFavourites,
  isSaved,
  onClick,
}: SingleStudioCardProps) => {
  const dummyImage = useDummyImage({});
  const { user } = useLoggedUser();
  const showLoaderProgress = useLoaderProgress();

  const handleClick = () => {
    showLoaderProgress(() => onClick());
  };

  const RemoveFromFavourites = (event: any) => {
    event.stopPropagation();
    if (removeFromFavourites) {
      showLoaderProgress(() => removeFromFavourites());
    }
  };

  const AddToFavourites = (event: any) => {
    event.stopPropagation();
    if (addToFavourites) {
      showLoaderProgress(() => addToFavourites());
    }
  };

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
        cursor="pointer"
        onClick={handleClick}
      >
        {user && (
          <Box
            position="absolute"
            top={['12px', '24px']}
            right={['12px', '24px']}
            zIndex="1"
          >
            {isSaved === true ? (
              <Button
                bg="none"
                p="0"
                _hover={{ bg: 'none', p: 0 }}
                onClick={RemoveFromFavourites}
              >
                <FavouriteIconFilled />
              </Button>
            ) : (
              <Button
                onClick={AddToFavourites}
                bg="none"
                p="0"
                _hover={{ bg: 'none', p: 0 }}
              >
                <FavouriteIcon />
              </Button>
            )}
          </Box>
        )}

        <Image
          src={image || dummyImage}
          w="100%"
          h="100%"
          objectFit="cover"
          alt={`${studioName} studio cover image`}
        />

        {/* <Swiper
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
        </Swiper> */}
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
                      key={service}
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
                  key={service}
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
