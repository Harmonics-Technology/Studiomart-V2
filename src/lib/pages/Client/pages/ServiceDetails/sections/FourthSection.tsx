import { Box, Stack, Heading, Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';

import ServiceCard from '~/lib/components/ServiceCard';
import { ContainerBox } from '~/lib/layout/ContainerBox';
import { ServiceView, ServiceViewPagedCollection } from '~/services';

const FourthSection = ({
  data,
  studioName,
}: {
  data: ServiceViewPagedCollection | undefined;
  studioName: string;
}) => {
  return (
    <Box bg="#FCF8FB" py="8">
      <ContainerBox>
        <Stack spacing={16}>
          <Box position="relative" p="5">
            <Heading
              fontSize={24}
              fontWeight={900}
              position="absolute"
              zIndex="1"
            >
              More Services by {studioName}
            </Heading>
            <Image
              src="/assets/star-line.svg"
              alt="star image"
              width={60}
              height={60}
              style={{ position: 'absolute', top: '-10px', left: '-10px' }}
            />
          </Box>
          <Box>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              flexWrap="wrap"
              rowGap={12}
            >
              {data?.value?.map((item: ServiceView) => (
                <Link passHref href={`/services/details/${item?.id}`}>
                  <ServiceCard
                    image={item?.bannerImageURL || item?.media?.at(0)?.url}
                    rating={item?.averageRating}
                    price={item?.price}
                    title={item?.name}
                    key={item?.id}
                  />
                </Link>
              ))}
            </Flex>
          </Box>
        </Stack>
      </ContainerBox>
    </Box>
  );
};

export default FourthSection;
