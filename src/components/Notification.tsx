import { FC } from 'react'
import { useNotification } from '../hooks/useNotification'

export const Notification: FC = () => {
	const { message } = useNotification()

	if(!message)
		return null

	return (
		<aside>
			<p>{ message }</p>
		</aside>
	)
}
