import {
  getTodos,
  putCompleteTodos,
  addTodo,
  removeTodo,
  editTodo,
} from "../reducers/todos";
// Middleware to handle fetching data and dispatching actions

import { addNote , getNotes , removeNote , editNote } from "../reducers/notes";
import { AppDispatch } from "../store";
import { TaskType } from "../../Types/types";
import {supabase} from '../../supabaseClient.ts'
import { Note } from "../../Types/asyncActionsType.ts";
import { NoteUpdateType } from "../../Types/asyncActionsType.ts";

export const getTasksThunk = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const { data, error } = await supabase
        .from('tasks')
        .select('*');

      if (error) {
        console.error('خطا در دریافت تسک‌ها:', error);
        alert(`خطا در دریافت تسک‌ها`);
      } else {
        dispatch(getTodos(data));
      }
    } catch (err) {
      alert(`404 Error, please check your internet: ${err}`);
    }
  };
};



export const addTaskThunk = (newTodo: TaskType) => {
  return async (dispatch: AppDispatch) => {
    console.log('newtask' , newTodo)
    try {
      const { data, error } = await supabase
        .from('tasks')
        .insert([newTodo])
        .select(); // برای اینکه مقدار id و سایر ستون‌های برگشتی رو دریافت کنیم

      if (error) {
        console.error('خطا در افزودن تسک:', error);
        alert(`خطا در افزودن تسک`);
      } else {
        // data[0] حاوی تسک جدید با id و سایر اطلاعات
        dispatch(addTodo(data[0]));
      }
    } catch (err) {
      alert('404 Error, please check your internet add task');
    }
  };
};


;

export const editTaskThunk = (updatedTodo: TaskType) => {
  return async (dispatch: AppDispatch) => {
    try {
      const { data, error } = await supabase
        .from('tasks')
        .update(updatedTodo)
        .eq('id', updatedTodo.id)
        .select();

      if (error) {
        console.error('خطا در ویرایش تسک:', error);
        alert('خطا در ویرایش تسک');
      } else {
        dispatch(editTodo(data[0])); // یا updatedTodo
      }
    } catch (err) {
      alert('404 Error, please check your internet');
    }
  };
};


export const removeTaskThunk = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const { error } = await supabase
        .from('tasks')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('خطا در حذف تسک:', error);
        alert('خطا در حذف تسک');
      } else {
        dispatch(removeTodo(id));
      }
    } catch (err) {
      alert('404 Error, please check your internet');
    }
  };
};

export const convertToCompletedThunk = (id: number, time: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const { error } = await supabase
        .from('tasks')
        .update({ isComplete: 1 }) // یا هر فیلدی که داری
        .eq('id', id);

      if (error) {
        console.error('خطا در تکمیل تسک:', error);
        alert('خطا در تکمیل تسک');
      } else {
        dispatch(putCompleteTodos({ mainID: id, timeDifference: time }));
      }
    } catch (err) {
      alert('404 Error, please check your internet');
    }
  };
};



////////////////////////////// notes => 




export const addNewNoteThunk = (newNote:Note) =>{ 
  return async (dispatch:AppDispatch) =>{ 
    const { data, error } = await supabase
    .from('notes')
    .insert([newNote])
    .select() 
    
  if (error) {
    console.error('خطا در افزودن یادداشت:', error)
  } else {
    console.log('یادداشت با موفقیت افزوده شد:', data)
    dispatch(addNote({...newNote , id : data[0].id})) // یا هر اکشنی که داری
  }
  }
}
// dispatch(addNote({...newNote ,  id:res.data.insertId}))

export const getNoteThunk = () =>{ 
  return  async (dispatch:AppDispatch) =>{ 

    
      const { data, error } = await supabase.from('notes').select('*')
      if (error) console.error('error in getting ' , error)
      else dispatch(getNotes(data))
    
    
  }
}




export const deleteNoteThunk = (noteId: number) => {
  return async (dispatch: AppDispatch) => {
    const { data, error } = await supabase
      .from('notes')
      .delete()
      .eq('id', noteId) // فیلتر براساس id

    if (error) {
      console.error('خطا در حذف یادداشت:', error)
    } else {
      console.log('یادداشت حذف شد:', data)
      dispatch(removeNote(noteId)) // اکشنی برای حذف از state
    }
  }
}




export const editNoteThunk = (newNote:NoteUpdateType) => {
  return async (dispatch: AppDispatch) => {
    try {
      const { data, error } = await supabase
        .from('notes')
        .update({
          color: newNote.color,
          description: newNote.description
        })
        .eq('id', newNote.id)
        .select(); // برگردوندن اطلاعات جدید

      if (error) {
        console.error('خطا در ویرایش یادداشت:', error);
      } else {
        dispatch(editNote(data[0])); // فرض بر اینه که editNote اکشن ویرایش در Redux هست
      }
    } catch (err) {
      alert('404 Error, please check your internet');
    }
  };
};



// texts => 

