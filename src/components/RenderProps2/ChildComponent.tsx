import { FC } from "react";

interface ChildComponentProps {
	data: string[]
}

const ChildComponent: FC<ChildComponentProps> = ({ data }) => {
  return (
		data.map((value, index) => (
			<li key={index}>
				{ value }
			</li>
		))
  );
};

export default ChildComponent;
