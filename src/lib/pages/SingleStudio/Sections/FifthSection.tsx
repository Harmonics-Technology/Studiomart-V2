import { Box, Flex, Heading, Stack, Image } from '@chakra-ui/react';
import Link from 'next/link';

import StudioCard from '~/lib/components/SingleStudioCard';
import Wrapper from '~/lib/components/Wrapper';
import { StudioView } from '~/services';

const FifthSection = ({
  similarServiceStudios,
}: {
  similarServiceStudios: StudioView[];
}) => {
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
                <Link
                  key={studio?.id}
                  passHref
                  href={`/studios/details/${studio?.id}`}
                >
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
                    isLoggedIn
                  />
                </Link>
              ))}
            </Flex>
          </Box>
        </Stack>
      </Wrapper>
    </Box>
  );
};

export default FifthSection;
