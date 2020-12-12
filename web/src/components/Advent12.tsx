import { useState } from "react";
import { wasmCrate } from "../helpers/wasm";
import { Test } from "./Test";

export const Advent12Part1 = () => {
  const { advent12Part1 } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="textarea"
      placeholder="Puzzle input"
      func={(input) => {
        let result: number;

        const js = null;

        const wasm = () => {
          result = advent12Part1(input);
        };

        const after = () => {
          setResult(result.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 12, Part 1"
      result={result}
    />
  );
};

export const Advent12Part2 = () => {
  const { advent12Part2 } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="textarea"
      placeholder="Puzzle input"
      func={(input) => {
        let number: number;

        const js = null;

        const wasm = () => {
          number = advent12Part2(input);
        };

        const after = () => {
          setResult(number.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 12, Part 2"
      result={result}
    />
  );
};
