import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const Booking = () => {
  const { serviceId } = useParams();
  const [service, setservice] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setservice(data));
  }, []);
  return (
    <div>
      <h2>Service Name: {service.name}</h2>
      <p>this is booking: {serviceId}</p>
    </div>
  );
};

export default Booking;
