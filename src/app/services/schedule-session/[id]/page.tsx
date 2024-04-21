import StudioSchedule from '~/lib/pages/Client/pages/BookSchedule';
import { IPageProps } from '~/lib/utilities/Context/schemas';

const page = ({ params }: IPageProps) => {
  const { id } = params;
  return <StudioSchedule id={id} />;
};

export default page;
