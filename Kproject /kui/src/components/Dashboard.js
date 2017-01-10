import React, { Component } from 'react';
import { Header } from './Header.js';
import { Footer } from './Footer.js'
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
    var indents = [];
            for (var i = 0; i < 20; i++) {
              indents.push(<div className='col-md-4' style={{border:"solid",backgroundColor:"white"}}>
              Id: 123
              Name : IND/GUJ/AHM/044
              LastPin : 11-20-2016
              Services : ON
              </div>);
            }
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
        <div className='row'>
          {indents}
        </div>

        //Footer
        <Footer />
        </div>
    );
  }
}





Dashboard.contextTypes = {
  router: React.PropTypes.object
};
