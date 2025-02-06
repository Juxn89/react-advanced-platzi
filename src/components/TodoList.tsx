import { FC, useState } from 'react';
import { useTodoStore } from '../store/useTodoStore';

export const TodoList: FC = () => {
	const [todoText, setTodoText] = useState<string>('')
	const todos = useTodoStore( (state) => state.todos )
	const addToDo = useTodoStore( (state) => state.addTodo )
	const removeToDo = useTodoStore( (state) => state.removeTodo )

	const handleAddToDo = () => {
		const mappedText = emojiMap[todoText.toLowerCase()] || todoText
		addToDo(mappedText)
		setTodoText('')
	}

	const handleRemoveToDo = (id: number) => {
		removeToDo(id)
	}

	const emojiMap: { [key: string]: string } = {
		eat: '🍔',
		sleep: '🛌🏽',
		exercise: '🏃🏽‍♂️‍➡️'
	}

	return(
		<div>
			<em>Made with Zusgtand 🦦</em>
			<h1>Emoji Todo List</h1>
			<input
				type='text'
				value={ todoText }
				onChange={ (e) => setTodoText(e.target.value) }
				onKeyDown={ (e) => { 
					if(e.key === 'Enter') {
						handleAddToDo()
					}
				}}
				placeholder='Add a new ToDo'
			/>
			<ul>
				{
					todos.map(todo => (
						<li key={todo.id} onClick={ () => handleRemoveToDo(todo.id) }>
							{ todo.text }
						</li>
					))
				}
			</ul>
		</div>
	)
}