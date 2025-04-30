import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx';
import LandingPage from './pages/LandingPage.jsx';
function App() {
  return (
    <>
      <LandingPage/>

    </>
  );
}

export default App;
