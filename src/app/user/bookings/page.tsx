import { cookies } from 'next/headers';

import Bookings from '~/lib/pages/Client/pages/Bookings';
import { IPageProps } from '~/lib/utilities/Context/schemas';
import { BookingService, OpenAPI } from '~/services';

const fetchData = async (
  offset: number,
  limit: number,
  search: string,
  status: number,
  filterBy: number,
  startDate: string,
  endDate: string
) => {
  const cookie = cookies();
  OpenAPI.TOKEN = cookie.get('token')?.value;
  try {
    const bookings = await BookingService.getBookingsByUser({
      offset: offset || 0,
      limit: limit || 9,
      search,
      status,
      filterBy,
      startDate,
      endDate,
    });
    if (bookings?.status) {
      return bookings?.data;
    }
    return [];
  } catch (error) {
    console.error({ error });
    return [];
  }
};

const page = async ({ searchParams }: IPageProps) => {
  const { offset, limit, search, status, filterBy, startDate, endDate } =
    searchParams;
  const data = await fetchData(
    offset,
    limit,
    search,
    status,
    filterBy,
    startDate,
    endDate
  );
  return <Bookings data={data} />;
};

export default page;
