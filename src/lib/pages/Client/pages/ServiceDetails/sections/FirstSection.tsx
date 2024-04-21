import {
  Box,
  Stack,
  Icon,
  Heading,
  Text,
  Flex,
  Checkbox,
  Image,
  HStack,
  Grid,
} from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import { useState } from 'react';
import toast from 'react-hot-toast';
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from 'react-icons/io5';

import ButtonComponent, {
  IconButtonComponent,
} from '~/lib/components/Button/Button';
import ClockIcon from '~/lib/components/Icons/ClockIcon';
import LocationIcon from '~/lib/components/Icons/LocationIcon';
import TicketIcon from '~/lib/components/Icons/TicketIcon';
import Ratings from '~/lib/components/Ratings';
import CustomText from '~/lib/components/Text';
import { ContainerBox } from '~/lib/layout/ContainerBox';
import type {
  SingleDetailProps,
  AdditionalServicesProps,
} from '~/lib/utilities/Context/schemas';
import { AdditionalServiceView, ServiceView, StudioService } from '~/services';

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

const AdditionalServices: React.FC<AdditionalServicesProps> = ({
  service,
  addToArray,
}) => {
  return (
    <Box w="400px">
      <Flex alignItems="center" gap={3}>
        <Checkbox size="lg" onChange={() => addToArray(service)}>
          <HStack justify="space-between">
            <Text>{service?.name}</Text>
            <Text>{service?.price}</Text>
          </HStack>
        </Checkbox>
      </Flex>
    </Box>
  );
};

const FirstSection = ({ data }: { data: ServiceView | undefined }) => {
  const studioName = data?.studio?.name;
  const router = useRouter();
  const pathname = usePathname();
  const cookies = useCookies();
  const [loading, setLoading] = useState(false);
  const saveServiceForLater = async () => {
    setLoading(true);
    try {
      const result = await StudioService.saveService({
        studioId: data?.id,
      });
      if (result.status) {
        setLoading(false);
        // setSaveStats(true);
        router.replace(pathname);
        toast.success('Added to saved items');
        return;
      }
      setLoading(false);
      toast.error(result.message as string);
    } catch (err: any) {
      setLoading(false);
      toast.error(err?.body?.message || err?.message, {
        className: 'loginToast',
      });
    }
  };
  const removeSaved = async () => {
    setLoading(true);
    try {
      const result = await StudioService.removeSavedService({
        id: data?.id as string,
      });
      if (result.status) {
        setLoading(false);
        toast.success('Item Removed');
        router.refresh();
        return;
      }
      setLoading(false);
      toast.error(result.message as string);
    } catch (err: any) {
      setLoading(false);
      toast.error(err?.body?.message || err?.message, {
        className: 'loginToast',
      });
    }
  };
  const [selectedAddon, setSelectedAddon] = useState<any>([]);
  const addToArray = (value: AdditionalServiceView) => {
    const exist = selectedAddon.find((x: any) => x.id === value.id);
    if (exist) {
      setSelectedAddon(selectedAddon.filter((x: any) => x.id !== value.id));
      return;
    }
    setSelectedAddon([...selectedAddon, value]);
  };

  const bookService = () => {
    cookies.set('addons', JSON.stringify(selectedAddon));
    router.push(`/services/schedule-session/${data?.id}`);
  };
  return (
    <ContainerBox mb="50px" p={[3, 0]}>
      <Box color="#636363" mb="8">
        <Link href="/studios">
          <Flex alignItems="center" gap={1.5}>
            <Icon
              as={IoChevronBackCircleOutline}
              fontSize={25}
              color="#AFAFAF"
            />
            <Text>
              {data?.serviceType?.name}/{studioName}
            </Text>
          </Flex>
        </Link>
      </Box>

      <Box>
        <Grid
          templateColumns={['1fr', 'repeat(2, 1fr)']}
          gap="4rem"
          alignItems="center"
        >
          <Box
            w="100%"
            border="4px solid"
            borderColor="brand.100"
            borderRadius="80px"
            overflow="hidden"
            h="700px"
          >
            <Image
              src={(data?.bannerImageURL || data?.media?.at(0)?.url) as string}
              alt={`main image of ${data?.name}`}
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
          <Box w="100%">
            <Stack spacing={7}>
              <Box>
                <Stack spacing={4}>
                  <Heading fontSize={40} fontWeight={600} color="#171717">
                    {data?.name}
                  </Heading>
                  <Text color="brand.100">
                    <Box as="strong" color="#171717">
                      Studio:
                    </Box>{' '}
                    {studioName} | Similar services by {studioName}
                  </Text>
                  <Box>
                    <Flex alignItems="center" gap={2}>
                      <Text>{data?.averageRating} Star</Text>
                      <Ratings value={data?.averageRating || 0} />
                      <Text>({data?.totalReviewCount} reviews)</Text>
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
                    <CustomText
                      text={`Here are the specifics of this service from ${studioName}.`}
                    />
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
                        description={`${data?.price} NGN`}
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
                      {data?.additionalServices?.map((service) => (
                        <AdditionalServices
                          key={service?.id}
                          service={service}
                          addToArray={addToArray}
                        />
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
                        onClick={() => bookService()}
                      />
                      <IconButtonComponent
                        bg="white"
                        color="#1570FA"
                        width="195px"
                        icon={IoChevronForwardCircleOutline}
                        flip
                        loading={loading}
                        text={
                          data?.isSaved ? 'Remove from saved' : 'Save for later'
                        }
                        onClick={() =>
                          data?.isSaved ? removeSaved() : saveServiceForLater()
                        }
                      />
                    </Flex>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Box>
    </ContainerBox>
  );
};

export default FirstSection;
