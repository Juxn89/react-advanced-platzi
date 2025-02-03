import { useState } from "react";

export const ControlledInput = () => {
	const [value, setValue] = useState('')
	
  return (
    <div>			
			<input
				type="text"
				value={ value }
				placeholder="Cupon code"
				onChange={ (e) => setValue(e.target.value) }
			/>
			<p>
				Cupon code: <b>{value}</b>
			</p>
    </div>
  );
};
