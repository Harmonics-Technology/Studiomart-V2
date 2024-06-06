'use client';

import { Box, Heading, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import ButtonComponent from '~/lib/components/Button/Button';
import FormInput from '~/lib/utilities/FormInput/FormInput';
import { type LoginModel } from '~/services';

const Security = () => {
  const validation = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });
  const {
    register,
    formState: { errors },
  } = useForm<LoginModel>({
    // @ts-expect-error new update
    resolver: yupResolver(validation),
    mode: 'all',
  });

  return (
    <Box w="100%">
      <Stack spacing="26px">
        <Heading textAlign="center" fontSize={24}>
          Change Password
        </Heading>
        <FormInput<LoginModel>
          type="text"
          register={register}
          name="email"
          error={errors?.email}
          label="Old Password"
          placeholder="Adamu Ibrahim"
        />
        <FormInput<LoginModel>
          type="text"
          register={register}
          name="email"
          error={errors?.email}
          label="New password"
          placeholder="Adamu Adamu"
        />
        <FormInput<LoginModel>
          type="text"
          register={register}
          name="email"
          error={errors?.email}
          label="retype new password"
          placeholder="gyurk76dmmgiis"
        />
        <ButtonComponent
          text="Update"
          bg="brand.100"
          width="100%"
          color="brand.400"
          onClick={() => {}}
        />
      </Stack>
    </Box>
  );
};

export default Security;
