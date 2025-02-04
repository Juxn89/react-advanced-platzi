import { NotificationProvider } from './context/NotificationContext'
import { NotificationButton } from './components/NotificationButton'
import { Notification } from './components/Notification'

function App() {
  return (
		<NotificationProvider>
			<h1>💸Transaction almost done💸</h1>
			<p>Are you sure you want to complete this transaction?</p>
			<NotificationButton/>
			<Notification />
		</NotificationProvider>
  )
}

export default App
