import { permanentRedirect } from 'next/navigation';

import { Validate } from '~/lib/pages/Client/pages/Payment/Validate';
import { IPageProps } from '~/lib/utilities/Context/schemas';
import { withPageAuth } from '~/lib/utilities/Functions/withPageAuth';
import { PaymentService } from '~/services';

const getData = async (trxref: any) => {
  try {
    const data = await PaymentService.verifyPayment({
      transactionReference: trxref as string,
    });
    if (data.status) {
      return data.data;
    }
    return { redirectTo: '/payment/cancelled' };
  } catch (error) {
    console.error({ error });
    return {};
  }
};

const page = withPageAuth(async ({ searchParams }: IPageProps) => {
  const { trxref } = searchParams;
  const data = await getData(trxref);
  if (data.redirectTo) {
    permanentRedirect(data.redirectTo);
  }
  return <Validate data={data} />;
});

export default page;
