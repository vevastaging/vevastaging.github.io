import React, { Component } from 'react';
import { render } from 'react-dom';
import { Grid } from 'react-redux-grid';

class App extends Component {

render() {

  return (
    <Grid
        data={data}
        stateKey={stateKey}
    />,
    document.getElementById('grid-mount')
);
}
}

export default App;
