import { useState } from "react";

const Calculator = () => {
  const [invites, setInvites] = useState(50);
  const [duration, setDuration] = useState(2);
  const [total, setTotal] = useState(0);

  const calculateValue = () => {
    const value = invites * duration * 10;
    setTotal(value);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Event Price Calculator
      </h1>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Number of Invites</label>
        <input
          type="range"
          min="10"
          max="500"
          value={invites}
          onChange={(e) => setInvites(e.target.value)}
          className="w-full"
        />
        <p className="text-center text-sm mt-2">{invites} Invites</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">
          Duration of Event (Hours)
        </label>
        <input
          type="range"
          min="1"
          max="12"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full"
        />
        <p className="text-center text-sm mt-2">{duration} Hours</p>
      </div>
      <button
        onClick={calculateValue}
        className="bg-purple-600 text-white py-2 px-4 rounded-md w-full hover:bg-purple-700"
      >
        Calculate
      </button>
      <div className="mt-6 p-4 text-center bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold">Total Cost:</h2>
        <p className="text-2xl font-bold text-purple-600">₹ {total}</p>
      </div>
    </div>
  );
};

export default Calculator;
