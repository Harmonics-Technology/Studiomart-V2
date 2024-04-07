import { Box, Circle, HStack, useRadio, Text } from '@chakra-ui/react';

export default function RadioBtn(props: any) {
  //
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <HStack>
        <Circle bgColor="#D9D9D9" size="1rem">
          <Circle
            {...checkbox}
            cursor="pointer"
            size=".6rem"
            _checked={{
              bg: props?.bg || 'brand.100',
            }}
            _focus={{
              boxShadow: 'outline',
            }}
          />
        </Circle>
        <Text
          {...checkbox}
          color="#263238"
          fontWeight="400"
          fontSize=".9rem"
          _checked={{ fontWeight: '800' }}
        >
          {props?.children}
        </Text>
      </HStack>
    </Box>
  );
}
