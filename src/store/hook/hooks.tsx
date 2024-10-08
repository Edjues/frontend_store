import {TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppDispatch,  RootState } from '../store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); 
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
// export const useAppStore = useStore.withTypes<AppStore>()