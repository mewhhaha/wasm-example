import type React from "react";
import { Suspense } from "react";
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
  Advent4Part1,
  Advent4Part2,
  Advent5Part1,
  Advent5Part2,
  TransferStringTest,
  Advent6Part1,
  Advent6Part2,
  Advent6Part2Bits,
  Advent7Part1,
  Advent7Part2,
  Advent8Part1,
  Advent8Part2,
  Advent10Part1,
  Advent10Part2,
  Advent9Part1,
  Advent9Part2,
  Advent11Part1,
  Advent11Part2,
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
      <TransferStringTest />
      <ReduceTest />
      <MapFilterTest />
      <PrimesTest />
      <Advent1Part1 />
      <Advent1Part2 />
      <Advent2Part1 />
      <Advent2Part2 />
      <Advent3Part1 />
      <Advent3Part2 />
      <Advent4Part1 />
      <Advent4Part2 />
      <Advent5Part1 />
      <Advent5Part2 />
      <Advent6Part1 />
      <Advent6Part2 />
      <Advent6Part2Bits />
      <Advent7Part1 />
      <Advent7Part2 />
      <Advent8Part1 />
      <Advent8Part2 />
      <Advent9Part1 />
      <Advent9Part2 />
      <Advent10Part1 />
      <Advent10Part2 />
      <Advent11Part1 />
      <Advent11Part2 />
    </div>
  );
};

ReactDOM.render(
  <Suspense fallback="loading">
    <App />
  </Suspense>,
  document.getElementById("app")
);
