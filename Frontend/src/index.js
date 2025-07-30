import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const clien = new QueryClient();

root.render(
	<QueryClientProvider client={clien}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</QueryClientProvider>
);
