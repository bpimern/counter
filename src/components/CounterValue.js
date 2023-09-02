import React from "react";

const CounterValue = (props) => {
  console.log(props.count);
  return (
    <div>
      <p className="text-4xl">{props.count}</p>
    </div>
  );
};

export default CounterValue;
