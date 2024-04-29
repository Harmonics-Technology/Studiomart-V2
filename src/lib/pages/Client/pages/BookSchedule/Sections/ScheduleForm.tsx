'use client';

import { Box, Heading, VStack, Stack } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { DateObject } from 'react-multi-date-picker';

import ButtonComponent from '~/lib/components/Button/Button';
import CustomText from '~/lib/components/Text';
import { FormDate } from '~/lib/utilities/FormInput/FormDate';
import { BookingService, LookupModel } from '~/services';

const ScheduleForm = ({ id }: { id: string }) => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<LookupModel>({
    mode: 'all',
    defaultValues: {
      serviceId: id,
    },
  });

  const ChekDateAvailability = async (data: LookupModel) => {
    const newTime = dayjs(data.time as string).format('hh mm A');
    data.time = {
      hour: Number(dayjs(data.time as string).format('H')),
      minute: Number(dayjs(data.time as string).format('mm')),
    } as any;
    try {
      const result = await BookingService.dateTimeLookup({ requestBody: data });

      if (result.status) {
        toast.success(result.message as string);
        router.push(
          `/user/bookings/review/${id}?date=${data.date}&time=${newTime}`
        );
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
    <Box
      maxW="889px"
      py={['20px', '100px']}
      px={['20px', '120px']}
      mx="auto"
      h="607px"
      borderRadius="12px"
      border="1px solid #C3C3C3"
    >
      <Box mb="48px">
        <VStack spacing="8px">
          <Heading fontSize={40} fontWeight={900} color="brand.600">
            Studio Scheduling
          </Heading>
          <CustomText text="Please select a time and date for booking" />
        </VStack>
      </Box>
      <form onSubmit={handleSubmit(ChekDateAvailability)}>
        <Box w={['320px', '540px']}>
          <Stack spacing="24px">
            <FormDate<LookupModel>
              control={control}
              name="date"
              label="Date"
              error={errors.date}
              placeholder="Enter Date"
              min={new DateObject()}
              format="ddd D MMMM, YYYY"
            />
            <FormDate<LookupModel>
              control={control}
              name="time"
              label="Time"
              error={errors.time?.hour}
              format="hh:mm A"
              isTime
              placeholder="Enter Time"
              // defaultValue={watch('date')}
            />
            <ButtonComponent
              text="Proceed"
              bg="brand.100"
              color="brand.400"
              width="100%"
              disabled={!isValid}
              loading={isSubmitting}
              type="submit"
            />
          </Stack>
        </Box>
      </form>
    </Box>
  );
};

export default ScheduleForm;
