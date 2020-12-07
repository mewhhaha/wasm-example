import { useState } from "react";
import { wasmCrate } from "../helpers/wasm";
import { Test } from "./Test";

export const Advent7Part1 = () => {
  const { advent7Part1 } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="textarea"
      placeholder="Puzzle input"
      func={(input) => {
        let colors: number;

        const js = null;

        const wasm = () => {
          colors = advent7Part1(input);
        };

        const after = () => {
          setResult(colors.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 7, Part 1"
      result={result}
    />
  );
};

export const Advent7Part2 = () => {
  const { advent7Part2 } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="textarea"
      placeholder="Puzzle input"
      func={(input) => {
        let bags: number;

        const js = null;

        const wasm = () => {
          bags = advent7Part2(input);
        };

        const after = () => {
          setResult(bags.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 7, Part 2"
      result={result}
    />
  );
};
