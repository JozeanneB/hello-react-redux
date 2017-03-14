import React from 'react'
import classnames from 'classnames'

const TextFieldGroup = ({ field, value, error, type, onChange, label }) => {
  return (
    <div className={classnames("form-group", { 'has-error': error})}>
      <label className="control-label">{label}</label>
      <input
        onChange={onChange}
        value={value}
        type={type}
        name={field}
        className="form-control"/>
        {error &&   <span classname="help-block">{error}</span>}
    </div>
  );
}

TextFieldGroup.propTypes ={
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.string.isRequired
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;
