import wasm from "../pkg/node/hpke_dispatch_bg.wasm";
import init from "../pkg/node/hpke_dispatch.js";
//this is exported so it doesn't get dead-code-eliminated
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const __wasm = init(wasm);
export * from "../pkg/node/hpke_dispatch.js";
