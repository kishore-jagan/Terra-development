import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  inflate_1
} from "./chunk-YRFAX4DE.js";
import {
  BaseDecoder
} from "./chunk-I5LVV7PK.js";
import "./chunk-FQORKCB4.js";

// node_modules/geotiff/dist-module/compression/deflate.js
var DeflateDecoder = class extends BaseDecoder {
  decodeBlock(buffer) {
    return inflate_1(new Uint8Array(buffer)).buffer;
  }
};
export {
  DeflateDecoder as default
};
//# sourceMappingURL=deflate-PIEGPV4S.js.map
