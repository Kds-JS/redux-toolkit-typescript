import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../App/store'

interface Task {
    id: number,
    done: boolean,
    text: string
}
interface TodoState {
    value: Task[]
}

const initialState : TodoState = {
    value: [
        { id: 1, text: "Faire les courses", done: false },
        { id: 2, text: "Ménage !", done: true },
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state,action : PayloadAction<string>) => {
            const newTask = {
                id: Date.now(),
                done: false,
                text: action.payload
            }

            state.value.push(newTask);
        },
        toggleTask: (state,action: PayloadAction<number>) => {
            const task = state.value.find(t => t.id === action.payload);
            if(task) {
                task.done = !task.done;
            }
        },
        deleteTask: (state,action: PayloadAction<number>) => {
            state.value = state.value.filter(t => t.id != action.payload);
            return state;
        }
    },
  })

  export const { addTask, toggleTask, deleteTask } = todoSlice.actions

  // Other code such as selectors can use the imported `RootState` type
export const selectTodo = (state: RootState) => state.todo.value

export default todoSlice.reducer