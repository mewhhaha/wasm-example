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

        const js = () => {
          const sum = input
            .split("\n\n")
            .map((group) => {
              const set = new Set(group.split("").filter((x) => x !== "\n"));
              return set.size;
            })
            .reduce((acc, x) => acc + x, 0);
          return sum;
        };

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

        const js = () => {
          const intersection = (mut: Set<string>, inc: Set<string>) => {
            mut.forEach((x) => {
              if (!inc.has(x)) mut.delete(x);
            });
          };
          const sum = input
            .split("\n\n")
            .map((group) => {
              const [base, ...rest] = group
                .split("\n")
                .map((line) => new Set(line));

              rest.forEach((set) => {
                intersection(base, set);
              });
              return base.size;
            })
            .reduce((acc, x) => acc + x, 0);
          return sum;
        };

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

export const Advent6Part2Bits = () => {
  const { advent6Part2Bits } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="textarea"
      placeholder="Puzzle input"
      func={(input) => {
        let unanimousGroupAnswers: number;

        const js = null;

        const wasm = () => {
          unanimousGroupAnswers = advent6Part2Bits(input);
        };

        const after = () => {
          setResult(unanimousGroupAnswers.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 6, Part 2 Bits"
      result={result}
    />
  );
};
