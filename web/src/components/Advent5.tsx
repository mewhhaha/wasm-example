import { useState } from "react";
import { wasmCrate } from "../helpers/wasm";
import { Test } from "./Test";

export const Advent5Part1 = () => {
  const { advent5Part1 } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="textarea"
      placeholder="Puzzle input"
      func={(input) => {
        let result: number;

        const js = null;

        const wasm = () => {
          result = advent5Part1(input);
        };

        const after = () => {
          setResult(result.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 5, Part 1"
      result={result}
    />
  );
};

export const Advent5Part2 = () => {
  const { advent5Part2 } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="textarea"
      placeholder="Puzzle input"
      func={(input) => {
        let result: number;

        const js = null;

        const wasm = () => {
          result = advent5Part2(input);
        };

        const after = () => {
          setResult(result.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 5, Part 2"
      result={result}
    />
  );
};
