import React, { useState } from 'react';

const ConditionalComponent = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {isVisible && <div>This is the conditional component</div>}
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Component' : 'Show Component'}
      </button>
    </div>
  );
};

export default ConditionalComponent;
