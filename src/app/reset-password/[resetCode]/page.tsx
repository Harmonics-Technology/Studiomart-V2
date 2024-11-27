import ResetPassword from '~/lib/pages/ResetPassword';

const page = async ({ params }: { params: Promise<{ resetCode: string }> }) => {
  const code = (await params).resetCode;
  return <ResetPassword code={code} />;
};

export default page;
