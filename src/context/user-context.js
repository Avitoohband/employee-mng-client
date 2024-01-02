import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  const updateUser = (userData) => {
    userData = {
      ...userData,
      password: "",
    };
    const userDataString = JSON.stringify(userData);
    setUser(userDataString);
    localStorage.setItem("user", userDataString);
  };

  const setUserOnly = (userString) => {
    setUser(userString);
  };

  const logout = () => {
    setUser(null);
    localStorage.clear();
  };

  return (
    <UserContext.Provider value={{ user, updateUser, setUserOnly, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
