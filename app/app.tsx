//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import pHlogo from './assets/levels-pipette.png'
import ecLogo from './assets/3d-casual-life-green-leaf-and-energy.png'
import tempLogo from './assets/morphis-glass-thermometer.png'
import backGround from './assets/3d-casual-life-ecology-hand.png'
import './App.css'
// Import the functions you need from the SDKs you need

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid" >
    <button className='rounded-pill' style={{backgroundColor:"coral"}}>
    <a className="navbar-brand" href="#" >
    <img src='./assets/3d-casual-life-ecology-hand.png' alt="" width="30" height="24" className="d-inline-block align-text-top" />   Smart Farm
    </a>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#">Dashboard</a>
      <a className="nav-item nav-link" href="#">Features</a>
      <a className="nav-item nav-link" href="#">Pricing</a>
      <a className="nav-item nav-link disabled" href="#"  aria-disabled="true">Disabled</a>
    </div>
  </div>
  </div>
</nav>

<br></br>
      <h1>Dashboard</h1>
      <br></br>
      <div className='flex-container'>
      <div className="card" style={{backgroundColor:"#292928"}}>
  <img src='./assets/levels-pipette.png' className="card-img-top-ph" alt="..." />

  <div className="card-body">
    <h3 className="card-title" style={{color:"whitesmoke"}}>pH levels</h3>
    <p className="card-textPH" style={{color:"whitesmoke"}}>Not available at the moment!</p>
    <a href="#" className="btn btn-primary" style={{backgroundColor:"teal"}}>Refresh</a>
  </div>
</div>

<div className="card" style={{backgroundColor:"#292928"}}>
  <img src='./assets/3d-casual-life-green-leaf-and-energy.png' className="card-img-top-ec" alt="..."/>
  <div className="card-body">
    <h3 className="card-title" style={{color:"whitesmoke"}}>EC values</h3>
    <p className="card-textEC" style={{color:"whitesmoke"}}>Not available at the moment!</p>
    <a href="#" className="btn btn-primary" style={{backgroundColor:"teal"}}>Refresh</a>
  </div>
</div>

<div className="card" style={{backgroundColor:"#292928"}}>
  <img src='./assets/morphis-glass-thermometer.png' className="card-img-top-temp" alt="..."/>
  <div className="card-body">
    <h3 className="card-title" style={{color:"whitesmoke"}}>Temperature</h3>
    <p className="card-textTemp" style={{color:"whitesmoke"}}>Not available at the moment!</p>
    <a href="#" className="btn btn-primary" style={{backgroundColor:"teal"}}>Refresh</a>
  </div>
</div>
</div>
    </>
  )
}

export default App