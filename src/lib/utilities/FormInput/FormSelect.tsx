import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputGroup,
  Select,
} from '@chakra-ui/react';
import { TfiAngleDown } from 'react-icons/tfi';

import type { FormSelectProps } from '../Context/schemas';

const FormSelect = <TFormValues extends Record<string, any>>({
  width = 'full',
  name,
  register,
  validate,
  placeholder,
  required,
  error,
  label,
  options,
  h,
}: FormSelectProps<TFormValues>) => {
  return (
    <FormControl
      w={width}
      isInvalid={error as unknown as boolean}
      fontFamily="'DM Sans', sans-serif"
    >
      <FormLabel fontSize="10px" fontWeight={700} textTransform="uppercase">
        {label}
      </FormLabel>
      <InputGroup>
        <Select
          {...register(name, { required, ...validate })}
          icon={<TfiAngleDown color="#DFDFE6" fontSize=".8rem" />}
          placeholder={placeholder}
          w="100%"
          h={h}
          borderRadius="4px"
          focusBorderColor="none"
          borderColor="gray.400"
          _placeholder={{
            fontSize: '14px',
          }}
        >
          {options}
        </Select>
      </InputGroup>
      <FormErrorMessage fontSize=".7rem" color="red">
        {(error?.type === 'required' && `${label} is required`) ||
          error?.message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default FormSelect;
