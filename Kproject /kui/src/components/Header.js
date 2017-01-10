import React, { Component } from 'react';

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
