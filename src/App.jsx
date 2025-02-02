import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'
import Hero from './components/Hero/Hero'
import Header from "./components/Header/Header"
import { ThemeContext } from './context/ThemeContext';
//Expense Tracker, Stock Tracker, Budget Tracker,


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <Header />
        <Hero />
      </ThemeContext.Provider>
    </>
  )
}

export default App
