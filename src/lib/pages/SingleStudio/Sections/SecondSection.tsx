import { Box, Flex, Heading, Stack } from '@chakra-ui/react';

import ServiceCard from '~/lib/components/ServiceCard';
import Wrapper from '~/lib/components/Wrapper';

const SecondSection = () => {
  return (
    <Box as="section" w="100%" bg="#FCF8FB" py="10">
      <Wrapper>
        <Stack spacing={16}>
          <Box>
            <Heading fontSize={24} fontWeight={900}>
              Services by ColourSplash Studios
            </Heading>
          </Box>
          <Box>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              flexWrap="wrap"
              rowGap={10}
            >
              <ServiceCard
                image="/assets/face.png"
                title="Catering service"
                rating={3.5}
                price={5000}
              />
              <ServiceCard
                image="/assets/mask-1.png"
                title="catering service"
                rating={4.8}
                price={5000}
              />
              <ServiceCard
                image="/assets/face.png"
                title="catering service"
                rating={3.5}
                price={5000}
              />
              <ServiceCard
                image="/assets/mask-2.png"
                title="catering service"
                rating={3.5}
                price={5000}
              />
              <ServiceCard
                image="/assets/face.png"
                title="catering service"
                rating={3.5}
                price={5000}
              />
              <ServiceCard
                image="/assets/ninth-image.png"
                title="catering service"
                rating={3.5}
                price={5000}
              />
            </Flex>
          </Box>
        </Stack>
      </Wrapper>
    </Box>
  );
};

export default SecondSection;
