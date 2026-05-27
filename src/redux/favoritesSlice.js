import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const exists = state.favoriterecipes.some(
        (recipe) => recipe.idFood === action.payload.idFood
      );
      if (exists) {
        state.favoriterecipes = state.favoriterecipes.filter(
          (recipe) => recipe.idFood !== action.payload.idFood
        );
      } else {
        state.favoriterecipes.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;