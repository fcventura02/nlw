import React, { createContext, useState, useEffect, useContext } from 'react';
import * as auth from '../services/auth';
import api from '../services/api';

import AsyncStorage from '@react-native-community/async-storage';

interface User {
    name: string,
    email: string,
};

interface AuthContextData {
    signed: boolean;
    user: User | null;
    loading: boolean;
    signIn(): Promise<void>;
    signOut(): void
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStoragedData() {
            const storageUser = await AsyncStorage.getItem('@RNAuth:user');
            const storageToken = await AsyncStorage.getItem('@RNAuth:token');

            if (storageUser && storageToken) {
                // api.defaults.headers['Authorization'] = `Bearer ${storageToken}`

                setUser(JSON.parse(storageUser));
                setLoading(false)
            }
        }
        loadStoragedData();
    }, [])

    async function signIn() {
        const response = await auth.sigIn();

        // api.defaults.headers['Authorization'] = `Bearer ${response.token}`

        setUser(response.user)

        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@RNAuth:token', response.token);
    };

    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    };

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, loading, signOut }}>
            {children}
        </AuthContext.Provider>
    )
};

export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}

export default AuthContext