import { FC } from "react"
import { useParams } from "react-router-dom"

export const Product: FC = () => {
	const { id } = useParams<{ id: string }>()

	return(
		<>
			<section>
				<h2>Product {id}</h2>
			</section>
		</>
	)
}