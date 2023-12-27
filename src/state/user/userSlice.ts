import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  username: string;
  password: string;
  snake_color: string; // Hex string
  highscores: number[]; // List of highscores
  coffees_drank: number; // List of total coffees drank

  token: string;
  refreshToken: string;
}

const initialState: UserState = {
  username: "",
  password: "",
  snake_color: "#00FF00",
  highscores: [],
  coffees_drank: 0,

  token: "",
  refreshToken: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    updateSnakeColor: (state, action: PayloadAction<string>) => {
      state.snake_color = action.payload;
    },
    updatePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    updateHighscores: (state, action: PayloadAction<number[]>) => {
      state.highscores = action.payload;
    },
    updateCoffeesDrank: (state, action: PayloadAction<number>) => {
      state.coffees_drank = action.payload;
    },
    updateToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    updateRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
      localStorage.setItem("refreshToken", JSON.stringify(action.payload));
    },
  },
});

export default userSlice.reducer;
export const {
  updateUsername,
  updateSnakeColor,
  updateCoffeesDrank,
  updateHighscores,
  updatePassword,
  updateToken,
  updateRefreshToken,
} = userSlice.actions;
