import {
  configureStore,
  EnhancedStore,
} from '@reduxjs/toolkit'

import { cycleSlice } from './cycle'

export const useStore = (): EnhancedStore => {
  return configureStore({
    reducer: cycleSlice.reducer
  })
}
