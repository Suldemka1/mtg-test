import { configureStore } from "@reduxjs/toolkit";
import ReviewsSliceReducer from "./ReviewSlice";
import { SettingsReducer } from "./SettingsSlice";

const store = configureStore({
  reducer: {
    settings: SettingsReducer,
    reviews: ReviewsSliceReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch