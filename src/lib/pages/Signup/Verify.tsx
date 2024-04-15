'use client';

import { VStack, Text, Button, Box, Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { UserService } from '~/services';

export const Verify = ({ code }: { code: string }) => {
  const router = useRouter();
  const [success, setSuccess] = useState<any>({
    status: false,
    data: '',
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const verifyUser = async () => {
      setLoading(true);
      try {
        const data = await UserService.verify({
          token: code,
        });
        if (data.status) {
          setLoading(false);
          setSuccess({ status: true, data: data.data });
          return;
        }
        setLoading(false);
        setSuccess({ status: false, data: data.message });
      } catch (error: any) {
        setLoading(false);
        setSuccess({
          status: false,
          data: error?.message || error?.body?.message,
        });
      }
    };
    verifyUser();
  }, [code]);
  return (
    <Box my="4rem">
      {loading ? (
        <VStack spacing="1rem">
          <Spinner color="#1570fa" size="lg" />
          <Text fontWeight="600" fontSize="1.1rem">
            Loading verification, please wait
          </Text>
        </VStack>
      ) : (
        <VStack mb="2rem" w="60%" mx="auto" gap="2rem">
          <Text textAlign="center" w="50%">
            {success.status
              ? `Hi there! Your account verification process was successful, you can now proceed to login to enjoy all our amazing features on studiomart`
              : success.data}
          </Text>
          <Button
            w="50%"
            mx="auto"
            h="3rem"
            bgColor="brand.100"
            color="white"
            onClick={() =>
              success.status ? router.push('/sign-in') : router.refresh()
            }
          >
            {success.status ? 'Login' : 'Retry'}
          </Button>
        </VStack>
      )}
    </Box>
  );
};
