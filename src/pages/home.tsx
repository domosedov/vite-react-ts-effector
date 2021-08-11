import * as React from "react";
import { Counter } from "../features/counter";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Counter />
    </div>
  );
};

export default Home;
