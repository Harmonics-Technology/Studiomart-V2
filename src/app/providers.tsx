'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { useCookies } from 'next-client-cookies';

import { Chakra as ChakraProvider } from '~/lib/components/Chakra';
import { AuthContextProvider } from '~/lib/utilities/Context/AuthContext';
import { ChatContextProvider } from '~/lib/utilities/Context/ChatContext';
import { ServiceTypeProvider } from '~/lib/utilities/Context/ServiceTypeContext';
import ToasterWrapper from '~/lib/utilities/Toast/ToasterWrapper';
import { OpenAPI } from '~/services';

const Providers = ({ children }: { children: React.ReactNode }) => {
  OpenAPI.BASE = process.env.NEXT_PUBLIC_API_BASEURL as string;
  const cookies = useCookies();
  OpenAPI.TOKEN = cookies.get('token');
  return (
    <CacheProvider>
      <ToasterWrapper />
      <AuthContextProvider>
        <ChatContextProvider>
          <ServiceTypeProvider>
            <ChakraProvider>{children}</ChakraProvider>
          </ServiceTypeProvider>
        </ChatContextProvider>
      </AuthContextProvider>
    </CacheProvider>
  );
};

export default Providers;
