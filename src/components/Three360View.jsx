/* eslint-disable react/prop-types */
import ThreeSixty from "react-360-view";

const Three360View = ({ setShow360 }) => {
  return (
    <div>
      <div>
        <button
          onClick={() => setShow360(false)}
          className="mt-4 px-6 py-2 bg-blue-500 btn-outline text-center btn text-white rounded-lg justify-start shadow-lg hover:bg-blue-600 transition"
        >
          Back
        </button>
        <div>
          <ThreeSixty
            amount={46}
            imagePath="/src/assets/carview"
            fileName="car{index}.avif"
          />
        </div>
      </div>
    </div>
  );
};

export default Three360View;
