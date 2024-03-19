import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  Icon,
  Checkbox,
} from '@chakra-ui/react';
import { IoChevronForwardCircleOutline } from 'react-icons/io5';

import ButtonComponent, {
  IconButtonComponent,
} from '~/lib/components/Button/Button';
import ClockIcon from '~/lib/components/Icons/ClockIcon';
import LocationIcon from '~/lib/components/Icons/LocationIcon';
import TicketIcon from '~/lib/components/Icons/TicketIcon';
import CustomText from '~/lib/components/Text';
import Wrapper from '~/lib/components/Wrapper';
import type {
  SingleDetailProps,
  AdditionalServicesProps,
} from '~/lib/utilities/Context/schemas';

const SingleDetail: React.FC<SingleDetailProps> = ({
  label,
  icon,
  description,
}) => {
  return (
    <Box>
      <Flex alignItems="center" gap={1} mb="2">
        <Icon as={icon} fontSize={24} />
        <Text>{label}</Text>
      </Flex>
      <Text fontWeight={500} color="#2D2327" fontSize={20}>
        {description}
      </Text>
    </Box>
  );
};

const AdditionalServices: React.FC<AdditionalServicesProps> = ({ text }) => {
  return (
    <Box w="400px">
      <Flex alignItems="center" gap={3}>
        <Checkbox size="lg" />
        <Text>{text}</Text>
      </Flex>
    </Box>
  );
};

const SecondSection = () => {
  const additionalServices = [
    'Professional Makeup Services - 5,000 NGN ',
    'Wardrobe Styling and Rentals - 5, 000 NGN',
    'Video Coverage - 5, 000 NGN',
    'Photo Slideshow or Montage - 5, 000 NGN',
    'Customized Themed Setups - 5, 000 NGN',
    'Professional Hair Styling - 5, 000 NGN',
  ];
  return (
    <Box>
      <Wrapper>
        <Stack spacing={8}>
          <Box>
            <Heading fontSize={24} fontWeight={700} mb="1">
              Service Details
            </Heading>
            <CustomText text="Here are the specifics of this service from Lensboy photography." />
          </Box>

          <Box w="750px">
            <Flex alignItems="center" justifyContent="space-between">
              <SingleDetail
                icon={ClockIcon}
                label="Duration"
                description="30 Minutes"
              />
              <SingleDetail
                icon={LocationIcon}
                label="Location"
                description="Studio or Outdoor"
              />
              <SingleDetail
                icon={TicketIcon}
                label="Pricing"
                description="10,000 NGN"
              />
            </Flex>
          </Box>

          <Box>
            <Text>
              <strong>Additional services:</strong> Indicate the additional
              services you need by clicking the checkbox
            </Text>
          </Box>

          <Box maxW="900px">
            <Flex flexWrap="wrap" rowGap={4} justifyContent="space-between">
              {additionalServices.map((service, index) => (
                <AdditionalServices key={index} text={service} />
              ))}
            </Flex>
          </Box>

          <Box>
            <Flex alignItems="center" gap={2}>
              <ButtonComponent
                text="Book Now"
                bg="brand.100"
                color="white"
                width="227px"
                onClick={() => {}}
              />
              <IconButtonComponent
                bg="white"
                color="#1570FA"
                width="195px"
                icon={IoChevronForwardCircleOutline}
                flip
                text="Save for later"
              />
            </Flex>
          </Box>
        </Stack>
      </Wrapper>
    </Box>
  );
};

export default SecondSection;
