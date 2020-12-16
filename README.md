[Github page](https://mewhhaha.github.io/wasm-example)

### Conclusions so far
- Use a custom `Webpack` build with `wasm-pack`
- Always benchmark
- There's a penalty in transferring data
- The more work you do in `WASM` "world" the better
- The `JavaScript` interpreter can be very efficient, especially when rerunning the same or similar computation
- Doing all my primes in `WASM` for now on

### Requirements
- You need Rust, wasm-pack (cargo install wasm-pack), pnpm and patience
- use `pnpm build` in the wasm-folder to build the package
- use `pnpm start` to start the server