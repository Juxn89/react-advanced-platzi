import { FC, useReducer, useState } from 'react';

type Todo = {
	id: number,
	text: string
}

type State ={
	todos: Todo[]
}

type Action = 
	| { type: 'ADD_TODO'; payload: string }
	| { type: 'REMOVE_TODO', payload: number }

const initialState: State = {
	todos: []
}

const todoReducer = (state: State, action: Action) => {
	switch (action.type) {
		case 'ADD_TODO': {
			const newTodo: Todo = { id: state.todos.length + 1, text: action.payload }
			return { todos: [...state.todos, newTodo] }
		}
		case 'REMOVE_TODO': {
			return { todos: state.todos.filter(item => item.id !== action.payload ) }
		}
		default:
			return state
	}
}

const emojiMap: { [key: string]: string } = {
	eat: '🍔',
	sleep: '🛌🏽',
	exercise: '🏃🏽‍♂️‍➡️',
}

export const TodoList: FC = () => {
	const [state, dispatch] = useReducer(todoReducer, initialState)
	const [todoText, setTodoText] = useState<string>('')

	const handleAddToDo = () => {
		const mappedText = emojiMap[todoText.toLowerCase() || todoText]
		if(mappedText.trim()) {
			dispatch({ type: 'ADD_TODO', payload: mappedText })
			setTodoText('')
		}
	}

	const handleKeyDown = (event: KeyboardEvent) => {
		if(event.key === 'Enter') {
			handleAddToDo()
		}
	}

	return(
		<div>
			<em>Made with useReducer</em>
			<h1>Emoji Todo List</h1>
			<input
				type='text'
				value={ todoText }
				onChange={ (e) => setTodoText(e.target.value) }
				onKeyDown={ handleKeyDown }
				placeholder='Add a new ToDo'
			/>
			<ul>
				{
					state.todos.map(todo => (
						<li key={todo.id} onClick={ () => dispatch({ type: 'REMOVE_TODO', payload: todo.id }) }>
							{ todo.text }
						</li>
					))
				}
			</ul>
		</div>
	)
}