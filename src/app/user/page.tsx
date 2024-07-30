import toast from 'react-hot-toast';

import Homepage from '~/lib/pages/Client/pages/Homepage';
import { IPageProps } from '~/lib/utilities/Context/schemas';
import { OpenAPI, RecentlyViewedService, StudioService } from '~/services';

const fetchData = async (
  offset: number,
  limit: number,
  city: string,
  maxPrice: number,
  minPrice: number,
  rating: number,
  serviceType: string,
  state: string,
  studio: string
) => {
  try {
    const allService = await StudioService.listServices({
      offset: offset || 0,
      limit: limit || 9,
      city,
      maxPrice,
      minPrice,
      rating: rating as number,
      serviceTypeId: serviceType,
      state,
      studioId: studio,
    });
    let recentlyViewed;
    if (OpenAPI.TOKEN !== undefined) {
      recentlyViewed = await RecentlyViewedService.getRecentlyViewedItems({
        type: 'service',
      });
    }
    if (allService?.status) {
      return {
        services: allService?.data,
        recents: recentlyViewed?.data || [],
      };
    }
    return { services: { value: [] }, recents: [] };
  } catch (error) {
    console.error({ error });
    return { services: { value: [] }, recents: [] };
  }
};

const fetchPopularStudios = async () => {
  try {
    const res = await StudioService.listPopularStudio({});
    if (res?.status) {
      return res?.data;
    }
    return {};
  } catch (error: any) {
    toast.error('Failed to fetch popular studios');
    return {};
  }
};

const fetchStudioOfTheWeek = async () => {
  try {
    const res = await StudioService.listPopularStudioWeekly({});
    if (res?.status) {
      return res?.data;
    }
    return {};
  } catch (error: any) {
    toast.error('Failed to fetch studio of the week');
    return {};
  }
};

const page = async ({ searchParams }: IPageProps) => {
  const {
    offset,
    limit,
    city,
    maxPrice,
    minPrice,
    rating,
    serviceType,
    state,
    studio,
  } = searchParams;
  const data = await fetchData(
    offset,
    limit,
    city,
    maxPrice,
    minPrice,
    rating,
    serviceType,
    state,
    studio
  );
  const popularStudios = await fetchPopularStudios();
  const studioOfTheWeek = await fetchStudioOfTheWeek();

  return (
    <Homepage
      data={data}
      popularStudios={popularStudios}
      studioOfTheWeek={studioOfTheWeek}
    />
  );
};

export default page;
