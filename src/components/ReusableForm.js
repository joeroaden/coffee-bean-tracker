import React from "react";
import PropTypes from "prop-types"

function ReusableForm(props){
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <h3>Add a type of Bean to the shop!</h3>
        <input
          type='text'
          name='name'
          placeholder='Bean Name' />
          <hr></hr>
        <input
          type='number'
          name='price'
          placeholder='Price of Bean'/>
          <hr></hr>
        <textarea
          name='origin'
          placeholder='Describe the origin of this coffee bean.' />
          <hr></hr>
        <textarea
          name='roast'
          placeholder='Enter the type of Roast ex. Light, Medium, Dark' />
          <hr></hr>
          <h5>Enter Desired Bag Size (in pounds) - Defaults to standard 130lb bag</h5>
        <input 
        type='number' 
        min="0" 
        name='beanCount' 
        defaultValue='130' />
        <hr></hr>
        <h5>Enter current amount of beans in bag (in pounds) - Defaults to standard 130lb bag</h5>
        <input 
        type='number' 
        min="0" 
        name='initialBean' 
        defaultValue='130'/>
        <hr></hr>
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