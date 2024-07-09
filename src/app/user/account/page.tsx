import { cookies } from 'next/headers';

import Account from '~/lib/pages/Client/pages/Account';
import { withPageAuth } from '~/lib/utilities/Functions/withPageAuth';
import { UserService, UserView } from '~/services';

const GetUserById = async (userId: string) => {
  try {
    const res = await UserService.getUserById({ userId });
    if (res.status) {
      return (res as any).result.data;
    }
    return {};
  } catch (error) {
    return {};
  }
};

const page = withPageAuth(async () => {
  const userId = cookies()?.get('userId')?.value;
  const data = await GetUserById(userId as string);

  return <Account data={data as UserView} />;
});

export default page;
