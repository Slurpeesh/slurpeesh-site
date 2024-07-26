import langReducer from '@/app/store/slices/langSlice'
import themeReducer from '@/app/store/slices/themeSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    lang: langReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
