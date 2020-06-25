import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"


function Landing(props) {
  return (
    <div className="site-landing">
            {props.children}
            <h1>Coming Soon </h1>
            <h3>Data-driven Research-oriented Digital Marketing</h3>
    </div>
  )
}

export default Landing
