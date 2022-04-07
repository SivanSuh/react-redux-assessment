import { createSlice, nanoid } from "@reduxjs/toolkit";

{
  /* REDUX SLİCE  */
}

const formSlice = createSlice({
  name: "form",
  initialState: [{ id: nanoid(), title: "First Post!", priority: "Acil" }],

  reducers: {
    addForm: (state, action) => {
      const newForm = {
        id: nanoid(),
        title: action.payload.title,
        priority: action.payload.priority,
      };
      state.push(newForm);
    },
    updateForm: (state, action) => {
      const { id, postPr } = action.payload;
      console.log(id, postPr);
      const editPost = state.find((post) => post.id === id);
      if (editPost) {
        editPost.priority = postPr;
      }
    },
    deleteForm: (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    },
  },
});
export const { addForm, updateForm, deleteForm } = formSlice.actions;
export default formSlice.reducer;
