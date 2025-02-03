import React, { FC } from "react";

function withLoading<T> (Component: React.ComponentType<T>) {
	return (props: T & { isLoading: boolean }) => {
		const { isLoading, ...rest } = props
		return isLoading ? <p>Loading...</p> : <Component {...rest as T}/>
	}
}

type UserProps = {
	name: string
}

const UserComponent: FC<UserProps> = ({name}) => {
	return <p>Hellor, {name}!</p>
}

const UserWithLoading = withLoading(UserComponent)

export const ParentComponent = () => {
  return (
    <div>
			<UserWithLoading isLoading={ true } name="Juan"/>
			<UserWithLoading isLoading={ false} name="David Martín"/>
    </div>
  );
};
