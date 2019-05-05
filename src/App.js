import React from 'react';
// var React = require('react')
import './App.css';
import TextField from '@material-ui/core/FilledInput';
import todoContainer from './todoContainer';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <p>
          Edit

          <code>src/App.js</code>

          and save to reload.
        </p>
        <fghfgh />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows="4"
          defaultValue="Default Value"
          // className={classes.textField}
          margin="normal"
          variant="outlined"
        />


      </header>
    </div>
  );
}

export default App;
