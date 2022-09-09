import React from "react";
import PropTypes from "prop-types";

function Bean(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenBeanClicked(props.id)}>
      <h3>{props.name} - ${props.price}</h3>
      <p><em>{props.origin}</em></p>
      <h4>{props.roast}</h4>
      <h4>Click for details of Beans in Stock</h4>
      </div>
      <button onClick={() => props.whenBuyBeanClicked(props.id)}>Buy a 1b Bag!</button>
    </React.Fragment> 
  );
}

Bean.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  origin: PropTypes.string,
  roast: PropTypes.string,
  id: PropTypes.string,
  beanCount: PropTypes.number,
  initialBean: PropTypes.number,
  whenBuyBeanClicked: PropTypes.func,
  buyButtonClicked: PropTypes.func
};

export default Bean;