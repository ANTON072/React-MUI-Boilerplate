import {
  AppBar,
  Box,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import clsx from "clsx"

export type Props = {
  /** ログイン */
  isLoggedIn: boolean
  /** 環境名 */
  env: string
  /** サイドメニューの開閉 */
  onOpenSidebar: () => void
}

const useStyle = makeStyles((theme) => ({
  title: {
    fontWeight: "bold",
    fontSize: 18,
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    "&:disabled": {
      visibility: "hidden",
    },
  },
  env: {
    textTransform: "capitalize",
  },
}))

const GlobalHeader: React.FC<Props> = ({ isLoggedIn, env, onOpenSidebar }) => {
  const classes = useStyle()

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          className={clsx(classes.menuButton)}
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => onOpenSidebar()}
          disabled={!isLoggedIn}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6">
          管理画面
        </Typography>
        <Box border="1px solid #FFF" px={2}>
          <Typography className={classes.env} variant="body2">
            {env}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default GlobalHeader
