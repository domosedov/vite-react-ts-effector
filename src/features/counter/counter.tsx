import * as React from "react";
import { useStore } from "effector-react";
import { createCounter } from "./model";

const { $count, inc, dec } = createCounter();

export const Counter: React.FC = () => {
  const count = useStore($count);
  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={() => dec()}>Dec -</button>
      <button onClick={() => inc()}>Inc +</button>
    </div>
  );
};
