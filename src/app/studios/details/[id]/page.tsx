import SingleStudioDetails from '~/lib/pages/SingleStudio';
import { withPageAuth } from '~/lib/utilities/Functions/withPageAuth';
import {
  StudioService,
  StudioView,
  StudioViewPagedCollection,
} from '~/services';

const FetchData = async (id: string) => {
  try {
    const res = await StudioService.getStudioById({ id });
    if (res.status) {
      return res.data;
    }
    return {};
  } catch (error) {
    return {};
  }
};

const FetchStudioServices = async (id: string) => {
  try {
    const res = await StudioService.listStudioServices({
      studioId: id,
      limit: 6,
      offset: 0,
    });
    if (res.status) {
      return res.data;
    }
    return {};
  } catch (error) {
    return {};
  }
};

const page = withPageAuth(async ({ params }: any) => {
  const { id } = params;
  const data = await FetchData(id);
  const services = await FetchStudioServices(id);

  return (
    <SingleStudioDetails
      data={data as StudioView}
      services={services as StudioViewPagedCollection}
    />
  );
});

export default page;
