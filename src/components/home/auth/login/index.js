import React, { useState, useContext } from "react";
import { LoginContext } from "../../../../contexts/LoginContext";
import { useForm } from "react-hook-form";
import styles from "../register/register.module.css";
const axios = require("axios");

const Login = () => {
  const { setIsAuthenticated } = useContext(LoginContext);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("/login", {
        email: data.Email,
        password: data.Password,
      })
      .then(
        (response) => {
          setIsAuthenticated(true);
          console.log(response);
        },
        (error) => {
          setIsAuthenticated(false);
          console.log(error);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder='Email'
        name='Email'
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type='text'
        placeholder='Password'
        name='Password'
        ref={register({ required: true })}
      />
      <input type='submit' value='Login' />
      <div className={styles.loginText}>
        Already Registered? <a href='/register'>Register Here</a>
      </div>
    </form>
  );
};

export default Login;
