import { FC, useState } from "react";

type ToggleProps = {
	isToggled?: boolean;
	onToggle?: (value: boolean) => void
}

export const Toggle: FC<ToggleProps> = ({ isToggled = false, onToggle }) => {
	const [internalToggle, setInternalToggle] = useState<boolean>(isToggled)
	const toggle = () => {
		const newToggleValue = !internalToggle
		setInternalToggle(newToggleValue)

		if(onToggle) onToggle(newToggleValue)
	}

  return (
    <button onClick={ toggle }>
			{ internalToggle ? "On 🔛" : "Off 📴" }
    </button>
  );
};

export const ParentComponent = () => {
	const [toggleState, setToggleState] = useState<boolean>(false)

  return (
    <div>
			<p>Toggle is: { toggleState ? "On 🔛" : "Off 📴" }</p>
			<Toggle isToggled={toggleState}  onToggle={ setToggleState }/>
    </div>
  );
};
