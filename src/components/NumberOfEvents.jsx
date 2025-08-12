import React, { useState } from 'react';

const NumberOfEvents = () => {
  const [eventCount, setEventCount] = useState(32);

  const handleChange = (e) => {
    setEventCount(e.target.value);
  };

  return (
    <div id="number-of-events">
      <input
        type="text"
        className="number"
        value={eventCount}
        onChange={handleChange}
      />
    </div>
  );
};

export default NumberOfEvents;