import SavedStudioPage from '~/lib/pages/SavedStudioPage';
import { IPageProps } from '~/lib/utilities/Context/schemas';
import { withPageAuth } from '~/lib/utilities/Functions/withPageAuth';
import {
  SavedServiceViewPagedCollection,
  StudioService,
  StudioViewPagedCollection,
} from '~/services';

const getData = async (offset: any, limit: any, search: any) => {
  try {
    const studio = await StudioService.listSavedServices({
      offset: offset || 0,
      limit: limit || 9,
      search,
    });
    if (studio?.status) {
      return studio.data;
    }
    return {};
  } catch (err) {
    console.error({ err });
    return {};
  }
};

const getSavedStudios = async (offset: any, limit: any, search: any) => {
  try {
    const studio = await StudioService.listSavedStudios({
      offset: offset || 0,
      limit: limit || 9,
      search,
    });
    if (studio?.status) {
      return studio.data;
    }
    return {};
  } catch (error) {
    console.error({ error });
    return {};
  }
};
const page = withPageAuth(async ({ searchParams }: IPageProps) => {
  const { offset, limit, search } = searchParams;
  const data = await getData(offset, limit, search);
  const studios = await getSavedStudios(offset, limit, search);
  return (
    <SavedStudioPage
      savedServices={data as SavedServiceViewPagedCollection}
      savedStudios={studios as StudioViewPagedCollection}
    />
  );
});

export default page;
