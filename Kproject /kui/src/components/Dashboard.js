import React, { Component } from 'react';
import io from 'socket.io-client';

var socket = io.connect('http://localhost:8080');

export class  Dashboard extends Component {

  constructor(props){
    super(props)
    console.log(this.props)
    console.log('start');
    this.state = {online:0,offline:0}
    socket.on('status', this.setStatus.bind(this));
    this.onLogoutFunction = this.onLogoutFunction.bind(this)
  }

   setStatus(data) {
    console.log(data)
    this.setState({online:data.online,offline:data.offline})
  }


  onLogoutFunction()
  {
      this.props.onLogoutSuccessful()
  }

  render() {
    return (
        <div>
        //Header
        <Header username={this.props.username} onLogoutFunction={this.onLogoutFunction} />
        //Block level
        <div className='row' style={{ marginTop : 10 }}>
          <div className='col-md-1'></div>
            <div className='col-md-10'>
                <form>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search" />
                    <div className="input-group-btn">
                        <button className="btn btn-default" type="submit">
                         <i className="glyphicon glyphicon-search"></i>
                        </button>
                    </div>
                  </div>
                 </form>
            </div>
        </div>
        <div className='row' style={{ marginTop : 10 }}>
            <div className='col-md-3 col-md-offset-3'>

                <button type="button" className="btn btn-success btn-lg btn-block">
                  Online <span className="badge">{this.state.online}</span>
                  </button>

            </div>
            <div className='col-md-3'>
                <button type="button" className="btn btn-danger btn-lg btn-block">Offline <span className="badge" style={{Size:20}}>{this.state.offline}</span></button>
            </div>
        </div>
        //Footer
        <Footer />
        </div>
    );
  }
}

export class Header extends Component{
  constructor(props){
    super(props)
    console.log(this.props)
  }

  logout()
  {
    this.props.onLogoutFunction()
  }

  render(){
    return (
      <div style={{ backgroundColor:'black',height:80 }}>
      <div className='row'>
        <div className='col-md-12 col-sm-12'>
          &nbsp;
        </div>
      </div>
      <div className='row'>
       <div className='col-lg-12 col-md-12 col-sm-12' style={{ color: 'white'}}>
           <div className='col-lg-2 col-md-2 col-sm-3 col-xs-4'>
             <img src="/img/download.jpg" className="img-circle" alt="Kroger" width="100" height="50" />
           </div>
           <div className='col-lg-3 col-md-3 col-sm-3 col-lg-offset-7 col-md-offset-7 col-sm-offset-6' style={{ textAlign : 'right' }}>
              <span className="glyphicon glyphicon-user" /> &nbsp;  Hi, { this.props.username} &nbsp;
               <span style={{ cursor: 'pointer' }} className="glyphicon glyphicon-off" onClick={this.logout.bind(this)}></span>

           </div>
       </div>
     </div>
     </div>
    )
  }
}

export class Footer extends Component{
  render(){
    return (
      <div className='row' style={{backgroundColor:'black'}}>
       <div className='col-lg-12 col-md-12 col-sm-12' style={{ color: 'white'}}>
        <div className='col-lg-4 col-md-4 col-sm-5 col-lg-offset-4 col-md-offset-4 col-sm-offset-3'>
          <p> Copyright 2017. All Rights Reserved </p>
          </div>
       </div>
     </div>
    )
  }
}

Dashboard.contextTypes = {
  router: React.PropTypes.object
};
