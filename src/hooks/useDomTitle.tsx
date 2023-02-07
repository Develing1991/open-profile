import { useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';
interface ILoaderData {
	title: string;
}
export default function useDomTitle() {
	const { title } = useLoaderData() as ILoaderData;

	useEffect(() => {
		document.title = title;
	}, []);

	return <div>useDomTitle</div>;
}
