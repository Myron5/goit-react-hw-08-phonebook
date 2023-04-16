import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { RootState } from 'oldRedux/store';
import { IChangeAction } from 'oldRedux/types';

// Define a type for the slice state
interface FilterState {
  value: string;
}

// Define the initial state using that type
const initialState: FilterState = { value: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter: (state, action: PayloadAction<IChangeAction>) => {
      state.value = action.payload.value;
    },
  },
});

const persistConfig = {
  key: 'filter',
  storage,
  whiteList: ['value'],
};

export const filterReducer = persistReducer(persistConfig, filterSlice.reducer);
export const { updateFilter } = filterSlice.actions;
export const getFilter = (state: RootState) => state.filter.value;
