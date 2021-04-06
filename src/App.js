import "./App.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, CssBaseline, Box } from "@material-ui/core";
import Navbar from "./Components/layout/Navbar"
import Signin from "./Components/auth/Sigin";
import Create from "./Components/auth/Create";

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
    <Router>
      <Container maxWidth="xl" className={classes.root}>
        <Box className={classes.box}>
          <Navbar />

          <Switch>
            <Route path="/" exact>
              <Signin />;
            </Route>
            {/* <Route path="/" exact></Route> */}
            <Route path="/signup" exact>
              
              
              
              <Create    />
            
            
            
            </Route>
          </Switch>
        </Box>

        <CssBaseline />
      </Container>
      ;
    </Router>
  );
}

export default App;

