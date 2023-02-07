import { useState, createContext } from 'react';

interface ITitleContext {
	title: string;
	handleTitle: (title: string) => void;
}
export const TitleContext = createContext<Partial<ITitleContext>>({});

export default function DomTitleContext({
	children
}: {
	children: JSX.Element;
}) {
	const [title, setTitle] = useState('');
	const handleTitle = (title: string) => {
		setTitle(() => title);
	};
	return (
		<TitleContext.Provider value={{ title, handleTitle }}>
			{children}
		</TitleContext.Provider>
	);
}
