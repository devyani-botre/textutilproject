import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light'); // Dark mode state
  const [alert, setAlert] = useState(null); // Alert state

  // Function to show an alert
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });

    // Remove alert after 2 seconds
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // Function to toggle dark mode
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been Enabled", "success");
      document.title='TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has been Disabled", "success");
      document.title='TextUtils - Light Mode';
    }
  };

  return (
    <>
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter Your Text To Analyze" />
      </div>
    </>
  );
}

export default App;
