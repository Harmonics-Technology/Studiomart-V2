import { cookies } from 'next/headers';

import BookingReview from '~/lib/pages/Client/pages/BookingReview';
import { IPageProps } from '~/lib/utilities/Context/schemas';
import { StudioService } from '~/services';

const fetchData = async (id: string) => {
  try {
    const singleService = await StudioService.getServiceById({
      id,
    });
    const cookieStore = cookies();
    const addons =
      cookieStore.get('addons')?.value &&
      JSON.parse(cookieStore.get('addons')?.value as unknown as string);

    if (singleService?.status) {
      return { service: singleService?.data, addons };
    }
    return { service: {}, addons: [] };
  } catch (error) {
    // console.error({ error });
    return { service: {}, addons: [] };
  }
};

const page = async ({ params }: IPageProps) => {
  const { id } = params;
  const data = await fetchData(id);
  return (
    <BookingReview singleService={data.service} id={id} addons={data.addons} />
  );
};

export default page;
