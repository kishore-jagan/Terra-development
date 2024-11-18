import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  inflate_1
} from "./chunk-YRFAX4DE.js";
import {
  BaseDecoder
} from "./chunk-KMJWP6WS.js";
import "./chunk-K57UEZGG.js";

// node_modules/geotiff/dist-module/compression/deflate.js
var DeflateDecoder = class extends BaseDecoder {
  decodeBlock(buffer) {
    return inflate_1(new Uint8Array(buffer)).buffer;
  }
};
export {
  DeflateDecoder as default
};
//# sourceMappingURL=deflate-UYNWYWQN.js.map
