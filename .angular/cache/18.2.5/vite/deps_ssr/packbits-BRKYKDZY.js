import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  BaseDecoder
} from "./chunk-I5LVV7PK.js";
import "./chunk-FQORKCB4.js";

// node_modules/geotiff/dist-module/compression/packbits.js
var PackbitsDecoder = class extends BaseDecoder {
  decodeBlock(buffer) {
    const dataView = new DataView(buffer);
    const out = [];
    for (let i = 0; i < buffer.byteLength; ++i) {
      let header = dataView.getInt8(i);
      if (header < 0) {
        const next = dataView.getUint8(i + 1);
        header = -header;
        for (let j = 0; j <= header; ++j) {
          out.push(next);
        }
        i += 1;
      } else {
        for (let j = 0; j <= header; ++j) {
          out.push(dataView.getUint8(i + j + 1));
        }
        i += header + 1;
      }
    }
    return new Uint8Array(out).buffer;
  }
};
export {
  PackbitsDecoder as default
};
//# sourceMappingURL=packbits-BRKYKDZY.js.map