import React, { useState } from "react";
import { wasmCrate } from "../helpers/wasm";
import { Test } from "./Test";

const isPrime = (primes: number[], x: number) => {
  for (const i in primes) {
    const p = primes[i];
    if (p * p > x) {
      return true;
    }

    if (x % p === 0) {
      return false;
    }
  }

  return true;
};

export const PrimesTest = () => {
  const { primesTest } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="number"
      func={(input) => {
        const nthPrime = Number.parseInt(input);

        let prime: number;

        const js = () => {
          const primes = [2];

          let n = primes.length;
          let i = 3;
          while (n !== nthPrime) {
            if (isPrime(primes, i)) {
              primes.push(i);
              n++;
            }
            i += 2;
          }

          return primes[primes.length - 1];
        };

        const wasm = () => {
          prime = primesTest(nthPrime);
        };

        const after = () => {
          setResult(prime.toString());
        };

        return [js, wasm, after];
      }}
      label="Primes test"
      result={result}
    />
  );
};
