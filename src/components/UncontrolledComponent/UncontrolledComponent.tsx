import { useRef } from "react";

export const UncontrolledInput = () => {
	const inputRef = useRef<HTMLInputElement>(null)

	const handleSubmit = () => {
		if(inputRef.current)
			alert(`New product added: ${ inputRef.current.value } ✅`)
	}

  return (
    <div>
			<input
				ref={ inputRef }
				type="text"
				placeholder="Product name"
			/>
			<button value={'Add to cart'} onClick={ handleSubmit }>Add to cart</button>
    </div>
  );
};
