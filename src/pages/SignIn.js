import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import {login, logout} from "../redux/userSlice"
import { useNavigate } from "react-router-dom";

import classes from "./SignUp.module.css"
import {
    auth,
    signInWithEmailAndPassword,
  } from '../firebase/init-firebase';

import { useSelector } from "react-redux";

function SignIn() {

    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.userAction.isLoggedIn)
    const dispatch = useDispatch();
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

        signInWithEmailAndPassword(auth, emailRef.current.value, emailRef.current.value)
            .then((userAuth) => {
                alert("Sign In Successfully")
                console.log(userAuth)
                dispatch(
                  login({
                    // email: userAuth.user.email,
                    token: userAuth.user.accessToken,
                  })
                )
                navigate("/")
            })
            .catch((err) => {
              alert(err);
        });
    };
    
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

export default SignIn;