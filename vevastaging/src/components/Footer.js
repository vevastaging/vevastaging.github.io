import React, { Component } from 'react';

class Footer extends Component {

  render () {

return (

<footer>
<div className="footer">

<div className="container">

  <div className="row">
    <div className="col-md-12">
      <div className="col-md-8">
        <a href="#">Terms of Service</a>
        |
        <a href="#">Privacy</a>
        |
        <a href="#">Security</a>
      </div>
      <div className="span4">
        <p className="muted pull-right">© 2017 Veva. All rights reserved</p>
      </div>
    </div>
  </div>
</div>
</div>
</footer>
);
}
}

export default Footer;
