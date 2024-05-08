'use client';

import { Button, HStack } from '@chakra-ui/react';
import Link from 'next/link';

import { BackButton } from '~/lib/components/Button/Button';
import { ContainerBox } from '~/lib/layout/ContainerBox';
import { IBookingDetails } from '~/lib/utilities/Context/schemas';

import FirstSection from './Sections/FirstSection';
import SecondSection from './Sections/SecondSection';

const index = ({ bookings }: IBookingDetails) => {
  const status = bookings?.status?.toLowerCase();
  return (
    <ContainerBox my="80px">
      <HStack mb="50px" justify="space-between" w="full" align="center">
        <BackButton linkTo="/" />
        {status === 'paid' && (
          <Link passHref href={`/user/transfer/${bookings?.id}`}>
            <Button bgColor="brand.100" color="white">
              Transfer Booking
            </Button>
          </Link>
        )}
      </HStack>
      <FirstSection bookings={bookings} />
      <SecondSection bookings={bookings} />
    </ContainerBox>
  );
};

export default index;
