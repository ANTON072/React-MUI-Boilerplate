import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "store"
import { toggleSidebar } from "store/slices/globalUiSlice"
import GlobalHeader from "./GlobalHeader"

const GlobalHeaderContainer: React.FC = () => {
  const { profile } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  const onOpenSidebar = useCallback(() => {
    dispatch(toggleSidebar(true))
  }, [dispatch])

  return (
    <GlobalHeader
      isLoggedIn={profile !== null}
      onOpenSidebar={onOpenSidebar}
      env={process.env.REACT_APP_ENV as string}
    />
  )
}

export default GlobalHeaderContainer
