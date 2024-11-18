import { createRequire } from 'module';const require = createRequire(import.meta.url);

// node_modules/ol/tilegrid/common.js
var DEFAULT_MAX_ZOOM = 42;
var DEFAULT_TILE_SIZE = 256;

// node_modules/ol/easing.js
function easeIn(t) {
  return Math.pow(t, 3);
}
function easeOut(t) {
  return 1 - easeIn(1 - t);
}
function inAndOut(t) {
  return 3 * t * t - 2 * t * t * t;
}
function linear(t) {
  return t;
}

export {
  DEFAULT_MAX_ZOOM,
  DEFAULT_TILE_SIZE,
  easeIn,
  easeOut,
  inAndOut,
  linear
};
//# sourceMappingURL=chunk-EZCDRW5B.js.map
