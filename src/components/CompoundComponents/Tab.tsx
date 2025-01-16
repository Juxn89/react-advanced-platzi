import { FC, ReactNode } from "react";

interface TabProps {
	label: string;
	children: ReactNode
}

const Tab: FC<TabProps> = ({ label, children }) => {
  return (
    <>
			<em>{ label }</em>
			<span>{ children }</span>
    </>
  );
};

export default Tab;
