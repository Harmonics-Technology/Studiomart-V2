import type { DeepPartial, Theme } from '@chakra-ui/react';
// import { Figtree as FontBody } from 'next/font/google';
import localFont from 'next/font/local';

// export const fontBody = FontBody({
//   subsets: ['latin'],
//   variable: '--font-body',
// });
export const fontBody = localFont({
  src: [
    {
      path: '../../../../public/fonts/Satoshi-Regular.otf',
      weight: '400',
    },
    {
      path: '../../../../public/fonts/Satoshi-Medium.otf',
      weight: '500',
    },
    {
      path: '../../../../public/fonts/Satoshi-Bold.otf',
      weight: '700',
    },
    {
      path: '../../../../public/fonts/Satoshi-Black.otf',
      weight: '900',
    },
  ],
  variable: '--font-body',
});

export const fonts: DeepPartial<Theme['fonts']> = {
  heading: fontBody.style.fontFamily,
  body: fontBody.style.fontFamily,
};
