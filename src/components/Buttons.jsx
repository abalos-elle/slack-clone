import React from 'react';

function Buttons({ text, className, title }) {
  return (
      <button className={className} title={title}>
          {text}
      </button>
  );
}

export default Buttons;
