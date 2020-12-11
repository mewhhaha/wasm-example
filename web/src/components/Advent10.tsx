import { useState } from "react";
import { wasmCrate } from "../helpers/wasm";
import { Test } from "./Test";

export const Advent10Part1 = () => {
  const { advent10Part1 } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="textarea"
      placeholder="Puzzle input"
      func={(input) => {
        let result: number;

        const js = null;

        const wasm = () => {
          result = advent10Part1(input);
        };

        const after = () => {
          setResult(result.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 10, Part 1"
      result={result}
    />
  );
};

export const Advent10Part2 = () => {
  const { advent10Part2 } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="textarea"
      placeholder="Puzzle input"
      func={(input) => {
        let result: BigInt;

        const js = null;

        const wasm = () => {
          result = advent10Part2(input);
        };

        const after = () => {
          setResult(result.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 10, Part 2"
      result={result}
    />
  );
};
