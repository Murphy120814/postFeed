import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    userPost: [],
  },
  reducers: {
    addPost: {
      reducer: (state, action) => {
        state.userPost.push(action.payload);
      },
      prepare: (name, title, content) => {
        return {
          payload: {
            id: nanoid(),
            title,
            name,
            content,
          },
        };
      },
    },
  },
});

export const selectUserState = (store) => store.user;

export const { addPost } = userSlice.actions;
export default userSlice.reducer;
