'use client';

import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';

import { StudioStatusButton } from '~/lib/components/Button/Button';
import {
  CancelIcon,
  PaymentIcon,
  CompletedIcon,
  ChatIcon,
  RatingIcon,
} from '~/lib/components/Icons/StudioStatusButtons';
import { IBookingDetails } from '~/lib/utilities/Context/schemas';
import InputBlank from '~/lib/utilities/FormInput/InputBlank';

const UserInformation = ({ data }: IBookingDetails) => {
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
        <InputBlank
          label="Full Name"
          defaultValue={data?.user?.fullName}
          width={['100%', '50%']}
          readOnly
        />
        <InputBlank
          label="Email"
          defaultValue={data?.user?.email}
          width={['100%', '50%']}
          readOnly
        />
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

const StudioInformation = ({ data }: IBookingDetails) => {
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
        <InputBlank
          label="Studio Name"
          defaultValue={data?.service?.studio?.name}
          width={['100%', '50%']}
          readOnly
        />
        <InputBlank
          label="Studio Email"
          defaultValue={data?.service?.studio?.email}
          width={['100%', '50%']}
          readOnly
        />
      </Flex>
      <Flex
        alignItems="center"
        gap="20px"
        flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
        mb="60px"
      >
        <InputBlank
          label="Studio Phone"
          defaultValue={data?.service?.studio?.phone}
          width={['100%', '50%']}
          readOnly
        />
        <InputBlank
          label="Studio Address"
          defaultValue={data?.service?.studio?.address}
          width={['100%', '50%']}
          readOnly
        />
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

const SecondSection = ({ data }: IBookingDetails) => {
  return (
    <Box w="100%">
      <Stack spacing="80px">
        <UserInformation data={data} />
        <StatusButtons />
        <StudioInformation data={data} />
      </Stack>
    </Box>
  );
};

export default SecondSection;
