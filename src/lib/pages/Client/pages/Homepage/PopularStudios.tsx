import { Box, Stack, Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IoChevronForwardCircleOutline } from 'react-icons/io5';

import { IconButtonLinkComponent } from '~/lib/components/Button/Button';
import SingleStudioCard from '~/lib/components/SingleStudioCard';
import { useLoaderProgress } from '~/lib/utilities/Hooks/progress-bar';
import { StudioView } from '~/services';

const PopularStudios = ({
  popularStudios,
}: {
  popularStudios: StudioView[];
}) => {
  const showLoaderProgress = useLoaderProgress();
  const router = useRouter();

  return (
    <Box py="60px">
      <Stack spacing="32px" mb="60px">
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <Heading as="h2" fontSize={40} fontWeight={900} color="text.100">
              Popular Studios
            </Heading>
            <Link href="/studios">
              <IconButtonLinkComponent
                text="View all"
                icon={IoChevronForwardCircleOutline}
                flip={false}
                color="brand.100"
              />
            </Link>
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
        {popularStudios?.map((studio: any) => {
          return (
            <Box
              as="div"
              onClick={() =>
                showLoaderProgress(router.push(`/studios/details/${studio.id}`))
              }
            >
              <SingleStudioCard
                image={studio?.coverPhoto}
                // images={[
                //   '/assets/face.png',
                //   '/assets/studio-girl2.png',
                //   '/assets/other-studios.png',
                // ]}
                studioName={studio?.name}
                address={`${studio?.city}, ${studio?.state}`}
                services={['Music', 'Photography']}
                isLoggedIn
              />
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default PopularStudios;
