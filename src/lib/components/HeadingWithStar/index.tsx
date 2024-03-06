import { Box, Heading } from '@chakra-ui/react';
import Image from 'next/image';

interface HeadingWithStarProps {
  title: string;
  flipStar: boolean;
  width: string;
}

const index = ({ title, flipStar, width }: HeadingWithStarProps) => {
  return (
    <Box textAlign="center" position="relative" w={width}>
      <Heading mt="5" fontSize={50}>
        {title}
      </Heading>
      <Image
        src={flipStar ? '/assets/star-like.svg' : '/assets/heading-top-bg.png'}
        width={73}
        height={76}
        alt="star like image"
        style={
          flipStar
            ? { position: 'absolute', top: '-30px', left: '-40px' }
            : { position: 'absolute', top: '-40px', right: '-50px' }
        }
      />
    </Box>
  );
};

export default index;
