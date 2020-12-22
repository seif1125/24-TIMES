import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import Splash from './screens/Splash';
import Home from './screens/Home'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentScreen:<Splash movetohome={this.moveToHome()}/>}
  }


  componentDidMount() {

    setInterval(() => {this.setState({currentScreen:<Home/>})}
   ,5000);
  }
  moveToHome(){
     setInterval(() => {this.setState({currentScreen:<Home/>})}
   ,5000);
  }
  render() { 
    return (this.state.currentScreen  );
  }
}
 
export default App;



