"use client";
import React, { useEffect, useState } from "react";
import Title from "./Title";
import { FaMinus, FaPlus } from "react-icons/fa";

const Counter = () => {
  let [count, setCount] = useState(0);

  const handleMinus = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count--);
    }
    // count === 0 ? setCount(0) : setCount(count--);
  };
  const handlePlus = () => {
    setCount(count++);
  };

  // useEffect(() => {
  //   console.log(count);
  // }, [count]);

  return (
    <div className="border border-gray-950 my-5 p-10">
      <Title test="Counter Application for Counter" />
      <div className="flex items-center justify-center gap-x-5 py-2">
        <button
          onClick={handleMinus}
          className="bg-gray-950 text-white text-xl font-semibold p-5 hover:bg-gray-800 duration-200"
        >
          <FaMinus />
        </button>
        <p className="text-xl font-bold text-gray-950">{count}</p>
        <button
          onClick={handlePlus}
          className="bg-gray-950 text-white text-xl font-semibold p-5 hover:bg-gray-800 duration-200"
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default Counter;
