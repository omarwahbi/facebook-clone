import { Button } from "@mui/material";
import React, { useState } from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const[{user}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" />

        <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
