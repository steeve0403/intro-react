import {useState} from 'react';
import {useEffect} from 'react';
import React from 'react'

/*const DarkMode = () => {

    const [darkMode, setDarkMode] = useState(false);
    
    

    useEffect(() => {[]
      const json = localStorage.getItem("site-dark-mode");
      const currentMode = JSON.parse(json);
      if (currentMode) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    }, []);
  
    useEffect(() => {
      if (darkMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
      const json = JSON.stringify(darkMode);
      localStorage.setItem("site-dark-mode", json);
    }, [darkMode]);
  
    return (
      <div className='containerBtnDL'>
        <button className='btn btnDark' onClick={() => setDarkMode(!darkMode)}><i className="fa-solid fa-moon"></i></button>
        <button className='btn btnLight' onClick={() => setDarkMode(!darkMode)}><i className="fa-solid fa-lightbulb"></i></button>
      </div>
    );
  };*/

  const DarkMode = () => {
    const [theme, setTheme] = useState(
      localStorage.getItem('theme') || 'light'
    );
    const toggleTheme = () => {
      if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    };
    useEffect(() => {
      localStorage.setItem('theme', theme);
      document.body.className = theme;
    }, [theme]);
    return (
      <div id={`App ${theme}`} className='containerBtnDL'>
        <button className='btn btnDark' onClick={toggleTheme}><i className="fa-solid fa-moon"></i></button>
        <button className='btn btnLight' onClick={toggleTheme}><i className="fa-solid fa-lightbulb"></i></button>
      </div>
    );
  }

  
  export default DarkMode;