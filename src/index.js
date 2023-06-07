import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
class CheckBox extends React.Component {
  render() {
    const { className, onChange, value, label, checked, disabled, invalid } = this.props;
    let css;
    if (invalid) {
      css = "form-check-input checkbox-invalid";
      if (className) {
        const style = "form-check-input checkbox-invalid"
        css = style.concat(" ", className);
      }

    }
    else {
      css = "form-check-input checkbox-valid";
      if (className) {
        const style = "form-check-input checkbox-valid"
        css = style.concat(" ", className);
      }
    }

    return (
      <>
        <input
          className={css}
          type="checkbox"
          onChange={onChange}
          name={label}
          id={value}
          value={value}
          checked={checked}
          disabled={disabled}
        />
        <label className="" htmlFor={value}>{label}</label>
      </>
    );
  }
}
export default CheckBox;