import React, { createContext } from 'react'

export const userDataContext = createContext();

const UserContext = ({ children }) => {

    const userData = {
        user: "smit",
        data: "email hai",
    };
    return (
        <userDataContext.Provider value={userData}>
            <div>{children}</div>
        </userDataContext.Provider>
    )
}

export default UserContext