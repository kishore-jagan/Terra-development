import {
  inflate_1
} from "./chunk-MTJQ4223.js";
import {
  BaseDecoder
} from "./chunk-HJVVVDHP.js";
import "./chunk-ZTELYOIP.js";

// node_modules/geotiff/dist-module/compression/deflate.js
var DeflateDecoder = class extends BaseDecoder {
  decodeBlock(buffer) {
    return inflate_1(new Uint8Array(buffer)).buffer;
  }
};
export {
  DeflateDecoder as default
};
//# sourceMappingURL=deflate-GCDNPR2Y.js.map
