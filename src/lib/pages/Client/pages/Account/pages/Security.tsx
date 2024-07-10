'use client';

import { Box, Heading, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as yup from 'yup';

import ButtonComponent from '~/lib/components/Button/Button';
import FormInput from '~/lib/utilities/FormInput/FormInput';
import { UserService } from '~/services';

interface UpdateUserPassword {
  oldPassword: string | null | undefined;
  newPassword: string | null | undefined;
  confirmPassword: string | null | undefined;
}

const Security = () => {
  const router = useRouter();
  const validation = yup.object().shape({
    oldPassword: yup.string().required(),
    newPassword: yup.string().required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('newPassword')], 'Passwords must match')
      .required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateUserPassword>({
    // @ts-expect-error new update
    resolver: yupResolver(validation),
    mode: 'all',
  });

  const ChangePassword = async (value: UpdateUserPassword) => {
    try {
      const res = await UserService.updatePassword({
        oldPassword: value.oldPassword as string,
        newPassword: value.newPassword as string,
      });
      if (res.status) {
        toast.success('Password Update Successful');
        router.refresh();
        return;
      }
      toast.error(res.message as string);
    } catch (error: any) {
      toast.error(error.body.message || error.message);
    }
  };

  return (
    <Box w="100%">
      <Stack spacing="26px">
        <Heading textAlign="center" fontSize={24}>
          Change Password
        </Heading>

        <FormInput<UpdateUserPassword>
          type="password"
          register={register}
          name="oldPassword"
          error={errors?.oldPassword}
          label="Old Password"
          placeholder="Adamu Ibrahim"
        />
        <FormInput<UpdateUserPassword>
          type="password"
          register={register}
          name="newPassword"
          error={errors?.newPassword}
          label="New password"
          placeholder="Adamu Adamu"
        />
        <FormInput<UpdateUserPassword>
          type="password"
          register={register}
          name="confirmPassword"
          error={errors?.confirmPassword}
          label="retype new password"
          placeholder="gyurk76dmmgiis"
        />
        <ButtonComponent
          text="Update"
          bg="brand.100"
          width="100%"
          color="brand.400"
          loading={isSubmitting}
          onClick={() => handleSubmit(ChangePassword)()}
        />
      </Stack>
    </Box>
  );
};

export default Security;
