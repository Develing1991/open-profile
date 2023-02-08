import App from 'App';
import About from 'pages/about';
import Ask from 'pages/ask';
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
				loader: async () => ({ title: 'Main' }),
				element: <Main />
			},
			{
				path: '/about',
				loader: async () => ({ title: 'About' }),
				element: <About />
			},
			{
				path: '/ask',
				loader: async () => ({ title: 'Ask Me' }),
				element: <Ask />
			}
		]
	}
]);

export default function RouterIndex() {
	return <RouterProvider router={router} />;
}
