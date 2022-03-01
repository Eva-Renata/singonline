import { useContext, useEffect, useState, createContext } from "react"

//interface er en struktur. i står for interface.
interface iContext {
    //definerer objekt: loginData
    loginData: {
        user_id: number;
        username: string;
        access_token: string;
        token_type: string;
        expires_in: number;
    },
    setLoginData: React.Dispatch<string>
}

const AuthContext = createContext<iContext>({} as any)

// {children} vi sætter den, fordi så alle de tags som kommer ind i authprovider, får adgang til indhold
const AuthProvider:React.FC = ({children}) => {
    const [loginData, setLoginData] = useState<any>('')

    useEffect(()=> {
        const session_token = sessionStorage.getItem('token');
        if(session_token) {
            setLoginData(JSON.parse(session_token))
        }
    }, [children])

    return (
        <AuthContext.Provider value={{loginData, setLoginData}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, AuthContext, useAuth }