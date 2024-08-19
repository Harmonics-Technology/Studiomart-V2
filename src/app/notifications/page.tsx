import { cookies } from 'next/headers';

import { IPageProps } from '~/lib/utilities/Context/schemas';
import { withPageAuth } from '~/lib/utilities/Functions/withPageAuth';
import Notification from '~/lib/utilities/Layouts/Notifications';
import {
  NotificationService,
  NotificationViewPagedCollection,
} from '~/services';

const fetchData = async (userId: any, offset: any, limit: any, isRead: any) => {
  try {
    const data = await NotificationService.getUserNotification({
      userId,
      offset: offset || 0,
      limit: limit || 10,
      isRead,
    });
    if (data?.status) {
      return data?.data;
    }
    return {};
  } catch (error) {
    console.error({ error });
    return {};
  }
};

const page = withPageAuth(async ({ searchParams }: IPageProps) => {
  const { offset, limit, isRead } = searchParams;
  const cookieStore = cookies();
  const userCookie = cookieStore.get('studiomart-user')?.value;
  const userId = userCookie ? JSON.parse(userCookie).id : '';
  const notifications = await fetchData(userId, offset, limit, isRead);
  return (
    <Notification
      notifications={notifications as NotificationViewPagedCollection}
    />
  );
});

export default page;
