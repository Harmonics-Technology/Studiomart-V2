import { cookies } from 'next/headers';

import ServiceDetails from '~/lib/pages/Client/pages/ServiceDetails';
import { IPageProps } from '~/lib/utilities/Context/schemas';
import {
  OpenAPI,
  RecentlyViewedService,
  ReviewService,
  StudioService,
} from '~/services';

const fetchData = async (id: string, userId: string, token: string) => {
  OpenAPI.TOKEN = token;
  try {
    const singleService = await StudioService.getServiceById({
      id,
    });
    const ratings = await ReviewService.getReviews({ serviceId: id });
    const studioService = await StudioService.listStudioServices({
      studioId: singleService?.data?.studio?.id as string,
      limit: 6,
      offset: 0,
    });
    await RecentlyViewedService.createRecentlyViewed({
      requestBody: { serviceId: id, userId },
    });
    if (singleService?.status) {
      return {
        service: singleService?.data,
        ratings: ratings?.data || { value: [] },
        studios: studioService?.data || { value: [] },
      };
    }
    return { service: {}, ratings: [], studios: { value: [] } };
  } catch (error) {
    // console.error({ error });
    return { service: {}, ratings: {}, studios: { value: [] } };
  }
};
const page = async ({ params }: IPageProps) => {
  const { id } = params;
  const cookieStore = cookies();
  const userCookie = cookieStore.get('studiomart-user')?.value;
  const userId = userCookie ? JSON.parse(userCookie).id : '';
  const token = userCookie && JSON.parse(userCookie).token;
  const data = await fetchData(id, userId as any, token);
  return <ServiceDetails data={data} />;
};

export default page;
