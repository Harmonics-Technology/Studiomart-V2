import Studios from '~/lib/pages/Client/pages/Studios';
import { IPageProps } from '~/lib/utilities/Context/schemas';
import { StudioService, StudioViewPagedCollection } from '~/services';

const fetchData = async (offset: number, limit: number, search: string) => {
  try {
    const allStudios = await StudioService.listStudios({
      offset: offset || 0,
      limit: limit || 9,
      search,
    });

    if (allStudios?.status) {
      return allStudios?.data;
    }
    return {};
  } catch (error) {
    console.error({ error });
    return {};
  }
};

const page = async ({ searchParams }: IPageProps) => {
  const { offset, limit, search } = searchParams;
  const data = await fetchData(offset, limit, search);
  return <Studios data={data as StudioViewPagedCollection} />;
};

export default page;
