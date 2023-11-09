import React from "react";
import { useWindowMeasurement } from "../../hooks/useWindowMeasurement";

export default function Measurements() {
  const { height, width } = useWindowMeasurement();

  return (
    <div>
      <p>Height: {height}</p>
      <p>Width: {width}</p>
    </div>
  );
}
