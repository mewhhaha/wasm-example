import React from "react";
import { wasmCrate } from "../helpers/wasm";
import { Test } from "./Test";

export const TransferDoubleTest = () => {
  const { arrayTransferDoubleTest } = wasmCrate();

  return (
    <Test
      inputType="number"
      func={(input) => {
        const size = Number.parseInt(input);
        const array = [...new Array(size).keys()];

        let x: Float64Array;

        const js = () => {
          return array;
        };
        const wasm = () => {
          x = arrayTransferDoubleTest(new Float64Array(array));
        };

        const after = () => {
          console.log(x);
        };

        return [js, wasm, after];
      }}
      label="Transfer double test"
    />
  );
};
