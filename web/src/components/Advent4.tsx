import React, { useState } from "react";
import { wasmCrate } from "../helpers/wasm";
import { Test } from "./Test";

export const Advent4Part1 = () => {
  const { advent4Part1 } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="textarea"
      placeholder="Puzzle input"
      func={(input) => {
        let passports: number;

        const js = null;

        const wasm = () => {
          passports = advent4Part1(input);
        };

        const after = () => {
          setResult(passports.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 4, Part 1"
      result={result}
    />
  );
};

export const Advent4Part2 = () => {
  const { advent4Part2 } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="textarea"
      placeholder="Puzzle input"
      func={(input) => {
        let passports: number;

        const js = null;

        const wasm = () => {
          passports = advent4Part2(input);
        };

        const after = () => {
          setResult(passports.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 4, Part 1"
      result={result}
    />
  );
};
