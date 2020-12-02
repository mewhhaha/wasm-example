import React, { useState } from "react";
import { wasmCrate } from "../helpers/wasm";
import { Test } from "./Test";

export const Advent2Part1 = () => {
  const { advent2Part1 } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="textarea"
      func={(input) => {
        let numberOfPasswords: number = 0;

        const js = () => {
          const isValid = ({
            min,
            max,
            letter,
            password,
          }: {
            min: number;
            max: number;
            letter: string;
            password: string;
          }) => {
            let sum = 0;
            password.split("").forEach((c) => {
              if (c === letter) sum++;
            });
            return sum >= min && sum <= max;
          };

          let numberOfPasswords = 0;
          input.split(/\r?\n/).forEach((line) => {
            const {
              groups: { min = 0, max = 0, letter = "", password = "" } = {},
            } =
              /(?<min>\d+)-(?<max>\d+) (?<letter>\w): (?<password>\w+)/.exec(
                line
              ) ?? {};

            if (!min || !max || !letter || !password) return;
            if (
              isValid({
                min: Number.parseInt(min),
                max: Number.parseInt(max),
                letter,
                password,
              })
            )
              numberOfPasswords++;
          });

          return numberOfPasswords;
        };

        const wasm = () => {
          numberOfPasswords = advent2Part1(input);
        };

        const after = () => {
          setResult(numberOfPasswords.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 2, Part 1"
      result={result}
    />
  );
};

export const Advent2Part2 = () => {
  const { advent2Part2 } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="textarea"
      func={(input) => {
        let numberOfPasswords: number = 0;

        const js = () => {
          const isValid = ({
            min,
            max,
            letter,
            password,
          }: {
            min: number;
            max: number;
            letter: string;
            password: string;
          }) => {
            const first = password.charAt(min);
            const second = password.charAt(max);
            return (first === letter || second === letter) && first !== second;
          };

          let _ = 0;
          input.split(/\r?\n/).forEach((line) => {
            const {
              groups: { min = 0, max = 0, letter = "", password = "" } = {},
            } =
              /(?<min>\d+)-(?<max>\d+) (?<letter>\w): (?<password>\w+)/.exec(
                line
              ) ?? {};

            if (!min || !max || !letter || !password) return;
            if (
              isValid({
                min: Number.parseInt(min),
                max: Number.parseInt(max),
                letter,
                password,
              })
            )
              _++;
          });

          return _;
        };

        const wasm = () => {
          numberOfPasswords = advent2Part2(input);
        };

        const after = () => {
          setResult(numberOfPasswords.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 2, Part 2"
      result={result}
    />
  );
};
