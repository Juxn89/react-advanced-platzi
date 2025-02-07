import { lazy, Suspense } from "react"
import { useCourses } from "./hooks/useCourses"

const CourseList = lazy( () => import('./components/CourseList') )

export const App = () => {
	const {data: courses, isLoading, error } = useCourses()

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
			</Suspense>
		</section>
	)
}