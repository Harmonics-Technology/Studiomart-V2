'use client';

/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Box, Text, Stack, Flex } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as yup from 'yup';

import ButtonComponent from '~/lib/components/Button/Button';
import { auth, signIn } from '~/lib/components/firebase/firebase';
import HeadingWithStar from '~/lib/components/HeadingWithStar';
import SigninOption from '~/lib/components/SigninOptions';
import FormInput from '~/lib/utilities/FormInput/FormInput';
// import { useLoaderProgress } from '~/lib/utilities/Hooks/progress-bar';
import useQueryParams from '~/lib/utilities/Hooks/useQueryParams';
import { UserService, type LoginModel } from '~/services';

const FormContainer = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  // const router = useRouter();
  const cookies = useCookies();
  const { queryParams } = useQueryParams();

  const validation = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginModel>({
    // @ts-expect-error new update
    resolver: yupResolver(validation),
    mode: 'all',
  });

  // const showLoaderProgress = useLoaderProgress();
  const fromPage = queryParams.get('from');

  const signInWithNextAuth = async (value: LoginModel) => {
    try {
      // const response = await signIn('username-login', {
      //   username: value.email,
      //   password: value.password,
      //   redirect: false,
      // });
      const response = await UserService.loginUser({ requestBody: value });
      if (response.status) {
        const { data } = response;
        await signIn(auth, value.email as string, value.password as string);
        toast.success(`Welcome back ${data?.firstName}`);
        cookies.set('token', data?.token as string);
        cookies.set('studiomart-user', JSON.stringify(data));
        // showLoaderProgress(() => router.push('/user'));
        fromPage
          ? (window.location.href = decodeURIComponent(
              fromPage as unknown as string
            ))
          : (window.location.href = `/user`);
        return;
      }
      toast.error(response?.message as string, { className: 'loginToast' });
    } catch (error: any) {
      toast.error(
        error?.message || error?.body?.message || 'An error occured',
        { className: 'loginToast' }
      );
    }
  };

  return (
    <Box>
      <Stack spacing="58px">
        <HeadingWithStar
          title="Welcome to StudioMart!"
          flipStar={false}
          width="100%"
        />
        <form onSubmit={handleSubmit(signInWithNextAuth)}>
          <Box>
            <Stack spacing="21px">
              <FormInput<LoginModel>
                type="email"
                register={register}
                name="email"
                error={errors?.email}
                label="Email Address"
              />
              <FormInput<LoginModel>
                type={passwordVisible ? 'text' : 'password'}
                register={register}
                name="password"
                error={errors?.password}
                label="Enter Password"
                icon
                passwordVisible={passwordVisible}
                changeVisibility={() => setPasswordVisible((prev) => !prev)}
              />
              <Text fontSize={14} color="brand.200" fontStyle="italic">
                Forgot Password?
              </Text>
            </Stack>
          </Box>
          <Box>
            <Box my="2rem">
              <SigninOption text="or sign in with" />
            </Box>
            <Stack spacing="13px" justifyContent="center" alignItems="center">
              <ButtonComponent
                text="Sign in"
                color="brand.400"
                bg="brand.100"
                width="100%"
                loading={isSubmitting}
                type="submit"
                // onClick={() => handleSubmit(signInWithNextAuth)()}
              />
              <Flex alignItems="center" gap="4px">
                <Text>Don't have an account yet?</Text>
                <Link href="/register">
                  <Text fontWeight={700} color="brand.100">
                    Sign up
                  </Text>
                </Link>
              </Flex>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Box>
  );
};

export default FormContainer;
