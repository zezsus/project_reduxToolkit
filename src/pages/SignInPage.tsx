/** @format */

import React, { useEffect, useState } from "react";
import "../assets/styles/pages/SignIn.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { getAllUser } from "../features/users/userSlice";

const SignInPage: React.FC = () => {
  const [error, setError] = useState("");
  const listUser = useSelector((state: RootState) => state.users.listUser);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const navigate = useNavigate();

  const handleSignIn = () => {
    if (!username || !password) {
      setError("Missing username or password");
      setTimeout(() => setError(""), 3000);
    } else {
      for (let i = 0; i < listUser.length; i++) {
        if (
          listUser[i].username === username &&
          listUser[i].password === password
        ) {
          navigate("/");
          localStorage.setItem("User", JSON.stringify(listUser[i]));
        } else {
          setError("Incorect username or password");
          setTimeout(() => setError(""), 3000);
        }
      }
    }
  };

  return (
    <div className='signInPage'>
      <div className='signInForm'>
        <div className='signInFormHeader'>
          <h2>Sign In</h2>
        </div>
        <div className='signInFormBody'>
          <form>
            <input
              type='text'
              placeholder='Username'
              value={username}
              onChange={(e: any) => setUserName(e.target.value)}
            />
            {!showPassword ? (
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
            ) : (
              <input
                type='text'
                placeholder='Password'
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
            )}
            <div className='showPassword'>
              <input
                type='checkbox'
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              />
              <span>Show Password</span>
            </div>
            <span className='error'>{error}</span>
          </form>
        </div>
        <div className='signInFormFooter'>
          <button className='btnSignIn' onClick={handleSignIn}>
            SignIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
