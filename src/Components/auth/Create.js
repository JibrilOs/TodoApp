import React, { useEffect, useState } from "react";

import { fireBase } from "./Firebase";
import "firebase/auth";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function Create(props) {
  const classes = useStyles();

  //   const [values, setValues] = useState({
  //     email: "",
  //     password: "",
  //   });
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  //   const handleChange = (prop) => (event) => {
  //     setValues({ [prop]: event.target.value });
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    fireBase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((cre) => console.log(cre))
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);

        // ..
      });
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={classes.root}
      style={{ width: "50%", margin: " 22px auto" }}
    >
      <Grid container justify="center">
        <Grid item xs={12} sm={6}>
          <Grid
            container
            style={{
              background: "white",
            }}
            spacing={2}
            justify="center"
          >
            <Grid item xs={12}>
              <TextField
                type="text"
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                id="outlined-basic"
                label="Surname"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                id="outlined-basic"
                label="EMAIL"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="PASSWORD"
                variant="outlined"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                size="large"
                fullWidth
              >
                 Signup
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography align="center">
                <Typography variant="body1">Dont Have account?</Typography>
                <Typography variant="body1">
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    size="small"
                  >
                    Create an account
                  </Button>
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

export default Create;
