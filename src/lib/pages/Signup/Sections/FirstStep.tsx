import {
  Box,
  Checkbox,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useCookies } from 'next-client-cookies';
import { useState } from 'react';

import ButtonComponent from '~/lib/components/Button/Button';
import MusicIcon from '~/lib/components/Icons/MusicIcon';
import type { FormStepProps } from '~/lib/utilities/Context/schemas';

const OptionButton = ({
  name,
  studioPreference,
  addToList,
}: {
  name: string;
  studioPreference: string[];
  addToList: any;
}) => {
  const isActive = studioPreference?.find((x) => x === name);
  return (
    <Box
      w={['160px', '192px']}
      border={isActive ? '2px solid #1570FA' : '1px solid #1570FA'}
      bgColor={isActive ? 'brand.100' : 'transparent'}
      px="16px"
      py="12px"
      borderRadius="8px"
      cursor="pointer"
      onClick={() => addToList(name)}
      color={isActive ? 'white' : 'brand.500'}
    >
      <Flex alignItems="center" gap="10px" justifyContent="flex-start">
        <Checkbox
          colorScheme="scheme"
          isChecked={!!isActive}
          onChange={() => addToList(name)}
        />
        <MusicIcon color={isActive ? 'white' : '#1570FA'} />
        <Text fontSize={14}>{name}</Text>
      </Flex>
    </Box>
  );
};

const FirstStep = ({ step, setStep }: FormStepProps) => {
  const [studioPreference, setStudioPreference] = useState<string[]>([]);

  const cookies = useCookies();

  const addToList = (name: string) => {
    const exists = studioPreference?.find((studio) => studio === name);
    if (exists) {
      const filteredItem = studioPreference?.filter(
        (studio) => studio !== name
      );
      setStudioPreference(filteredItem);
      return;
    }
    setStudioPreference([...studioPreference, name]);
  };

  const optionLists = [
    'Music',
    'Video',
    'Make up',
    'Photography',
    'Lifestyle',
    'Sound',
  ];

  const nextStep = () => {
    cookies.set('studioPrefernce', JSON.stringify(studioPreference));
    setStep(step + 1);
  };

  return (
    <Box
      as="section"
      w="100%"
      h={['100vh']}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Stack spacing="45px">
        {/* <Box>
          <VStack spacing={6}>
            <Box display={isMobile ? 'none' : 'block'}>
              <HeadingWithStar
                title="Hey there, explorer!"
                flipStar
                width="508px"
              />
            </Box>
            <Box display={isMobile ? 'block' : 'none'} position="relative">
              <Heading fontSize={30} textAlign="center">
                Hey there, explorer!
              </Heading>
              <Image
                src="/assets/heading-top-bg.png"
                w="35px"
                h="35px"
                position="absolute"
                top="-20px"
                right="-30px"
              />
            </Box>
            <Text fontSize={[16, 24]} fontWeight={500}>
              Let’s get started! Already have an account?{' '}
              <Link href="/sign-in">
                <Box as="span" color="brand.100">
                  Sign in
                </Box>
              </Link>
            </Text>
            <SigninOption text="or sign up with" />
          </VStack>
        </Box> */}
        <Box>
          <Heading fontWeight={900} fontSize={[24, 40]} mb="3px">
            What are you looking for?
          </Heading>
          <Text color="brand.500">
            Don’t worry, you’ll have access to all our studios
          </Text>
        </Box>
        <Box>
          <Grid
            gap={['18px', '36px']}
            templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)']}
          >
            {optionLists.map((item, index) => (
              <OptionButton
                key={index}
                name={item}
                addToList={addToList}
                studioPreference={studioPreference}
              />
            ))}
          </Grid>
        </Box>
        <ButtonComponent
          text="Next"
          color="brand.400"
          bg="brand.100"
          width="100%"
          onClick={nextStep}
        />
      </Stack>
    </Box>
  );
};

export default FirstStep;
