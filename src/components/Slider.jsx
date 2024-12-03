import { useState } from "react";

import Three360View from "./Three360View";
import SlideContent from "./SlideContent";

const Slider = () => {
  const [show360, setShow360] = useState(false);

  return (
    <div className="  min-h-screen bg-gray-100 w-[900px] mx-auto">
      {show360 ? (
        <Three360View setShow360={setShow360} />
      ) : (
        <SlideContent setShow360={setShow360} />
      )}
    </div>
  );
};

export default Slider;
