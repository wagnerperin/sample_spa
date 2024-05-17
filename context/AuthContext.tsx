"use client";

import { createContext, useState } from "react";

export type SignIdData = {
    username: string;
    password: string;
}

type AuthContextType = {
    login: (data: SignIdData) => void;
    resultado: string | null;
}

export const AuthContext = createContext({} as AuthContextType);

export default function AuthProvider( { children }: { children: React.ReactNode } ){
    const [resultado, setResultado] = useState<string | null>(null);

    async function login({username, password} : SignIdData) {
        const result = await fetch('http://127.0.0.1:5000/auth', {
            method: 'POST',
            body: JSON.stringify({username, password})
        });
        const token = await result.json();
        
        setResultado(token);
    }
    
    return (
        <AuthContext.Provider value={{login, resultado}} >
            {children}
        </AuthContext.Provider>
    );
};