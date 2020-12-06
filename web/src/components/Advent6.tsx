import { useState } from "react";
import { wasmCrate } from "../helpers/wasm";
import { Test } from "./Test";

export const Advent6Part1 = () => {
  const { advent6Part1 } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="textarea"
      placeholder="Puzzle input"
      func={(input) => {
        let groupAnswers: number;

        const js = null;

        const wasm = () => {
          groupAnswers = advent6Part1(input);
        };

        const after = () => {
          setResult(groupAnswers.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 6, Part 1"
      result={result}
    />
  );
};

export const Advent6Part2 = () => {
  const { advent6Part2 } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="textarea"
      placeholder="Puzzle input"
      func={(input) => {
        let unanimousGroupAnswers: number;

        const js = null;

        const wasm = () => {
          unanimousGroupAnswers = advent6Part2(input);
        };

        const after = () => {
          setResult(unanimousGroupAnswers.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 6, Part 2"
      result={result}
    />
  );
};
