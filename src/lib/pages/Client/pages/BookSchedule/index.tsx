'use client';

import { Stack } from '@chakra-ui/react';

import { BackButton } from '~/lib/components/Button/Button';
import { ContainerBox } from '~/lib/layout/ContainerBox';

import ScheduleForm from './Sections/ScheduleForm';

const index = ({ id }: { id: string }) => {
  return (
    <ContainerBox mt={['20px', '50px']} px={[1, '4']}>
      <Stack spacing="68px" w="100%" mb="150px">
        <BackButton linkTo="/user" />
        <ScheduleForm id={id} />
      </Stack>
    </ContainerBox>
  );
};

export default index;
