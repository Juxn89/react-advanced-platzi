import { createContext, FC, ReactNode, useState } from 'react'

interface NotificationContextType {
	message: string | null
	hideNotification: () => void,
	showNotification: (message: string) => void
}

export const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export const NotificationProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [message, setMessage] = useState<string | null>(null)

	const hideNotification = () => setMessage(null)

	const showNotification = (message: string) => {
		console.log(':)')
		setMessage(message)

		setTimeout(() => { hideNotification() }, 3000)
	}

	return(
		<NotificationContext.Provider value={ {message, hideNotification, showNotification} }>
			{ children }
		</NotificationContext.Provider>
	)
}