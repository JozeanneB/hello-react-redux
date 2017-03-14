import React from 'react'
import timezones from '../../data/timezones'
import map from 'lodash/map'
import classnames from 'classnames'
import validateInput from '../../../server/shared/validations/signup'
import TextFieldGroup from '../common/TextFieldGroup'
class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: '',
      errors: {},
      isLoading: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event){
    this.setState({ [event.target.name]: event.target.value });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid){
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit(event){
    if(this.isValid()){
      this.setState({ errors:{} });
      event.preventDefault();
      this.props.userSignupRequest(this.state).then(
        () => {},
        ({ data }) => this.setState({errors: data, isLoading:false})
      );
    }
    //console.log(this.state);
  }

  render() {
    const {errors} = this.state;
    const options = map(timezones, (val,key) =>
      <option key={val} value={val}>{key}</option>
    );
    return (
      <form onSubmit={this.onSubmit}>
        <h1> Join our community!</h1>

        <TextFieldGroup
          error={errors.username}
          label="Username"
          onChange={this.onChange}
          value={this.state.username}
          field="username"
        />

        <TextFieldGroup
          error={errors.email}
          label="E-mail"
          onChange={this.onChange}
          value={this.state.email}
          field="email"
        />

        <TextFieldGroup
          error={errors.password}
          label="Password"
          onChange={this.onChange}
          value={this.state.password}
          field="password"
        />

        <TextFieldGroup
          error={errors.passwordConfirmation}
          label="Password Confirmation"
          onChange={this.onChange}
          value={this.state.passwordConfirmation}
          field="passwordConfirmation"
        />

        <div className={classnames("form-group", { 'has-error':errors.timezone })}>
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
          {errors.timezone &&
            <span classname="help-block">{errors.timezone}</span>}
        </div>

        <div className="form-group">
          <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    );
  }
}
SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
}


export default SignupForm;
