import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import AuthProvider from 'providers/AuthProvider';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</QueryClientProvider>
	);
}
