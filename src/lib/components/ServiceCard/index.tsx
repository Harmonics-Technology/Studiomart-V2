import { Box, Heading, Text, Stack, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { IoArrowForward } from 'react-icons/io5';

interface ServiceCardProps {
  image: string;
  title?: string;
  rating?: number;
  price?: number;
}

const ServiceCard = ({ image, title, rating, price }: ServiceCardProps) => {
  return (
    <Box w="350px" h="auto" position="relative" mb="16">
      <Box
        w="100%"
        h="300px"
        border="3px solid #1570FA"
        borderRadius="50px"
        mb="5"
      >
        <Image
          src={image}
          alt="image"
          width={350}
          height={300}
          style={{ objectFit: 'cover', borderRadius: '50px' }}
        />
      </Box>
      <Box
        w="70px"
        h="70px"
        border="3px solid #1570FA"
        borderRadius="50%"
        position="absolute"
        top="-25px"
        right="-25px"
        bg="#D6E7FF"
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontSize={23}
        fontWeight={900}
        color="#0C090A"
      >
        {rating}
      </Box>
      <Box cursor="pointer">
        <Stack spacing={2}>
          <Heading fontSize={24} fontWeight={700}>
            {title}
          </Heading>
          <Text fontSize={14}>
            From <b>N{price}</b> (Per Session)
          </Text>
          <Box>
            <Flex alignItems="center" color="#1570FA" gap={2} fontSize={15}>
              <Text>View more details</Text>
              <IoArrowForward />
            </Flex>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default ServiceCard;
