import {
  inflate_1
} from "./chunk-MTJQ4223.js";
import {
  BaseDecoder
} from "./chunk-3C63TEGN.js";
import "./chunk-T6SYERLG.js";

// node_modules/geotiff/dist-module/compression/deflate.js
var DeflateDecoder = class extends BaseDecoder {
  decodeBlock(buffer) {
    return inflate_1(new Uint8Array(buffer)).buffer;
  }
};
export {
  DeflateDecoder as default
};
//# sourceMappingURL=deflate-YME7VCJX.js.map
