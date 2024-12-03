import Calculator from "./components/Calculator";
import CarOverview from "./components/CarOverview";

import Slider from "./components/Slider";

function App() {
  return (
    <>
      <h1 className="text-center font-bold text-gray-800 text-2xl my-6">
        {" "}
        Assignment
      </h1>

      <h1 className="text-left text-bold text-xl text-gray-700  ml-40 my-4">
        Task One :
      </h1>
      <Slider />
      <CarOverview />
      <h2 className="text-left text-bold text-xl text-gray-700  ml-40 mt-4">
        Task Two :
      </h2>
      <Calculator />
    </>
  );
}

export default App;
