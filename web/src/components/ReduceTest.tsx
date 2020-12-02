import React from "react";
import { wasmCrate } from "../helpers/wasm";
import { Test } from "./Test";

export const ReduceTest = () => {
  const { arrayReduceTest } = wasmCrate();

  return (
    <Test
      inputType="number"
      func={(input) => {
        const size = Number.parseInt(input);
        const array = [...new Array(size).keys()].map(
          () => Math.random() * 100
        );

        const js = () => {
          array.reduce((sum, x) => sum + x, 0);
        };
        const wasm = () => {
          arrayReduceTest(new Float64Array(array));
        };

        return [js, wasm];
      }}
      label="Reduce test"
    />
  );
};
