import { RootState } from '@/app/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IModalSlice {
  value: null | string
}

const initialState: IModalSlice = {
  value: null,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<null | string>) => {
      state.value = action.payload
    },
  },
})

export const { setModal } = modalSlice.actions
export const selectModal = (state: RootState) => state.modal.value
export default modalSlice.reducer
