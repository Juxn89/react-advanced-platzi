import { FC, memo } from "react"

interface Course {
	id: number,
	title: string,
	description: string,
	duration: string
}

export const CourseList: FC<{ courses: Course[] }> = memo(({ courses }) => {
	return(
		<ul>
			{
				courses.map(course => (
					<li>
						<h2> { course.title } </h2>
						<p> { course.description } </p>
						<p> { course.duration } </p>
					</li>
				))
			}
		</ul>
	)
})

export default CourseList