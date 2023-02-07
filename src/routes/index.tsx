import App from 'App';
import About from 'pages/about';
import Main from 'pages/main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <div>에러페이지</div>,
		children: [
			{
				index: true,
				loader: async () => ({ title: 'main' }),
				element: <Main />
			},
			{
				path: '/about',
				loader: async () => ({ title: 'about' }),
				element: <About />
			}
		]
	}
]);

export default function RouterIndex() {
	return <RouterProvider router={router} />;
}
