import { Box, BoxProps } from '@chakra-ui/react';

export const ContainerBox = ({
  children,
  w = '90%',
  ...rest // Receive additional props
}: {
  children: any;
  w?: any;
} & BoxProps) => {
  return (
    <Box w={w} mx="auto" {...rest}>
      {children}
    </Box>
  );
};
