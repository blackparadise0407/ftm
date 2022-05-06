import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useState,
} from 'react';

const AUTH = 'AUTH';

interface AuthProviderProps {
    children: ReactNode;
}

interface IAuthContext {
    isAuth: boolean;
    onLogin: () => void;
    onSignOut: () => void;
}

const initialState: IAuthContext = {
    isAuth: localStorage.getItem(AUTH) === 'true',
    onLogin: () => {},
    onSignOut: () => {},
};

const AuthContext = createContext<IAuthContext>(initialState);

export function AuthProvider({ children }: AuthProviderProps) {
    const [isAuth, setIsAuth] = useState(initialState.isAuth);

    const onLogin = useCallback(() => {
        setIsAuth(true);
        localStorage.setItem(AUTH, 'true');
    }, []);

    const onSignOut = useCallback(() => {
        setIsAuth(false);
        localStorage.removeItem(AUTH);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isAuth,
                onLogin,
                onSignOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    return useContext(AuthContext);
}
