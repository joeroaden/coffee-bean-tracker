import React from "react";
import PropTypes from "prop-types"

function BeanDetail(props) {
  const { bean,onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Bean Detail</h1>
      <h3>{bean.name} - ${bean.price}</h3>
      <p><em>{bean.origin}</em></p>
      <h4>{bean.roast}</h4>
      <button onClick={ props.onClickingEdit }>Update Bean</button>
      <button onClick={() => onClickingDelete(bean.id) }>Delete Bean</button>
      <hr/>
    </React.Fragment>
  );
}

BeanDetail.propTypes = {
  bean: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default BeanDetail;