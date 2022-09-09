import React from "react";
import PropTypes from "prop-types"

function ReusableForm(props){
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Bean Name' />
        <input
          type='text'
          name='price'
          placeholder='Price of Bean'/>
        <textarea
          name='origin'
          placeholder='Describe the origin of this coffee bean.' />
        <textarea
          name='roast'
          placeholder='Enter the type of Roast ex. Light, Medium, Dark' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;