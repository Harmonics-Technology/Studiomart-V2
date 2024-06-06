'use client';

import { Box, Image, Heading, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import ButtonComponent from '~/lib/components/Button/Button';
import FormInput from '~/lib/utilities/FormInput/FormInput';
import { type LoginModel } from '~/services';

const Profile = () => {
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
          My Profile Details
        </Heading>
        <Box
          width="120px"
          height="120px"
          borderRadius="50%"
          border="6px solid"
          borderColor="text.200"
          margin="auto"
          bg="studioStatus.400"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src="/assets/placeholder-img.png"
            alt="profile image"
            width="100%"
            height="100%"
            borderRadius="50%"
            objectFit="contain"
          />
        </Box>
        <FormInput<LoginModel>
          type="text"
          register={register}
          name="email"
          error={errors?.email}
          label="First Name"
          placeholder="Adamu Ibrahim"
        />
        <FormInput<LoginModel>
          type="text"
          register={register}
          name="email"
          error={errors?.email}
          label="Last Name"
          placeholder="Adamu Ibrahim"
        />
        <FormInput<LoginModel>
          type="email"
          register={register}
          name="email"
          error={errors?.email}
          label="Email"
          placeholder="johndoe@gmail.com"
        />
        <FormInput<LoginModel>
          type="number"
          register={register}
          name="email"
          error={errors?.email}
          label="Phone Number"
          placeholder="+2348127671686"
        />
        <ButtonComponent
          text="Edit Profile"
          bg="brand.100"
          width="100%"
          color="brand.400"
          onClick={() => {}}
        />
      </Stack>
    </Box>
  );
};

export default Profile;
