import {
  Box,
  Stack,
  Heading,
  Text,
  Flex,
  VStack,
  Image,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import { FaStar } from 'react-icons/fa';

import Ratings from '~/lib/components/Ratings';
import CustomText from '~/lib/components/Text';
import type {
  ReviewCardProps,
  ProgressBarProps,
} from '~/lib/utilities/Context/schemas';
import CalculatePercent from '~/lib/utilities/Functions/CalculatePercent';
import { ReviewView, ReviewViewPagedCollection, ServiceView } from '~/services';

const ReviewCard: React.FC<ReviewCardProps> = ({
  logo,
  name,
  date,
  review,
  service,
}) => {
  return (
    <Box w={['100%', '47%']} mb="14">
      <Stack spacing={5}>
        <Box>
          <Flex alignItems="center" gap={2.5}>
            <Image
              src={logo}
              alt={name}
              width={48}
              height={48}
              style={{ borderRadius: '50%' }}
            />
            <Box>
              <Stack spacing={0.5}>
                <Heading fontSize={18} fontWeight={700} color="#171717">
                  {name}
                </Heading>
                {/* <Text fontSize={14}>{address}</Text> */}
              </Stack>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex alignItems="center" gap={2.5}>
            <Ratings value={service?.averageRating} />
            <CustomText text="." />
            <CustomText text={date} />
          </Flex>
        </Box>
        <Box>
          <CustomText text={review} />
        </Box>
      </Stack>
    </Box>
  );
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  progressBarBg,
  rating,
  count,
  total,
}) => {
  const progressPercentage = CalculatePercent(count, total);
  return (
    <Box>
      <Flex alignItems="center" gap={3}>
        <Box>
          <Flex alignItems="center" gap={1.5}>
            <Text>{rating}</Text>
            <FaStar fontSize={16} />
            <Text color="#AFAFAF">({count})</Text>
          </Flex>
        </Box>
        <Box w="260px">
          <Box w="100%" h="8px" bg="#E8E8E8" borderRadius="50px">
            <Box
              h="100%"
              w={`${progressPercentage}%`}
              bg={progressBarBg}
              borderRadius="50px"
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

const ThirdSection = ({
  data,
  service,
}: {
  data: ReviewViewPagedCollection | any;
  service: ServiceView | undefined;
}) => {
  return (
    <Box as="section" maxW="1282px" mx="auto">
      {/* <Wrapper> */}
      <Stack spacing="48px">
        <Box>
          <Heading fontSize={24} fontWeight={900}>
            Reviews
          </Heading>
        </Box>
        <Box w="550px">
          <Flex justifyContent="space-between">
            <Box
              w="158px"
              h="152px"
              bg="#F3F2F1"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <VStack spacing={3}>
                <Heading fontSize={32} fontWeight={500}>
                  {service?.averageRating}/5
                </Heading>
                <Ratings value={service?.averageRating} />
                <CustomText text={`${service?.totalReviewCount} ratings`} />
              </VStack>
            </Box>

            <Box w="350px">
              <Stack spacing={2}>
                <ProgressBar
                  progressBarBg="#3D3D3D"
                  rating={5}
                  count={service?.reviewCounts?.fiveStar}
                  total={service?.totalReviewCount}
                />
                <ProgressBar
                  progressBarBg="#3D3D3D"
                  rating={4}
                  count={service?.reviewCounts?.fourStar}
                  total={service?.totalReviewCount}
                />
                <ProgressBar
                  progressBarBg="#3D3D3D"
                  rating={3}
                  count={service?.reviewCounts?.threeStar}
                  total={service?.totalReviewCount}
                />
                <ProgressBar
                  progressBarBg="#3D3D3D"
                  rating={2}
                  count={service?.reviewCounts?.twoStar}
                  total={service?.totalReviewCount}
                />
                <ProgressBar
                  progressBarBg="#3D3D3D"
                  rating={1}
                  count={service?.reviewCounts?.zeroStar}
                  total={service?.totalReviewCount}
                />
              </Stack>
            </Box>
          </Flex>
        </Box>

        <Box p="7">
          <Flex
            alignItems="center"
            flexWrap="wrap"
            justifyContent="space-between"
          >
            {data?.value?.map((x: ReviewView) => {
              return (
                <ReviewCard
                  logo={x.user?.profilePicture}
                  name={x?.user?.fullName}
                  date={dayjs(x?.dateCreated).format('dddd do, YYYY')}
                  review={x?.reviewNote}
                  service={x}
                />
              );
            })}
          </Flex>
        </Box>
      </Stack>
      {/* </Wrapper> */}
    </Box>
  );
};

export default ThirdSection;
