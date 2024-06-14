import { Box, Stack, Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import { IoChevronForwardCircleOutline } from 'react-icons/io5';

import { IconButtonLinkComponent } from '~/lib/components/Button/Button';
import SingleStudioCard from '~/lib/components/SingleStudioCard';

const PopularStudios = () => {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <Box py="60px">
      <Stack spacing="32px" mb="60px">
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <Heading as="h2" fontSize={40} fontWeight={900} color="text.100">
              Popular Studios
            </Heading>
            <IconButtonLinkComponent
              text="View all"
              icon={IoChevronForwardCircleOutline}
              flip={false}
              color="brand.100"
            />
          </Flex>
        </Box>
      </Stack>

      <Flex
        alignItems="flex-start"
        rowGap="50px"
        columnGap={['10px', 0]}
        justifyContent="space-between"
        flexWrap="wrap"
      >
        {data?.map((item: any) => {
          return (
            <Link passHref href={`/studios/details/${item.id}`}>
              <SingleStudioCard
                images={[
                  '/assets/face.png',
                  '/assets/studio-girl2.png',
                  '/assets/other-studios.png',
                ]}
                studioName="MUA Studio"
                address="Lekki, Lagos"
                services={['Music', 'Photography']}
                isLoggedIn
              />
            </Link>
          );
        })}
      </Flex>
    </Box>
  );
};

export default PopularStudios;
