import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './reducers/todos'
import textsReducer from  './reducers/texts'
import notesReducer from './reducers/notes'


const store1 = configureStore({
    reducer: {
        todos: todosReducer,
        texts: textsReducer,
        notes : notesReducer
    }
});

export type RootState = ReturnType<typeof store1.getState>;
export type AppDispatch = typeof store1.dispatch;

export default store1

