import langReducer from '@/app/store/slices/langSlice'
import modalReducer from '@/app/store/slices/modalSlice'
import showBackToTopReducer from '@/app/store/slices/showBackToTopSlice'
import themeReducer from '@/app/store/slices/themeSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    lang: langReducer,
    showBackToTop: showBackToTopReducer,
    modal: modalReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
