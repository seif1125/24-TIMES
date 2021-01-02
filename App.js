
import React from 'react';
import {StyleSheet, ImageBackground}from 'react-native';

import Splash from './screens/Splash';
import Home from './screens/Home';
// API KEY  d3c133ba0c004600b71bc194b917165f

class App extends React.Component {
 
  constructor(props) {
      super(props);
      this.state = {
        currentScreen:<Splash/>,
        allNews:{},
        allTopHeadlines:{}
      }
  }
 

componentDidMount() {


  this.fetchNews()
this.fetchHeadlines()





   
  }
  componentWillUnmount(){
    console.log("unmount")

  }

fetchNews=()=>{
   const  headers = { 'Content-Type': 'application/json' ,
  'X-Api-Key':"d3c133ba0c004600b71bc194b917165f",
  'method':'Get'
  }
let news;
    fetch('http://newsapi.org/v2/everything?q=*', { headers })
    .then(response=>response.json())
    .then((data)=>{
   
      this.setState({allNews:data})
    
    });
     
   

  } 

  fetchHeadlines=()=>{
  const  headers = { 'Content-Type': 'application/json' ,
  'X-Api-Key':"d3c133ba0c004600b71bc194b917165f",
  'method':'Get'
  }
 
    fetch('https://newsapi.org/v2/top-headlines?q=" "', { headers })
    .then(response=>response.json())
    .then((data)=>{
     
      this.setState({allTopHeadlines:data})
    });

  }

  

  componentWillUnmount() {
 
  }

  render() { 
    
  if(Object.entries(this.state.allTopHeadlines).length === 0&&Object.entries(this.state.allNews).length === 0){
      return(
      <ImageBackground
      source={require('./assets/media/background.jpg')}
      style={styles.BackgroundView}>
      <Splash/>
      </ImageBackground> 
      ) ; 
}
  else{

      return(
       <ImageBackground
      source={require('./assets/media/background.jpg')}
      style={styles.BackgroundView}>
      <Home/>
      </ImageBackground>);
  }
    

 

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



