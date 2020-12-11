import { useState } from "react";
import { wasmCrate } from "../helpers/wasm";
import { Test } from "./Test";

export const Advent11Part1 = () => {
  const { advent11Part1 } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="textarea"
      placeholder="Puzzle input"
      func={(input) => {
        let result: number;

        const js = null;

        const wasm = () => {
          result = advent11Part1(input);
        };

        const after = () => {
          setResult(result.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 11, Part 1"
      result={result}
    />
  );
};

export const Advent11Part2 = () => {
  const { advent11Part2 } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="textarea"
      placeholder="Puzzle input"
      func={(input) => {
        let number: BigInt;

        const js = null;

        const wasm = () => {
          number = advent11Part2(input);
        };

        const after = () => {
          setResult(number.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 11, Part 2"
      result={result}
    />
  );
};
