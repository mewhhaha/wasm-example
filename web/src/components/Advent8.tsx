import { useState } from "react";
import { wasmCrate } from "../helpers/wasm";
import { Test } from "./Test";

export const Advent8Part1 = () => {
  const { advent8Part1 } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="textarea"
      placeholder="Puzzle input"
      func={(input) => {
        let result: number;

        const js = null;

        const wasm = () => {
          result = advent8Part1(input);
        };

        const after = () => {
          setResult(result.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 8, Part 1"
      result={result}
    />
  );
};

export const Advent8Part2 = () => {
  const { advent8Part2 } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="textarea"
      placeholder="Puzzle input"
      func={(input) => {
        let result: number;

        const js = null;

        const wasm = () => {
          result = advent8Part2(input);
        };

        const after = () => {
          setResult(result.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 8, Part 2"
      result={result}
    />
  );
};
