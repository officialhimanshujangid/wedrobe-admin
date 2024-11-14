import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  isSidebarOpen: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen; 
    },
  },
});

export const { setStatus, toggleSidebar } = userSlice.actions;

export default userSlice.reducer;
