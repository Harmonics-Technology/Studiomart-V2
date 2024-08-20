'use client';

import { Box, Stack } from '@chakra-ui/react';

import { BackButton } from '~/lib/components/Button/Button';
import { ContainerBox } from '~/lib/layout/ContainerBox';
import { ICustomerHome } from '~/lib/utilities/Context/schemas';

import BookingSummaryCard from './Sections/BookingSummaryCard';

const index = ({ singleService, id, addons }: ICustomerHome) => {
  return (
    <ContainerBox mt={['20px', '80px']} px={[2, '4']}>
      <Stack spacing={['15px', '68px']} w="100%" mb="150px">
        <BackButton linkTo="/client" />
        <Box>
          <BookingSummaryCard
            singleService={singleService}
            id={id}
            addons={addons}
          />
        </Box>
      </Stack>
    </ContainerBox>
  );
};

export default index;
