import toast from 'react-hot-toast';

import { Home } from '../lib/pages/home';
import { StudioService, StudioView } from '~/services';

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

const page = async () => {
  const studioOfTheWeek = await fetchStudioOfTheWeek();
  return <Home studioOfTheWeek={studioOfTheWeek as StudioView[]} />;
};

export default page;
