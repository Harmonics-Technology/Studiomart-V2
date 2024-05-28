import { Box, Stack, Heading, Flex, Image } from '@chakra-ui/react';

import Wrapper from '~/lib/components/Wrapper';

const NearStudios = () => {
  const imageUrl = '/assets/other-studios.png';
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
    <Box py="5">
      <Wrapper>
        <Stack spacing={10}>
          <Box position="relative" p="5">
            <Heading
              fontSize={24}
              fontWeight={900}
              position="absolute"
              zIndex="2"
            >
              Studios Near You
            </Heading>
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
      </Wrapper>
    </Box>
  );
};

export default NearStudios;
