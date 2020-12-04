import { wasmCrate } from "../helpers/wasm";
import { Test } from "./Test";

export const TransferSingleTest = () => {
  const { arrayTransferSingleTest } = wasmCrate();

  return (
    <Test
      inputType="number"
      placeholder="Array size"
      func={(input) => {
        const size = Number.parseInt(input);
        const array = [...new Array(size).keys()];

        const js = () => {
          return array;
        };
        const wasm = () => {
          arrayTransferSingleTest(new Float64Array(array));
        };
        return [js, wasm];
      }}
      label="Transfer single test"
    />
  );
};
