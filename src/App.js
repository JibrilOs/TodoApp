import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { Container, CssBaseline, Box } from "@material-ui/core";
import Navbar from "./Components/layout/Navbar"
import Signin from "./Components/auth/Sigin";

const useStyles = makeStyles({
  root: {
    marginTop: "5px",
    padding: "0 1px",
  },
  box: {},
});

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Box className={classes.box} >
        <Navbar />
        <Signin />
      </Box>

      <CssBaseline />
    </Container>
  );
}

export default App;
