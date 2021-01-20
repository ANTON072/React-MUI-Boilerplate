import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core"

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
  },
}))

const LoginPage: React.FC = () => {
  const classes = useStyles()

  return (
    <form>{}</form>
    // <Box
    //   className={classes.root}
    //   display="flex"
    //   flexDirection="column"
    //   justifyContent="center"
    //   alignItems="center"
    // >
    //   <Box>
    //     <TextField label="メールアドレス" fullWidth />
    //   </Box>
    //   <Box>
    //     <TextField label="パスワード" type="password" fullWidth />
    //   </Box>
    // </Box>
    // <Grid
    //   className={classes.root}
    //   container
    //   justify="center"
    //   alignItems="center"
    //   component="form"
    //   direction="column"
    //   spacing={2}
    //   noValidate
    //   autoComplete="off"
    // >
    //   <Grid item sm={6}>
    //     <TextField label="メールアドレス" fullWidth />
    //   </Grid>
    //   <Grid item>
    //     <TextField label="パスワード" type="password" fullWidth />
    //   </Grid>
    //   <Grid item>
    //     <Button variant="contained" color="primary">
    //       ログイン
    //     </Button>
    //   </Grid>
    // </Grid>
  )
}

export default LoginPage
