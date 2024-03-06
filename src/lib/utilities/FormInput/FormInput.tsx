import { Input, Box } from '@chakra-ui/react';

interface FormInputProps {
  type: string;
  width: string;
  value: string;
  setValue: (value: string) => void;
}

const FormInput = ({ type, width, value, setValue }: FormInputProps) => {
  return (
    <Box w={width}>
      <Input
        type={type}
        w="100%"
        py="20px"
        px="16px"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Box>
  );
};

export default FormInput;
