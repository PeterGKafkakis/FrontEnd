import React, { useRef, Link } from "react";
import { useForm } from "react-hook-form";
import styles from "../register/register.module.css";
import Select from "../register/registerComponents";
const axios = require("axios");

const Register = () => {
  const { register, handleSubmit, errors, watch } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();

    axios
      .post("/register", {
        firstName: data.firstName,
        lastName: data.lastName,
        agencyName: data.agency,
        state: data.State,
        email: data.email,
        phone: data.phone,
        password: data.password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const password = useRef({});
  password.current = watch("password", "");
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input
          type='text'
          name='firstName'
          placeholder='Enter First Name'
          ref={register({ required: true, maxLength: 20 })}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type='text'
          name='lastName'
          placeholder='Enter Last Name'
          ref={register({
            required: true,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
      </div>
      <div>
        <label>Agency Name</label>
        <input
          type='text'
          name='agency'
          placeholder='Enter Agency. Ex, State Farm'
          ref={register({ required: true, maxLength: 20 })}
        />
      </div>
      <div>
        <Select label='State' ref={register} />
      </div>
      <div>
        <label>Email</label>
        <input
          name='email'
          placeholder='Enter Your Email'
          ref={register({
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type='tel'
          placeholder='Enter Phone Number, Format: 4433073305'
          name='phone'
          ref={register({ required: true, minLength: 6, maxLength: 12 })}
        />
      </div>

      <label>Password</label>
      <input
        name='password'
        type='password'
        ref={register({
          required: "You must specify a password",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters",
          },
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <label>Repeat password</label>
      <input
        name='password_repeat'
        type='password'
        ref={register({
          validate: (value) =>
            value === password.current || "The passwords do not match",
        })}
      />
      {errors.password_repeat && <p>{errors.password_repeat.message}</p>}

      <div>
        <input type='submit' />
      </div>
      <div className={styles.loginText}>
        Have An Account With Us? <a href='/login'>Login Here</a>
      </div>
    </form>
  );
};

export default Register;
