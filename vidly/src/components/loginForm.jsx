import React, { Component } from 'react';
class LoginForm extends Component {
  state = {
    account: {
      username: '',
      password: ''
    }
  }
  handleChange = (name) => (event) => {
    const account = { ...this.state.account };
    const { currentTarget: input } = event
    account[name] = input.value;
    this.setState({ account })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const username = this.username.current.value;
    console.log("submitted", username);
  }

  render() {
    const { account } = this.state;
    return (<div>
      <h1> Login</h1>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" >Username</label>
          <input
            value={account.username}
            id="username"
            type="text"
            className="form-control"
            onChange={this.handleChange('username')}
            name='username'
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" >Password</label>
          <input
            id="password"
            type=" text"
            className="form-control"
            onChange={this.handleChange('password')}
            name='password'
            value={account.password}
          />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>);
  }
}

export default LoginForm;