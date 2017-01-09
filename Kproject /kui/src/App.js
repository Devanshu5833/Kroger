import React, { Component } from 'react';
import { Login } from './components/Login.js';
import { Dashboard } from './components/Dashboard.js';
import io from 'socket.io-client';

var socket = io.connect('http://localhost:8080');

socket.on('connect',function(){
    console.log('Socket Called');
    socket.emit('client','Hello from The client');
    socket.on('server',function(data){
        console.log(data)
    })
})

export class  App extends Component {
  constructor(props){
      super(props)
      this.state = { loggedIn : false, username: undefined }
      this.onLoginSuccessful = this.onLoginSuccessful.bind(this)
      this.onLogoutSuccessful = this.onLogoutSuccessful.bind(this)
  }

  onLoginSuccessful(username){
    if (username === undefined){
      console.log("login failed")
    }else {
      this.setState({ username : username, loggedIn : true})
      console.log("Login Successful")
    }
  }

  onLogoutSuccessful(){
    console.log('LOGOUT APP');
    this.setState({ loggedIn : false, username: undefined })
  }

  renderCorrectComponent(){
    //console.log(this)
    if (this.state.loggedIn){
      return <Dashboard username={this.state.username} onLogoutSuccessful={this.onLogoutSuccessful}/>
    }else{
      return <Login onLoginSuccessful={ this.onLoginSuccessful} />
    }
  }

  render() {

    return this.renderCorrectComponent()
  }
}



//export default App;
