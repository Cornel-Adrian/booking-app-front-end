import React, { useState } from 'react';

interface User {
    name: string,
    email: string,
    createdAt: string,
    role: string,
}


const AppContext = React.createContext({
    currentRole: '',
    setCurrentRole: (currentRole: string) => { },
    currentUser: { name: '', email: '', createdAt: "" },
    setCurrentUser: (currentUser: User) => { }
});



export const AppContextProvider = (props: any) => {

    const [currentRole, setCurrentRole] = useState<any>();
    const [currentUser, setCurrentUser] = useState<any>();


    return (
        <AppContext.Provider
            value={{
                currentRole,
                setCurrentRole,
                currentUser,
                setCurrentUser,

            }}>
            {props.children}
        </AppContext.Provider>)
}



export default AppContext;