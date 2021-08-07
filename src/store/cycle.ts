import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Cycle = {
  category: string | null
}

export type CycleState = {
  cycle: Cycle
}

export type UpdateCyclePayload = Cycle
export type AddHistoryPayload = string

const initialState: CycleState = {
  cycle: {
    category: '胸',
  },
}

export const cycleSlice = createSlice({
  name: 'Cycle',
  initialState,
  reducers: {
    updateCycle(state, action: PayloadAction<UpdateCyclePayload>) {
      state.cycle = action.payload
    },
    reset(): CycleState {
      return initialState
    },
  },
})
