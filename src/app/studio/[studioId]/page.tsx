import toast from 'react-hot-toast';

import SingleStudio from '~/lib/pages/SingleStudio';
import { StudioService, StudioView } from '~/services';

const fetchSimilarServiceStudios = async (id: string) => {
  try {
    const res = await StudioService.listSimilarStudio({ id });
    if (res?.status) {
      return res?.data;
    }
    return {};
  } catch (error: any) {
    toast.error('Failed to fetch popular studios');
    return {};
  }
};

const page = async ({ params }: any) => {
  const { id } = params;
  const data = {}; // Replace with the actual data object
  const services = {}; // Replace with the actual services object

  const similarSetviceStudios = await fetchSimilarServiceStudios(id);

  return (
    <SingleStudio
      data={data}
      services={services}
      similarServiceStudios={similarSetviceStudios as StudioView[]}
    />
  );
};

export default page;
