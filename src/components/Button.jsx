import React from 'react';

const Button = (props) => {
  return (
    <button
      onClick={props.callApi}
      className="rounded bg-green-300 text-white m-2 px-3 py-2"
    >
      Click me
    </button>
  );
};

export default Button;
