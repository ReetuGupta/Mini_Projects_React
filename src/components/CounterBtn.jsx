import { useState } from "react";

export default function CounterBtn() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);

    // **if negative numbers are not allowed**
    // if(count> 0){
    //     setCount(count - 1);
    // }
  };
  const [active, setActive] = useState(false);

  const handleReset = () => {
    setCount(0);
    setActive(true);
    setTimeout(() => setActive(false), 500);
  };

  return (
    <div className="flex items-center justify-center flex-col gap-4 text-2xl text-blue-500 border border-gray-200 p-3">
      <div>Increment & Decrement</div>
      <div className="my-4 border flex items-center justify-between gap-2 bg-gray-100 rounded-sm py-2 px-4 text-3xl font-bold">
        <button
          className="pr-4 border-r cursor-pointer"
          onClick={handleDecrement}
        >
          -
        </button>
        <span className="px-3">{count}</span>
        <button
          className="pl-4 border-l cursor-pointer"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <button
        className={`text-white cursor-pointer px-2 py-1 rounded-xs active:scale-95 transition-transform duration-150 hover:opacity-90 ${
          active ? "bg-green-400" : "bg-blue-400"
        }`}
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}
