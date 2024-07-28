import { RootState } from '@/app/store'
import { createSlice } from '@reduxjs/toolkit'

export interface IShowBackToTopState {
  value: boolean
}

const initialState: IShowBackToTopState = {
  value: false,
}

export const showBackToTopSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setShow: (state) => {
      state.value = true
    },
    setHide: (state) => {
      state.value = false
    },
  },
})

export const { setShow, setHide } = showBackToTopSlice.actions
export const selectLang = (state: RootState) => state.lang.value
export default showBackToTopSlice.reducer
