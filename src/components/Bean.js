import React from "react";
import PropTypes from "prop-types";

function Bean(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenBeanClicked(props.id)}>
      <h3>{props.name} - ${props.price} per 1lb. Bag</h3>
      <p><em>{props.origin}</em></p>
      <h4>{props.roast}</h4>
      <h4>Click for details of Remaining Beans in Stock</h4>
      </div>
      <hr/>
    </React.Fragment> 
  );
}

Bean.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  origin: PropTypes.string,
  roast: PropTypes.string,
  id: PropTypes.string,
  // beanCount: PropTypes.number,
  // initialBean: PropTypes.number
};

export default Bean;