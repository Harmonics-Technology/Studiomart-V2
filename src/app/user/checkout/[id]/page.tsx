import PaymentPage from '~/lib/pages/Client/pages/Payment/PaymentPage';
import { IPageProps } from '~/lib/utilities/Context/schemas';
import { withPageAuth } from '~/lib/utilities/Functions/withPageAuth';
import { BookingService } from '~/services';

const getData = async (id: any) => {
  try {
    const data = await BookingService.getBooking({
      id,
    });
    if (data?.status) {
      return data?.data;
    }
    return {};
  } catch (error) {
    console.error({ error });
    return {};
  }
};

const page = withPageAuth(async ({ params }: IPageProps) => {
  const { id } = params;
  const data = await getData(id);
  return <PaymentPage bookings={data as BookingService} />;
});

export default page;
