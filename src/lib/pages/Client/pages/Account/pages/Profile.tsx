'use client';

import { Box, Image, Heading, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Widget } from '@uploadcare/react-widget';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as yup from 'yup';

import ButtonComponent from '~/lib/components/Button/Button';
import FormInput from '~/lib/utilities/FormInput/FormInput';
import InputBlank from '~/lib/utilities/FormInput/InputBlank';
import { UserService, UserView, type UpdateUserModel } from '~/services';

const Profile = ({ data }: { data: UserView }) => {
  const imageRef = useRef<any>(null);

  const validation = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phoneNumber: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<UpdateUserModel>({
    // @ts-expect-error new update
    resolver: yupResolver(validation),
    mode: 'all',
    defaultValues: {
      firstName: data?.firstName,
      phoneNumber: data?.phoneNumber,
      lastName: data?.lastName,
      profileURl: data?.profilePicture,
    },
  });

  const EditProfile = async (value: UpdateUserModel) => {
    try {
      const res = await UserService.updateUser({ requestBody: value });
      if (res.status) {
        toast.success('Account Update Successful');
        return;
      }
      toast.error(res.message as string);
    } catch (error: any) {
      toast.error(error.body.message || error.message);
    }
  };

  const [imageUrl, setImageUrl] = useState<string>(
    data?.profilePicture as string
  );

  const uploadFunction = async (file: any) => {
    if (file) {
      file.progress(() => {
        // setLoading(true);
      });
      file.done((info: any) => {
        // setLoading(false);
        setImageUrl(info?.cdnUrl);
        setValue('profileURl', info?.cdnUrl);
        handleSubmit(EditProfile)();
      });
    }
  };

  return (
    <Box w="100%">
      <form onSubmit={handleSubmit(EditProfile)}>
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
            onClick={() => imageRef?.current?.openDialog()}
          >
            <Image
              src={imageUrl}
              alt="profile image"
              width="100%"
              height="100%"
              borderRadius="50%"
              objectFit="cover"
            />
          </Box>
          <Box display="none">
            <Widget
              publicKey="fda3a71102659f95625f"
              clearable
              onFileSelect={uploadFunction}
              ref={imageRef}
              systemDialog
              inputAcceptTypes=".png, .jpg,.jpeg"
            />
          </Box>
          <FormInput<UpdateUserModel>
            type="text"
            register={register}
            name="firstName"
            error={errors?.firstName}
            label="First Name"
            placeholder="Adamu Ibrahim"
          />
          <FormInput<UpdateUserModel>
            type="text"
            register={register}
            name="lastName"
            error={errors?.lastName}
            label="Last Name"
            placeholder="Adamu Ibrahim"
          />
          <InputBlank
            type="email"
            label="Email"
            placeholder="johndoe@gmail.com"
            defaultValue={data?.email as string}
            readOnly
          />
          <FormInput<UpdateUserModel>
            type="number"
            register={register}
            name="phoneNumber"
            error={errors?.phoneNumber}
            label="Phone Number"
            placeholder="+2348127671686"
          />
          <ButtonComponent
            text="Edit Profile"
            bg="brand.100"
            width="100%"
            color="brand.400"
            type="submit"
            loading={isSubmitting}
          />
        </Stack>
      </form>
    </Box>
  );
};

export default Profile;
