'use client';

import { Box, FormControl, Heading, Stack } from '@chakra-ui/react';

import ButtonComponent from '~/lib/components/Button/Button';
import { IGiftFormProps } from '~/lib/utilities/Context/schemas';
import FormInput from '~/lib/utilities/FormInput/FormInput';
import ModalWrapper from '~/lib/utilities/Layouts/ModalWrapper';
import { BookingModel } from '~/services';

const GiftForm = ({ isOpen, onClose, register, errors }: IGiftFormProps) => {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} title="" w="50%">
      <Box maxW="640px" mx="auto" mt={[8, 0]}>
        <Stack spacing="36px">
          <Box>
            <Heading fontSize={40}>Gift this Service</Heading>
          </Box>
          <Box>
            <FormControl mb="26px">
              <Stack spacing="20px">
                <FormInput<BookingModel>
                  type="text"
                  register={register}
                  name="recipient.name"
                  error={errors?.recipient?.name}
                  label="Recipient Name"
                />
                <FormInput<BookingModel>
                  type="text"
                  register={register}
                  name="recipient.email"
                  error={errors?.recipient?.email}
                  label="Recipient Email"
                />
                <FormInput<BookingModel>
                  type="text"
                  register={register}
                  name="recipient.phoneNumber"
                  error={errors?.recipient?.phoneNumber}
                  label="Recipient Phone Number"
                />
                <FormInput<BookingModel>
                  type="text"
                  register={register}
                  name="recipient.senderName"
                  error={errors?.recipient?.senderName}
                  label="Sender Name"
                />
                <FormInput<BookingModel>
                  type="text"
                  register={register}
                  name="recipient.message"
                  error={errors?.recipient?.message}
                  label="Message"
                />
              </Stack>
            </FormControl>
            <ButtonComponent
              text="Confirm gift details"
              color="brand.400"
              bg="brand.100"
              width="100%"
              onClick={() => {
                onClose();
              }}
            />
          </Box>
        </Stack>
      </Box>
    </ModalWrapper>
  );
};

export default GiftForm;
