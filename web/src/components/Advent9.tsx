import { useState } from "react";
import { wasmCrate } from "../helpers/wasm";
import { Test } from "./Test";

export const Advent9Part1 = () => {
  const { advent9Part1 } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="textarea"
      placeholder="Puzzle input"
      func={(input) => {
        let number: BigInt;

        const js = null;

        const wasm = () => {
          number = advent9Part1(input);
        };

        const after = () => {
          setResult(number.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 9, Part 1"
      result={result}
    />
  );
};

export const Advent9Part2 = () => {
  const { advent9Part2 } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="textarea"
      placeholder="Puzzle input"
      func={(input) => {
        let bags: BigInt;

        const js = null;

        const wasm = () => {
          bags = advent9Part2(input);
        };

        const after = () => {
          setResult(bags.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 9, Part 2"
      result={result}
    />
  );
};
