import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserInterface {
  id: number | null;
  username: string | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  token: string;
}

const initialState: UserInterface = {
  id: null,
  username: null,
  email: null,
  firstName: null,
  lastName: null,
  token: ''
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state, { payload }: PayloadAction<UserInterface>) {
      if (payload) {
        state = payload;
      }
    }
  }
});

export const { setUserInfo } = user.actions;

export default user.reducer;
