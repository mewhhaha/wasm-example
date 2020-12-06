import { wasmCrate } from "../helpers/wasm";
import { Test } from "./Test";

export const TransferStringTest = () => {
  const { stringTransferSingleTest } = wasmCrate();

  return (
    <Test
      inputType="textarea"
      placeholder="Text"
      func={(input) => {
        const js = () => {
          return input;
        };
        const wasm = () => {
          stringTransferSingleTest(input);
        };

        return [js, wasm];
      }}
      label="Transfer string test"
    />
  );
};
