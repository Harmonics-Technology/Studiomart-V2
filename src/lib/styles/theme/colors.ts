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
    700: '#2D2327',
    800: '#4787E8',
    900: '#EFF6FF',
  },
  text: {
    100: '#0C090A',
    200: '#AFAFAF',
    300: '#5F5F5F',
    400: '#AFAFAF',
    500: '#636363',
    600: '#C9C7C7',
    700: '#757374',
    800: '#626161',
    900: '#F8F6ED',
  },
  status: {
    100: '#EDBE05',
    200: '#FFF8DC',
    300: '#267E79',
    400: '#E4FFFE',
    500: '#D9B703',
    600: '#323232',
    700: '#F14C4C',
    800: '#CEA502',
    900: '#16A34A',
  },
  studioStatus: {
    100: '#E5E8F0',
    200: '#F6F6F4',
    300: 'rgba(220, 38, 38, 0.1)',
    400: '#4F4F4F',
  },
  scheme: {
    100: '#216015',
    200: '#ECE006',
    300: '#DAF2D6',
    400: '#484848',
    500: '#6dd3ce',
    600: 'rgba(175, 175, 175, 0.5)',
    700: '#F5F9FF',
    800: '#D6E7FF',
    900: '#DC2626',
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};
