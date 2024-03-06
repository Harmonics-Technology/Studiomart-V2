import type { DeepPartial, Theme } from '@chakra-ui/react';

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme['colors']['blackAlpha']>
> = {
  brand: {
    100: '#1570FA',
    200: '#0C090A',
    300: '#6DD3CE',
    400: '#FFFFFF',
    500: '#000000',
    600: '#3D3D3D',
    700: '',
    800: '',
    900: '',
  },
  text: {
    100: '#0C090A',
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};
