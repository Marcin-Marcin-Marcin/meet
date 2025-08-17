import React, { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  if (!event) return null;

  return (
    <li className={`event ${showDetails ? 'event--expanded' : ''}`}>
      {event.summary && <h3>{event.summary}</h3>}
      {event.created && <p>{event.created}</p>}
      {event.location && <p>{event.location}</p>}

      {showDetails && (
        <div className="event-details">
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

      <button
        className="details-btn"
        onClick={() => setShowDetails((prev) => !prev)}
      >
        {showDetails ? 'Hide details' : 'Show details'}
      </button>
    </li>
  );
};

export default Event;
