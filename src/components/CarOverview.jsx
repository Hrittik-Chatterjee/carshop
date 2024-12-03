const CarOverview = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold text-purple-800  mb-4">
        Car Overview
      </h2>
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-800">
        {/* Row 1 */}
        <div className="flex justify-between">
          <span className="font-medium">Make Year</span>
          <span className="text-purple-800 font-semibold ">Aug 2021</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Registration Year</span>
          <span className="text-purple-800 font-semibold ">Dec 2021</span>
        </div>

        {/* Row 2 */}
        <div className="flex justify-between">
          <span className="font-medium">Fuel Type</span>
          <span className="text-purple-800 font-semibold ">Diesel</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Km Driven</span>
          <span className="text-purple-800 font-semibold ">13K km</span>
        </div>

        {/* Row 3 */}
        <div className="flex justify-between">
          <span className="font-medium">Transmission</span>
          <span className="text-purple-800 font-semibold ">
            Manual (Regular)
            <span className="ml-1 text-purple-600 cursor-pointer">ℹ</span>
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">No. of Owner</span>
          <span className="text-purple-800 font-semibold ">1st Owner</span>
        </div>

        {/* Row 4 */}
        <div className="flex justify-between">
          <span className="font-medium">Insurance Validity</span>
          <span className="text-purple-800 font-semibold ">Nov 2025</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Insurance Type</span>
          <span className="text-purple-800 font-semibold ">Third Party</span>
        </div>

        {/* Row 5 */}
        <div className="flex justify-between">
          <span className="font-medium">RTO</span>
          <span className="text-purple-800 font-semibold ">DL3C</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Car Location</span>
          <span className="text-purple-800 font-semibold ">
            Sector-29, Gurgaon
          </span>
        </div>
      </div>
    </div>
  );
};

export default CarOverview;
