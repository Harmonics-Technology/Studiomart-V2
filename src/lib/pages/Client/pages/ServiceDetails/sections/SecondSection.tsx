import { Box, Heading, Stack } from '@chakra-ui/react';
import parse from 'html-react-parser';

import CustomText from '~/lib/components/Text';
import { ServiceView } from '~/services';

const SecondSection = ({ data }: { data: ServiceView | undefined }) => {
  return (
    <Box maxW="1288px" mx="auto" p={[3, 0]} mb="95px">
      <Stack spacing="32px">
        <Box>
          <Heading fontSize={24} color="#171717" fontWeight={700}>
            About this service
          </Heading>
        </Box>

        <Box>
          <Stack spacing={5}>
            <CustomText text={parse(data?.description as string)} />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default SecondSection;
