import { Box, Flex, Heading, Stack, Image } from '@chakra-ui/react';

import Wrapper from '~/lib/components/Wrapper';

const FifthSection = () => {
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
    <Box bg="#FCF8FB" py="8">
      <Wrapper>
        <Stack spacing={10}>
          <Box position="relative" p="5">
            <Heading
              fontSize={24}
              fontWeight={900}
              position="absolute"
              zIndex="2"
            >
              Studios Offering Similar Services
            </Heading>
            <Image
              src="assets/star-line.svg"
              alt="star image"
              width={60}
              height={60}
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
      </Wrapper>
    </Box>
  );
};

export default FifthSection;
