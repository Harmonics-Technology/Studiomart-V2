import {
  Box,
  Heading,
  Text,
  Stack,
  Flex,
  Circle,
  Image,
} from '@chakra-ui/react';
import { IoArrowForward } from 'react-icons/io5';

import type {
  ServiceCardProps,
  ServiceCardWithStatusProps,
} from '~/lib/utilities/Context/schemas';

const ServiceCard = ({ image, title, rating, price }: ServiceCardProps) => {
  const width = '400px';
  const height = '342px';
  return (
    <Box as="section" width={width} h="auto">
      <Box
        as="section"
        w={width}
        h={height}
        pos="relative"
        overflow="hidden"
        className="mask"
      >
        <Image
          src={image}
          alt="Image"
          width={400}
          height={342}
          objectFit="cover"
        />
        <Box pos="absolute" top="0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="342"
            viewBox="0 0 400 342"
            fill="none"
          >
            <path
              d="M208.547 3.69231C224.543 3.75389 239.874 10.1006 251.232 21.3634C262.591 32.6263 269.068 47.9026 269.265 63.8974C269.335 81.6567 276.374 98.6786 288.868 111.3C301.361 123.922 318.311 131.134 336.068 131.385H336.752C352.634 131.767 367.74 138.328 378.861 149.672C389.982 161.017 396.241 176.251 396.308 192.137V277.607C396.253 293.681 389.835 309.079 378.456 320.433C367.077 331.786 351.664 338.17 335.59 338.188H64.4103C48.3124 338.17 32.8791 331.767 21.4962 320.384C10.1133 309.001 3.71041 293.568 3.69231 277.47V64.4103C3.71041 48.3124 10.1133 32.8791 21.4962 21.4962C32.8791 10.1133 48.3124 3.71041 64.4103 3.69231H208.547ZM208.547 0H64.4103C47.3304 0.00905855 30.9526 6.79803 18.8753 18.8753C6.79803 30.9526 0.00905855 47.3304 0 64.4103L0 277.47C0.00905855 294.55 6.79803 310.928 18.8753 323.005C30.9526 335.082 47.3304 341.871 64.4103 341.88H335.59C352.67 341.871 369.047 335.082 381.125 323.005C393.202 310.928 399.991 294.55 400 277.47V192C399.967 175.149 393.336 158.981 381.526 146.96C369.717 134.94 353.668 128.023 336.821 127.692H336.137C319.368 127.372 303.386 120.525 291.588 108.605C279.789 96.6855 273.106 80.634 272.957 63.8632C272.804 46.8784 265.952 30.6407 253.89 18.6814C241.828 6.72213 225.533 0.00832017 208.547 0Z"
              fill="#1570FA"
            />
          </svg>
        </Box>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          style={{ position: 'absolute' }}
        >
          <defs>
            <mask
              id="svgMask"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              // style={{ width: '100%', height: '342px' }}
              // width={width}
              // height={height}
            >
              <path
                d="M63.4098 339.036C46.8223 339.018 30.9194 332.42 19.1903 320.691C7.46117 308.962 0.863802 293.059 0.845703 276.472V63.4118C0.863802 46.8243 7.46117 30.9214 19.1903 19.1922C30.9194 7.46312 46.8223 0.865755 63.4098 0.847656H207.547C224.029 0.900338 239.829 7.43398 251.535 19.0376C263.241 30.6411 269.913 46.3835 270.111 62.8647C270.172 80.1403 277.012 96.7014 289.161 108.984C301.309 121.267 317.794 128.289 335.068 128.54H335.752C352.111 128.931 367.673 135.686 379.132 147.368C390.591 159.05 397.044 174.74 397.119 191.104V276.574C397.101 293.162 390.504 309.065 378.775 320.794C367.045 332.523 351.143 339.12 334.555 339.138L63.4098 339.036Z"
                fill="white"
              />
            </mask>
          </defs>
        </svg>

        <Circle
          pos="absolute"
          right={0}
          top={0}
          size="6.4rem"
          bgColor="#D6E7FF"
          border="4px solid"
          borderColor="brand.100"
        >
          <Text
            fontSize="1.5rem"
            fontWeight={900}
            lineHeight="0.015rem"
            color="text.100"
          >
            {rating}
          </Text>
        </Circle>
      </Box>
      <Box p="3">
        <Stack spacing={2.5}>
          <Heading fontSize={24} fontWeight={700}>
            {title}
          </Heading>
          <Text>
            From <strong>N{price}</strong> (Per Session)
          </Text>
          <Box>
            <Flex alignItems="center" gap={3} color="#1570FA">
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

export const ServiceCardWithStatus = ({
  image,
  title,
  bookingId,
  dateAndTime,
  status,
  rating,
}: ServiceCardWithStatusProps) => {
  const width = '400px';
  const height = '342px';
  return (
    <Box as="section" width={width} h="auto">
      <Box
        as="section"
        w={width}
        h={height}
        pos="relative"
        overflow="hidden"
        className="mask"
      >
        <Image
          src={image}
          alt="Image"
          width={400}
          height={342}
          objectFit="cover"
        />
        <Box pos="absolute" top="0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="342"
            viewBox="0 0 400 342"
            fill="none"
          >
            <path
              d="M208.547 3.69231C224.543 3.75389 239.874 10.1006 251.232 21.3634C262.591 32.6263 269.068 47.9026 269.265 63.8974C269.335 81.6567 276.374 98.6786 288.868 111.3C301.361 123.922 318.311 131.134 336.068 131.385H336.752C352.634 131.767 367.74 138.328 378.861 149.672C389.982 161.017 396.241 176.251 396.308 192.137V277.607C396.253 293.681 389.835 309.079 378.456 320.433C367.077 331.786 351.664 338.17 335.59 338.188H64.4103C48.3124 338.17 32.8791 331.767 21.4962 320.384C10.1133 309.001 3.71041 293.568 3.69231 277.47V64.4103C3.71041 48.3124 10.1133 32.8791 21.4962 21.4962C32.8791 10.1133 48.3124 3.71041 64.4103 3.69231H208.547ZM208.547 0H64.4103C47.3304 0.00905855 30.9526 6.79803 18.8753 18.8753C6.79803 30.9526 0.00905855 47.3304 0 64.4103L0 277.47C0.00905855 294.55 6.79803 310.928 18.8753 323.005C30.9526 335.082 47.3304 341.871 64.4103 341.88H335.59C352.67 341.871 369.047 335.082 381.125 323.005C393.202 310.928 399.991 294.55 400 277.47V192C399.967 175.149 393.336 158.981 381.526 146.96C369.717 134.94 353.668 128.023 336.821 127.692H336.137C319.368 127.372 303.386 120.525 291.588 108.605C279.789 96.6855 273.106 80.634 272.957 63.8632C272.804 46.8784 265.952 30.6407 253.89 18.6814C241.828 6.72213 225.533 0.00832017 208.547 0Z"
              fill="#1570FA"
            />
          </svg>
        </Box>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          style={{ position: 'absolute' }}
        >
          <defs>
            <mask id="svgMask" maskUnits="userSpaceOnUse" x="0" y="0">
              <path
                d="M63.4098 339.036C46.8223 339.018 30.9194 332.42 19.1903 320.691C7.46117 308.962 0.863802 293.059 0.845703 276.472V63.4118C0.863802 46.8243 7.46117 30.9214 19.1903 19.1922C30.9194 7.46312 46.8223 0.865755 63.4098 0.847656H207.547C224.029 0.900338 239.829 7.43398 251.535 19.0376C263.241 30.6411 269.913 46.3835 270.111 62.8647C270.172 80.1403 277.012 96.7014 289.161 108.984C301.309 121.267 317.794 128.289 335.068 128.54H335.752C352.111 128.931 367.673 135.686 379.132 147.368C390.591 159.05 397.044 174.74 397.119 191.104V276.574C397.101 293.162 390.504 309.065 378.775 320.794C367.045 332.523 351.143 339.12 334.555 339.138L63.4098 339.036Z"
                fill="white"
              />
            </mask>
          </defs>
        </svg>

        <Circle
          pos="absolute"
          right={0}
          top={0}
          size="6.4rem"
          bg="#D6E7FF"
          border="4px solid"
          borderColor="brand.100"
        >
          <Text
            fontSize="1.5rem"
            fontWeight={900}
            lineHeight="0.015rem"
            color="text.100"
          >
            {rating}
          </Text>
        </Circle>
      </Box>
      <Box p="3">
        <Stack spacing={2.5}>
          <Box
            py="7px"
            px="16px"
            border="1px solid"
            textAlign="center"
            borderRadius="100px"
            w={status === 'pending' ? '100px' : '115px'}
            borderColor={status === 'pending' ? 'status.100' : 'status.300'}
            bg={status === 'pending' ? 'status.200' : 'status.400'}
            color={status === 'pending' ? 'status.100' : 'status.300'}
          >
            <Text fontSize={15} textTransform="capitalize">
              {status}
            </Text>
          </Box>
          <Heading fontSize={24} fontWeight={700}>
            {title}
          </Heading>
          <Box>
            <Flex alignItems="center" gap="32px">
              <Box>
                <Text fontWeight={500} color="text.700" mb="4px">
                  Booking ID
                </Text>
                <Text fontSize={18} fontWeight={500} color="brand.600">
                  {bookingId}
                </Text>
              </Box>

              <Box>
                <Text fontWeight={500} color="text.700" mb="4px">
                  Date and Time
                </Text>
                <Text fontSize={18} fontWeight={500} color="brand.600">
                  {dateAndTime}
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex alignItems="center" gap={3} color="#1570FA">
              <Text>View Details</Text>
              <IoArrowForward />
            </Flex>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
