import { Box, Text, Heading, Flex } from '@chakra-ui/react';

import { HomeFeatureCardProps } from '~/lib/utilities/Context/schemas';

const index = ({ description, currentIndex }: HomeFeatureCardProps) => {
  return (
    <Box>
      <Box>
        <Flex alignItems="center" gap="10px">
          <Heading fontSize={24}>0{currentIndex}</Heading>
          <Box w="94px" h="1.5px" bg="#0C090A" />
          <Heading fontSize={24}>05</Heading>
        </Flex>
      </Box>
      <Text lineHeight="28px" mb="4">
        {description}
      </Text>
    </Box>
  );
};

export default index;
