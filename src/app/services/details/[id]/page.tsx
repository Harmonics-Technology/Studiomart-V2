import ServiceDetails from '~/lib/pages/Client/pages/ServiceDetails';
import { IPageProps } from '~/lib/utilities/Context/schemas';
import { ReviewService, StudioService } from '~/services';

const fetchData = async (id: string) => {
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
    if (singleService?.status) {
      return {
        service: singleService?.data,
        ratings: ratings?.data || { value: [] },
        studios: studioService?.data || { value: [] },
      };
    }
    return { service: {}, ratings: [], studios: { value: [] } };
  } catch (error) {
    return { service: {}, ratings: {}, studios: { value: [] } };
  }
};
const page = async ({ params }: IPageProps) => {
  const { id } = params;
  const data = await fetchData(id);
  return <ServiceDetails data={data} />;
};

export default page;
