import { cookies } from 'next/headers';
import { permanentRedirect } from 'next/navigation';

import { OpenAPI } from '~/services';

export function withPageAuth(gssp: any) {
  return (context: any) => {
    const cookieStore = cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
      // Redirect to login page
      permanentRedirect('/login');
    }

    OpenAPI.TOKEN = token;
    OpenAPI.BASE = process.env.NEXT_PUBLIC_API_BASEURL as string;

    return gssp(context); // Continue on to call `getServerSideProps` logic
  };
}
