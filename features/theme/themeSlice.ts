import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./../../app/store";

export type TTheme = "light" | "dark";

const initialState: TTheme = "dark";

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeToggled: {
      reducer: (state, action: PayloadAction<any>) => {
        state = action.payload;
      },
      prepare: (type: TTheme) => {
        return {
          payload: type,
        };
      },
    },
  },
});

export default themeSlice.reducer;
