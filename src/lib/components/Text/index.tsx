import { Text } from '@chakra-ui/react';

interface CustomTextProps {
  text: string;
}

const CustomText: React.FC<CustomTextProps> = ({ text }) => {
  return (
    <Text lineHeight="26px" fontSize="16px" color="#0C090A">
      {text}
    </Text>
  );
};

export default CustomText;
