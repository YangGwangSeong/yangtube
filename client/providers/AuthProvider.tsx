import React, {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useState,
} from 'react';

interface DataType {
	user: {
		id: string;
		email: string;
	} | null;
	accessToken: string;
}

interface ContextType extends DataType {
	setData: Dispatch<SetStateAction<DataType>> | null;
}

export const AuthContext = createContext({} as ContextType);

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [data, setData] = useState<DataType>({
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
