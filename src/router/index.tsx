import { createBrowserRouter, Navigate } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import {
	HomePage,
	ComputadoresPage,
	AboutPage,
	ComputadorPage,
	LoginPage,
	RegisterPage,
	ThankyouPage,
	OrdersUserPage,
	CheckoutPage,
} from '../pages';
import { ClientLayout } from '../layouts/ClientLayout';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'computadores',
				element: <ComputadoresPage />,
			},
			{
				path: 'computadores/:slug',
				element: <ComputadorPage />,
			},
			{
				path: 'nosotros',
				element: <AboutPage />,
			},
			{
				path: 'login',
				element: <LoginPage />,
			},
			{
				path: 'registro',
				element: <RegisterPage />,
			},
			{
				path: 'account',
				element: <ClientLayout />,
				children: [
					{
						path: '',
						element: <Navigate to='/account/pedidos' />,
					},
					{
						path: 'pedidos',
						element: <OrdersUserPage />,
					},
					{
						path: 'pedidos/:id',
						element: <OrdersUserPage />,
					},
				],
			},
		],
	},
	{
		path: '/checkout',
		element: <CheckoutPage />,
	},
	{
		path: '/checkout/:id/thank-you',
		element: <ThankyouPage />,
	},
]);