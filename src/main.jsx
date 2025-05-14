import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { router } from './routes/Routes';
import AuthProvider from './Provider/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AuthProvider>
			<HelmetProvider>
				<RouterProvider router={router} />
				<Toaster position="top-right" />
			</HelmetProvider>
		</AuthProvider>
	</StrictMode>
);
