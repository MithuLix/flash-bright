import { Link } from 'react-router-dom'
import React, { useState, useContext } from 'react';
import brand from '../Images/logo.png';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import googleIcon from '../Images/google-logo.svg';

// firebase imported files
import "firebase/auth";
import firebase from "firebase/app";
import firebaseConfig from './firebaseConfig';
if (firebase.apps.length === 0) { firebase.initializeApp(firebaseConfig); }


export default function Login() {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({ isSignedIn: false, name: '', email: '', photo: '', error: '', success: false });
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  //Usual login/out method
  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user }
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserName(user.name);
          history.push(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        })
    }
    if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        })
    }
    e.preventDefault();
  }

  // updateUserInfo
  const updateUserName = name => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name
    }).then(() => { })
      .catch((error) => { console.log(error) })
  }

  const setUserToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
      sessionStorage.setItem('token', idToken);
    }).catch(function (error) { console.log(error); });
  }



  //Google sign in/out provider
  const GoogleSignIn = () => {
    var GoogleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(GoogleProvider)
      .then(res => {
        const { displayName, photoURL, email } = res.user;
        const signedInUser = { isSignedIn: true, name: displayName, email: email, photo: photoURL }
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => { console.log(error.message) })
  }


  return (
    <div className="md:container py-20">
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8  bg-gray-700 p-4 rounded">
          <div>
            <img className="mx-auto h-12 w-auto" src={brand} alt="Workflow" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">{newUser ? 'Sign up to your account' : 'Sign in to your account'}</h2>
          </div>
          <form onsubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px ">
              {newUser &&
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Name
                  </label>
                  <input
                    onBlur={handleBlur}
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="appearance-none  rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="enter full name"
                  />
                </div>
              }
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  onBlur={handleBlur}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  onBlur={handleBlur}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-red-400 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
                  Remember me
                </label>
              </div>
              {!newUser ?
                <div className="text-sm">
                  <Link to="" className="font-medium text-red-400 hover:text-red-500">
                    Forgot your password?
                  </Link>
                </div>
                : ' '
              }
            </div>

            <div className="group relative  flex justify-around ">
              <button onClick={() => setNewUser(!newUser)} type="submit" className=" flex-1 py-2 px-4 mr-1 font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600 border focus:outline-none ">
                Sign In
              </button>

              <button onClick={() => setNewUser(newUser)} type="submit" className=" flex-1 py-2 px-4 ml-1 font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600 border focus:outline-none ">
                Sign Up
              </button>
            </div>
          </form>
          {/* googleSignIn */}
          <button onClick={GoogleSignIn} className="flex w-full py-2 px-2 font-medium rounded-md text-white bg-red-400 hover:bg-red-300 focus:outline-none border ">
            <img className="mx-auto h-6 mr-3 rounded" src={googleIcon} alt="Workflow" /> Google
          </button>
        </div>
      </div>
    </div>
  );
};

