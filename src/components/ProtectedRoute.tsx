import { FC, ReactNode } from "react"
import { Navigate } from "react-router-dom"

interface ProptectedRouteProps {
	isAuthenticated: boolean,
	children: ReactNode
}

export const ProtectedRoute: FC<ProptectedRouteProps> = ({ isAuthenticated, children }) => {

	if(!isAuthenticated)
		return <Navigate to={ '/' } />

	return(
		<>
			{ children }
		</>
	)
}