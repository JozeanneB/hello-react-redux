import React from 'react'
import timezones from '../../data/timezones'
import map from 'lodash/map'

class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event){
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event){
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const options = map(timezones, (val,key) =>
      <option key={val} value={val}>{key}</option>
    );
    return (
      <form onSubmit={this.onSubmit}>
        <h1> Join our community!</h1>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            onChange={this.onChange}
            value={this.state.username}
            type="text"
            name="username"
            className="form-control"/>
        </div>

        <div className="form-group">
          <label className="control-label">E-mail</label>
          <input
            onChange={this.onChange}
            value={this.state.email}
            type="text"
            name="email"
            className="form-control"/>
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            onChange={this.onChange}
            value={this.state.password}
            type="password"
            name="password"
            className="form-control"/>
        </div>

        <div className="form-group">
          <label className="control-label">Password Confirmation</label>
          <input
            onChange={this.onChange}
            value={this.state.passwordConfirmation}
            type="password"
            name="passwordConfirmation"
            className="form-control"/>
        </div>

        <div className="form-group">
          <label className="control-label">Timezone</label>
          <select
            onChange={this.onChange}
            value={this.state.timezone}
            name="timezone"
            className="form-control"
          >
            <option value="" disabled>Choose your Timezone</option>
            {options}
          </select>
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    );
  }
}

export default SignupForm;
