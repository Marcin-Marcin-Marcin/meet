import React, { useState, useEffect } from 'react';

const NumberOfEvents = ({ value = 32, setCurrentNOE = () => {} }) => {
  const [inputValue, setInputValue] = useState(String(value));

  useEffect(() => {
    setInputValue(String(value));
  }, [value]);

  const handleChange = (e) => {
    const v = e.target.value;         
    setInputValue(v);
    const n = Number(v);              
    if (!Number.isNaN(n)) {
      setCurrentNOE(n);
    }
  };

  return (
    <div id="number-of-events">
      <input
        type="text"           
        className="number"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default NumberOfEvents;
