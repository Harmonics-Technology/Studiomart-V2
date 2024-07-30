import {
  useMediaQuery,
  Flex,
  Box,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { IoChevronForwardCircleOutline } from 'react-icons/io5';

import {
  IconButtonLinkComponent,
  IconButtonComponent,
} from '~/lib/components/Button/Button';
import Wrapper from '~/lib/components/Wrapper';
import { StudioView } from '~/services';

const StudioOfTheWeek = ({
  studioOfTheWeek,
}: {
  studioOfTheWeek: StudioView[];
}) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <Box bg="#FCF8FB" py="12">
      <Wrapper>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Box w={['100%', '48%']}>
            <Stack spacing={8} w="100%">
              <Heading fontSize={[30, 40]} fontWeight={[900, 700]}>
                Studio of the Week
              </Heading>
              <Box>
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  gap="20px"
                >
                  <Box>
                    <Image
                      src={studioOfTheWeek[0]?.coverPhoto as string}
                      width={362}
                      height={400}
                      objectFit="cover"
                      alt="image of a woman"
                      borderRadius="40px"
                    />
                  </Box>
                  <Box h="100%">
                    <Flex
                      flexDir="column"
                      justifyContent="space-between"
                      alignItems="center"
                      gap="20px"
                    >
                      <Image
                        src={studioOfTheWeek[0]?.logo as string}
                        width={200}
                        height={219}
                        objectFit="cover"
                        borderRadius="40px"
                        alt="a lady and flower"
                      />
                      <Image
                        src={studioOfTheWeek[0]?.coverPhoto as string}
                        width={200}
                        height={150}
                        objectFit="cover"
                        borderRadius="40px"
                        alt="image of kids playing"
                      />
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Stack>
          </Box>
          <Box w={['100%', '48%']}>
            <Box mb="12" display="flex" justifyContent="flex-end">
              <Link href="/studios">
                <IconButtonLinkComponent
                  flip={false}
                  text="Explore all Studios"
                  icon={IoChevronForwardCircleOutline}
                />
              </Link>
            </Box>
            <Box>
              <Stack spacing={8}>
                <Heading
                  fontSize={[32, 62]}
                  fontWeight={[900, 700]}
                  color="#1570FA"
                  textTransform="capitalize"
                >
                  {studioOfTheWeek[0]?.name}
                </Heading>
                <Text lineHeight="30px">
                  {studioOfTheWeek[0]?.description}
                  {/* Introducing ColorSplash Studio, our featured studio of the
                  week! Offering a comprehensive range of photography and video
                  services, ColorSplash is your go-to destination for capturing
                  memorable moments. From stunning portraits to captivating
                  event coverage, their talented team brings creativity and
                  expertise to every project With ColorSplash Studio, your
                  vision comes to life in vibrant colors and cinematic quality.
                  Explore the possibilities and make your next shoot an
                  unforgettable experience! */}
                </Text>
                <Link href={`/studios/details/${studioOfTheWeek[0]?.id}`}>
                  <IconButtonComponent
                    bg="brand.100"
                    text="View Services"
                    icon={IoChevronForwardCircleOutline}
                    color="white"
                    width={isMobile ? '100%' : '200px'}
                    flip
                  />
                </Link>
              </Stack>
            </Box>
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default StudioOfTheWeek;
