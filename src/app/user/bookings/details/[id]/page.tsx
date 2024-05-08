import BookingInformation from '~/lib/pages/Client/pages/BookingInformation';
import { IPageProps } from '~/lib/utilities/Context/schemas';
import { withPageAuth } from '~/lib/utilities/Functions/withPageAuth';
import { BookingService, BookingView } from '~/services';

const fetchData = async (id: string) => {
  try {
    const booking = await BookingService.getBooking({
      id,
    });
    if (booking?.status) {
      return booking?.data;
    }
    return {};
  } catch (error) {
    console.error({ error });
    return {};
  }
};

const page = withPageAuth(async ({ params }: IPageProps) => {
  const { id } = params;
  const data = await fetchData(id);
  return <BookingInformation bookings={data as BookingView} />;
});

export default page;
