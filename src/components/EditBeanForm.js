import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditBeanForm (props) {
  const { bean } = props;
  
  function handleEditBeanFormSubmission(event) {
    event.preventDefault();
    props.onEditBean({
      name: event.target.name.value,
      price: event.target.price.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      id: bean.id});
  }
  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleEditBeanFormSubmission}
      buttonText="Update Bean" />
    </React.Fragment>
  );
}

EditBeanForm.propTypes = {
  bean: PropTypes.object,
  onEditBean: PropTypes.func
};

export default EditBeanForm;