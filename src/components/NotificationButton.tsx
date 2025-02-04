import { useNotification } from "../hooks/useNotification"

export const NotificationButton = () => {
	const { showNotification } = useNotification()

	return (
		<button
			onClick={ () => showNotification('✅ Your transaction has been successful') }
		>
			Confirm transaction
		</button>
	)
}
