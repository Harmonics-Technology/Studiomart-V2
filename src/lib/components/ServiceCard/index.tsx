import { Box } from '@chakra-ui/react';
import Image from 'next/image';

interface ServiceCardProps {
  image: string;
  title?: string;
  rating?: number;
  price?: number;
}

const ServiceCard = ({ image, title }: ServiceCardProps) => {
  return (
    <Box as="div">
      <Image src={image} alt={`${title} image`} />
    </Box>
  );
};

export default ServiceCard;
