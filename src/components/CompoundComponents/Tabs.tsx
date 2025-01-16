import { Children, FC, isValidElement, ReactElement, ReactNode, useState } from "react";
import classes from "./CompoundComponents.module.css";

interface TabsProps {
	children: ReactNode
}

const Tabs: FC<TabsProps> = ({ children }) => {
	const [activeIndex, setActiveIndex] = useState<number>(0)

	const tabElements = Children.toArray(children).filter(
		(child): child is ReactElement => isValidElement(child)
	)

	const handleTabClick = (index: number) => setActiveIndex(index)

  return (
    <div className={classes.Tabs}>
			<ul>
				{
					tabElements.map( (child, index) => (
						<li
							key={index}
							className={ `${index === activeIndex ? classes.TabActive : ""}` }
							onClick={ () => handleTabClick(index) }
						>
							{ child.props.label }
						</li>
					 ))
				}
			</ul>
			<p className={ classes.TabContent }>
				{ tabElements[activeIndex] }
			</p>
    </div>
  );
};

export default Tabs;
