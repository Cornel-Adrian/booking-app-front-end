import { createContext, useState, ReactNode } from 'react'

interface Props {
    children?: ReactNode
}


const AuthContext = createContext({});

export const AuthProvider = ({ children, ...props }: Props) => {
    const [auth, setAuth] = useState({...props});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;