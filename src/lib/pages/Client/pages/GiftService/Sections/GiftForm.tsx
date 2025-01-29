'use client';

import { Box, FormControl, Heading, Stack } from '@chakra-ui/react';

import ButtonComponent from '~/lib/components/Button/Button';
import { IGiftFormProps } from '~/lib/utilities/Context/schemas';
import FormInput from '~/lib/utilities/FormInput/FormInput';
import ModalWrapper from '~/lib/utilities/Layouts/ModalWrapper';
import { GiftRecipientModel } from '~/services';

const GiftForm = ({
  isOpen,
  onClose,
  register,
  errors,
  trigger,
  isValid,
}: IGiftFormProps) => {
  const closeForm = () => {
    trigger();
    if (!isValid) {
      return;
    }
    onClose();
  };
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
                <FormInput<GiftRecipientModel>
                  type="text"
                  register={register}
                  name="name"
                  error={errors?.name}
                  label="Recipient Name"
                />
                <FormInput<GiftRecipientModel>
                  type="text"
                  register={register}
                  name="email"
                  error={errors?.email}
                  label="Recipient Email"
                />
                <FormInput<GiftRecipientModel>
                  type="text"
                  register={register}
                  name="phoneNumber"
                  error={errors?.phoneNumber}
                  label="Recipient Phone Number"
                />
                <FormInput<GiftRecipientModel>
                  type="text"
                  register={register}
                  name="senderName"
                  error={errors?.senderName}
                  label="Sender Name"
                />
                <FormInput<GiftRecipientModel>
                  type="text"
                  register={register}
                  name="message"
                  error={errors?.message}
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
                closeForm();
              }}
            />
          </Box>
        </Stack>
      </Box>
    </ModalWrapper>
  );
};

export default GiftForm;
