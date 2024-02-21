import React from "react";
import Shape3 from "./shapes/Shape3";
import Shape2 from "./shapes/Shape2";
import Shape1 from "./shapes/Shape1";

interface ShapeBackgroundProps {}

function ShapeBackground({}: ShapeBackgroundProps): JSX.Element {
  return (
    <>
      <Shape1 className="absolute top-[10%] left-[40%] md:left-48 w-24 h-24 md:w-32  md:h-32 -z-20" />
      <Shape2 className="absolute top-[50%] right-[5%] md:right-72  w-24 h-24 md:w-32 md:h-32 -z-20" />
      <Shape3 className="absolute bottom-[7.5%] left-[16%] md:left-72 w-24 h-24 md:w-32 md:h-32 -z-20" />
    </>
  );
}

export default ShapeBackground;
