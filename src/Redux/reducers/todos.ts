import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../Types/types";
const initialState: Todo[] = [];


const slice = createSlice({
  name: "todos",
  initialState ,
  reducers: {
    getTodos: (_, action) => {
      return  action.payload
    },
    addTodo: (todos, action) => {
      todos.push(action.payload);
    },
    removeTodo: (todos , action) => {
     let newTodo = todos.filter(item => 
      item.id !== action.payload
     )
     return newTodo
    },

    editTodo: (todos, action) => {
      let editedTodo = todos.map(item => {
        if(item.id === action.payload.id){
         return{
                            ...item,
                 whatsDay : action.payload.whatsDay,
                 title: action.payload.title,
                 hourStart: action.payload.hourStart,
                 minuteStart : action.payload.minuteStart    ,
                 hourEnd : action.payload.hourEnd ,
                 minuteEnd: action.payload.minuteEnd,
                 priority : action.payload.priority,
                 description :  action.payload.description
            
          }
        }; return item
      })
      return editedTodo
    },

    putCompleteTodos : (todos , action) => { 
      const newTodos = todos.map(item =>
      {
        if(item.id === action.payload.mainID){
          return {...item , isComplete :1, timeDifference : action.payload.timeDifference }
        }  return item
      }
      )
      return newTodos
    },
    putMoveTomorrow: (todos, action) => {

      const find1:Todo  = todos.find(item => item.id === action.payload) as Todo

      const newTodo = todos.map(item =>{
        if(item.id ===action.payload){
          return {...item , whatsDay : find1.whatsDay+1}  
        } return item
      })

      return newTodo

    } ,
    
    removeAllTodos : () => { 
      const emptyArray:any[] = []
      return emptyArray
    },

  },
});

export const { getTodos, removeAllTodos , putCompleteTodos , putMoveTomorrow, addTodo, removeTodo, editTodo } =
  slice.actions;
export default slice.reducer;
