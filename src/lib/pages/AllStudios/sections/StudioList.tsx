import { Box, Flex } from '@chakra-ui/react';

import { StudioCard } from '~/lib/components/StudioCard';
import Wrapper from '~/lib/components/Wrapper';

const StudioList = () => {
  const studios = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Box mb="14">
      <Wrapper>
        <Flex
          alignItems="center"
          rowGap={12}
          columnGap={1}
          justifyContent="space-between"
          flexWrap="wrap"
        >
          {studios.map(() => {
            return (
              <StudioCard
                img="assets/studio-girl2.png"
                companyName="Juggernaut Studio"
                price={17000}
                address="Lekki, Lagos"
                tags={['Music', 'Photography']}
                services={['amenity', 'amenity', 'amenity']}
              />
            );
          })}
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default StudioList;
