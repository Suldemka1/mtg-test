import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ELang, ISettingsSlice } from "./interface";

const initialState: ISettingsSlice = {
  lang: ELang.ru,
};

const settings = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeLang: (state, action: PayloadAction<ELang>) => {
      state.lang = action.payload;
    },
  },
});

const { actions, reducer } = settings;
export const { changeLang } = actions;
export { reducer as SettingsReducer, ELang };
