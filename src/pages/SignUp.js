import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import classes from "./SignUp.module.css"
import {
    auth,
    createUserWithEmailAndPassword
  } from '../firebase/init-firebase';

function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    let inActiveStyle = {
        textDecoration: "none",
        color: "black",
        fontSize: "2rem"
      };
    let activeStyle = {
        textDecoration: "underline",
        color: "darkslategray",
        fontSize: "2rem",
        fontWeight: "bold"
      };


    const submitHandler = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, emailRef.current.value, emailRef.current.value)
        .then((userAuth) => {
              console.log(userAuth)
              alert("Sign Up Success")
            })
        .catch((err) => {
            alert(err);
            console.log(err)
        });
    }
    
    return (
      <>
        <main className={classes.container}>
            <nav>
                <ul className={classes.signNav}>
                    <li>
                    <NavLink
                        to="/signup"
                        style={({ isActive }) =>
                        isActive ? activeStyle : inActiveStyle
                        }
                    >
                        SignUp
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to="/signin"
                        style={({ isActive }) =>
                        isActive ? activeStyle : inActiveStyle
                        }
                    >
                        SignIn
                    </NavLink>
                    </li>
                </ul>
            </nav>
            <div className={classes.formContainer}>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input class="form-control" type="email" id="email" ref={emailRef}/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input class="form-control" type="password" id="password" ref={passwordRef}/>
                </div>
                <button type="submit" class="btn btn-primary" onClick={submitHandler}>Submit</button>
            </div>
        </main>
      </>
    );
  }

export default SignUp;