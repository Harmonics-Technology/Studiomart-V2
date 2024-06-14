'use client';

import { Box, Flex, Heading, Stack, Image } from '@chakra-ui/react';
import Link from 'next/link';

import { RecentlyViewedView } from '~/services';

const RecentlyViewed = ({
  recents,
}: {
  recents: RecentlyViewedView[] | undefined;
}) => {
  return (
    <Box bg="#FCF8FB" py="12">
      <Box mx="auto" maxW="1287px">
        <Stack spacing={10}>
          <Box position="relative" p="5">
            <Heading
              fontSize={24}
              fontWeight={900}
              position="absolute"
              zIndex="1"
            >
              Recently Viewed Studios
            </Heading>
            <Image
              src="/assets/star-line.svg"
              alt="star image"
              width="60px"
              height="60px"
              style={{ position: 'absolute', top: '-10px', left: '-10px' }}
            />
          </Box>
          <Box>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              flexWrap="wrap"
            >
              {recents?.map((item: RecentlyViewedView) => (
                <Link passHref href={`/services/details/${item?.serviceId}`}>
                  <Box
                    width="390px"
                    h="340px"
                    overflow="hidden"
                    border="4px solid"
                    borderColor="brand.100"
                    borderRadius="40px"
                  >
                    <Image
                      src={
                        (item.service?.bannerImageURL ||
                          item.service?.media?.at(0)?.url) as string
                      }
                      key={item.serviceId}
                      alt={item.service?.name as string}
                      w="full"
                      h="full"
                    />
                  </Box>
                </Link>
              ))}
            </Flex>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default RecentlyViewed;
