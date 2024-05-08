'use client';

import { Box, Flex, Heading, Stack, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

import { StudioStatusButton } from '~/lib/components/Button/Button';
import {
  CancelIcon,
  PaymentIcon,
  CompletedIcon,
  ChatIcon,
  RatingIcon,
} from '~/lib/components/Icons/StudioStatusButtons';
import { IBookingDetails } from '~/lib/utilities/Context/schemas';
import InputBlank from '~/lib/utilities/FormInput/InputBlank';
import { useLoaderProgress } from '~/lib/utilities/Hooks/progress-bar';
import { BookingService, BookingView } from '~/services';

import { BookingStatusMessage } from './BookingStatusMessage';
import HandleSelectChat from './HandleSelectChat';
import { ReviewModal } from './ReviewModal';

const UserInformation = ({ bookings }: IBookingDetails) => {
  return (
    <Box>
      <Box mb="28px">
        <Heading fontSize={32} fontWeight={700} color="text.100">
          Your Information
        </Heading>
      </Box>

      <Flex
        alignItems="center"
        gap="20px"
        flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
      >
        <InputBlank
          label="Full Name"
          defaultValue={bookings?.user?.fullName}
          width={['100%', '50%']}
          readOnly
        />
        <InputBlank
          label="Email"
          defaultValue={bookings?.user?.email}
          width={['100%', '50%']}
          readOnly
        />
      </Flex>
    </Box>
  );
};

const StatusButtons = ({
  bookings,
  setReviewId,
  onOpen,
}: {
  bookings: BookingView;
  setReviewId: any;
  onOpen: any;
}) => {
  const status = bookings?.status?.toLowerCase();
  const [loading, setLoading] = useState<any>({
    status: false,
    type: '',
    id: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const showLoaderProgress = useLoaderProgress();
  //
  const router = useRouter();

  const cancelBooking = async (id: string) => {
    setLoading({ status: true, id, type: 'cancel' });
    try {
      const result = await BookingService.cancelBookings({
        id,
      });
      if (result.status) {
        setLoading({ status: false });
        toast.success(`You booking has been cancelled`);
        router.refresh();
        return;
      }
      setLoading({ status: false });
      toast.error(result.message as string);
    } catch (err: any) {
      setLoading({ status: false });
      toast.error(err?.body?.message || err?.message, {
        className: 'loginToast',
      });
    }
  };
  const markAsCompleted = async (id: string) => {
    setLoading({ status: true, id, type: 'complete' });
    try {
      const result = await BookingService.completeBooking({
        bookingId: id,
      });
      if (result.status) {
        setLoading({ status: false });
        toast.success(`Successful`);
        router.refresh();
        return;
      }
      setLoading({ status: false });
      toast.error(result.message as string);
    } catch (err: any) {
      setLoading({ status: false });
      toast.error(err?.body?.message || err?.message, {
        className: 'loginToast',
      });
    }
  };
  return (
    <Box>
      <Flex alignItems="center" justifyContent="space-between">
        <StudioStatusButton
          text="Cancel Booking"
          ButtonIcon={CancelIcon}
          color="status.700"
          isActive={status === 'pending'}
          isDisabled={status !== 'pending'}
          onClick={() => cancelBooking(bookings.id as string)}
          isLoading={
            loading.status &&
            loading.type === 'cancel' &&
            loading.id === bookings.id
          }
        />
        <StudioStatusButton
          text="Make Payment"
          ButtonIcon={PaymentIcon}
          color="brand.100"
          onClick={() =>
            showLoaderProgress(() =>
              router.push(`/user/checkout/${bookings.id as string}`)
            )
          }
          isLoading={false}
          isActive={status === 'approved'}
          isDisabled={status !== 'approved'}
        />
        <HandleSelectChat
          chatsUser={{
            uid: bookings?.service?.user?.id,
            displayName: bookings?.service?.user?.firstName,
            photoURL: bookings.service?.user?.profilePicture,
          }}
          url="/user/message"
          setLoading={setIsLoading}
        >
          <StudioStatusButton
            text="Chat with Vendor"
            ButtonIcon={ChatIcon}
            color="status.800"
            onClick={() => {}}
            isActive={status === 'paid'}
            isDisabled={status !== 'paid'}
            isLoading={isLoading}
          />
        </HandleSelectChat>

        <StudioStatusButton
          text="Rate this Service"
          ButtonIcon={RatingIcon}
          color="brand.600"
          onClick={() => {
            setReviewId(bookings.serviceId);
            onOpen();
          }}
          isActive={status === 'completed'}
          isDisabled={status !== 'completed'}
        />
        <StudioStatusButton
          text="Mark as Completed"
          ButtonIcon={CompletedIcon}
          color="status.900"
          onClick={() => markAsCompleted(bookings.id as string)}
          isLoading={
            loading.status &&
            loading.type === 'complete' &&
            loading.id === bookings.id
          }
          isActive={status === 'completed'}
          isDisabled={status !== 'completed'}
        />
      </Flex>
    </Box>
  );
};

const StudioInformation = ({
  bookings,
  isOpen,
  onClose,
  reviewId,
}: {
  bookings: any;
  isOpen: any;
  onClose: any;
  reviewId: any;
}) => {
  const status = bookings?.status?.toLowerCase();
  const hashed = '***************';

  return (
    <Box>
      <Box mb="28px">
        <Heading fontSize={32} fontWeight={700} color="text.100">
          Studio Information
        </Heading>
      </Box>

      <Flex
        alignItems="center"
        gap="20px"
        flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
        mb="36px"
      >
        <InputBlank
          label="Studio Name"
          defaultValue={bookings?.service?.studio?.name}
          width={['100%', '50%']}
          readOnly
        />
        <InputBlank
          label="Studio Email"
          defaultValue={
            status === 'paid' || status === 'completed'
              ? bookings?.service?.studio?.email
              : hashed
          }
          width={['100%', '50%']}
          readOnly
        />
      </Flex>
      <Flex
        alignItems="center"
        gap="20px"
        flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
        mb="60px"
      >
        <InputBlank
          label="Studio Phone"
          defaultValue={
            status === 'paid' || status === 'completed'
              ? bookings?.service?.studio?.phone
              : hashed
          }
          width={['100%', '50%']}
          readOnly
        />
        <InputBlank
          label="Studio Address"
          defaultValue={
            status === 'paid' || status === 'completed'
              ? bookings?.service?.studio?.address
              : hashed
          }
          width={['100%', '50%']}
          readOnly
        />
      </Flex>

      <BookingStatusMessage bookings={bookings} />

      {isOpen && (
        <ReviewModal id={reviewId} isOpen={isOpen} onClose={onClose} />
      )}
    </Box>
  );
};

const SecondSection = ({ bookings }: IBookingDetails) => {
  const [reviewId, setReviewId] = useState<any>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="100%">
      <Stack spacing="80px">
        <UserInformation bookings={bookings} />
        <StatusButtons
          bookings={bookings}
          setReviewId={setReviewId}
          onOpen={onOpen}
        />
        <StudioInformation
          bookings={bookings}
          reviewId={reviewId}
          isOpen={isOpen}
          onClose={onClose}
        />
      </Stack>
    </Box>
  );
};

export default SecondSection;
