import React, { Component } from 'react';

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
