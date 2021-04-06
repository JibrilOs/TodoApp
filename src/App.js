import "./App.css";
import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, CssBaseline, Box, Typography } from "@material-ui/core";
import Navbar from "./Components/layout/Navbar"
import Signin from "./Components/auth/Sigin";
import Create from "./Components/auth/Create";
import { fireBase } from "./Components/auth/Firebase";

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
  const [hasAccount, setHasAccount] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogout = () => {
    fireBase.auth().signOut();
  };

  const clearInputs = () => {
    setEmail("");
    setPassword("");
    setUser("");
  };
   useEffect(() => {
     fireBase.auth().onAuthStateChanged((user) => {
       if (user) {
         setUser(user);
         var uid = user.uid;
         // ...
       } else {
         <Typography>User DOestn Exist</Typography>;
       }
     });
   }, []);

  return (
    <Router>
      <Container maxWidth="xl" className={classes.root}>
        <Box className={classes.box}>
          <Navbar handleLogout={handleLogout} clearInputs={clearInputs} />
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
          {console.log(user)}
        </Box>

        <CssBaseline />
      </Container>
      ;
    </Router>
  );
}

export default App;

