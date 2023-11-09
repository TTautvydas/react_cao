import { useState, useEffect } from "react";

export function useWindowMeasurement() {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const resizeCallback = (e) => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", resizeCallback);
    return () => {
      window.removeEventListener("resize", resizeCallback);
    };
  }, []);

  return {
    height,
    width,
  };
}
