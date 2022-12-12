import { createContext, useContext, useState } from "react";

const userContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const value = { currentUser, setCurrentUser };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export const UseContext = () => {
  return useContext(userContext);
};
