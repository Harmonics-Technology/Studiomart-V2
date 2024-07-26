import toast from 'react-hot-toast';

import Services from '~/lib/pages/Client/pages/Services';
import { IPageProps } from '~/lib/utilities/Context/schemas';
import {
  OpenAPI,
  RecentlyViewedService,
  ServiceTypeView,
  StudioService,
} from '~/services';

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

const fetchCategories = async () => {
  try {
    const res = await StudioService.getServiceTypes({});
    if (res.data) {
      return res.data;
    }
    toast.error('Failed to fetch categories');
    return {};
  } catch (error) {
    toast.error('Failed to fetch categories');
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
    category,
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
    category,
    state,
    studio
  );
  const categories = await fetchCategories();
  return <Services data={data} categories={categories as ServiceTypeView[]} />;
};

export default page;
