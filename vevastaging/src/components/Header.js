import React, { Component } from 'react';

class Header extends Component {

render () {

    return (
<header>

<div className = "bg-light">

<div className= "header">

<img className="headerLogo" src={require("./resources/site/bg_white.jpeg")} alt={"veva"}/>


<span><h1>veva.one  |  decentralized token ratings</h1> </span>

  <div className="signup">

  <a href="http://www.veva.one" className = "lndBtn"> <u> SIGN IN </u></a>
  <a href="http://www.veva.one" className = "lndBtn"> <u> REGISTER </u> </a>

</div>
  </div>

</div>
</header>
);
}
}

export default Header;
