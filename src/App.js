import React from 'react';
import {Icon} from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"


let style = {
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 20
  }
const App = () => (
      <div className="App" style={style}>
      This div contains semantic-ui-react Icon, loading of name ="add user".
        <Icon loading name="google" size="huge"/>
      </div>
    );

export default App;
