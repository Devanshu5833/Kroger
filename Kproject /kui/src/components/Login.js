import React, { Component } from 'react';

export class  Login extends Component {
        constructor(props){
          super(props)
          console.log(this.props)
        }

      logincheck(name, e) {
        if(name === 'login'){
          if(this.refs.email.value === 'admin' && this.refs.password.value === 'admin')
          {
            console.log('login successed');
            this.props.onLoginSuccessful(this.refs.email.value)
          }
          else {
            console.log('login failed');
          }
        }
      };

  render() {
    return (
      <div className='row'>
          <div className='col-lg-12' style={{ height:100 }}>
          </div>
              <div className='col-lg-4 col-lg-offset-4 pagination-centered' style={{textAlign : 'center'}}>
                      <img src="/img/download.jpg" className="img-circle" alt="Cinque Terre" width="150" height="100" id='loginimage' />
                      <form>
                        <div className="input-group">
                          <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                          <input ref="email" type="email" className="form-control" name="email"  onChange={this.logincheck.bind(this,'username')} placeholder="Email"  />
                        </div>
                        <br/>
                        <div className="input-group">
                          <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                          <input ref="password" type="password" className="form-control"  onChange={this.logincheck.bind(this,'password')} name="password" placeholder="Password"  />
                        </div>
                        <br/>
                        <button type="button" className="btn btn-primary btn-lg" onClick={this.logincheck.bind(this,'login')}>Login </button>
                      </form>
              </div>
        </div>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.object
};
