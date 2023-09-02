"use client";
import { useState } from "react";
import Title from "./Title";
import { FaMinus, FaPlus } from "react-icons/fa";
import CounterValue from "./CounterValue";

const Counter = () => {
  const [count, setCount] = useState(0);
  const addNumber = () => {
    setCount(count + 1);
  };
  const minusNumber = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div className=" my-5 p-10">
      <Title test="Counter Application for Counter" />
      <div className="flex items-center justify-center gap-x-5 py-2">
        <button
          onClick={minusNumber}
          className="bg-gray-950 text-white text-xl font-semibold p-5 hover:bg-gray-800 duration-200"
        >
          <FaMinus />
        </button>
        <p className="text-2xl font-bold text-gray-950 w-14 flex items-center justify-center ">
          {count}
        </p>
        <button
          onClick={addNumber}
          className="bg-gray-950 text-white text-xl font-semibold p-5 hover:bg-gray-800 duration-200"
        >
          <FaPlus />
        </button>
      </div>
      <div className="flex items-center justify-center py-10">
        <CounterValue count={count} />
      </div>
    </div>
  );
};

export default Counter;
