import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { TodoList } from './components/TodoList'
import { store } from './app/store'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
		<Provider store={ store }>
    	<TodoList />
		</Provider>
  </StrictMode>,
)
