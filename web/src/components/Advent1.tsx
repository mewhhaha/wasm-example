import React, { useState } from "react";
import { wasmCrate } from "../helpers/wasm";
import { Test } from "./Test";

export const Advent1Part1 = () => {
  const { advent1Part1 } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="textarea"
      func={(input) => {
        const numbers = input.split(/\r?\n/).map((x) => {
          return Number.parseInt(x);
        });

        let product: number;

        const js = () => {
          let year = 2020;
          for (let i = 0; i < numbers.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
              let x = numbers[i];
              let y = numbers[j];

              if (x + y === year) return x * y;
            }
          }
        };

        const wasm = () => {
          product = advent1Part1(new Uint32Array(numbers));
        };

        const after = () => {
          setResult(product.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 1, Part 1"
      result={result}
    />
  );
};

export const Advent1Part2 = () => {
  const { advent1Part2 } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="textarea"
      func={(input) => {
        const numbers = input
          .split(/\r?\n/)
          .map((x) => {
            return Number.parseInt(x);
          })
          .sort(() => 0.5 - Math.random());

        let product: number = 0;

        const js = () => {
          let year = 2020;
          for (let i = 0; i < numbers.length; i++) {
            let x = numbers[i];
            for (let j = i + 1; j < numbers.length; j++) {
              let y = numbers[j];
              for (let k = j + 1; k < numbers.length; k++) {
                let z = numbers[k];

                if (x + y + z === year) return x * y * z;
              }
            }
          }
        };

        const wasm = () => {
          product = advent1Part2(new Uint32Array(numbers));
        };

        const after = () => {
          setResult(product.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 1, Part 2"
      result={result}
    />
  );
};
