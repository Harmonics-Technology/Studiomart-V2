import { Box, Stack, Heading, Flex, Image } from '@chakra-ui/react';

import { ServiceCard } from '~/lib/components/StudioCard';
import Wrapper from '~/lib/components/Wrapper';

const FourthSection = () => {
  const studios = [1, 2, 3, 4, 5];
  return (
    <Box bg="#FCF8FB" py="8">
      <Wrapper>
        <Stack spacing={16}>
          <Box position="relative" p="5">
            <Heading
              fontSize={24}
              fontWeight={900}
              position="absolute"
              zIndex="1"
            >
              More Services by Lensboy Photography
            </Heading>
            <Image
              src="/assets/star-line.svg"
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
              // columnGap='50px'
              rowGap={12}
            >
              {studios.map(() => (
                <ServiceCard
                  image="/assets/mask-2.png"
                  title="Product Photography"
                  rating={4.5}
                  price={17000}
                />
              ))}
            </Flex>
          </Box>
        </Stack>
      </Wrapper>
    </Box>
  );
};

export default FourthSection;
