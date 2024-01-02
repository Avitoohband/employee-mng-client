import { createContext, useState } from "react";

const UserContext = createContext();


export const UserProvider = ({children}) =>{
    const [user, setUser] = useState(true);

    const updateUser =(userData) =>{
        setUser(
            prevUser => ({...user, userData})
        )
    }

    const logout = () =>{
        setUser(null);
    }

    return <UserContext.Provider value={{user, updateUser, logout}}>
        {children}
    </UserContext.Provider>

}

export default UserContext;



