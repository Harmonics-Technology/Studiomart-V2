import { onAuthStateChanged } from 'firebase/auth';
import { useCookies } from 'next-client-cookies';
import { createContext, ReactNode, useEffect, useState } from 'react';

import { auth } from '~/lib/components/firebase/firebase';

export const AuthContext = createContext<any>(null);
export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<any>();
  // const [user, setUser] = useState<any>();
  const Cookies = useCookies();
  const loggedInUser = Cookies.get('studiomart-user');

  // const chatUser = {
  //   uid: user?.id,
  //   displayName: user?.firstName,
  //   photoURL: user?.profilePicture,
  // };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, () => {
      // setCurrentUser(loggedUser);
      if (loggedInUser !== undefined) {
        const user = JSON.parse(loggedInUser);
        setCurrentUser({
          uid: user?.id,
          displayName: user?.firstName,
          photoURL: user?.profilePicture,
        });
      }
    });
    return () => {
      unsub();
    };
  }, [loggedInUser]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValue = { currentUser, setCurrentUser };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
