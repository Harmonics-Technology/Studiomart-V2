import { useCookies } from 'next-client-cookies';

import type { UserView } from '~/services';

export const useLoggedUser = () => {
  const cookies = useCookies();
  const userDetails = cookies.get('studiomart-user');
  let user: UserView = {};
  if (userDetails) {
    user = JSON.parse(userDetails);
  }
  return { user };
};
