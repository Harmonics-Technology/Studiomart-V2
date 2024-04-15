import { Stack, Box, Image } from '@chakra-ui/react';

import type { SocialLinksProps } from '~/lib/utilities/Context/schemas';

const index: React.FC<SocialLinksProps> = ({ spacing, direction }) => {
  const iconsList = [
    {
      title: 'Linkedin Icon',
      src: '/assets/Linkedin.svg',
    },
    {
      title: 'facebook Icon',
      src: '/assets/Facebook.svg',
    },
    {
      title: 'Twitter icon',
      src: '/assets/Twitter.svg',
    },
    {
      title: 'Instagram Icon',
      src: '/assets/instagram.svg',
    },
  ];
  return (
    <Box>
      <Stack direction={direction} spacing={spacing} alignItems="center">
        {iconsList.map((item) => (
          <Box as="a" href="#" target="_blank" key={item?.title}>
            <Image src={item?.src} alt={item.title} w="40px" h="40px" />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default index;
