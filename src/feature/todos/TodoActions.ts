import { createAction } from "@reduxjs/toolkit";

export const addToDo = createAction<string>('todo:add')
export const removeToDo = createAction<number>('todo:remove')