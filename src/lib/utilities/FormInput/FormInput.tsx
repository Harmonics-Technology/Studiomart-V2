import { Input, Box } from '@chakra-ui/react';

interface FormInputProps {
  type: string;
  width: string;
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
}

const FormInput = ({
  type,
  width,
  value,
  setValue,
  placeholder,
}: FormInputProps) => {
  return (
    <Box w={width}>
      <Input
        type={type}
        w="100%"
        py="20px"
        px="16px"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        fontSize={15}
        _placeholder={{ color: 'text.400', fontWeight: 400 }}
      />
    </Box>
  );
};

export default FormInput;