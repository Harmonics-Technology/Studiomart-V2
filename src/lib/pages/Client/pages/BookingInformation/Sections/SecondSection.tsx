'use client';

import {
  Box,
  FormLabel,
  FormControl,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

import { StudioStatusButton } from '~/lib/components/Button/Button';
import {
  CancelIcon,
  PaymentIcon,
  CompletedIcon,
  ChatIcon,
  RatingIcon,
} from '~/lib/components/Icons/StudioStatusButtons';
import FormInput from '~/lib/utilities/FormInput/FormInput';

const UserInformation = () => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  return (
    <Box>
      <Box mb="28px">
        <Heading fontSize={32} fontWeight={700} color="text.100">
          Your Information
        </Heading>
      </Box>

      <Flex
        alignItems="center"
        gap="20px"
        flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
      >
        <Box w={['100%', '50%']}>
          <FormControl>
            <FormLabel
              textTransform="uppercase"
              fontSize={10}
              fontWeight={700}
              color="text.100"
            >
              Full Name
            </FormLabel>
            <FormInput
              type="text"
              value={fullName}
              setValue={setFullName}
              width="100%"
            />
          </FormControl>
        </Box>
        <Box w={['100%', '50%']}>
          <FormControl>
            <FormLabel
              textTransform="uppercase"
              fontSize={10}
              fontWeight={700}
              color="text.100"
            >
              email
            </FormLabel>
            <FormInput
              type="email"
              value={email}
              setValue={setEmail}
              width="100%"
            />
          </FormControl>
        </Box>
      </Flex>
    </Box>
  );
};

const StatusButtons = () => {
  return (
    <Box>
      <Flex alignItems="center" justifyContent="space-between">
        <StudioStatusButton
          text="Cancel Booking"
          ButtonIcon={CancelIcon}
          color="status.700"
          onClick={() => {}}
          isActive
        />
        <StudioStatusButton
          text="Make Payment"
          ButtonIcon={PaymentIcon}
          color="brand.100"
          onClick={() => {}}
          isActive
        />
        <StudioStatusButton
          text="Chat with Vendor"
          ButtonIcon={ChatIcon}
          color="status.800"
          onClick={() => {}}
          isActive
        />
        <StudioStatusButton
          text="Rate this Service"
          ButtonIcon={RatingIcon}
          color="brand.600"
          onClick={() => {}}
          isActive={false}
        />
        <StudioStatusButton
          text="Mark as Completed"
          ButtonIcon={CompletedIcon}
          color="status.900"
          onClick={() => {}}
          isActive
        />
      </Flex>
    </Box>
  );
};

const StudioInformation = () => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  return (
    <Box>
      <Box mb="28px">
        <Heading fontSize={32} fontWeight={700} color="text.100">
          Studio Information
        </Heading>
      </Box>

      <Flex
        alignItems="center"
        gap="20px"
        flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
        mb="36px"
      >
        <Box w={['100%', '50%']}>
          <FormControl>
            <FormLabel
              textTransform="uppercase"
              fontSize={10}
              fontWeight={700}
              color="text.100"
            >
              studio Name
            </FormLabel>
            <FormInput
              type="text"
              value={fullName}
              setValue={setFullName}
              width="100%"
            />
          </FormControl>
        </Box>
        <Box w={['100%', '50%']}>
          <FormControl>
            <FormLabel
              textTransform="uppercase"
              fontSize={10}
              fontWeight={700}
              color="text.100"
            >
              studio email
            </FormLabel>
            <FormInput
              type="email"
              value={email}
              setValue={setEmail}
              width="100%"
            />
          </FormControl>
        </Box>
      </Flex>
      <Flex
        alignItems="center"
        gap="20px"
        flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
        mb="60px"
      >
        <Box w={['100%', '50%']}>
          <FormControl>
            <FormLabel
              textTransform="uppercase"
              fontSize={10}
              fontWeight={700}
              color="text.100"
            >
              studio phone
            </FormLabel>
            <FormInput
              type="text"
              value={fullName}
              setValue={setFullName}
              width="100%"
            />
          </FormControl>
        </Box>
        <Box w={['100%', '50%']}>
          <FormControl>
            <FormLabel
              textTransform="uppercase"
              fontSize={10}
              fontWeight={700}
              color="text.100"
            >
              studio address
            </FormLabel>
            <FormInput
              type="email"
              value={email}
              setValue={setEmail}
              width="100%"
            />
          </FormControl>
        </Box>
      </Flex>

      <Box
        w="100%"
        py="17px"
        px="18px"
        bg="studioStatus.200"
        border="1px solid"
        borderColor="brand.600"
        borderRadius="12px"
      >
        <Heading fontSize={18} fontWeight={700} mb="4px">
          PS: Note
        </Heading>
        <Text color="status.600" fontSize={15}>
          Hey there!, Your payment has been confirmed, kindly sit back and relax
          while we cook things up to satisfy your creative need. Necessary
          informations has been sent to your registered email address. Please
          contact support for futher questions. Thank your for choosing
          studiomart
        </Text>
      </Box>
    </Box>
  );
};

const SecondSection = () => {
  return (
    <Box w="100%">
      <Stack spacing="80px">
        <UserInformation />
        <StatusButtons />
        <StudioInformation />
      </Stack>
    </Box>
  );
};

export default SecondSection;
