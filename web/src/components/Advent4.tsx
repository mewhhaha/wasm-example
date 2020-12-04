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

        const js = () => {
          const requiredFields = new Set([
            "byr",
            "iyr",
            "eyr",
            "hgt",
            "hcl",
            "ecl",
            "pid",
          ]);
          const validPassports = input
            .split(/\n\n/)
            .map((passport) =>
              passport
                .split(/:\S+\s*/)
                .filter((field) => requiredFields.has(field))
            )
            .filter((fields) => fields.length === requiredFields.size).length;
          return validPassports;
        };

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

        const range = (from: number, to: number) => (value: string) => {
          let n = Number.parseInt(value);
          return n >= from && n <= to;
        };

        const height = (value: string) => {
          const [, number, unit] = value.match(/^(\d+)(\w{2})$/) ?? [];

          switch (unit) {
            case "cm":
              return range(150, 193)(number);
            case "in":
              return range(59, 76)(number);
            default:
              return false;
          }
        };

        const hair = (value: string) => {
          return !!value.match(/^#([0-9]|[a-f])+$/);
        };

        const eyeColors = new Set([
          "amb",
          "blu",
          "brn",
          "gry",
          "grn",
          "hzl",
          "oth",
        ]);

        const eyes = (value: string) => {
          return eyeColors.has(value);
        };

        const pid = (value: string) => {
          return !!value.match(/^\d{9}$/);
        };

        const js = () => {
          const requiredFields = new Map([
            ["byr", range(1920, 2002)],
            ["iyr", range(2010, 2020)],
            ["eyr", range(2020, 2030)],
            ["hgt", height],
            ["hcl", hair],
            ["ecl", eyes],
            ["pid", pid],
          ]);
          const validPassports = input
            .split(/\n\n/)
            .map((passport) =>
              passport.split(/\s/).filter((field) => {
                const [code, value] = field.split(/:/);
                return requiredFields.get(code)?.(value);
              })
            )
            .filter((fields) => fields.length === requiredFields.size).length;
          return validPassports;
        };

        const wasm = () => {
          passports = advent4Part2(input);
        };

        const after = () => {
          setResult(passports.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 4, Part 2"
      result={result}
    />
  );
};
