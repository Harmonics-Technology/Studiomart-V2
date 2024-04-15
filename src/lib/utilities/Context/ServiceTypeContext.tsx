import { useCookies } from 'next-client-cookies';
import { createContext, ReactNode, useEffect, useMemo, useRef } from 'react';
import toast from 'react-hot-toast';

import { ServiceTypeView, StudioService } from '~/services';

export const ServiceTypeContext = createContext<any>(null);
export const ServiceTypeProvider = ({ children }: { children: ReactNode }) => {
  const cookies = useCookies();
  const storedTypes = cookies.get('service-types');
  const serviceTypesRef = useRef<any>(
    storedTypes ? JSON.parse(storedTypes) : null
  );

  useEffect(() => {
    const fetchServiceTypes = async () => {
      try {
        const res = await StudioService.getServiceTypes({});
        if (!res.status) {
          toast.error(res?.message as string);
          return;
        }
        serviceTypesRef.current = res?.data;
        cookies.set('service-types', JSON.stringify(res?.data));
      } catch (error) {
        console.error({ error });
      }
    };
    if (storedTypes === null || storedTypes === undefined) {
      fetchServiceTypes();
    } else {
      serviceTypesRef.current = JSON.parse(storedTypes);
    }
  }, [cookies, storedTypes]);

  const contextValue = useMemo(
    () => ({
      serviceTypes: serviceTypesRef.current as ServiceTypeView[],
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [serviceTypesRef.current]
  );

  return (
    <ServiceTypeContext.Provider value={contextValue}>
      {children}
    </ServiceTypeContext.Provider>
  );
};
