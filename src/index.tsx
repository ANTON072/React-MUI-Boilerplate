import React from "react"
import ReactDOM from "react-dom"
import App from "views/App"
import { Provider } from "react-redux"
import store from "store"
import { CssBaseline, ThemeProvider } from "@material-ui/core"
import muiTheme from "constants/muiTheme"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={muiTheme}>
      <Provider store={store}>
        <>
          <CssBaseline />
          <App />
        </>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)
