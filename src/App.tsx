import { lazy, Suspense, useMemo, useState, useTransition } from "react"
import { useCourses } from "./hooks/useCourses"

const CourseList = lazy( () => import('./components/CourseList') )

export const App = () => {
	const {data: courses, isLoading, error } = useCourses()
	const [currentPage, setCurrentPage] = useState(1)

	const coursesPerPage = 2
	const [isPending, startTransition] = useTransition()

	const currentCourses = useMemo( () => {
		if(!courses) return []

		const indexOfLastCourse = currentPage * coursesPerPage
		const indexOfFirstCourse = indexOfLastCourse - coursesPerPage

		return courses?.slice(indexOfFirstCourse, indexOfLastCourse)
	}, [courses, currentPage, coursesPerPage] )

	if(isLoading)
		return <div>Loading...</div>

	if(error)
		return <div>Error: { error.message }</div>

	if(!courses)
		return <>No courses found</>

	return(
		<section>
			<h1>📚 Learning courses | TanStack Query 📚</h1>
			<Suspense fallback={ <p>Loading courses...</p> }>
				<CourseList courses={ currentCourses } />
				<div>
					{
						Array.from({ length: Math.ceil(courses.length / coursesPerPage) }, (_, index) => (
							<button
								key={ index }
								onClick={ () => { 
									startTransition( () => {
										setCurrentPage(index + 1)
									} )
								 } }
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