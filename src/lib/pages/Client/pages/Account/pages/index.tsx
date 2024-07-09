import { Box } from '@chakra-ui/react';

import { NavPositionProps } from '~/lib/utilities/Context/schemas';
import { UserView } from '~/services';

import DeleteAccount from './DeleteAccount';
import Profile from './Profile';
import Security from './Security';
import Support from './Support';

const index = ({ navPosition, data }: NavPositionProps) => {
  return (
    <Box
      bg="brand.400"
      w="100%"
      h="100%"
      px="5"
      py="12"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="8px"
    >
      <Box w="80%">
        {navPosition === 1 && <Profile data={data as UserView} />}
        {navPosition === 2 && <Security />}
        {navPosition === 3 && <Support />}
        {navPosition === 4 && <DeleteAccount />}
      </Box>
    </Box>
  );
};

export default index;
