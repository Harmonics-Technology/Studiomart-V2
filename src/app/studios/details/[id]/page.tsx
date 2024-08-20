import toast from 'react-hot-toast';

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

const fetchSimilarServiceStudios = async (id: string) => {
  try {
    const res = await StudioService.listSimilarStudio({ id });
    if (res?.status) {
      return res?.data;
    }
    return {};
  } catch (error: any) {
    toast.error('Failed to fetch similar studios');
    return {};
  }
};

const page = withPageAuth(async ({ params }: any) => {
  const { id } = params;
  const data = await FetchData(id);
  const services = await FetchStudioServices(id);
  const similarServiceStudios = await fetchSimilarServiceStudios(id);

  return (
    <SingleStudioDetails
      data={data as StudioView}
      services={services as StudioViewPagedCollection}
      similarServiceStudios={similarServiceStudios as StudioView[]}
    />
  );
});

export default page;
