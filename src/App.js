import './App.css';
import Form from "./Components/Form";
import Results from "./Components/Results";
import FirstPage from "./Components/FirstPage";
import React from 'react';

import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      mode : true,
    };
  }

  handleClick() {
    this.setState({mode:false})
  }

  render(){
    return (
      <Router>

        {/* <div className="App">
            {
            this.state.mode ? <Form></Form> : <Results></Results>
            }
            <button onClick={this.handleClick.bind(this)}>Change</button>
          </div> */}

          <Switch>
          <Route path="/results" exact component={(props) => <Results{...props}/>} />
          <Route path="/" exact component={(props) => <FirstPage{...props}/>} />
          </Switch>
          
      </Router>
     );
  }
}

export default App;
