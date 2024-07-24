import React, { useState, useRef } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [isSigninForm, setSigninForm] = useState(true);
  const [message, setMessage] = useState("");
  const email = useRef();
  const password = useRef();
  const signupform = () => {
    setSigninForm(!isSigninForm);
  };

  const handleClick = () => {
    // validate()
    const val = validate(email.current.value, password.current.value);
    // console.log(val);

    if (val) return;
    if (!isSigninForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(error.coode + error.message);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(error.code + error.message);
        });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className=" absolute w-full"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute mt-24 p-10 w-3/12 mx-auto right-0 left-0 bg-black text-white rounded-lg bg-opacity-60 "
      >
        <h1 className="text-3xl py-4">
          {isSigninForm ? "Sign in" : "Sign up"}
        </h1>
        {!isSigninForm && (
          <input
            type="text"
            placeholder="enter your full name"
            className="p-2 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="enter your email"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="enter the password"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500">{message}</p>
        <button
          onClick={handleClick}
          className="p-4 my-6 bg-red-700 border-radius-5 w-full rounded-lg"
        >
          {isSigninForm ? "Sign in" : "Sign up"}
        </button>
        <p className="py-6 cursor-pointer" onClick={signupform}>
          {isSigninForm ? " New to netflix? Signup now" : "Already a user"}
        </p>
      </form>
    </div>
  );
}
