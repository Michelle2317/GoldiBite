import { createContext, useContext, useState } from 'react';
import fakeAccount from '@/src/data/user.json'
import 'react-native-get-random-values'
import { nanoid  } from 'nanoid'
export enum Role {
	ADMIN = 'admin',
	USER = 'user'
}

interface AuthProps {
	authState: { authenticated: boolean | null; username: string | null; role: Role | null };
	onLogin: (username: string, password: string) => void;
	onSigup: (username: string, password: string) => void;
	onLogout: () => void;
}

const AuthContext = createContext<Partial<AuthProps>>({});

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
	const [authState, setAuthState] = useState<{
		authenticated: boolean | null;
		username: string | null;
		id: string | null;
		role: Role | null;
	}>({
		authenticated: null,
		username: null,
		id: null,
		role: null
	});

	const login = (username: string, password: string) => {
       
        const account =  fakeAccount.find(user => (String(user.email) === String(username) && String(user.password) === String(password)));
        if(account){
			setAuthState({
				authenticated: true,
				username: username,
				id: account.id.toString(),
				role: Role.ADMIN
			});
		} else {
			alert('Invalid email or password!');
		}
	};

	const sigup =  (username: string, password: string) => {
        //const account =  fakeAccount.find(user => (String(user.email) === String(username) && String(user.password) === String(password)));
      //  if(account){
			setAuthState({
				authenticated: true,
				username: username,
				id: nanoid(),
				role: Role.ADMIN
			});
		//} else {
		//	alert('Invalid email or password!');
		//}
	};

	const logout = async () => {
		setAuthState({
			authenticated: false,
			username: null,
			id: null,
			role: null
		});
	};

	const value = {
		onLogin: login,
		onLogout: logout,
		onSigup: sigup,
		authState
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};