
import React from 'react';
import {StyleSheet, ImageBackground,TouchableWithoutFeedback,Keyboard}from 'react-native';

import Splash from './screens/Splash';
import Home from './screens/Home'

class App extends React.Component {
   
  constructor(props) {
      super(props);
      this.state = {
        currentScreen:<Splash/>
      }
  }

  componentDidMount() {
    setInterval(() => this.setState({currentScreen:<Home/>})
   ,5000);
  }

  componentWillUnmount() {
   clearInterval(   setInterval(() => this.setState({currentScreen:<Home/>})
   ,5000));
  }

  render() { 
    
    return (
      <ImageBackground
      source={require('./assets/media/background.jpg')}
      style={styles.BackgroundView}>
      {this.state.currentScreen}
      </ImageBackground> 
    );

  }

}
 
const styles = StyleSheet.create({
  BackgroundView:{
    flex: 1,
    width:'100%',
    height:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App;



