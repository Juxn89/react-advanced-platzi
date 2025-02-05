import { createReducer } from '@reduxjs/toolkit';
import { addToDo, removeToDo } from './TodoActions';

type ToDo = {
	id: number;
	text: string
}

type TodoState = ToDo[]

const initialState: TodoState = []

export const todoReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(addToDo, (state, action) => {
			const newToDo = { id: state.length + 1, text: action.payload }
			state.push(newToDo) 
		})
		.addCase(removeToDo, (state, action) => {			
			return state.filter(todo => todo.id !== action.payload)
		})
})