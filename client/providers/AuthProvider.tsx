import { AuthData } from '@/services/auth/auth.helper';
import React, {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useState,
} from 'react';

interface ContextType extends AuthData {
	setData: Dispatch<SetStateAction<AuthData>> | null;
}

export const AuthContext = createContext({} as ContextType);

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [data, setData] = useState<AuthData>({
		user: null,
		accessToken: '',
	});

	return (
		<AuthContext.Provider value={{ ...data, setData }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
