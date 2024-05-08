import TransferOwnership from '~/lib/pages/Client/pages/TransferOwnership';
import { IPageProps } from '~/lib/utilities/Context/schemas';

const page = ({ params }: IPageProps) => {
  const { id } = params;
  return <TransferOwnership bookingId={id as string} />;
};

export default page;
