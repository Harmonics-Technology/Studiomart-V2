/* eslint-disable no-unsafe-optional-chaining */
import {
  Box,
  Stack,
  Heading,
  Text,
  Flex,
  Image,
  HStack,
  Input,
  Icon,
  Button,
  Square,
  Grid,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { BiListCheck } from 'react-icons/bi';
import { IoChevronForward } from 'react-icons/io5';
import { useDummyImage } from 'react-simple-placeholder-image';
import Slider from 'react-slick';

import ButtonComponent from '~/lib/components/Button/Button';
import CalendarIcon from '~/lib/components/Icons/CalendarIcon';
import { GiftIcon, UserIcon } from '~/lib/components/Icons/TagIcons';
import Ratings from '~/lib/components/Ratings';
import { ICustomerHome } from '~/lib/utilities/Context/schemas';
import Naira from '~/lib/utilities/Functions/Naira';
import VoucherCoupon from '~/lib/utilities/Functions/VoucherCoupon';
import useQueryParams from '~/lib/utilities/Hooks/useQueryParams';
import {
  AdditionalServiceView,
  BookingModel,
  BookingService,
  MediaView,
} from '~/services';

import BookingDetails from './BookingDetails';

const BookingSummaryCardWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Box w="100%" borderBottom="1px solid #CECDCD" pb="26px">
      {children}
    </Box>
  );
};

const BookingSummaryCard = ({ singleService, id, addons }: ICustomerHome) => {
  const { queryParams } = useQueryParams();
  const router = useRouter();
  const Cookies = useCookies();
  const date = queryParams.get('date');
  const time = queryParams.get('time');
  const [selectedAddon, setSelectedAddon] =
    useState<AdditionalServiceView[]>(addons);
  const [loading, setLoading] = useState(false);

  const addToArray = (data: AdditionalServiceView) => {
    const exist = selectedAddon.find((x: any) => x.id === data.id);
    if (exist) {
      setSelectedAddon(selectedAddon.filter((x: any) => x.id !== data.id));
      return;
    }
    setSelectedAddon([...selectedAddon, data]);
  };

  const newTime = (time as string)?.split(' ');

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    className: 'service-slick',
  };
  const image = useDummyImage({});

  const amount =
    selectedAddon?.reduce((a, b) => a + (b.price as number), 0) +
    (singleService?.price as number);
  const tax = (amount / 100) * 7.5;
  const grandTotal = amount + tax;
  const [couponInput, setCouponInput] = useState<any>();
  const [couponError, setCouponError] = useState<any>();
  const [isLoading, setIsLoading] = useState<any>();
  const [couponApplied, setCouponApplied] = useState<any>();

  const applyVoucher = () => {
    VoucherCoupon({
      setCouponError,
      setCouponApplied,
      setIsLoading,
      couponInput,
    });
  };

  const voucherAdded =
    couponApplied?.type === 'percent'
      ? (grandTotal / 100) * couponApplied?.discount
      : grandTotal - couponApplied?.discount;
  const couponGrandTotal =
    voucherAdded > couponApplied?.maxDiscount
      ? grandTotal - couponApplied?.maxDiscount
      : grandTotal - voucherAdded;

  const CreateBooking = async () => {
    const data: BookingModel = {
      date: date as string,
      inputTime: {
        hour: Number(newTime[0]),
        minute: Number(newTime[1]),
      },
      serviceId: id,
      additionalServices: selectedAddon.map((x) => x.id as string),
      voucherId: couponApplied?.id,
    };
    setLoading(true);
    try {
      const result = await BookingService.createBooking({ requestBody: data });

      if (result.status) {
        setLoading(false);
        toast.success(result.message as string);
        Cookies.remove('addons');
        router.push(`/user/bookings`);
        return;
      }
      setLoading(false);
      toast.error(result.message as string);
    } catch (error: any) {
      setLoading(false);
      toast.error(error?.body?.message || error?.message, {
        className: 'loginToast',
      });
    }
  };

  const viewers = useMemo(() => Math.floor(Math.random() * 20) + 1, []);
  return (
    <Grid
      alignItems="flex-start"
      justifyContent="space-between"
      gap="4rem"
      templateColumns={['1fr', '50% 40%']}
    >
      <BookingDetails
        addToArray={addToArray}
        selectedAddon={selectedAddon}
        service={singleService}
        viewers={viewers}
        date={date}
        time={time}
      />
      <Box
        w="full"
        border="1px solid #C9C7C7"
        borderRadius="12px"
        padding="25px"
      >
        <Stack spacing="33px" mb="66px">
          <BookingSummaryCardWrapper>
            <Flex alignItems="center" gap="32px" flexWrap="wrap">
              <Square size={{ base: '4rem', lg: '6rem' }} overflow="hidden">
                {(singleService?.media as any)?.length > 0 ? (
                  <Slider {...settings}>
                    {singleService?.media?.map((x: MediaView) => (
                      <Box
                        w="full"
                        h={{ base: '4rem', lg: '6rem' }}
                        overflow="hidden"
                        key={x.id}
                      >
                        <Image
                          w="full"
                          h="full"
                          objectFit="cover"
                          alt={x.url as string}
                          src={x.url as string}
                        />
                      </Box>
                    ))}
                  </Slider>
                ) : (
                  <Image src={image} alt="cover" h="full" w="full" />
                )}
              </Square>
              <Box w="257px">
                <Heading fontSize={26} fontWeight={600} mb="4px">
                  {singleService?.name}
                </Heading>
                <Box>
                  <Text
                    lineHeight="26px"
                    color="brand.600"
                    mb="4px"
                    noOfLines={2}
                  >
                    {singleService?.description}
                  </Text>
                  <HStack align="center" fontSize={['.7rem', '13px']}>
                    <Ratings value={singleService?.averageRating || 0} />
                    <Text
                      color="#333333"
                      as="span"
                      mb="0"
                      fontSize="12px"
                      fontWeight="500"
                    >
                      ({singleService?.totalReviewCount || 0}) reviews
                    </Text>
                  </HStack>
                </Box>
              </Box>
            </Flex>
          </BookingSummaryCardWrapper>

          <BookingSummaryCardWrapper>
            <Stack spacing="25px">
              <Box>
                <Flex alignItems="center" gap="4px">
                  <UserIcon />
                  <Text color="brand.700">1 Guest</Text>
                </Flex>
              </Box>
              <Box>
                <Flex alignItems="center" gap="4px">
                  <CalendarIcon />
                  <Text color="brand.700">
                    {dayjs(date as string).format('MMM DD, YYYY')} - {time}
                  </Text>
                </Flex>
              </Box>
            </Stack>
          </BookingSummaryCardWrapper>

          <BookingSummaryCardWrapper>
            <Stack spacing="32px">
              <Box>
                <HStack>
                  <Input
                    placeholder="Enter discount code"
                    h="2.6rem"
                    borderRadius="0"
                    w="full"
                    onChange={(e) => setCouponInput(e.target.value)}
                    textTransform="uppercase"
                    fontSize=".9rem"
                  />
                  <Button
                    bgColor="black"
                    color="white"
                    borderRadius="0"
                    h="2.6rem"
                    px="2rem"
                    onClick={() => applyVoucher()}
                    isLoading={isLoading}
                  >
                    {couponApplied?.valid ? (
                      <Icon as={BiListCheck} />
                    ) : (
                      'Apply Coupon'
                    )}
                  </Button>
                </HStack>
                <Text fontSize=".8rem" color="red" w="100%" p=".2rem .5rem">
                  {couponError}
                </Text>
              </Box>
              <Box>
                <Stack spacing="16px">
                  <Flex justifyContent="space-between" alignItems="center">
                    <Text color="brand.600" fontSize={18}>
                      Service cost
                    </Text>
                    <Text color="brand.600" fontSize={18}>
                      {Naira(singleService?.price as number)}
                    </Text>
                  </Flex>
                  {selectedAddon?.map((x: AdditionalServiceView) => (
                    <HStack
                      color="#1717171"
                      justify="space-between"
                      key={x.id}
                      w="full"
                    >
                      <Text mb="0">{x.name}</Text>
                      <Text mb="0"> {Naira(x?.price as number)} </Text>
                    </HStack>
                  ))}
                  <HStack color="#1717171" justify="space-between" w="full">
                    <Text mb="0">Tax</Text>
                    <Text mb="0">{Naira(tax)}</Text>
                  </HStack>
                </Stack>
              </Box>
            </Stack>
          </BookingSummaryCardWrapper>

          <BookingSummaryCardWrapper>
            <Box textAlign="right">
              <HStack justify="flex-end">
                <Text
                  fontSize={couponApplied?.valid ? '1rem' : '1.2rem'}
                  fontWeight={couponApplied?.valid ? '500' : '700'}
                  mb="0"
                  color={couponApplied?.valid ? 'gray.300' : 'black'}
                  textDecor={couponApplied?.valid ? 'line-through' : 'none'}
                >
                  {Naira(grandTotal)}
                </Text>
                {couponApplied?.valid && (
                  <Text
                    fontSize="1.2rem"
                    fontFamily="BR Firma"
                    fontWeight="700"
                    mb="0"
                  >
                    {Naira(couponGrandTotal)}
                  </Text>
                )}
              </HStack>
              {couponApplied?.valid && (
                <Text fontSize=".8rem" fontWeight="700" color="green">
                  Coupon {couponInput} applied
                </Text>
              )}
            </Box>
          </BookingSummaryCardWrapper>

          <BookingSummaryCardWrapper>
            <Flex alignItems="center" justifyContent="space-between">
              <Box>
                <Flex gap="8px" alignItems="center">
                  <GiftIcon />
                  <Text>Book as a gift</Text>
                </Flex>
              </Box>
              <Box>
                <IoChevronForward size={20} color="#AFAFAF" />
              </Box>
            </Flex>
          </BookingSummaryCardWrapper>
        </Stack>
        <ButtonComponent
          text="Proceed with Booking"
          color="brand.400"
          bg="brand.100"
          width="100%"
          onClick={CreateBooking}
          loading={loading}
        />
      </Box>
    </Grid>
  );
};

export default BookingSummaryCard;
