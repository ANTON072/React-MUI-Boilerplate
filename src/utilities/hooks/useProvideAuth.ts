/**
 * Authオブジェクトを作成して、ステートを処理するProvider hook
 */
const useProviderAuth = () => {
  const signin = (email: string, password: string) => {
    console.log("signin")
  }

  const signup = (email: string, password: string) => {
    console.log("signup")
  }

  const signout = () => {
    console.log("signout")
  }

  return {
    signin,
    signup,
    signout,
  }
}

export default useProviderAuth
