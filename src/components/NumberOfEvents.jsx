import React, { useState, useEffect } from 'react';

const NumberOfEvents = ({ value = 32, setCurrentNOE = () => {}, setErrorAlert }) => {
  const [inputValue, setInputValue] = useState(String(value));

  useEffect(() => {
    setInputValue(String(value));
  }, [value]);

  const handleChange = (e) => {
    const v = e.target.value;
    setInputValue(v);
    if (isNaN(v) || Number(v) <= 0) {
      setErrorAlert('Please enter a positive number of events.');
    } else {
      setErrorAlert('');
      setCurrentNOE(Number(v));
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
