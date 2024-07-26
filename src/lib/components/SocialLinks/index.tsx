import { Stack, Box, Image } from '@chakra-ui/react';

import type { SocialLinksProps } from '~/lib/utilities/Context/schemas';

const index: React.FC<SocialLinksProps> = ({ spacing, direction }) => {
  const iconsList = [
    {
      title: 'Linkedin Icon',
      src: '/assets/Linkedin.svg',
      url: 'https://www.linkedin.com/',
    },
    {
      title: 'facebook Icon',
      src: '/assets/Facebook.svg',
      url: 'https://www.facebook.com/',
    },
    {
      title: 'Twitter icon',
      src: '/assets/Twitter.svg',
      url: 'https://x.com/Studiomart_io?t=BcuhAoXRgieVatOTp_ZNiQ&s=09',
    },
    {
      title: 'Instagram Icon',
      src: '/assets/instagram.svg',
      url: 'https://instagram.com/studiomart.io',
    },
  ];
  return (
    <Box>
      <Stack direction={direction} spacing={spacing} alignItems="center">
        {iconsList.map((item) => (
          <Box as="a" href={item.url} target="_blank" key={item?.title}>
            <Image src={item?.src} alt={item.title} w="40px" h="40px" />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default index;
