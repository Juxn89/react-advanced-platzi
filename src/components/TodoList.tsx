import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../app/store';
import { addToDo, removeToDo } from '../feature/todos/TodoActions';

export const TodoList: FC = () => {
	const [todoText, setTodoText] = useState<string>('')
	const dispath: AppDispatch = useDispatch()
	const todos = useSelector((state: RootState) => state.todos)

	const handleAddToDo = () => {
		const mappedText = emojiMap[todoText.toLowerCase()] || todoText
		dispath(addToDo(mappedText))
		setTodoText('')
	}

	const handleRemoveToDo = (id: number) => {
		dispath( removeToDo(id) )
	}

	const emojiMap: { [key: string]: string } = {
		eat: '🍔',
		sleep: '🛌🏽',
		exercise: '🏃🏽‍♂️‍➡️'
	}

	return(
		<div>
			<em>Made with Redux Toolkit</em>
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