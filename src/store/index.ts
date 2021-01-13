import { configureStore, ThunkAction } from "@reduxjs/toolkit"
import { Action, combineReducers } from "redux"
import counterSlice from "./slices/counterSlice"

/** SliceをまとめてひとつのReducerにする */
const reducer = combineReducers({
  counter: counterSlice,
})

/** storeを設定 */
const store = configureStore({ reducer })

/** reducerの型定義 */
export type RootState = ReturnType<typeof reducer>

/** dispatchの型定義 */
export type AppDispatch = typeof store.dispatch

/** thunkの型定義 */
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default store
