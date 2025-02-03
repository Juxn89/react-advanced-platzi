import { FC, useState } from "react";

const useLoading = (initialLoading: boolean = false) => {
	const [isLoading, setIsLoading] = useState<boolean>(initialLoading)

	return {
		isLoading,
		setIsLoading
	}
}

type UserProps = {
	name: string
}

const UserComponent: FC<UserProps> = ({ name }) => {
	const { isLoading, setIsLoading } = useLoading(false)

	if(isLoading) {
		return (
			<div>
				<p>Loading...</p>
				<button onClick={ () => setIsLoading(!isLoading) }>Change loading state</button>
			</div>
		)
	}

  return (
    <div>
			<p>Hello, {name}</p>
			<button onClick={ () => setIsLoading(!isLoading) }>Change loading state</button>
    </div>
  );
};

export const ParentComponent = () => {
  return <UserComponent name={ 'Juan' }/>;
};
