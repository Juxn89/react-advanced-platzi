import { FC, ReactNode, useState } from "react";

interface ParentCompoentProps {
	render: (data: string[]) => ReactNode
}

const ParentComponent: FC<ParentCompoentProps> = ({ render }) => {
	const [data] = useState<string[]>(["Apple 🍎", "Banana 🍌", "Orange 🍊"])

	return (
		<ul>
			{ render(data) }
		</ul>
	)
};

export default ParentComponent;
