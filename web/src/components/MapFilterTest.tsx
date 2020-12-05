import { wasmCrate } from "../helpers/wasm";
import { Test } from "./Test";

export const MapFilterTest = () => {
  const { arrayMapFilterTest } = wasmCrate();

  return (
    <Test
      inputType="number"
      placeholder="Array size"
      func={(input) => {
        const size = Number.parseInt(input);
        const array = [...new Array(size).keys()].map(
          () => Math.random() * 100
        );
        const js = () => {
          const final = new Array(array.length);
          array.forEach((x) => {
            if (Math.sin(x) > 0.0) final.push(x);
          });
        };
        const wasm = () => {
          arrayMapFilterTest(new Float64Array(array));
        };

        return [js, wasm];
      }}
      label="Map filter test"
    />
  );
};
