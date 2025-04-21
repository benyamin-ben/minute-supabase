import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {supabase} from  '../../supabaseClient.ts'
import { Text } from "../../Types/types.ts";



export const getTexts = createAsyncThunk("texts/getTexts", async () => {
  const { data, error } = await supabase.from("texts").select("*");

  if (error) {
    throw new Error(`خطا در گرفتن دیتا: ${error.message}`);
  }

  return data;
});


export const putTexts = createAsyncThunk(
  "texts/putTexts",
  async (payload: Text) => {
    console.log('puttext' , payload)
    const { description, whatsDay } = payload;

    const { data, error } = await supabase
      .from("texts")
      .update({ description })
      .eq("whatsDay", whatsDay)
      .select();

    if (error) {
      throw new Error(`خطا در ویرایش: ${error.message}`);
    }

    return data[0]; // یا کل `data` اگه همه ردیف‌های آپدیت‌شده رو می‌خوای
  }
);

const initialState:{
  id: number;
  description: string;
  whatsDay: number;
}[] = [];



const slice = createSlice({
  name: "texts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTexts.fulfilled, (_, action) => {
      const newState = [...action.payload]
      return newState
    });

    builder.addCase(getTexts.rejected, (_, action) => {
      alert(`Failed to fetch texts: 
        ${action.error.message}`);
    });

    builder.addCase(putTexts.fulfilled, (state, action) => {
      const newState = state.map((item) =>
        item.whatsDay === action.meta.arg.whatsDay
          ? { ...item, description: action.meta.arg.description }
          : item
      );
      return newState;
    });

    builder.addCase(putTexts.rejected, (_, action) => {
      alert(`Failed to edit texts: 
        ${action.error.message}`);
    });
  },
});

export default slice.reducer;
