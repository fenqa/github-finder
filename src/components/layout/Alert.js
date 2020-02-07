import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fa fa-info-circle"></i>
        &nbsp;{alert.msg}
        <button style={{ float: 'right' }}>x</button>
      </div>
    )
  );
};

export default Alert;
