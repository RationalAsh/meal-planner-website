import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PlanMeal from './components/PlanMeal';
import Login from './components/Login';
import Signup from './components/Signup';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { Container } from '@mui/material';
import NoMatch from './components/NoMatch';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);


function App() {
  return (
    <>
    <Container maxWidth="xl">
        {/* <Signup /> */}
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </Router>
    </Container>
    {/* <ResponsiveAppBar />
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/plan-meal" element={<PlanMeal />} />
      </Routes>
    </Router> */}
    </>
  );
}

export default App;