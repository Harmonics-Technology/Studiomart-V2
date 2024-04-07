import {
  FormControl,
  Text,
  HStack,
  useRadioGroup,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Controller } from 'react-hook-form';

import type { FormRadioProps } from '../Context/schemas';

import RadioBtn from './RadioBtn';

export const FormRadio = <TFormValues extends Record<string, any>>({
  name,
  label = '',
  error,
  control,
  defaultValue = undefined,
  radios,
  flexDir = 'row',
  gap = '1rem',
  bg,
}: FormRadioProps<TFormValues>) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue,
    onChange: undefined,
  });

  const group = getRootProps();
  return (
    <FormControl
      isInvalid={error?.type === 'required' || error?.message !== undefined}
    >
      <Text fontSize="1rem" fontWeight="500" mb=".7rem">
        {label}
      </Text>
      <Controller
        render={({ field }: { field: any }) => (
          // <HStack justify="space-between" spacing={6}>
          <HStack
            aria-label={label}
            {...field}
            defaultValue={defaultValue}
            w="full"
            {...group}
            spacing="0"
            gap={gap}
            flexDir={flexDir}
            align="flex-start"
          >
            {radios.map((value: any, index: any) => {
              const radio = getRadioProps({ value });
              return (
                <RadioBtn {...radio} key={index} bg={bg}>
                  {value}
                </RadioBtn>
              );
            })}
          </HStack>
          // </HStack>
        )}
        name={name}
        control={control}
      />
      <FormErrorMessage fontSize=".7rem" color="red">
        {(error?.type === 'required' && `${label} is required`) ||
          error?.message}
      </FormErrorMessage>
    </FormControl>
  );
};
