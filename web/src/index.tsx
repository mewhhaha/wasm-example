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
  Advent12Part1,
  Advent12Part2,
  Advent13Part1,
  Advent13Part2,
  Advent14Part1,
  Advent14Part2,
  Advent15Part1,
  Advent15Part2,
  Advent16Part1,
  Advent16Part2,
  Advent17Part1,
  Advent17Part2,
  Advent18Part1,
  Advent18Part2,
  Advent19Part1,
  Advent19Part2,
  Advent20Part1,
  Advent20Part2,
  Advent21Part1,
  Advent21Part2,
  Advent22Part1,
  Advent22Part2,
  Advent23Part1,
  Advent23Part2,
  Advent24Part1,
  Advent24Part2,
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
      <Advent12Part1 />
      <Advent12Part2 />
      <Advent13Part1 />
      <Advent13Part2 />
      <Advent14Part1 />
      <Advent14Part2 />
      <Advent15Part1 />
      <Advent15Part2 />
      <Advent16Part1 />
      <Advent16Part2 />
      <Advent17Part1 />
      <Advent17Part2 />
      <Advent18Part1 />
      <Advent18Part2 />
      <Advent19Part1 />
      <Advent19Part2 />
      <Advent20Part1 />
      <Advent20Part2 />
      <Advent21Part1 />
      <Advent21Part2 />
      <Advent22Part1 />
      <Advent22Part2 />
      <Advent23Part1 />
      <Advent23Part2 />
      <Advent24Part1 />
      <Advent24Part2 />
    </div>
  );
};

ReactDOM.render(
  <Suspense fallback="loading">
    <App />
  </Suspense>,
  document.getElementById("app")
);
