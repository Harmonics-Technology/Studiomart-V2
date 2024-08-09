import { Box, Stack, Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { IoChevronForwardCircleOutline } from 'react-icons/io5';

import { IconButtonLinkComponent } from '~/lib/components/Button/Button';
import SingleStudioCard from '~/lib/components/SingleStudioCard';
import { useLoaderProgress } from '~/lib/utilities/Hooks/progress-bar';
import { StudioService, StudioView } from '~/services';

const PopularStudios = ({
  popularStudios,
}: {
  popularStudios: StudioView[];
}) => {
  const showLoaderProgress = useLoaderProgress();
  const router = useRouter();
  const saveServiceForLater = async (id: string) => {
    try {
      const result = await StudioService.saveStudio({
        studioId: id,
      });
      if (result.status) {
        router.refresh();
        toast.success('Added to saved studios');
        return;
      }
      toast.error(result.message as string);
    } catch (err: any) {
      toast.error(err?.body?.message || err?.message, {
        className: 'loginToast',
      });
    }
  };

  const removeSaved = async (id: string) => {
    try {
      const result = await StudioService.removeSavedStudio({
        id,
      });
      if (result.status) {
        toast.success('Removed from saved studios');
        router.refresh();
        return;
      }
      toast.error(result.message as string);
    } catch (err: any) {
      toast.error(err?.body?.message || err?.message, {
        className: 'loginToast',
      });
    }
  };
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
              addToFavourites={() => saveServiceForLater(studio?.id)}
              removeFromFavourites={() => removeSaved(studio?.id)}
              onClick={() =>
                showLoaderProgress(router.push(`/studios/details/${studio.id}`))
              }
            />
          );
        })}
      </Flex>
    </Box>
  );
};

export default PopularStudios;
