import { useState } from "react";
import { wasmCrate } from "../helpers/wasm";
import { Test } from "./Test";

export const Advent20Part1 = () => {
  const { advent20Part1 } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="textarea"
      placeholder="Puzzle input"
      func={(input) => {
        let result: number;

        const js = null;

        const wasm = () => {
          result = advent20Part1(input);
        };

        const after = () => {
          setResult(result.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 20, Part 1"
      result={result}
    />
  );
};

export const Advent20Part2 = () => {
  const { advent20Part2 } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="textarea"
      placeholder="Puzzle input"
      func={(input) => {
        let number: number;

        const js = null;

        const wasm = () => {
          number = advent20Part2(input);
        };

        const after = () => {
          setResult(number.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 20, Part 2"
      result={result}
    />
  );
};
