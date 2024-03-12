import { Image } from '@chakra-ui/next-js';
import {
  Box,
  Stack,
  Icon,
  Heading,
  Text,
  Flex,
  Checkbox,
} from '@chakra-ui/react';
import Link from 'next/link';
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from 'react-icons/io5';

import StudioGirl from '../../../../../../../publicassets/studio-girl2.png';
import ButtonComponent, {
  IconButtonComponent,
} from '~/lib/components/Button/Button';
import ClockIcon from '~/lib/components/Icons/ClockIcon';
import LocationIcon from '~/lib/components/Icons/LocationIcon';
import StarIcon from '~/lib/components/Icons/StarIcon';
import TicketIcon from '~/lib/components/Icons/TicketIcon';
import CustomText from '~/lib/components/Text';
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
    <Box w="auto">
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

const FirstSection = () => {
  const additionalServices = [
    'Professional Makeup Services - 5,000 NGN ',
    'Wardrobe Styling and Rentals - 5, 000 NGN',
    'Video Coverage - 5, 000 NGN',
    'Photo Slideshow or Montage - 5, 000 NGN',
    'Customized Themed Setups - 5, 000 NGN',
    'Professional Hair Styling - 5, 000 NGN',
  ];

  return (
    <Box mb="10" maxW="1288px" mx="auto" p={[3, 0]}>
      <Box color="#636363" mb="8">
        <Link href="/studios">
          <Flex alignItems="center" gap={1.5}>
            <Icon
              as={IoChevronBackCircleOutline}
              fontSize={25}
              color="#AFAFAF"
            />
            <Text>Photo Studio / Lensboy Photography</Text>
          </Flex>
        </Link>
      </Box>

      <Box>
        <Flex
          justifyContent="space-between"
          alignItems="flex-start"
          flexWrap="wrap"
        >
          <Box maxW="647px">
            <Image
              src={StudioGirl}
              alt="main image of a studio"
              w="100%"
              border="4px solid #1570FA"
              borderRadius="80px"
            />
          </Box>
          <Box maxW="570px">
            <Stack spacing={7}>
              <Box>
                <Stack spacing={4}>
                  <Heading fontSize={40} fontWeight={600} color="#171717">
                    Birthday Shoot
                  </Heading>
                  <Text color="#1570FA">
                    <Box as="strong" color="#171717">
                      Studio:
                    </Box>{' '}
                    Lensboy Photography | Similar services by Lensboy
                  </Text>
                  <Box>
                    <Flex alignItems="center" gap={2}>
                      <Text>4.5 Star</Text>
                      <StarIcon />
                      <Text>(15 reviews)</Text>
                    </Flex>
                  </Box>
                </Stack>
              </Box>

              <Box>
                <Stack spacing={8}>
                  <Box>
                    <Heading fontSize={24} fontWeight={700} mb="1">
                      Service Details
                    </Heading>
                    <CustomText text="Here are the specifics of this service from Lensboy photography." />
                  </Box>

                  <Box w="100%">
                    <Flex
                      alignItems="center"
                      justifyContent="space-between"
                      flexWrap="wrap"
                      w="100%"
                    >
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
                      <strong>Additional services:</strong> Indicate the
                      additional services you need by clicking the checkbox
                    </Text>
                  </Box>

                  <Box maxW="900px">
                    <Flex
                      flexWrap="wrap"
                      rowGap={4}
                      justifyContent="space-between"
                    >
                      {additionalServices.map((service, index) => (
                        <AdditionalServices key={index} text={service} />
                      ))}
                    </Flex>
                  </Box>

                  <Box>
                    <Flex alignItems="center" gap={2} flexWrap="wrap">
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
              </Box>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default FirstSection;
