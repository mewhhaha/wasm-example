import React, { useState } from "react";

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

export const Test: React.FC<TestProps> = ({
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
