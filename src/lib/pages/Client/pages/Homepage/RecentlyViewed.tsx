'use client';

import { Box, Flex, Heading, Stack, Image } from '@chakra-ui/react';

const RecentlyViewed = () => {
  const imageUrl = 'assets/other-studios.png';
  const studios = [
    {
      id: 1,
      image: imageUrl,
    },
    {
      id: 2,
      image: imageUrl,
    },
    {
      id: 3,
      image: imageUrl,
    },
  ];
  return (
    <Box bg="#FCF8FB" py="12">
      <Box mx="auto" maxW="1287px">
        <Stack spacing={10}>
          <Box position="relative" p="5">
            <Heading
              fontSize={24}
              fontWeight={900}
              position="absolute"
              zIndex="1"
            >
              Recently Viewed Studios
            </Heading>
            <Image
              src="assets/star-line.svg"
              alt="star image"
              width="60px"
              height="60px"
              style={{ position: 'absolute', top: '-10px', left: '-10px' }}
            />
          </Box>
          <Box>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              flexWrap="wrap"
            >
              {studios.map((item) => (
                <Image
                  src={item.image}
                  key={item.id}
                  alt="other studios"
                  width={390}
                  height={340}
                  style={{ borderRadius: '40px', border: '4px solid #1570FA' }}
                />
              ))}
            </Flex>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default RecentlyViewed;
