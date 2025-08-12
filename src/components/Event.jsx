import React, { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  if (!event) return null;

  return (
    <li>
      {/* collapsed summary info */}
      {event.summary && <h3>{event.summary}</h3>}
      {event.created && <p>{event.created}</p>}
      {event.location && <p>{event.location}</p>}

      {/* toggle button */}
      {!showDetails ? (
        <button onClick={() => setShowDetails(true)}>Show details</button>
      ) : (
        <button onClick={() => setShowDetails(false)}>Hide details</button>
      )}

      {/* expanded details */}
      {showDetails && (
        <div className="details">
          {event.description && <p>{event.description}</p>}
          {event.htmlLink && (
            <p>
              <a href={event.htmlLink} target="_blank" rel="noreferrer">
                Google Calendar
              </a>
            </p>
          )}
        </div>
      )}
    </li>
  );
};

export default Event;