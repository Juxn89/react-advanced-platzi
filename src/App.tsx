import { lazy, Suspense, useState, useTransition } from "react"
import { useCourses } from "./hooks/useCourses"

const CourseList = lazy( () => import('./components/CourseList') )

export const App = () => {
	const {data: courses, isLoading, error } = useCourses()
	const [currentPage, setCurrentPage] = useState(1)

	const coursesPerPage = 2
	const [isPending, startTransition] = useTransition()

	if(isLoading)
		return <div>Loading...</div>

	if(error)
		return <div>Error: { error.message }</div>

	if(!courses)
		return <>No courses found</>

	return(
		<section>
			<h1>✨ TanStack Query ✨</h1>
			<Suspense fallback={ <p>Loading...</p> }>
				<CourseList courses={ courses } />
				<div>
					{
						Array.from({ length: Math.ceil(courses.length / coursesPerPage) }, (_, index) => (
							<button
								key={ index }
								onClick={ () => { setCurrentPage(index + 1) } }
							>
								{ index + 1 }
							</button>
						))
					}
				</div>
				{ isPending && <div>Loading new page...</div> }
			</Suspense>
		</section>
	)
}