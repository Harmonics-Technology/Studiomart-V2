import {
  Box,
  Text,
  VStack,
  Stack,
  FormControl,
  Checkbox,
  Icon,
  Heading,
  Button,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import Link from 'next/link';
// @ts-expect-error this package has no types
import ng_universities from 'ng_universities';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BiSolidCheckCircle } from 'react-icons/bi';
import * as yup from 'yup';
import YupPassword from 'yup-password';

import ButtonComponent from '~/lib/components/Button/Button';
import { auth, db } from '~/lib/components/firebase/firebase';
import HeadingWithStar from '~/lib/components/HeadingWithStar';
import SigninOption from '~/lib/components/SigninOptions';
import FormInput from '~/lib/utilities/FormInput/FormInput';
import { FormRadio } from '~/lib/utilities/FormInput/FormRadio';
import FormSelect from '~/lib/utilities/FormInput/FormSelect';
import { UserService, type RegisterModel } from '~/services';

YupPassword(yup);

const SecondStep = () => {
  const validation = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    isStudent: yup.string().required(),
    password: yup.string().password(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), undefined], 'Passwords must match'),
    // university: yup.string().when('isStudent', {
    //   is: true || 'Yes',
    //   then: yup.string().required(),
    // }),
  });

  const [success, setSuccess] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] =
    useState<boolean>(false);
  const [schoolFound, setSchoolFound] = useState<boolean>(false);

  const universities = ng_universities.getUniversities();
  const formattedUni = JSON.parse(universities);
  const {
    handleSubmit,
    register,
    watch,
    control,
    formState: { errors, isSubmitting },
  } = useForm<RegisterModel>({
    // @ts-expect-error new update
    resolver: yupResolver(validation),
    mode: 'all',
    defaultValues: {
      isStudent: false,
    },
  });

  const isStudent = !!(
    (watch('isStudent') as any) === 'Yes' || watch('isStudent') === true
  );

  const onSubmit = async (data: RegisterModel) => {
    data.isStudent = isStudent;
    try {
      const result = await UserService.create({ requestBody: data });
      if (result?.status) {
        const res = await createUserWithEmailAndPassword(
          auth,
          data.email as string,
          data.password as string
        );
        await updateProfile(res.user, {
          displayName: data.firstName,
        });
        await setDoc(doc(db, 'users', result?.data?.id as string), {
          uid: result.data?.id,
          email: res.user.email,
          displayName: data.firstName,
        });
        await setDoc(doc(db, 'userChats', result?.data?.id as string), {});
        toast.success(result?.message as string);
        setSuccess(true);
        return;
      }
      toast.error(result?.message as string);
    } catch (error: any) {
      toast.error(error?.body?.message || error?.message);
    }
  };

  return (
    <Box py="2rem">
      {success ? (
        <VStack w="100%" h="auto" p="3rem 3rem">
          <Icon as={BiSolidCheckCircle} color="green" fontSize="2rem" />
          <Heading>Successful!</Heading>
          <Text textAlign="center">
            Check your mail for further instructions
          </Text>
          <Link href="/sign-in">
            <Button w="full" h="3rem" bgColor="brand.100" color="white">
              Go to Login
            </Button>
          </Link>
        </VStack>
      ) : (
        <Stack spacing="36px">
          <Box>
            <VStack spacing={6}>
              <HeadingWithStar
                title="Hey there, explorer!"
                flipStar
                width="508px"
              />
              <Text fontSize={24} fontWeight={500}>
                Let’s get started! Already have an account? Sign in
              </Text>
              <SigninOption text="or sign up with" />
            </VStack>
          </Box>
          <Box>
            <FormControl>
              <Stack spacing="20px" mb="26px">
                <FormInput<RegisterModel>
                  type="email"
                  register={register}
                  name="email"
                  error={errors?.email}
                  label="Email Address"
                />
                <FormInput<RegisterModel>
                  register={register}
                  name="firstName"
                  error={errors?.firstName}
                  label="First name"
                />
                <FormInput<RegisterModel>
                  register={register}
                  name="lastName"
                  error={errors?.lastName}
                  label="Last name"
                />
                <FormRadio<RegisterModel>
                  label="ARE YOU A STUDENT"
                  radios={['Yes', 'No']}
                  name="isStudent"
                  control={control}
                  error={errors.isStudent}
                  defaultValue="No"
                />
                {isStudent && (
                  <Box>
                    {schoolFound ? (
                      <FormInput<RegisterModel>
                        register={register}
                        name="university"
                        error={errors?.university}
                        label="Institution"
                      />
                    ) : (
                      <FormSelect<RegisterModel>
                        register={register}
                        name="university"
                        error={errors?.university}
                        label="Institution"
                        placeholder="Please select"
                        options={formattedUni?.map((x: any) => (
                          <option value={x?.name} key={x?.name}>
                            {x?.name}
                          </option>
                        ))}
                      />
                    )}
                    <Text m="2">
                      Can’t find school?{' '}
                      <Box
                        as="span"
                        color="brand.100"
                        onClick={() => setSchoolFound((prev) => !prev)}
                        cursor="pointer"
                      >
                        {!schoolFound ? 'Add School' : 'Undo'}
                      </Box>
                    </Text>
                  </Box>
                )}
                <FormInput<RegisterModel>
                  register={register}
                  name="password"
                  error={errors?.password}
                  label="Enter Password"
                  icon
                  passwordVisible={passwordVisible}
                  changeVisibility={() => setPasswordVisible((prev) => !prev)}
                  type={passwordVisible ? 'text' : 'password'}
                />
                <FormInput<RegisterModel>
                  register={register}
                  name="confirmPassword"
                  error={errors?.confirmPassword}
                  label="Re-type Password"
                  icon
                  passwordVisible={confirmPasswordVisible}
                  type={confirmPasswordVisible ? 'text' : 'password'}
                  changeVisibility={() =>
                    setConfirmPasswordVisible((prev) => !prev)
                  }
                />
                {/* <Text fontSize={14} color="brand.100" m="2">
                Verifying...
              </Text> */}
                <Box>
                  <Checkbox colorScheme="blue">
                    I accept the{' '}
                    <Link href="/terms-and-conditions">
                      <Box as="span" color="brand.100">
                        Terms & Conditions
                      </Box>
                    </Link>
                  </Checkbox>
                </Box>
              </Stack>
              <ButtonComponent
                text="Next"
                color="brand.400"
                bg="brand.100"
                width="100%"
                loading={isSubmitting}
                onClick={handleSubmit(onSubmit)}
              />
            </FormControl>
          </Box>
        </Stack>
      )}
    </Box>
  );
};

export default SecondStep;
