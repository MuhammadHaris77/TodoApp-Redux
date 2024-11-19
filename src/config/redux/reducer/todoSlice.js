import { createSlice, nanoid } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: "Todo",
    initialState: {
        todo: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todo.push({
                title: action.payload.title,
                id: nanoid
            })

        },
        removeTodo: (state, action) => {
          state.todo.splice(action.payload.index,1)
        },
        updateTodo: (state, action) => {
            state.todo.splice(action.payload.index,1,{title:action.payload.title})
          }
  

    },


})

export const  {addTodo,removeTodo,updateTodo} = todoSlice.actions
export default todoSlice.reducer