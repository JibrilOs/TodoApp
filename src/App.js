import "./App.css";
import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, CssBaseline, Box, Typography } from "@material-ui/core";
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

  //user
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Router>
      <Container maxWidth="xl" className={classes.root}>
        <Box className={classes.box}>
          <Navbar />
          {user ? (
            <Typography>Welcome </Typography>
          ) : (
            <Switch>
              <Route path="/" exact>
                <Signin
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  user={user}
                  setUser={setUser}
                />
                ;
              </Route>
              {/* <Route path="/" exact></Route> */}
              <Route path="/signup" exact>
                <Create
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  user={user}
                  setUser={setUser}
                />
              </Route>
            </Switch>
          )}
        </Box>

        <CssBaseline />
      </Container>
      ;
    </Router>
  );
}

export default App;

