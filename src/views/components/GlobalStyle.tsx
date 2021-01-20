import { createStyles, makeStyles } from "@material-ui/core"

const useStyle = makeStyles(() =>
  createStyles({
    "@global": {
      html: {
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
        height: "100%",
        width: "100%",
      },
      "*, *::before, *::after": {
        boxSizing: "border-box",
      },
      body: {
        height: "100%",
        width: "100%",
      },
      "#root": {
        height: "100%",
        width: "100%",
      },
    },
  }),
)

const GlobalStyle: React.FC = () => {
  useStyle()

  return null
}

export default GlobalStyle
