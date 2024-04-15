import { Verify } from '~/lib/pages/Signup/Verify';

const page = ({ params }: { params: any }) => {
  const { token } = params;
  return <Verify code={token} />;
};

export default page;
