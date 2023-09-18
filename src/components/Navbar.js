import React from 'react'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-cyan-900 bg-${props.mode} font-bold text-white`}>
  <div>
    <ul className="flex ml-8 ">
      <li className=" ml-5">{props.home}</li>
      <li className=" ml-5">Feature</li>
      <li className=" ml-5">About us</li>
      <li className=" ml-5"> Contact</li>
    </ul>
  </div>
  <div className={`form-check form-switch ml-[120vh] `}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
</div>
</nav>
  )
}
