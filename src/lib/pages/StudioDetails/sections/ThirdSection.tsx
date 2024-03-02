import { Box, Stack, Heading, Text, Flex, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

import FiveStar from '~/lib/components/Icons/FiveStar';
import StarIcon from '~/lib/components/Icons/StarIcon';
import CustomText from '~/lib/components/Text';
import Wrapper from '~/lib/components/Wrapper';

interface ReviewCardProps {
  logo: string;
  name: string;
  address: string;
  date: string;
  review: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  logo,
  name,
  address,
  date,
  review,
}) => {
  return (
    <Box w="47%" mb="14">
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
                <Text fontSize={14}>{address}</Text>
              </Stack>
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex alignItems="center" gap={2.5}>
            <FiveStar />
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

interface ProgressBarProps {
  progressBarBg: string;
  rating: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progressBarBg, rating }) => {
  const progressPercentage = rating * 20;
  return (
    <Box>
      <Flex alignItems="center" gap={3}>
        <Box>
          <Flex alignItems="center" gap={1.5}>
            <Text>{rating}</Text>
            <FaStar fontSize={16} />
            <Text color="#AFAFAF">(20)</Text>
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

const ThirdSection = () => {
  return (
    <Box as="section">
      <Wrapper>
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
                    4.5/5
                  </Heading>
                  <StarIcon />
                  <CustomText text="100 ratings" />
                </VStack>
              </Box>

              <Box w="350px">
                <Stack spacing={2}>
                  <ProgressBar progressBarBg="#3D3D3D" rating={5} />
                  <ProgressBar progressBarBg="#3D3D3D" rating={4} />
                  <ProgressBar progressBarBg="#3D3D3D" rating={3} />
                  <ProgressBar progressBarBg="#3D3D3D" rating={2} />
                  <ProgressBar progressBarBg="#3D3D3D" rating={1} />
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
              <ReviewCard
                logo="/assets/company-logo.png"
                name="Sola W"
                address="Lagos, Nigeria"
                date="April 7, 2023"
                review="The lighting, backdrop, and overall atmosphere were excellent and the photographer was incredibly skilled and attentive to detail. "
              />
              <ReviewCard
                logo="/assets/company-logo.png"
                name="Sola W"
                address="Lagos, Nigeria"
                date="April 7, 2023"
                review="The lighting, backdrop, and overall atmosphere were excellent and the photographer was incredibly skilled and attentive to detail. "
              />
              <ReviewCard
                logo="/assets/company-logo.png"
                name="Sola W"
                address="Lagos, Nigeria"
                date="April 7, 2023"
                review="The lighting, backdrop, and overall atmosphere were excellent and the photographer was incredibly skilled and attentive to detail. "
              />
              <ReviewCard
                logo="/assets/company-logo.png"
                name="Sola W"
                address="Lagos, Nigeria"
                date="April 7, 2023"
                review="The lighting, backdrop, and overall atmosphere were excellent and the photographer was incredibly skilled and attentive to detail. "
              />
              <ReviewCard
                logo="/assets/company-logo.png"
                name="Sola W"
                address="Lagos, Nigeria"
                date="April 7, 2023"
                review="The lighting, backdrop, and overall atmosphere were excellent and the photographer was incredibly skilled and attentive to detail. "
              />
              <ReviewCard
                logo="/assets/company-logo.png"
                name="Sola W"
                address="Lagos, Nigeria"
                date="April 7, 2023"
                review="The lighting, backdrop, and overall atmosphere were excellent and the photographer was incredibly skilled and attentive to detail. "
              />
            </Flex>
          </Box>
        </Stack>
      </Wrapper>
    </Box>
  );
};

export default ThirdSection;
