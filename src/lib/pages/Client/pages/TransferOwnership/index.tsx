'use client';

import { Box, Heading, FormControl, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import ButtonComponent, { BackButton } from '~/lib/components/Button/Button';
import FormInput from '~/lib/utilities/FormInput/FormInput';
import InputBlank from '~/lib/utilities/FormInput/InputBlank';
import { useLoaderProgress } from '~/lib/utilities/Hooks/progress-bar';
import { BookingService, BookingTransferModel } from '~/services';

const Index = ({ bookingId }: { bookingId: string }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<BookingTransferModel>({
    mode: 'all',
  });

  const showLoaderProgress = useLoaderProgress();
  const router = useRouter();

  const onSubmit = async (data: BookingTransferModel) => {
    data.bookingId = bookingId;
    // console.log({ data });
    try {
      const result = await BookingService.transferBooking({
        requestBody: data,
      });

      if (result.status) {
        toast.success(result.message as string);
        showLoaderProgress(() => router.push('/user/bookings'));
        return;
      }
      toast.error(result.message as string);
    } catch (error: any) {
      toast.error(error?.body?.message || error?.message, {
        className: 'loginToast',
      });
    }
  };
  return (
    <Box as="section" maxW="1280px" mx="auto" py="48px">
      <Box mb="35px">
        <BackButton linkTo="/" />
      </Box>
      <Box maxW="640px" mx="auto">
        <Box mb="24px">
          <Heading fontSize={40} fontWeight={400}>
            Transfer Service Ownership
          </Heading>
        </Box>

        <Box>
          <FormControl>
            <Stack spacing="20px" mb="26px">
              <InputBlank type="text" label="Recipient Name" />
              <FormInput<BookingTransferModel>
                type="text"
                register={register}
                name="email"
                error={errors?.email}
                label="Recipient Email"
              />
              <InputBlank type="text" label="From" />
              <InputBlank type="text" label="Message (Optional)" />
            </Stack>
            <ButtonComponent
              text="Transfer"
              bg="brand.100"
              color="brand.400"
              width="100%"
              onClick={() => handleSubmit(onSubmit)()}
              loading={isSubmitting}
            />
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
