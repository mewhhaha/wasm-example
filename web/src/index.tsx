import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";

const suspend = <A extends any>(promise: Promise<A>) => {
  let result: A;
  let status = "pending";
  const suspender = promise.then(
    (response) => {
      status = "success";
      result = response;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );

  return () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw result;
      default:
        return result;
    }
  };
};

const wasmCrate = suspend(import("wasm-bundle"));

const formStyle: React.CSSProperties = {
  display: "flex",
  flexShrink: 1,
  flexDirection: "column",
  width: 200,
};

const labelStyle: React.CSSProperties = {
  textAlign: "center",
};

const benchmark = (f: () => void): number => {
  const start = performance.now();
  f();
  const end = performance.now();
  return end - start;
};

type TestProps = {
  label: string;
  func: (input: string) => [() => void, () => void, (() => void)?];
  result?: null | string;
  inputType: "number" | "text" | "textarea";
};

const Test: React.FC<TestProps> = ({
  label,
  func: before,
  inputType,
  result,
}) => {
  const [input, setInput] = useState(inputType === "number" ? "0" : "");
  const [time, setTime] = useState<null | [number, number]>(null);

  const run = () => {
    const [js, wasm, after] = before(input);
    const jsTime = benchmark(js);
    const wasmTime = benchmark(wasm);
    after?.();
    setTime([jsTime, wasmTime]);
  };
  return (
    <form
      style={formStyle}
      onSubmit={(event) => {
        event.preventDefault();
        run();
      }}
    >
      <label style={labelStyle}>{label}</label>
      {inputType === "textarea" ? (
        <textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      ) : (
        <input
          type={inputType}
          value={input}
          onChange={(event) => setInput(event.currentTarget.value)}
        />
      )}
      <button type="button" onClick={run}>
        run
      </button>
      <span>{time !== null && `${time[0]}ms (js)`}</span>
      <span>{time !== null && `${time[1]}ms (wasm)`}</span>
      <span>{result !== null && result}</span>
    </form>
  );
};

const TransferSingleTest = () => {
  const { arrayTransferSingleTest } = wasmCrate();

  return (
    <Test
      inputType="number"
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

const TransferDoubleTest = () => {
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

const ReduceTest = () => {
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

const MapFilterTest = () => {
  const { arrayMapFilterTest } = wasmCrate();

  return (
    <Test
      inputType="number"
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

const jsPrimesTest = (nthPrime: number) => {
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

const PrimesTest = () => {
  const { primesTest } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="number"
      func={(input) => {
        const nthPrime = Number.parseInt(input);

        let prime: number;

        const js = () => {
          jsPrimesTest(nthPrime);
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

const Advent1Part1 = () => {
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

const Advent1Part2 = () => {
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

const Advent2Part1 = () => {
  const { advent2Part1 } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="textarea"
      func={(input) => {
        let numberOfPasswords: number = 0;

        const js = () => {};

        const wasm = () => {
          numberOfPasswords = advent2Part1(input);
        };

        const after = () => {
          setResult(numberOfPasswords.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 1, Part 1"
      result={result}
    />
  );
};

const Advent2Part2 = () => {
  const { advent2Part2 } = wasmCrate();
  const [result, setResult] = useState<null | string>(null);
  return (
    <Test
      inputType="textarea"
      func={(input) => {
        let numberOfPasswords: number = 0;

        const js = () => {};

        const wasm = () => {
          numberOfPasswords = advent2Part2(input);
        };

        const after = () => {
          setResult(numberOfPasswords.toString());
        };

        return [js, wasm, after];
      }}
      label="Advent of Code 1, Part 2"
      result={result}
    />
  );
};

const appStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

const App: React.FC = () => {
  return (
    <div style={appStyle}>
      <TransferSingleTest />
      <TransferDoubleTest />
      <ReduceTest />
      <MapFilterTest />
      <PrimesTest />
      <Advent1Part1 />
      <Advent1Part2 />
      <Advent2Part1 />
      <Advent2Part2 />
    </div>
  );
};

var mountNode = document.getElementById("app");
ReactDOM.render(
  <Suspense fallback="loading">
    <App />
  </Suspense>,
  mountNode
);
