import { Box, Stack, Heading, Text, Flex, Image } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { IoChevronForward } from 'react-icons/io5';

import ButtonComponent from '~/lib/components/Button/Button';
import CalendarIcon from '~/lib/components/Icons/CalendarIcon';
import StarIcon from '~/lib/components/Icons/StarIcon';
import { GiftIcon, UserIcon } from '~/lib/components/Icons/TagIcons';
import FormInput from '~/lib/utilities/FormInput/FormInput';

const BookingSummaryCardWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Box w="100%" borderBottom="1px solid #CECDCD" pb="26px">
      {children}
    </Box>
  );
};

const BookingSummaryCard = () => {
  const [couponCode, setCouponCode] = useState<string>('');
  return (
    <Box
      maxW="486px"
      border="1px solid #C9C7C7"
      borderRadius="12px"
      padding="25px"
    >
      <Stack spacing="33px" mb="66px">
        <BookingSummaryCardWrapper>
          <Flex alignItems="center" gap="32px" flexWrap="wrap">
            <Box
              w="114px"
              h="113px"
              borderRadius="8px"
              border="1px solid #D9D9D9"
            >
              <Image
                src="/assets/summary-card-image.png"
                alt="studio image"
                w="100%"
                h="100%"
                borderRadius="8px"
                objectFit="cover"
              />
            </Box>
            <Box w="257px">
              <Heading fontSize={26} fontWeight={600} mb="4px">
                Birthday Shoot
              </Heading>
              <Text lineHeight="26px" color="brand.600" mb="4px">
                Here are the specifics of this service service from Lensboy
                photography.
              </Text>
              <StarIcon />
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
                <Text color="brand.700">February 9. 12:00 AM</Text>
              </Flex>
            </Box>
          </Stack>
        </BookingSummaryCardWrapper>

        <BookingSummaryCardWrapper>
          <Stack spacing="32px">
            <Box>
              <Flex alignItems="center" gap="10px" flexWrap="wrap">
                <Box w={{ base: '100%', md: '253px', lg: '253px' }}>
                  <FormInput
                    type="text"
                    placeholder="ENTER COUPON CODE"
                    value={couponCode}
                    setValue={setCouponCode}
                    width="100%"
                  />
                </Box>
                <Box w={{ base: '100%', md: '170px', lg: '170px' }}>
                  <ButtonComponent
                    text="Apply code"
                    bg="brand.700"
                    color="brand.400"
                    width="100%"
                    onClick={() => {}}
                  />
                </Box>
              </Flex>
            </Box>
            <Box>
              <Stack spacing="16px">
                <Flex justifyContent="space-between" alignItems="center">
                  <Text color="brand.600" fontSize={18}>
                    Service cost
                  </Text>
                  <Text color="brand.600" fontSize={18}>
                    ₦15,000
                  </Text>
                </Flex>
                <Flex justifyContent="space-between" alignItems="center">
                  <Text color="brand.700">Tax</Text>
                  <Text color="brand.700">₦1,500</Text>
                </Flex>
                <Flex justifyContent="space-between" alignItems="center">
                  <Text color="brand.700">Flash drive</Text>
                  <Text color="brand.700">₦5,000</Text>
                </Flex>
                <Flex justifyContent="space-between" alignItems="center">
                  <Text color="brand.700">Export</Text>
                  <Text color="brand.700">₦3,500</Text>
                </Flex>
              </Stack>
            </Box>
          </Stack>
        </BookingSummaryCardWrapper>

        <BookingSummaryCardWrapper>
          <Flex justifyContent="space-between" alignItems="center">
            <Text color="brand.700" fontWeight={600} fontSize={24}>
              Total
            </Text>
            <Text color="brand.700" fontWeight={600} fontSize={24}>
              ₦20,000
            </Text>
          </Flex>
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
        onClick={() => {}}
      />
    </Box>
  );
};

export default BookingSummaryCard;
