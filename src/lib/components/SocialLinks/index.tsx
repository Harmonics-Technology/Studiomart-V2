import { Stack, Box } from '@chakra-ui/react';
import Image from 'next/image';

import facebookIcon from '../../../../public/assets/Facebook.svg';
import instagramIcon from '../../../../public/assets/Instagram.svg';
import linkedinIcon from '../../../../public/assets/Linkedin.svg';
import twitterIcon from '../../../../public/assets/Twitter.svg';

interface SocialLinksProps {
  spacing: number;
  direction: any;
}

const index: React.FC<SocialLinksProps> = ({ spacing, direction }) => {
  const iconsList = [
    {
      title: 'Linkedin Icon',
      icon: linkedinIcon,
    },
    {
      title: 'facebook Icon',
      icon: facebookIcon,
    },
    {
      title: 'Twitter icon',
      icon: twitterIcon,
    },
    {
      title: 'Instagram Icon',
      icon: instagramIcon,
    },
  ];
  return (
    <Box>
      <Stack direction={direction} spacing={spacing} alignItems="center">
        {iconsList.map((item) => (
          <Box as="a" href="#" target="_blank">
            <Image src={item.icon} alt={item.title} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default index;
