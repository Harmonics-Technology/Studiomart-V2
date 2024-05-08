import { Button, Icon, Flex, Text, Box } from '@chakra-ui/react';
import Link from 'next/link';
import { IoChevronBackCircleOutline } from 'react-icons/io5';

import type {
  ButtonProps,
  OutlineButtonProps,
  IconButtonProps,
  IconButtonLinkProps,
  BackButtonProps,
  StudioStatusButtonProps,
} from '~/lib/utilities/Context/schemas';

const ButtonComponent: React.FC<ButtonProps> = ({
  bg,
  color,
  text,
  width,
  onClick,
  loading,
  type,
  disabled,
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
      isLoading={loading}
      type={type}
      isDisabled={disabled}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;

export const OutlineButtonComponent: React.FC<OutlineButtonProps> = ({
  color,
  text,
  width,
}) => {
  return (
    <Button
      bg="white"
      color={color}
      py="23px"
      px="16px"
      borderRadius="8px"
      fontWeight="normal"
      border="1px solid"
      borderColor={color}
      width={width}
      _hover={{ bg: color, color: 'white' }}
    >
      {text}
    </Button>
  );
};

export const IconButtonComponent: React.FC<IconButtonProps> = ({
  bg,
  color,
  text,
  icon,
  width,
  flip,
  onClick,
  loading,
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
      onClick={onClick}
      isLoading={loading}
    >
      <Flex alignItems="center" gap={2} flexDir={flip ? 'row-reverse' : 'row'}>
        <Icon as={icon} fontSize={20} />
        <Text>{text}</Text>
      </Flex>
    </Button>
  );
};

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

export const BackButton = ({ linkTo }: BackButtonProps) => {
  return (
    <Link href={linkTo}>
      <Flex alignItems="center" gap="15px">
        <Icon as={IoChevronBackCircleOutline} fontSize={30} color="text.400" />
        <Text fontSize={20} color="text.500">
          Back
        </Text>
      </Flex>
    </Link>
  );
};

export const StudioStatusButton = ({
  ButtonIcon,
  text,
  color,
  onClick,
  isActive,
  isDisabled,
  isLoading,
}: StudioStatusButtonProps) => {
  return (
    <Button
      bg={isActive ? 'brand.400' : 'studioStatus.100'}
      border="1px solid"
      borderColor={isActive ? color : 'text.200'}
      color={isActive ? color : 'text.200'}
      py="28px"
      px="20px"
      borderRadius="8px"
      _hover={{ bg: 'none' }}
      onClick={onClick}
      isDisabled={isDisabled}
      isLoading={isLoading}
    >
      <Flex alignItems="center" gap="8px">
        <ButtonIcon isActive={isActive} />
        <Text fontWeight={500}>{text}</Text>
      </Flex>
    </Button>
  );
};
