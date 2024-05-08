import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';

import type { FormInputProps } from '../Context/schemas';

const FormTextArea = <TFormValues extends Record<string, any>>({
  width = 'full',
  name,
  register,
  validate,
  placeholder,
  required,
  error,
  label,
  h,
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
      <Textarea
        placeholder={placeholder}
        {...register(name, { required, ...validate })}
        padding="1rem"
        size="sm"
        h={h}
        resize="none"
        focusBorderColor="none"
        // bgColor="rgba(25,25,25,.03)"
        borderColor="gray.400"
        borderRadius="5px"
        // boxShadow="0px 0px 9px rgba(0, 127, 130, 0.37)"
      />
      <FormErrorMessage fontSize=".7rem" color="red">
        {(error?.type === 'required' && `${label} is required`) ||
          error?.message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default FormTextArea;
