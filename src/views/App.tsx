import { useSelector } from "react-redux"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { RootState } from "store"
import { ErrorBoundary } from "react-error-boundary"
import { Box, Container, makeStyles } from "@material-ui/core"
import PageNotFound from "./components/PageNotFound"
import HomePage from "./pages"
import LoginPage from "./pages/login"
import ErrorFallback, { handleError } from "./components/ErrorFallback"
import GlobalFooter from "./components/GlobalFooter"
import GlobalHeaderContainer from "./components/GlobalHeader.container"

/**
 * 認証が必要なページのラッパーコンポーネント
 */
const PrivateRoute: React.FC = ({ children, ...rest }) => {
  const { profile: userProfile } = useSelector((state: RootState) => state.user)

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return userProfile !== null ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }}
    />
  )
}

/**
 * Appコンポーネント
 */
const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
  },
}))

const App: React.FC = () => {
  const classes = useStyles()

  return (
    <BrowserRouter>
      <Box className={classes.root} display="flex" flexDirection="column">
        <GlobalHeaderContainer />
        <Box flexGrow="1">
          <Container>
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onError={handleError}
            >
              <Switch>
                {/* パブリックページ */}
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <PrivateRoute>
                  {/* プライベートページ */}
                  <Switch>
                    <Route exact path="/">
                      <HomePage />
                    </Route>
                    <Route component={PageNotFound} />
                  </Switch>
                </PrivateRoute>
              </Switch>
            </ErrorBoundary>
          </Container>
        </Box>
        <GlobalFooter />
      </Box>
    </BrowserRouter>
  )
}

export default App
