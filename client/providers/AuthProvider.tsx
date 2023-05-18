import { AuthData } from '@/services/auth/auth.helper';
import { AuthService } from '@/services/auth/auth.service';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useEffect,
	useState,
} from 'react';

interface ContextType extends AuthData {
	setData: Dispatch<SetStateAction<AuthData>> | null;
}

export const defaultValueAuthState = {
	user: null,
	accessToken: '',
};
export const AuthContext = createContext({} as ContextType);

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [data, setData] = useState<AuthData>(defaultValueAuthState);

	const { pathname } = useRouter();

	useEffect(() => {
		const accessToken = Cookies.get('accessToken');
		if (accessToken) {
			const user = JSON.parse(localStorage.getItem('user') || '');
			setData({
				user,
				accessToken,
			});
		}
	}, []);

	useEffect(() => {
		const accessToken = Cookies.get('accessToken');
		if (!accessToken && !data.user) {
			AuthService.logout();
			setData(defaultValueAuthState);
		}
	}, [pathname]);

	return (
		<AuthContext.Provider value={{ ...data, setData }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
