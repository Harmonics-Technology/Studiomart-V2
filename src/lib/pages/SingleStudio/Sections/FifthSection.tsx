import { Box, Flex, Heading, Stack, Image } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import StudioCard from '~/lib/components/SingleStudioCard';
import Wrapper from '~/lib/components/Wrapper';
import { StudioService, StudioView } from '~/services';

const FifthSection = ({
  similarServiceStudios,
}: {
  similarServiceStudios: StudioView[];
}) => {
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
    <Box bg="#FCF8FB" py="8">
      <Wrapper>
        <Stack spacing={10}>
          <Box position="relative" p="5" mb="5">
            <Heading
              fontSize={24}
              fontWeight={900}
              position="absolute"
              zIndex="1"
            >
              Studios Offering Similar Services
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
              rowGap="24px"
            >
              {similarServiceStudios?.map((studio: any) => (
                <StudioCard
                  // image={[
                  //   '/assets/face.png',
                  //   '/assets/studio-girl2.png',
                  //   '/assets/other-studios.png',
                  // ]}
                  image={studio?.coverPhoto as string}
                  studioName={studio?.name}
                  address={`${studio?.city}, ${studio?.state}`}
                  services={['Music', 'Photography']}
                  onClick={() => router.push(`/studios/details/${studio?.id}`)}
                  addToFavourites={() =>
                    saveServiceForLater(studio?.id as string)
                  }
                  removeFromFavourites={() => removeSaved(studio?.id as string)}
                  key={studio?.id}
                />
              ))}
            </Flex>
          </Box>
        </Stack>
      </Wrapper>
    </Box>
  );
};

export default FifthSection;
