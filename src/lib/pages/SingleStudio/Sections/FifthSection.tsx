import { Box, Flex, Heading, Stack, Image } from '@chakra-ui/react';
import Link from 'next/link';

import StudioCard from '~/lib/components/SingleStudioCard';
import Wrapper from '~/lib/components/Wrapper';

const FifthSection = () => {
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
    <Box bg="#FCF8FB" py="8">
      <Wrapper>
        <Stack spacing={10}>
          <Box position="relative" p="5" mb="5">
            <Heading
              fontSize={24}
              fontWeight={900}
              position="absolute"
              zIndex="2"
            >
              Studios Offering Similar Services
            </Heading>
            <Image
              src="/assets/star-line.svg"
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
              rowGap="24px"
            >
              {studios.map((item) => (
                <Link passHref href={`/studios/details/${item.id}`}>
                  <StudioCard
                    images={[
                      '/assets/face.png',
                      '/assets/studio-girl2.png',
                      '/assets/other-studios.png',
                    ]}
                    studioName="Colorsplash Studios"
                    address="Onilearo Ibadan."
                    services={['Music', 'Photography']}
                    isLoggedIn
                  />
                </Link>
              ))}
            </Flex>
          </Box>
        </Stack>
      </Wrapper>
    </Box>
  );
};

export default FifthSection;
