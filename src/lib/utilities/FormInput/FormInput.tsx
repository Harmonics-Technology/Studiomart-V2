import {
  Input,
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

import type { FormInputProps } from '../Context/schemas';

const FormInput = <TFormValues extends Record<string, any>>({
  type,
  width = 'full',
  name,
  register,
  validate,
  placeholder,
  required,
  error,
  label,
  changeVisibility,
  icon,
  passwordVisible,
}: FormInputProps<TFormValues>) => {
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
        <Input
          type={type}
          w="100%"
          py="20px"
          px="16px"
          {...register(name, { required, ...validate })}
          placeholder={placeholder}
          fontSize={15}
          _placeholder={{ color: 'text.400', fontWeight: 400 }}
        />
        {icon && (
          <InputRightElement
            onClick={() => changeVisibility()}
            cursor="pointer"
            color="brand.100"
            h="full"
            w="fit-content"
            fontSize=".8rem"
            right=".7rem"
            fontWeight="500"
          >
            {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
          </InputRightElement>
        )}
      </InputGroup>
      <FormErrorMessage fontSize=".7rem" color="red">
        {(error?.type === 'required' && `${label} is required`) ||
          error?.message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default FormInput;
