import { Button, Icon, Flex, Text, Box } from '@chakra-ui/react';

interface ButtonProps {
  bg: string;
  color: string;
  text: string;
  width: string;
  onClick: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  bg,
  color,
  text,
  width,
  onClick,
}) => {
  return (
    <Button
      bg={bg}
      color={color}
      py="23px"
      px="16px"
      borderRadius="8px"
      fontWeight="normal"
      w={width}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;

interface OutlineButtonProps {
  color: string;
  text: string;
}

export const OutlineButtonComponent: React.FC<OutlineButtonProps> = ({
  color,
  text,
}) => {
  return (
    <Button
      bg="white"
      color={color}
      py="23px"
      px="16px"
      borderRadius="8px"
      fontWeight="normal"
      border={`1px solid ${color}`}
      _hover={{ bg: color, color: 'white' }}
    >
      {text}
    </Button>
  );
};

interface IconButtonProps {
  bg: string;
  color: string;
  text: string;
  icon: any;
  width: string;
  flip: boolean;
}

export const IconButtonComponent: React.FC<IconButtonProps> = ({
  bg,
  color,
  text,
  icon,
  width,
  flip,
}) => {
  return (
    <Button
      bg={bg}
      color={color}
      px="16px"
      py="23px"
      borderRadius="8px"
      fontWeight="normal"
      border={`1px solid ${color}`}
      _hover={{ bg: 'none' }}
      width={width}
    >
      <Flex alignItems="center" gap={2} flexDir={flip ? 'row-reverse' : 'row'}>
        <Icon as={icon} fontSize={20} />
        <Text>{text}</Text>
      </Flex>
    </Button>
  );
};

interface IconButtonLinkProps {
  text: string;
  icon: any;
  flip: boolean;
}

export const IconButtonLinkComponent: React.FC<IconButtonLinkProps> = ({
  text,
  icon,
  flip,
}) => {
  return (
    <Box
      color="#1570FA"
      fontWeight="normal"
      textDecoration="underline"
      _hover={{ bg: 'none' }}
      bg="none"
      w="auto"
      textAlign="left"
      cursor="pointer"
    >
      <Flex
        alignItems="center"
        gap={1}
        flexDirection={flip ? 'row-reverse' : 'row'}
      >
        <Text>{text}</Text>
        <Icon as={icon} fontSize={20} />
      </Flex>
    </Box>
  );
};
