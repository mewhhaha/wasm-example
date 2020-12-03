import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import {
  TransferSingleTest,
  TransferDoubleTest,
  ReduceTest,
  MapFilterTest,
  PrimesTest,
  Advent1Part1,
  Advent1Part2,
  Advent2Part1,
  Advent2Part2,
  Advent3Part1,
  Advent3Part2,
} from "./components";

const appStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

const App: React.FC = () => {
  return (
    <div style={appStyle}>
      <TransferSingleTest />
      <TransferDoubleTest />
      <ReduceTest />
      <MapFilterTest />
      <PrimesTest />
      <Advent1Part1 />
      <Advent1Part2 />
      <Advent2Part1 />
      <Advent2Part2 />
      <Advent3Part1 />
      <Advent3Part2 />
    </div>
  );
};

var mountNode = document.getElementById("app");
ReactDOM.render(
  <Suspense fallback="loading">
    <App />
  </Suspense>,
  mountNode
);
