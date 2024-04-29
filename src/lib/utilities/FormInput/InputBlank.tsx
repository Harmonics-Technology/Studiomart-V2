import { Input, FormControl, FormLabel, InputGroup } from '@chakra-ui/react';

import { InputBlankProps } from '../Context/schemas';

const InputBlank = ({
  type,
  width = 'full',
  placeholder,
  label,
  readOnly,
  defaultValue,
}: InputBlankProps) => {
  return (
    <FormControl w={width} fontFamily="'DM Sans', sans-serif">
      <FormLabel fontSize="10px" fontWeight={700} textTransform="uppercase">
        {label}
      </FormLabel>
      <InputGroup>
        <Input
          type={type}
          w="100%"
          py="20px"
          px="16px"
          placeholder={placeholder}
          defaultValue={defaultValue}
          fontSize={15}
          readOnly={readOnly}
          _placeholder={{ color: 'text.400', fontWeight: 400 }}
        />
      </InputGroup>
    </FormControl>
  );
};

export default InputBlank;
