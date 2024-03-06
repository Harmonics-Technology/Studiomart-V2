import { Select, Box } from '@chakra-ui/react';

interface CustomSelectProps {
  options?: string[];
  width: string;
  value: string;
  setValue: (value: string) => void;
}

const CustomSelect = ({
  width,
  value,
  setValue,
  options,
}: CustomSelectProps) => {
  return (
    <Box w={width}>
      <Select
        w="100%"
        h="45px"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {options?.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default CustomSelect;
