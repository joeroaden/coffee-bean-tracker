import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewBeanForm(props) {
  function handleNewBeanFormSubmission(event) {
    event.preventDefault();
    props.onNewBeanCreation({
      name: event.target.name.value,
      price: event.target.price.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      beanCount: parseInt(event.target.beanCount.value),
      initialBean: parseInt(event.target.initialBean.value),
      id: v4()
    });

  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewBeanFormSubmission}
        buttonText="Add New Bean"/>
    </React.Fragment>
  );
}
NewBeanForm.propTypes = {
  onNewBeanCreation: PropTypes.func
};

export default NewBeanForm;