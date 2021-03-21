import React from 'react';


const SimpleComponent = () => {
  const nullvalue = null;
  const not_null_value = nullvalue ?? 2;
  const null_object = null;

  return (
    <div>
      <div>Not null value => {not_null_value}</div>
      <div>Not null object => {null_object?.value || 'value'}</div>
    </div>
  )
}

export default SimpleComponent;