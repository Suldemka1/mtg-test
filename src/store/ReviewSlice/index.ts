import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import data from "../../assets/data.json";

const ReviewSlice = createSlice({
  name: "reviews",
  initialState: {
    data: {
      ru: data.ru,
      en: data.en,
    },
  },
  reducers: {
    sortByDate: (state, action) => {},

    getReviewsByNumber: (state, action: PayloadAction<number>) => {
      const data = state.data.ru.filter(
        (item, index) =>
          index < action.payload * 10 && index > (action.payload - 1) * 10
      );

      state.data.ru = data;
    },
  },
});

export const {} = ReviewSlice.actions;
export default ReviewSlice.reducer;
