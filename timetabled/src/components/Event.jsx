import React from "react";

const Event = ({ event, color, location }) => {
  return (
    <td className={`event ${color}`}>
      <h4>{event}</h4>
      <h6>{location}</h6>
    </td>
  );
};

export default Event;
