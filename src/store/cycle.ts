import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Cycle = {
  category: string | null;
};
export type Focus = {
  positionNumber: number;
  isRunning: boolean;
};

const initialState: { cycle: Cycle; focus: Focus } = {
  cycle: {
    category: '胸',
  },
  focus: {
    positionNumber: 1,
    isRunning: false,
  },
};

export const cycleSlice = createSlice({
  name: 'Cycle',
  initialState,
  reducers: {
    updateCycle(state, action: PayloadAction<Cycle>) {
      state.cycle = action.payload;
    },
    updateFocus(state, action: PayloadAction<Focus>) {
      state.focus = action.payload;
    },
    reset() {
      return initialState;
    },
  },
});
