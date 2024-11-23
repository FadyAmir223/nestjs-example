import { create } from 'zustand'

type DialogState = {
  isOpen: boolean
}

type DialogActions = {
  setOpen: (open: boolean) => void
}

type DialogSlice = DialogState & DialogActions

const initialState: DialogState = {
  isOpen: false,
}

export const useDialogStore = create<DialogSlice>((set) => ({
  ...initialState,
  setOpen: (isOpen) => set({ isOpen }),
}))
