'use client';

import {
  Box,
  FormControl,
  Heading,
  Stack,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

import ButtonComponent from '~/lib/components/Button/Button';
// import FormInput from '~/lib/utilities/FormInput/FormInput';
// import { GiftRecipientModel, } from '~/services';
// import { useForm } from 'react-hook-form';

// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';

const GiftForm = () => {
  // const validation = yup.object().shape({
  //   email: yup.string().email().required(),
  //   password: yup.string().required(),
  // });
  // const {
  //   handleSubmit,
  //   register,
  //   formState: { errors, isSubmitting },
  // } = useForm<GiftRecipientModel>({
  //   // @ts-expect-error new update
  //   resolver: yupResolver(validation),
  //   mode: 'all',
  // });

  // const onSubmit = async(data: GiftRecipientModel) => {
  //   try {
  //     const res = await StudioService
  //   } catch (error: any) {

  //   }
  // }

  return (
    <Modal isCentered isOpen onClose={() => {}}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Box maxW="640px" mx="auto" mt={[8, 0]}>
            <Stack spacing="36px">
              <Box>
                <Heading fontSize={40}>Gift this Service</Heading>
              </Box>
              <Box>
                <FormControl mb="26px">
                  <Stack spacing="20px">
                    {/* <FormInput<GiftRecipientModel>
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
                    /> */}
                  </Stack>
                </FormControl>
                <ButtonComponent
                  text="Confirm gift details"
                  color="brand.400"
                  bg="brand.100"
                  width="100%"
                  onClick={() => {}}
                />
              </Box>
            </Stack>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default GiftForm;
