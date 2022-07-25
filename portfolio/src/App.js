import React from 'react'
import './App.css'
import FooterBar from './containers/Footer/Footer'
import ResponsiveAppBar from './containers/Header/NavBar'
import HomePage from './containers/Home/HomePage'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { useLocation } from 'react-router-dom'


const App = () => {
  const location = useLocation()
  return (
    <div className=''>
      <ResponsiveAppBar />
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames='page' timeout={300}>
          <div className='parent'>
            <HomePage />
            <FooterBar />
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default App
