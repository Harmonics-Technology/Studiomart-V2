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
import { UserService, InitiateResetModel } from '~/services';
// import { type LoginModel } from '~/services';

const ForgotPasswordForm = () => {
  const router = useRouter();
  const showLoaderProgress = useLoaderProgress();
  const validation = yup.object().shape({
    email: yup.string().email().required(),
  });
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<InitiateResetModel>({
    // @ts-expect-error new update
    resolver: yupResolver(validation),
    mode: 'all',
  });

  const sendPasswordResetCode = async (data: InitiateResetModel) => {
    try {
      const res = await UserService.initiateReset({
        redirectUrl: '/email-confirmation',
        requestBody: data,
      });
      if (res.status) {
        toast.success(res?.message as string);
        showLoaderProgress(() =>
          router.push(`/email-confirmation?email=${data.email}`)
        );
        // router.push('/email-confirmation');
        return;
      }
      toast.error(res?.message as string);
    } catch (error: any) {
      toast.error(error?.body?.message || error?.message);
    }
  };

  return (
    <Box>
      <Stack spacing="58px">
        <Box>
          <Heading mb="5px" fontWeight={900} fontSize={[25, 40]}>
            Forgot Password
          </Heading>
          <Text>Enter the email/Phone number registered on this account </Text>
        </Box>
        <form
        // onSubmit={handleSubmit(signInWithNextAuth)}
        >
          <Box>
            <Stack spacing="40px">
              <FormInput<InitiateResetModel>
                type="email"
                register={register}
                name="email"
                error={errors?.email}
                label="Email Address"
                placeholder="Enter your email address"
              />
              <Box>
                <Stack spacing="12px">
                  <ButtonComponent
                    text="Reset Password"
                    color="brand.400"
                    bg="brand.100"
                    width="100%"
                    loading={isSubmitting}
                    type="submit"
                    onClick={handleSubmit(sendPasswordResetCode)}
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

export default ForgotPasswordForm;
