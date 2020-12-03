import React, { useState } from "react";
import { wasmCrate } from "../helpers/wasm";
import { Test } from "./Test";

export const Advent3Part1 = () => {
  const { advent3Part1 } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="textarea"
      placeholder="Puzzle input"
      func={(input) => {
        let trees: number;

        const js = () => {
          const carta = input.split(/\r?\n/);

          const width = carta[0].length;
          const height = carta.length;

          const slope = [3, 1];
          const coordinates = [0, 0];
          let trees = 0;
          while (coordinates[1] < height) {
            if (carta[coordinates[0] % width][coordinates[1]] === "#") {
              trees++;
            }

            coordinates[0] += slope[0];
            coordinates[1] += slope[1];
          }

          return trees;
        };

        const wasm = () => {
          trees = advent3Part1(input);
        };

        const after = () => {
          setResult(trees.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 3, Part 1"
      result={result}
    />
  );
};

export const Advent3Part2 = () => {
  const { advent3Part2 } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="textarea"
      placeholder="Puzzle input"
      func={(input) => {
        let trees: number;

        const js = () => {
          const carta = input.split(/\r?\n/);
          const count = (slope: [number, number]) => {
            const width = carta[0].length;
            const height = carta.length;
            const coordinates = [0, 0];
            let trees = 0;
            while (coordinates[1] < height) {
              if (carta[coordinates[0] % width][coordinates[1]] === "#") {
                trees++;
              }

              coordinates[0] += slope[0];
              coordinates[1] += slope[1];
            }

            return trees;
          };

          const slopes: [number, number][] = [
            [1, 1],
            [3, 1],
            [5, 1],
            [7, 1],
            [1, 2],
          ];

          return slopes.reduce((product, slope) => product * count(slope), 1);
        };

        const wasm = () => {
          trees = advent3Part2(input);
        };

        const after = () => {
          setResult(trees.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 3, Part 2"
      result={result}
    />
  );
};
