'use client';

import { Box, Stack, Text, Heading } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as yup from 'yup';

import ButtonComponent from '~/lib/components/Button/Button';
import FormInput from '~/lib/utilities/FormInput/FormInput';
import { useLoaderProgress } from '~/lib/utilities/Hooks/progress-bar';
import { PasswordReset, UserService } from '~/services';

interface ResetUserPassword {
  newPassword: string | null | undefined;
  confirmPassword: string | null | undefined;
}

const ResetPasswordForm = ({ code }: { code: string }) => {
  const router = useRouter();
  const showLoaderProgress = useLoaderProgress();
  const validation = yup.object().shape({
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
  } = useForm<ResetUserPassword>({
    // @ts-expect-error new update
    resolver: yupResolver(validation),
    mode: 'all',
  });

  const resetPassword = async (data: ResetUserPassword) => {
    try {
      const payload: PasswordReset = {
        code,
        newPassword: data.newPassword,
      };
      const res = await UserService.completeReset({ requestBody: payload });
      if (res.status) {
        toast.success('Password Reset Successful');
        showLoaderProgress(() => router.push(`/password-reset-success`));
        return;
      }
      toast.error(res.message as string);
    } catch (error: any) {
      toast.error(error.body.message || error.message);
    }
  };

  return (
    <Box>
      <Stack spacing="58px">
        <Box>
          <Heading mb="5px" fontWeight={900} fontSize={[25, 40]}>
            Reset Password
          </Heading>
          <Text>
            Ensure you create a password that's unique and easy for you to
            remember
          </Text>
        </Box>
        <form
        // onSubmit={handleSubmit(signInWithNextAuth)}
        >
          <Box>
            <Stack spacing="40px">
              <Box>
                <Stack spacing="24px">
                  <FormInput<ResetUserPassword>
                    type="password"
                    register={register}
                    name="newPassword"
                    error={errors?.newPassword}
                    label="New Password"
                    placeholder="*************"
                  />
                  <FormInput<ResetUserPassword>
                    type="password"
                    register={register}
                    name="confirmPassword"
                    error={errors?.confirmPassword}
                    label="Confirm Password"
                    placeholder="*************"
                  />
                </Stack>
              </Box>
              <Box>
                <Stack spacing="12px">
                  <ButtonComponent
                    text="Submit"
                    color="brand.400"
                    bg="brand.100"
                    width="100%"
                    loading={isSubmitting}
                    type="submit"
                    onClick={handleSubmit(resetPassword)}
                  />
                  <Link href="/sign-in" passHref>
                    <Text
                      fontSize={16}
                      color="brand.100"
                      textAlign="center"
                      fontWeight={700}
                    >
                      Back to Login
                    </Text>
                  </Link>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Box>
  );
};

export default ResetPasswordForm;
