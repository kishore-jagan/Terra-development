import {
  BaseVector_default,
  BooleanType,
  CallExpression,
  ColorType,
  Group_default,
  NumberArrayType,
  NumberType,
  Ops,
  SizeType,
  StringType,
  computeGeometryType,
  newParsingContext,
  parse,
  typeName
} from "./chunk-2KE5MYBH.js";
import {
  ImageCanvas_default,
  ImageLayer_default,
  Image_default,
  VectorEventType_default,
  Vector_default,
  fromResolutionLike
} from "./chunk-XLSTPAWA.js";
import {
  Feature_default
} from "./chunk-FCBGHDJ5.js";
import {
  Collection_default,
  RBush
} from "./chunk-H7FSCGDP.js";
import "./chunk-HM3IY3H4.js";
import {
  Fill_default,
  Icon_default,
  Stroke_default,
  Style_default,
  Text_default,
  asColorLike,
  defaultFillStyle,
  defaultFont,
  defaultLineCap,
  defaultLineDash,
  defaultLineDashOffset,
  defaultLineJoin,
  defaultLineWidth,
  defaultMiterLimit,
  defaultPadding,
  defaultStrokeStyle,
  defaultTextAlign,
  defaultTextBaseline,
  drawImageOrLabel,
  getTextDimensions,
  measureAndCacheTextWidth,
  registerFont
} from "./chunk-IIV7BJXR.js";
import "./chunk-YBIDJNRH.js";
import {
  LineString_default,
  lineStringLength
} from "./chunk-PPKC2NZ7.js";
import {
  BaseTile_default,
  DataTile_default,
  DataTile_default2,
  Layer_default as Layer_default2,
  Layer_default2 as Layer_default3,
  TileLayer_default,
  TileProperty_default,
  Tile_default as Tile_default2,
  ZIndexContext_default,
  asArrayLike,
  asImageLike,
  canvasPool
} from "./chunk-EEMUAFYQ.js";
import {
  EventType_default as EventType_default2,
  Event_default,
  Layer_default,
  Property_default
} from "./chunk-NXHNDBDV.js";
import {
  asArray
} from "./chunk-NXAWT2XU.js";
import {
  ImageTile_default,
  LRUCache_default,
  TileRange_default,
  Tile_default2 as Tile_default,
  createOrUpdate2,
  getKey
} from "./chunk-YRW22ALP.js";
import {
  TileState_default
} from "./chunk-Z3DISOEB.js";
import {
  ImageState_default,
  SAFARI_BUG_237906,
  createCanvasContext2D,
  releaseCanvas,
  toSize
} from "./chunk-ZLXPRQ4U.js";
import {
  ViewHint_default
} from "./chunk-OPOXYUGB.js";
import "./chunk-XY5EX7MJ.js";
import {
  Point_default,
  apply,
  compose,
  create,
  inflateCoordinates,
  inflateCoordinatesArray,
  inflateMultiCoordinatesArray,
  makeInverse,
  multiply,
  reset,
  rotate,
  rotate2,
  scale,
  setFromArray,
  snap,
  transform2D,
  transformGeom2D,
  translate
} from "./chunk-XMH4NNAN.js";
import "./chunk-NRZEKP44.js";
import {
  Disposable_default,
  EventType_default,
  Target_default,
  abstract,
  ascending,
  assert,
  descending,
  equals,
  getUid,
  listen,
  reverseSubArray,
  unlistenByKey
} from "./chunk-VBKY7ZCK.js";
import {
  Relationship_default,
  applyTransform,
  approximatelyEquals,
  boundingExtent,
  buffer,
  clone,
  containsCoordinate,
  containsExtent,
  coordinateRelationship,
  createEmpty,
  createOrUpdate,
  degreesToStringHDMS,
  equals as equals2,
  equivalent,
  extendCoordinate,
  fromUserCoordinate,
  fromUserExtent,
  get,
  getCenter,
  getHeight,
  getIntersection,
  getTopLeft,
  getTransform,
  getTransformFromProjections,
  getUserProjection,
  getWidth,
  intersects,
  isEmpty as isEmpty2,
  scaleFromCenter,
  toUserExtent,
  toUserResolution,
  wrapX,
  wrapX2
} from "./chunk-RB4D37YD.js";
import {
  clamp,
  lerp,
  squaredSegmentDistance,
  toFixed
} from "./chunk-Y44QDOHL.js";
import {
  clear,
  isEmpty
} from "./chunk-EVV36KLN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-ZTELYOIP.js";

// node_modules/ol/render/canvas/Instruction.js
var Instruction = {
  BEGIN_GEOMETRY: 0,
  BEGIN_PATH: 1,
  CIRCLE: 2,
  CLOSE_PATH: 3,
  CUSTOM: 4,
  DRAW_CHARS: 5,
  DRAW_IMAGE: 6,
  END_GEOMETRY: 7,
  FILL: 8,
  MOVE_TO_LINE_TO: 9,
  SET_FILL_STYLE: 10,
  SET_STROKE_STYLE: 11,
  STROKE: 12
};
var fillInstruction = [Instruction.FILL];
var strokeInstruction = [Instruction.STROKE];
var beginPathInstruction = [Instruction.BEGIN_PATH];
var closePathInstruction = [Instruction.CLOSE_PATH];
var Instruction_default = Instruction;

// node_modules/ol/render/VectorContext.js
var VectorContext = class {
  /**
   * Render a geometry with a custom renderer.
   *
   * @param {import("../geom/SimpleGeometry.js").default} geometry Geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {Function} renderer Renderer.
   * @param {Function} hitDetectionRenderer Renderer.
   * @param {number} [index] Render order index.
   */
  drawCustom(geometry, feature, renderer, hitDetectionRenderer, index) {
  }
  /**
   * Render a geometry.
   *
   * @param {import("../geom/Geometry.js").default} geometry The geometry to render.
   */
  drawGeometry(geometry) {
  }
  /**
   * Set the rendering style.
   *
   * @param {import("../style/Style.js").default} style The rendering style.
   */
  setStyle(style) {
  }
  /**
   * @param {import("../geom/Circle.js").default} circleGeometry Circle geometry.
   * @param {import("../Feature.js").default} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawCircle(circleGeometry, feature, index) {
  }
  /**
   * @param {import("../Feature.js").default} feature Feature.
   * @param {import("../style/Style.js").default} style Style.
   * @param {number} [index] Render order index.
   */
  drawFeature(feature, style, index) {
  }
  /**
   * @param {import("../geom/GeometryCollection.js").default} geometryCollectionGeometry Geometry collection.
   * @param {import("../Feature.js").default} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawGeometryCollection(geometryCollectionGeometry, feature, index) {
  }
  /**
   * @param {import("../geom/LineString.js").default|import("./Feature.js").default} lineStringGeometry Line string geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawLineString(lineStringGeometry, feature, index) {
  }
  /**
   * @param {import("../geom/MultiLineString.js").default|import("./Feature.js").default} multiLineStringGeometry MultiLineString geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawMultiLineString(multiLineStringGeometry, feature, index) {
  }
  /**
   * @param {import("../geom/MultiPoint.js").default|import("./Feature.js").default} multiPointGeometry MultiPoint geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawMultiPoint(multiPointGeometry, feature, index) {
  }
  /**
   * @param {import("../geom/MultiPolygon.js").default} multiPolygonGeometry MultiPolygon geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawMultiPolygon(multiPolygonGeometry, feature, index) {
  }
  /**
   * @param {import("../geom/Point.js").default|import("./Feature.js").default} pointGeometry Point geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawPoint(pointGeometry, feature, index) {
  }
  /**
   * @param {import("../geom/Polygon.js").default|import("./Feature.js").default} polygonGeometry Polygon geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawPolygon(polygonGeometry, feature, index) {
  }
  /**
   * @param {import("../geom/SimpleGeometry.js").default|import("./Feature.js").default} geometry Geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   */
  drawText(geometry, feature, index) {
  }
  /**
   * @param {import("../style/Fill.js").default} fillStyle Fill style.
   * @param {import("../style/Stroke.js").default} strokeStyle Stroke style.
   */
  setFillStrokeStyle(fillStyle, strokeStyle) {
  }
  /**
   * @param {import("../style/Image.js").default} imageStyle Image style.
   * @param {import("../render/canvas.js").DeclutterImageWithText} [declutterImageWithText] Shared data for combined decluttering with a text style.
   */
  setImageStyle(imageStyle, declutterImageWithText) {
  }
  /**
   * @param {import("../style/Text.js").default} textStyle Text style.
   * @param {import("../render/canvas.js").DeclutterImageWithText} [declutterImageWithText] Shared data for combined decluttering with an image style.
   */
  setTextStyle(textStyle, declutterImageWithText) {
  }
};
var VectorContext_default = VectorContext;

// node_modules/ol/render/canvas/Builder.js
var CanvasBuilder = class extends VectorContext_default {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(tolerance, maxExtent, resolution, pixelRatio) {
    super();
    this.tolerance = tolerance;
    this.maxExtent = maxExtent;
    this.pixelRatio = pixelRatio;
    this.maxLineWidth = 0;
    this.resolution = resolution;
    this.beginGeometryInstruction1_ = null;
    this.beginGeometryInstruction2_ = null;
    this.bufferedMaxExtent_ = null;
    this.instructions = [];
    this.coordinates = [];
    this.tmpCoordinate_ = [];
    this.hitDetectionInstructions = [];
    this.state = /** @type {import("../canvas.js").FillStrokeState} */
    {};
  }
  /**
   * @protected
   * @param {Array<number>} dashArray Dash array.
   * @return {Array<number>} Dash array with pixel ratio applied
   */
  applyPixelRatio(dashArray) {
    const pixelRatio = this.pixelRatio;
    return pixelRatio == 1 ? dashArray : dashArray.map(function(dash) {
      return dash * pixelRatio;
    });
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} stride Stride.
   * @protected
   * @return {number} My end
   */
  appendFlatPointCoordinates(flatCoordinates, stride) {
    const extent = this.getBufferedMaxExtent();
    const tmpCoord = this.tmpCoordinate_;
    const coordinates = this.coordinates;
    let myEnd = coordinates.length;
    for (let i = 0, ii = flatCoordinates.length; i < ii; i += stride) {
      tmpCoord[0] = flatCoordinates[i];
      tmpCoord[1] = flatCoordinates[i + 1];
      if (containsCoordinate(extent, tmpCoord)) {
        coordinates[myEnd++] = tmpCoord[0];
        coordinates[myEnd++] = tmpCoord[1];
      }
    }
    return myEnd;
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @param {boolean} closed Last input coordinate equals first.
   * @param {boolean} skipFirst Skip first coordinate.
   * @protected
   * @return {number} My end.
   */
  appendFlatLineCoordinates(flatCoordinates, offset, end, stride, closed, skipFirst) {
    const coordinates = this.coordinates;
    let myEnd = coordinates.length;
    const extent = this.getBufferedMaxExtent();
    if (skipFirst) {
      offset += stride;
    }
    let lastXCoord = flatCoordinates[offset];
    let lastYCoord = flatCoordinates[offset + 1];
    const nextCoord = this.tmpCoordinate_;
    let skipped = true;
    let i, lastRel, nextRel;
    for (i = offset + stride; i < end; i += stride) {
      nextCoord[0] = flatCoordinates[i];
      nextCoord[1] = flatCoordinates[i + 1];
      nextRel = coordinateRelationship(extent, nextCoord);
      if (nextRel !== lastRel) {
        if (skipped) {
          coordinates[myEnd++] = lastXCoord;
          coordinates[myEnd++] = lastYCoord;
          skipped = false;
        }
        coordinates[myEnd++] = nextCoord[0];
        coordinates[myEnd++] = nextCoord[1];
      } else if (nextRel === Relationship_default.INTERSECTING) {
        coordinates[myEnd++] = nextCoord[0];
        coordinates[myEnd++] = nextCoord[1];
        skipped = false;
      } else {
        skipped = true;
      }
      lastXCoord = nextCoord[0];
      lastYCoord = nextCoord[1];
      lastRel = nextRel;
    }
    if (closed && skipped || i === offset + stride) {
      coordinates[myEnd++] = lastXCoord;
      coordinates[myEnd++] = lastYCoord;
    }
    return myEnd;
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {Array<number>} ends Ends.
   * @param {number} stride Stride.
   * @param {Array<number>} builderEnds Builder ends.
   * @return {number} Offset.
   */
  drawCustomCoordinates_(flatCoordinates, offset, ends, stride, builderEnds) {
    for (let i = 0, ii = ends.length; i < ii; ++i) {
      const end = ends[i];
      const builderEnd = this.appendFlatLineCoordinates(flatCoordinates, offset, end, stride, false, false);
      builderEnds.push(builderEnd);
      offset = end;
    }
    return offset;
  }
  /**
   * @param {import("../../geom/SimpleGeometry.js").default} geometry Geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {Function} renderer Renderer.
   * @param {Function} hitDetectionRenderer Renderer.
   * @param {number} [index] Render order index.
   * @override
   */
  drawCustom(geometry, feature, renderer, hitDetectionRenderer, index) {
    this.beginGeometry(geometry, feature, index);
    const type = geometry.getType();
    const stride = geometry.getStride();
    const builderBegin = this.coordinates.length;
    let flatCoordinates, builderEnd, builderEnds, builderEndss;
    let offset;
    switch (type) {
      case "MultiPolygon":
        flatCoordinates = /** @type {import("../../geom/MultiPolygon.js").default} */
        geometry.getOrientedFlatCoordinates();
        builderEndss = [];
        const endss = (
          /** @type {import("../../geom/MultiPolygon.js").default} */
          geometry.getEndss()
        );
        offset = 0;
        for (let i = 0, ii = endss.length; i < ii; ++i) {
          const myEnds = [];
          offset = this.drawCustomCoordinates_(flatCoordinates, offset, endss[i], stride, myEnds);
          builderEndss.push(myEnds);
        }
        this.instructions.push([Instruction_default.CUSTOM, builderBegin, builderEndss, geometry, renderer, inflateMultiCoordinatesArray, index]);
        this.hitDetectionInstructions.push([Instruction_default.CUSTOM, builderBegin, builderEndss, geometry, hitDetectionRenderer || renderer, inflateMultiCoordinatesArray, index]);
        break;
      case "Polygon":
      case "MultiLineString":
        builderEnds = [];
        flatCoordinates = type == "Polygon" ? (
          /** @type {import("../../geom/Polygon.js").default} */
          geometry.getOrientedFlatCoordinates()
        ) : geometry.getFlatCoordinates();
        offset = this.drawCustomCoordinates_(
          flatCoordinates,
          0,
          /** @type {import("../../geom/Polygon.js").default|import("../../geom/MultiLineString.js").default} */
          geometry.getEnds(),
          stride,
          builderEnds
        );
        this.instructions.push([Instruction_default.CUSTOM, builderBegin, builderEnds, geometry, renderer, inflateCoordinatesArray, index]);
        this.hitDetectionInstructions.push([Instruction_default.CUSTOM, builderBegin, builderEnds, geometry, hitDetectionRenderer || renderer, inflateCoordinatesArray, index]);
        break;
      case "LineString":
      case "Circle":
        flatCoordinates = geometry.getFlatCoordinates();
        builderEnd = this.appendFlatLineCoordinates(flatCoordinates, 0, flatCoordinates.length, stride, false, false);
        this.instructions.push([Instruction_default.CUSTOM, builderBegin, builderEnd, geometry, renderer, inflateCoordinates, index]);
        this.hitDetectionInstructions.push([Instruction_default.CUSTOM, builderBegin, builderEnd, geometry, hitDetectionRenderer || renderer, inflateCoordinates, index]);
        break;
      case "MultiPoint":
        flatCoordinates = geometry.getFlatCoordinates();
        builderEnd = this.appendFlatPointCoordinates(flatCoordinates, stride);
        if (builderEnd > builderBegin) {
          this.instructions.push([Instruction_default.CUSTOM, builderBegin, builderEnd, geometry, renderer, inflateCoordinates, index]);
          this.hitDetectionInstructions.push([Instruction_default.CUSTOM, builderBegin, builderEnd, geometry, hitDetectionRenderer || renderer, inflateCoordinates, index]);
        }
        break;
      case "Point":
        flatCoordinates = geometry.getFlatCoordinates();
        this.coordinates.push(flatCoordinates[0], flatCoordinates[1]);
        builderEnd = this.coordinates.length;
        this.instructions.push([Instruction_default.CUSTOM, builderBegin, builderEnd, geometry, renderer, void 0, index]);
        this.hitDetectionInstructions.push([Instruction_default.CUSTOM, builderBegin, builderEnd, geometry, hitDetectionRenderer || renderer, void 0, index]);
        break;
      default:
    }
    this.endGeometry(feature);
  }
  /**
   * @protected
   * @param {import("../../geom/Geometry").default|import("../Feature.js").default} geometry The geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} index Render order index
   */
  beginGeometry(geometry, feature, index) {
    this.beginGeometryInstruction1_ = [Instruction_default.BEGIN_GEOMETRY, feature, 0, geometry, index];
    this.instructions.push(this.beginGeometryInstruction1_);
    this.beginGeometryInstruction2_ = [Instruction_default.BEGIN_GEOMETRY, feature, 0, geometry, index];
    this.hitDetectionInstructions.push(this.beginGeometryInstruction2_);
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   */
  finish() {
    return {
      instructions: this.instructions,
      hitDetectionInstructions: this.hitDetectionInstructions,
      coordinates: this.coordinates
    };
  }
  /**
   * Reverse the hit detection instructions.
   */
  reverseHitDetectionInstructions() {
    const hitDetectionInstructions = this.hitDetectionInstructions;
    hitDetectionInstructions.reverse();
    let i;
    const n = hitDetectionInstructions.length;
    let instruction;
    let type;
    let begin = -1;
    for (i = 0; i < n; ++i) {
      instruction = hitDetectionInstructions[i];
      type = /** @type {import("./Instruction.js").default} */
      instruction[0];
      if (type == Instruction_default.END_GEOMETRY) {
        begin = i;
      } else if (type == Instruction_default.BEGIN_GEOMETRY) {
        instruction[2] = i;
        reverseSubArray(this.hitDetectionInstructions, begin, i);
        begin = -1;
      }
    }
  }
  /**
   * @param {import("../../style/Fill.js").default} fillStyle Fill style.
   * @param {import("../../style/Stroke.js").default} strokeStyle Stroke style.
   * @override
   */
  setFillStrokeStyle(fillStyle, strokeStyle) {
    const state = this.state;
    if (fillStyle) {
      const fillStyleColor = fillStyle.getColor();
      state.fillPatternScale = fillStyleColor && typeof fillStyleColor === "object" && "src" in fillStyleColor ? this.pixelRatio : 1;
      state.fillStyle = asColorLike(fillStyleColor ? fillStyleColor : defaultFillStyle);
    } else {
      state.fillStyle = void 0;
    }
    if (strokeStyle) {
      const strokeStyleColor = strokeStyle.getColor();
      state.strokeStyle = asColorLike(strokeStyleColor ? strokeStyleColor : defaultStrokeStyle);
      const strokeStyleLineCap = strokeStyle.getLineCap();
      state.lineCap = strokeStyleLineCap !== void 0 ? strokeStyleLineCap : defaultLineCap;
      const strokeStyleLineDash = strokeStyle.getLineDash();
      state.lineDash = strokeStyleLineDash ? strokeStyleLineDash.slice() : defaultLineDash;
      const strokeStyleLineDashOffset = strokeStyle.getLineDashOffset();
      state.lineDashOffset = strokeStyleLineDashOffset ? strokeStyleLineDashOffset : defaultLineDashOffset;
      const strokeStyleLineJoin = strokeStyle.getLineJoin();
      state.lineJoin = strokeStyleLineJoin !== void 0 ? strokeStyleLineJoin : defaultLineJoin;
      const strokeStyleWidth = strokeStyle.getWidth();
      state.lineWidth = strokeStyleWidth !== void 0 ? strokeStyleWidth : defaultLineWidth;
      const strokeStyleMiterLimit = strokeStyle.getMiterLimit();
      state.miterLimit = strokeStyleMiterLimit !== void 0 ? strokeStyleMiterLimit : defaultMiterLimit;
      if (state.lineWidth > this.maxLineWidth) {
        this.maxLineWidth = state.lineWidth;
        this.bufferedMaxExtent_ = null;
      }
    } else {
      state.strokeStyle = void 0;
      state.lineCap = void 0;
      state.lineDash = null;
      state.lineDashOffset = void 0;
      state.lineJoin = void 0;
      state.lineWidth = void 0;
      state.miterLimit = void 0;
    }
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @return {Array<*>} Fill instruction.
   */
  createFill(state) {
    const fillStyle = state.fillStyle;
    const fillInstruction2 = [Instruction_default.SET_FILL_STYLE, fillStyle];
    if (typeof fillStyle !== "string") {
      fillInstruction2.push(state.fillPatternScale);
    }
    return fillInstruction2;
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   */
  applyStroke(state) {
    this.instructions.push(this.createStroke(state));
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @return {Array<*>} Stroke instruction.
   */
  createStroke(state) {
    return [Instruction_default.SET_STROKE_STYLE, state.strokeStyle, state.lineWidth * this.pixelRatio, state.lineCap, state.lineJoin, state.miterLimit, this.applyPixelRatio(state.lineDash), state.lineDashOffset * this.pixelRatio];
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @param {function(this:CanvasBuilder, import("../canvas.js").FillStrokeState):Array<*>} createFill Create fill.
   */
  updateFillStyle(state, createFill) {
    const fillStyle = state.fillStyle;
    if (typeof fillStyle !== "string" || state.currentFillStyle != fillStyle) {
      if (fillStyle !== void 0) {
        this.instructions.push(createFill.call(this, state));
      }
      state.currentFillStyle = fillStyle;
    }
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @param {function(this:CanvasBuilder, import("../canvas.js").FillStrokeState): void} applyStroke Apply stroke.
   */
  updateStrokeStyle(state, applyStroke) {
    const strokeStyle = state.strokeStyle;
    const lineCap = state.lineCap;
    const lineDash = state.lineDash;
    const lineDashOffset = state.lineDashOffset;
    const lineJoin = state.lineJoin;
    const lineWidth = state.lineWidth;
    const miterLimit = state.miterLimit;
    if (state.currentStrokeStyle != strokeStyle || state.currentLineCap != lineCap || lineDash != state.currentLineDash && !equals(state.currentLineDash, lineDash) || state.currentLineDashOffset != lineDashOffset || state.currentLineJoin != lineJoin || state.currentLineWidth != lineWidth || state.currentMiterLimit != miterLimit) {
      if (strokeStyle !== void 0) {
        applyStroke.call(this, state);
      }
      state.currentStrokeStyle = strokeStyle;
      state.currentLineCap = lineCap;
      state.currentLineDash = lineDash;
      state.currentLineDashOffset = lineDashOffset;
      state.currentLineJoin = lineJoin;
      state.currentLineWidth = lineWidth;
      state.currentMiterLimit = miterLimit;
    }
  }
  /**
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  endGeometry(feature) {
    this.beginGeometryInstruction1_[2] = this.instructions.length;
    this.beginGeometryInstruction1_ = null;
    this.beginGeometryInstruction2_[2] = this.hitDetectionInstructions.length;
    this.beginGeometryInstruction2_ = null;
    const endGeometryInstruction = [Instruction_default.END_GEOMETRY, feature];
    this.instructions.push(endGeometryInstruction);
    this.hitDetectionInstructions.push(endGeometryInstruction);
  }
  /**
   * Get the buffered rendering extent.  Rendering will be clipped to the extent
   * provided to the constructor.  To account for symbolizers that may intersect
   * this extent, we calculate a buffered extent (e.g. based on stroke width).
   * @return {import("../../extent.js").Extent} The buffered rendering extent.
   * @protected
   */
  getBufferedMaxExtent() {
    if (!this.bufferedMaxExtent_) {
      this.bufferedMaxExtent_ = clone(this.maxExtent);
      if (this.maxLineWidth > 0) {
        const width = this.resolution * (this.maxLineWidth + 1) / 2;
        buffer(this.bufferedMaxExtent_, width, this.bufferedMaxExtent_);
      }
    }
    return this.bufferedMaxExtent_;
  }
};
var Builder_default = CanvasBuilder;

// node_modules/ol/render/canvas/ImageBuilder.js
var CanvasImageBuilder = class extends Builder_default {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(tolerance, maxExtent, resolution, pixelRatio) {
    super(tolerance, maxExtent, resolution, pixelRatio);
    this.hitDetectionImage_ = null;
    this.image_ = null;
    this.imagePixelRatio_ = void 0;
    this.anchorX_ = void 0;
    this.anchorY_ = void 0;
    this.height_ = void 0;
    this.opacity_ = void 0;
    this.originX_ = void 0;
    this.originY_ = void 0;
    this.rotateWithView_ = void 0;
    this.rotation_ = void 0;
    this.scale_ = void 0;
    this.width_ = void 0;
    this.declutterMode_ = void 0;
    this.declutterImageWithText_ = void 0;
  }
  /**
   * @param {import("../../geom/Point.js").default|import("../Feature.js").default} pointGeometry Point geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   * @override
   */
  drawPoint(pointGeometry, feature, index) {
    if (!this.image_ || this.maxExtent && !containsCoordinate(this.maxExtent, pointGeometry.getFlatCoordinates())) {
      return;
    }
    this.beginGeometry(pointGeometry, feature, index);
    const flatCoordinates = pointGeometry.getFlatCoordinates();
    const stride = pointGeometry.getStride();
    const myBegin = this.coordinates.length;
    const myEnd = this.appendFlatPointCoordinates(flatCoordinates, stride);
    this.instructions.push([
      Instruction_default.DRAW_IMAGE,
      myBegin,
      myEnd,
      this.image_,
      // Remaining arguments to DRAW_IMAGE are in alphabetical order
      this.anchorX_ * this.imagePixelRatio_,
      this.anchorY_ * this.imagePixelRatio_,
      Math.ceil(this.height_ * this.imagePixelRatio_),
      this.opacity_,
      this.originX_ * this.imagePixelRatio_,
      this.originY_ * this.imagePixelRatio_,
      this.rotateWithView_,
      this.rotation_,
      [this.scale_[0] * this.pixelRatio / this.imagePixelRatio_, this.scale_[1] * this.pixelRatio / this.imagePixelRatio_],
      Math.ceil(this.width_ * this.imagePixelRatio_),
      this.declutterMode_,
      this.declutterImageWithText_
    ]);
    this.hitDetectionInstructions.push([
      Instruction_default.DRAW_IMAGE,
      myBegin,
      myEnd,
      this.hitDetectionImage_,
      // Remaining arguments to DRAW_IMAGE are in alphabetical order
      this.anchorX_,
      this.anchorY_,
      this.height_,
      1,
      this.originX_,
      this.originY_,
      this.rotateWithView_,
      this.rotation_,
      this.scale_,
      this.width_,
      this.declutterMode_,
      this.declutterImageWithText_
    ]);
    this.endGeometry(feature);
  }
  /**
   * @param {import("../../geom/MultiPoint.js").default|import("../Feature.js").default} multiPointGeometry MultiPoint geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   * @override
   */
  drawMultiPoint(multiPointGeometry, feature, index) {
    if (!this.image_) {
      return;
    }
    this.beginGeometry(multiPointGeometry, feature, index);
    const flatCoordinates = multiPointGeometry.getFlatCoordinates();
    const filteredFlatCoordinates = [];
    for (let i = 0, ii = flatCoordinates.length; i < ii; i += multiPointGeometry.getStride()) {
      if (!this.maxExtent || containsCoordinate(this.maxExtent, flatCoordinates.slice(i, i + 2))) {
        filteredFlatCoordinates.push(flatCoordinates[i], flatCoordinates[i + 1]);
      }
    }
    const myBegin = this.coordinates.length;
    const myEnd = this.appendFlatPointCoordinates(filteredFlatCoordinates, 2);
    this.instructions.push([
      Instruction_default.DRAW_IMAGE,
      myBegin,
      myEnd,
      this.image_,
      // Remaining arguments to DRAW_IMAGE are in alphabetical order
      this.anchorX_ * this.imagePixelRatio_,
      this.anchorY_ * this.imagePixelRatio_,
      Math.ceil(this.height_ * this.imagePixelRatio_),
      this.opacity_,
      this.originX_ * this.imagePixelRatio_,
      this.originY_ * this.imagePixelRatio_,
      this.rotateWithView_,
      this.rotation_,
      [this.scale_[0] * this.pixelRatio / this.imagePixelRatio_, this.scale_[1] * this.pixelRatio / this.imagePixelRatio_],
      Math.ceil(this.width_ * this.imagePixelRatio_),
      this.declutterMode_,
      this.declutterImageWithText_
    ]);
    this.hitDetectionInstructions.push([
      Instruction_default.DRAW_IMAGE,
      myBegin,
      myEnd,
      this.hitDetectionImage_,
      // Remaining arguments to DRAW_IMAGE are in alphabetical order
      this.anchorX_,
      this.anchorY_,
      this.height_,
      1,
      this.originX_,
      this.originY_,
      this.rotateWithView_,
      this.rotation_,
      this.scale_,
      this.width_,
      this.declutterMode_,
      this.declutterImageWithText_
    ]);
    this.endGeometry(feature);
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   * @override
   */
  finish() {
    this.reverseHitDetectionInstructions();
    this.anchorX_ = void 0;
    this.anchorY_ = void 0;
    this.hitDetectionImage_ = null;
    this.image_ = null;
    this.imagePixelRatio_ = void 0;
    this.height_ = void 0;
    this.scale_ = void 0;
    this.opacity_ = void 0;
    this.originX_ = void 0;
    this.originY_ = void 0;
    this.rotateWithView_ = void 0;
    this.rotation_ = void 0;
    this.width_ = void 0;
    return super.finish();
  }
  /**
   * @param {import("../../style/Image.js").default} imageStyle Image style.
   * @param {Object} [sharedData] Shared data.
   * @override
   */
  setImageStyle(imageStyle, sharedData) {
    const anchor = imageStyle.getAnchor();
    const size = imageStyle.getSize();
    const origin = imageStyle.getOrigin();
    this.imagePixelRatio_ = imageStyle.getPixelRatio(this.pixelRatio);
    this.anchorX_ = anchor[0];
    this.anchorY_ = anchor[1];
    this.hitDetectionImage_ = imageStyle.getHitDetectionImage();
    this.image_ = imageStyle.getImage(this.pixelRatio);
    this.height_ = size[1];
    this.opacity_ = imageStyle.getOpacity();
    this.originX_ = origin[0];
    this.originY_ = origin[1];
    this.rotateWithView_ = imageStyle.getRotateWithView();
    this.rotation_ = imageStyle.getRotation();
    this.scale_ = imageStyle.getScaleArray();
    this.width_ = size[0];
    this.declutterMode_ = imageStyle.getDeclutterMode();
    this.declutterImageWithText_ = sharedData;
  }
};
var ImageBuilder_default = CanvasImageBuilder;

// node_modules/ol/render/canvas/LineStringBuilder.js
var CanvasLineStringBuilder = class extends Builder_default {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(tolerance, maxExtent, resolution, pixelRatio) {
    super(tolerance, maxExtent, resolution, pixelRatio);
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @private
   * @return {number} end.
   */
  drawFlatCoordinates_(flatCoordinates, offset, end, stride) {
    const myBegin = this.coordinates.length;
    const myEnd = this.appendFlatLineCoordinates(flatCoordinates, offset, end, stride, false, false);
    const moveToLineToInstruction = [Instruction_default.MOVE_TO_LINE_TO, myBegin, myEnd];
    this.instructions.push(moveToLineToInstruction);
    this.hitDetectionInstructions.push(moveToLineToInstruction);
    return end;
  }
  /**
   * @param {import("../../geom/LineString.js").default|import("../Feature.js").default} lineStringGeometry Line string geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   * @override
   */
  drawLineString(lineStringGeometry, feature, index) {
    const state = this.state;
    const strokeStyle = state.strokeStyle;
    const lineWidth = state.lineWidth;
    if (strokeStyle === void 0 || lineWidth === void 0) {
      return;
    }
    this.updateStrokeStyle(state, this.applyStroke);
    this.beginGeometry(lineStringGeometry, feature, index);
    this.hitDetectionInstructions.push([Instruction_default.SET_STROKE_STYLE, state.strokeStyle, state.lineWidth, state.lineCap, state.lineJoin, state.miterLimit, defaultLineDash, defaultLineDashOffset], beginPathInstruction);
    const flatCoordinates = lineStringGeometry.getFlatCoordinates();
    const stride = lineStringGeometry.getStride();
    this.drawFlatCoordinates_(flatCoordinates, 0, flatCoordinates.length, stride);
    this.hitDetectionInstructions.push(strokeInstruction);
    this.endGeometry(feature);
  }
  /**
   * @param {import("../../geom/MultiLineString.js").default|import("../Feature.js").default} multiLineStringGeometry MultiLineString geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   * @override
   */
  drawMultiLineString(multiLineStringGeometry, feature, index) {
    const state = this.state;
    const strokeStyle = state.strokeStyle;
    const lineWidth = state.lineWidth;
    if (strokeStyle === void 0 || lineWidth === void 0) {
      return;
    }
    this.updateStrokeStyle(state, this.applyStroke);
    this.beginGeometry(multiLineStringGeometry, feature, index);
    this.hitDetectionInstructions.push([Instruction_default.SET_STROKE_STYLE, state.strokeStyle, state.lineWidth, state.lineCap, state.lineJoin, state.miterLimit, defaultLineDash, defaultLineDashOffset], beginPathInstruction);
    const ends = multiLineStringGeometry.getEnds();
    const flatCoordinates = multiLineStringGeometry.getFlatCoordinates();
    const stride = multiLineStringGeometry.getStride();
    let offset = 0;
    for (let i = 0, ii = ends.length; i < ii; ++i) {
      offset = this.drawFlatCoordinates_(
        flatCoordinates,
        offset,
        /** @type {number} */
        ends[i],
        stride
      );
    }
    this.hitDetectionInstructions.push(strokeInstruction);
    this.endGeometry(feature);
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   * @override
   */
  finish() {
    const state = this.state;
    if (state.lastStroke != void 0 && state.lastStroke != this.coordinates.length) {
      this.instructions.push(strokeInstruction);
    }
    this.reverseHitDetectionInstructions();
    this.state = null;
    return super.finish();
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @override
   */
  applyStroke(state) {
    if (state.lastStroke != void 0 && state.lastStroke != this.coordinates.length) {
      this.instructions.push(strokeInstruction);
      state.lastStroke = this.coordinates.length;
    }
    state.lastStroke = 0;
    super.applyStroke(state);
    this.instructions.push(beginPathInstruction);
  }
};
var LineStringBuilder_default = CanvasLineStringBuilder;

// node_modules/ol/render/canvas/PolygonBuilder.js
var CanvasPolygonBuilder = class extends Builder_default {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(tolerance, maxExtent, resolution, pixelRatio) {
    super(tolerance, maxExtent, resolution, pixelRatio);
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {Array<number>} ends Ends.
   * @param {number} stride Stride.
   * @private
   * @return {number} End.
   */
  drawFlatCoordinatess_(flatCoordinates, offset, ends, stride) {
    const state = this.state;
    const fill = state.fillStyle !== void 0;
    const stroke = state.strokeStyle !== void 0;
    const numEnds = ends.length;
    this.instructions.push(beginPathInstruction);
    this.hitDetectionInstructions.push(beginPathInstruction);
    for (let i = 0; i < numEnds; ++i) {
      const end = ends[i];
      const myBegin = this.coordinates.length;
      const myEnd = this.appendFlatLineCoordinates(flatCoordinates, offset, end, stride, true, !stroke);
      const moveToLineToInstruction = [Instruction_default.MOVE_TO_LINE_TO, myBegin, myEnd];
      this.instructions.push(moveToLineToInstruction);
      this.hitDetectionInstructions.push(moveToLineToInstruction);
      if (stroke) {
        this.instructions.push(closePathInstruction);
        this.hitDetectionInstructions.push(closePathInstruction);
      }
      offset = end;
    }
    if (fill) {
      this.instructions.push(fillInstruction);
      this.hitDetectionInstructions.push(fillInstruction);
    }
    if (stroke) {
      this.instructions.push(strokeInstruction);
      this.hitDetectionInstructions.push(strokeInstruction);
    }
    return offset;
  }
  /**
   * @param {import("../../geom/Circle.js").default} circleGeometry Circle geometry.
   * @param {import("../../Feature.js").default} feature Feature.
   * @param {number} [index] Render order index.
   * @override
   */
  drawCircle(circleGeometry, feature, index) {
    const state = this.state;
    const fillStyle = state.fillStyle;
    const strokeStyle = state.strokeStyle;
    if (fillStyle === void 0 && strokeStyle === void 0) {
      return;
    }
    this.setFillStrokeStyles_();
    this.beginGeometry(circleGeometry, feature, index);
    if (state.fillStyle !== void 0) {
      this.hitDetectionInstructions.push([Instruction_default.SET_FILL_STYLE, defaultFillStyle]);
    }
    if (state.strokeStyle !== void 0) {
      this.hitDetectionInstructions.push([Instruction_default.SET_STROKE_STYLE, state.strokeStyle, state.lineWidth, state.lineCap, state.lineJoin, state.miterLimit, defaultLineDash, defaultLineDashOffset]);
    }
    const flatCoordinates = circleGeometry.getFlatCoordinates();
    const stride = circleGeometry.getStride();
    const myBegin = this.coordinates.length;
    this.appendFlatLineCoordinates(flatCoordinates, 0, flatCoordinates.length, stride, false, false);
    const circleInstruction = [Instruction_default.CIRCLE, myBegin];
    this.instructions.push(beginPathInstruction, circleInstruction);
    this.hitDetectionInstructions.push(beginPathInstruction, circleInstruction);
    if (state.fillStyle !== void 0) {
      this.instructions.push(fillInstruction);
      this.hitDetectionInstructions.push(fillInstruction);
    }
    if (state.strokeStyle !== void 0) {
      this.instructions.push(strokeInstruction);
      this.hitDetectionInstructions.push(strokeInstruction);
    }
    this.endGeometry(feature);
  }
  /**
   * @param {import("../../geom/Polygon.js").default|import("../Feature.js").default} polygonGeometry Polygon geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   * @override
   */
  drawPolygon(polygonGeometry, feature, index) {
    const state = this.state;
    const fillStyle = state.fillStyle;
    const strokeStyle = state.strokeStyle;
    if (fillStyle === void 0 && strokeStyle === void 0) {
      return;
    }
    this.setFillStrokeStyles_();
    this.beginGeometry(polygonGeometry, feature, index);
    if (state.fillStyle !== void 0) {
      this.hitDetectionInstructions.push([Instruction_default.SET_FILL_STYLE, defaultFillStyle]);
    }
    if (state.strokeStyle !== void 0) {
      this.hitDetectionInstructions.push([Instruction_default.SET_STROKE_STYLE, state.strokeStyle, state.lineWidth, state.lineCap, state.lineJoin, state.miterLimit, defaultLineDash, defaultLineDashOffset]);
    }
    const ends = polygonGeometry.getEnds();
    const flatCoordinates = polygonGeometry.getOrientedFlatCoordinates();
    const stride = polygonGeometry.getStride();
    this.drawFlatCoordinatess_(
      flatCoordinates,
      0,
      /** @type {Array<number>} */
      ends,
      stride
    );
    this.endGeometry(feature);
  }
  /**
   * @param {import("../../geom/MultiPolygon.js").default} multiPolygonGeometry MultiPolygon geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   * @override
   */
  drawMultiPolygon(multiPolygonGeometry, feature, index) {
    const state = this.state;
    const fillStyle = state.fillStyle;
    const strokeStyle = state.strokeStyle;
    if (fillStyle === void 0 && strokeStyle === void 0) {
      return;
    }
    this.setFillStrokeStyles_();
    this.beginGeometry(multiPolygonGeometry, feature, index);
    if (state.fillStyle !== void 0) {
      this.hitDetectionInstructions.push([Instruction_default.SET_FILL_STYLE, defaultFillStyle]);
    }
    if (state.strokeStyle !== void 0) {
      this.hitDetectionInstructions.push([Instruction_default.SET_STROKE_STYLE, state.strokeStyle, state.lineWidth, state.lineCap, state.lineJoin, state.miterLimit, defaultLineDash, defaultLineDashOffset]);
    }
    const endss = multiPolygonGeometry.getEndss();
    const flatCoordinates = multiPolygonGeometry.getOrientedFlatCoordinates();
    const stride = multiPolygonGeometry.getStride();
    let offset = 0;
    for (let i = 0, ii = endss.length; i < ii; ++i) {
      offset = this.drawFlatCoordinatess_(flatCoordinates, offset, endss[i], stride);
    }
    this.endGeometry(feature);
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   * @override
   */
  finish() {
    this.reverseHitDetectionInstructions();
    this.state = null;
    const tolerance = this.tolerance;
    if (tolerance !== 0) {
      const coordinates = this.coordinates;
      for (let i = 0, ii = coordinates.length; i < ii; ++i) {
        coordinates[i] = snap(coordinates[i], tolerance);
      }
    }
    return super.finish();
  }
  /**
   * @private
   */
  setFillStrokeStyles_() {
    const state = this.state;
    const fillStyle = state.fillStyle;
    if (fillStyle !== void 0) {
      this.updateFillStyle(state, this.createFill);
    }
    if (state.strokeStyle !== void 0) {
      this.updateStrokeStyle(state, this.applyStroke);
    }
  }
};
var PolygonBuilder_default = CanvasPolygonBuilder;

// node_modules/ol/geom/flat/linechunk.js
function lineChunk(chunkLength, flatCoordinates, offset, end, stride) {
  const chunks = [];
  let cursor = offset;
  let chunkM = 0;
  let currentChunk = flatCoordinates.slice(offset, 2);
  while (chunkM < chunkLength && cursor + stride < end) {
    const [x1, y1] = currentChunk.slice(-2);
    const x2 = flatCoordinates[cursor + stride];
    const y2 = flatCoordinates[cursor + stride + 1];
    const segmentLength = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    chunkM += segmentLength;
    if (chunkM >= chunkLength) {
      const m = (chunkLength - chunkM + segmentLength) / segmentLength;
      const x = lerp(x1, x2, m);
      const y = lerp(y1, y2, m);
      currentChunk.push(x, y);
      chunks.push(currentChunk);
      currentChunk = [x, y];
      if (chunkM == chunkLength) {
        cursor += stride;
      }
      chunkM = 0;
    } else if (chunkM < chunkLength) {
      currentChunk.push(flatCoordinates[cursor + stride], flatCoordinates[cursor + stride + 1]);
      cursor += stride;
    } else {
      const missing = segmentLength - chunkM;
      const x = lerp(x1, x2, missing / segmentLength);
      const y = lerp(y1, y2, missing / segmentLength);
      currentChunk.push(x, y);
      chunks.push(currentChunk);
      currentChunk = [x, y];
      chunkM = 0;
      cursor += stride;
    }
  }
  if (chunkM > 0) {
    chunks.push(currentChunk);
  }
  return chunks;
}

// node_modules/ol/geom/flat/straightchunk.js
function matchingChunk(maxAngle, flatCoordinates, offset, end, stride) {
  let chunkStart = offset;
  let chunkEnd = offset;
  let chunkM = 0;
  let m = 0;
  let start = offset;
  let acos, i, m12, m23, x1, y1, x12, y12, x23, y23;
  for (i = offset; i < end; i += stride) {
    const x2 = flatCoordinates[i];
    const y2 = flatCoordinates[i + 1];
    if (x1 !== void 0) {
      x23 = x2 - x1;
      y23 = y2 - y1;
      m23 = Math.sqrt(x23 * x23 + y23 * y23);
      if (x12 !== void 0) {
        m += m12;
        acos = Math.acos((x12 * x23 + y12 * y23) / (m12 * m23));
        if (acos > maxAngle) {
          if (m > chunkM) {
            chunkM = m;
            chunkStart = start;
            chunkEnd = i;
          }
          m = 0;
          start = i - stride;
        }
      }
      m12 = m23;
      x12 = x23;
      y12 = y23;
    }
    x1 = x2;
    y1 = y2;
  }
  m += m23;
  return m > chunkM ? [start, i] : [chunkStart, chunkEnd];
}

// node_modules/ol/render/canvas/TextBuilder.js
var TEXT_ALIGN = {
  "left": 0,
  "center": 0.5,
  "right": 1,
  "top": 0,
  "middle": 0.5,
  "hanging": 0.2,
  "alphabetic": 0.8,
  "ideographic": 0.8,
  "bottom": 1
};
var CanvasTextBuilder = class extends Builder_default {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(tolerance, maxExtent, resolution, pixelRatio) {
    super(tolerance, maxExtent, resolution, pixelRatio);
    this.labels_ = null;
    this.text_ = "";
    this.textOffsetX_ = 0;
    this.textOffsetY_ = 0;
    this.textRotateWithView_ = void 0;
    this.textRotation_ = 0;
    this.textFillState_ = null;
    this.fillStates = {};
    this.fillStates[defaultFillStyle] = {
      fillStyle: defaultFillStyle
    };
    this.textStrokeState_ = null;
    this.strokeStates = {};
    this.textState_ = /** @type {import("../canvas.js").TextState} */
    {};
    this.textStates = {};
    this.textKey_ = "";
    this.fillKey_ = "";
    this.strokeKey_ = "";
    this.declutterMode_ = void 0;
    this.declutterImageWithText_ = void 0;
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   * @override
   */
  finish() {
    const instructions = super.finish();
    instructions.textStates = this.textStates;
    instructions.fillStates = this.fillStates;
    instructions.strokeStates = this.strokeStates;
    return instructions;
  }
  /**
   * @param {import("../../geom/SimpleGeometry.js").default|import("../Feature.js").default} geometry Geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} [index] Render order index.
   * @override
   */
  drawText(geometry, feature, index) {
    const fillState = this.textFillState_;
    const strokeState = this.textStrokeState_;
    const textState = this.textState_;
    if (this.text_ === "" || !textState || !fillState && !strokeState) {
      return;
    }
    const coordinates = this.coordinates;
    let begin = coordinates.length;
    const geometryType = geometry.getType();
    let flatCoordinates = null;
    let stride = geometry.getStride();
    if (textState.placement === "line" && (geometryType == "LineString" || geometryType == "MultiLineString" || geometryType == "Polygon" || geometryType == "MultiPolygon")) {
      if (!intersects(this.maxExtent, geometry.getExtent())) {
        return;
      }
      let ends;
      flatCoordinates = geometry.getFlatCoordinates();
      if (geometryType == "LineString") {
        ends = [flatCoordinates.length];
      } else if (geometryType == "MultiLineString") {
        ends = /** @type {import("../../geom/MultiLineString.js").default} */
        geometry.getEnds();
      } else if (geometryType == "Polygon") {
        ends = /** @type {import("../../geom/Polygon.js").default} */
        geometry.getEnds().slice(0, 1);
      } else if (geometryType == "MultiPolygon") {
        const endss = (
          /** @type {import("../../geom/MultiPolygon.js").default} */
          geometry.getEndss()
        );
        ends = [];
        for (let i = 0, ii = endss.length; i < ii; ++i) {
          ends.push(endss[i][0]);
        }
      }
      this.beginGeometry(geometry, feature, index);
      const repeat = textState.repeat;
      const textAlign = repeat ? void 0 : textState.textAlign;
      let flatOffset = 0;
      for (let o = 0, oo = ends.length; o < oo; ++o) {
        let chunks;
        if (repeat) {
          chunks = lineChunk(repeat * this.resolution, flatCoordinates, flatOffset, ends[o], stride);
        } else {
          chunks = [flatCoordinates.slice(flatOffset, ends[o])];
        }
        for (let c = 0, cc = chunks.length; c < cc; ++c) {
          const chunk = chunks[c];
          let chunkBegin = 0;
          let chunkEnd = chunk.length;
          if (textAlign == void 0) {
            const range = matchingChunk(textState.maxAngle, chunk, 0, chunk.length, 2);
            chunkBegin = range[0];
            chunkEnd = range[1];
          }
          for (let i = chunkBegin; i < chunkEnd; i += stride) {
            coordinates.push(chunk[i], chunk[i + 1]);
          }
          const end = coordinates.length;
          flatOffset = ends[o];
          this.drawChars_(begin, end);
          begin = end;
        }
      }
      this.endGeometry(feature);
    } else {
      let geometryWidths = textState.overflow ? null : [];
      switch (geometryType) {
        case "Point":
        case "MultiPoint":
          flatCoordinates = /** @type {import("../../geom/MultiPoint.js").default} */
          geometry.getFlatCoordinates();
          break;
        case "LineString":
          flatCoordinates = /** @type {import("../../geom/LineString.js").default} */
          geometry.getFlatMidpoint();
          break;
        case "Circle":
          flatCoordinates = /** @type {import("../../geom/Circle.js").default} */
          geometry.getCenter();
          break;
        case "MultiLineString":
          flatCoordinates = /** @type {import("../../geom/MultiLineString.js").default} */
          geometry.getFlatMidpoints();
          stride = 2;
          break;
        case "Polygon":
          flatCoordinates = /** @type {import("../../geom/Polygon.js").default} */
          geometry.getFlatInteriorPoint();
          if (!textState.overflow) {
            geometryWidths.push(flatCoordinates[2] / this.resolution);
          }
          stride = 3;
          break;
        case "MultiPolygon":
          const interiorPoints = (
            /** @type {import("../../geom/MultiPolygon.js").default} */
            geometry.getFlatInteriorPoints()
          );
          flatCoordinates = [];
          for (let i = 0, ii = interiorPoints.length; i < ii; i += 3) {
            if (!textState.overflow) {
              geometryWidths.push(interiorPoints[i + 2] / this.resolution);
            }
            flatCoordinates.push(interiorPoints[i], interiorPoints[i + 1]);
          }
          if (flatCoordinates.length === 0) {
            return;
          }
          stride = 2;
          break;
        default:
      }
      const end = this.appendFlatPointCoordinates(flatCoordinates, stride);
      if (end === begin) {
        return;
      }
      if (geometryWidths && (end - begin) / 2 !== flatCoordinates.length / stride) {
        let beg = begin / 2;
        geometryWidths = geometryWidths.filter((w, i) => {
          const keep = coordinates[(beg + i) * 2] === flatCoordinates[i * stride] && coordinates[(beg + i) * 2 + 1] === flatCoordinates[i * stride + 1];
          if (!keep) {
            --beg;
          }
          return keep;
        });
      }
      this.saveTextStates_();
      if (textState.backgroundFill || textState.backgroundStroke) {
        this.setFillStrokeStyle(textState.backgroundFill, textState.backgroundStroke);
        if (textState.backgroundFill) {
          this.updateFillStyle(this.state, this.createFill);
        }
        if (textState.backgroundStroke) {
          this.updateStrokeStyle(this.state, this.applyStroke);
          this.hitDetectionInstructions.push(this.createStroke(this.state));
        }
      }
      this.beginGeometry(geometry, feature, index);
      let padding = textState.padding;
      if (padding != defaultPadding && (textState.scale[0] < 0 || textState.scale[1] < 0)) {
        let p0 = textState.padding[0];
        let p12 = textState.padding[1];
        let p22 = textState.padding[2];
        let p32 = textState.padding[3];
        if (textState.scale[0] < 0) {
          p12 = -p12;
          p32 = -p32;
        }
        if (textState.scale[1] < 0) {
          p0 = -p0;
          p22 = -p22;
        }
        padding = [p0, p12, p22, p32];
      }
      const pixelRatio = this.pixelRatio;
      this.instructions.push([Instruction_default.DRAW_IMAGE, begin, end, null, NaN, NaN, NaN, 1, 0, 0, this.textRotateWithView_, this.textRotation_, [1, 1], NaN, this.declutterMode_, this.declutterImageWithText_, padding == defaultPadding ? defaultPadding : padding.map(function(p) {
        return p * pixelRatio;
      }), !!textState.backgroundFill, !!textState.backgroundStroke, this.text_, this.textKey_, this.strokeKey_, this.fillKey_, this.textOffsetX_, this.textOffsetY_, geometryWidths]);
      const scale2 = 1 / pixelRatio;
      const currentFillStyle = this.state.fillStyle;
      if (textState.backgroundFill) {
        this.state.fillStyle = defaultFillStyle;
        this.hitDetectionInstructions.push(this.createFill(this.state));
      }
      this.hitDetectionInstructions.push([Instruction_default.DRAW_IMAGE, begin, end, null, NaN, NaN, NaN, 1, 0, 0, this.textRotateWithView_, this.textRotation_, [scale2, scale2], NaN, this.declutterMode_, this.declutterImageWithText_, padding, !!textState.backgroundFill, !!textState.backgroundStroke, this.text_, this.textKey_, this.strokeKey_, this.fillKey_ ? defaultFillStyle : this.fillKey_, this.textOffsetX_, this.textOffsetY_, geometryWidths]);
      if (textState.backgroundFill) {
        this.state.fillStyle = currentFillStyle;
        this.hitDetectionInstructions.push(this.createFill(this.state));
      }
      this.endGeometry(feature);
    }
  }
  /**
   * @private
   */
  saveTextStates_() {
    const strokeState = this.textStrokeState_;
    const textState = this.textState_;
    const fillState = this.textFillState_;
    const strokeKey = this.strokeKey_;
    if (strokeState) {
      if (!(strokeKey in this.strokeStates)) {
        this.strokeStates[strokeKey] = {
          strokeStyle: strokeState.strokeStyle,
          lineCap: strokeState.lineCap,
          lineDashOffset: strokeState.lineDashOffset,
          lineWidth: strokeState.lineWidth,
          lineJoin: strokeState.lineJoin,
          miterLimit: strokeState.miterLimit,
          lineDash: strokeState.lineDash
        };
      }
    }
    const textKey = this.textKey_;
    if (!(textKey in this.textStates)) {
      this.textStates[textKey] = {
        font: textState.font,
        textAlign: textState.textAlign || defaultTextAlign,
        justify: textState.justify,
        textBaseline: textState.textBaseline || defaultTextBaseline,
        scale: textState.scale
      };
    }
    const fillKey = this.fillKey_;
    if (fillState) {
      if (!(fillKey in this.fillStates)) {
        this.fillStates[fillKey] = {
          fillStyle: fillState.fillStyle
        };
      }
    }
  }
  /**
   * @private
   * @param {number} begin Begin.
   * @param {number} end End.
   */
  drawChars_(begin, end) {
    const strokeState = this.textStrokeState_;
    const textState = this.textState_;
    const strokeKey = this.strokeKey_;
    const textKey = this.textKey_;
    const fillKey = this.fillKey_;
    this.saveTextStates_();
    const pixelRatio = this.pixelRatio;
    const baseline = TEXT_ALIGN[textState.textBaseline];
    const offsetY = this.textOffsetY_ * pixelRatio;
    const text = this.text_;
    const strokeWidth = strokeState ? strokeState.lineWidth * Math.abs(textState.scale[0]) / 2 : 0;
    this.instructions.push([Instruction_default.DRAW_CHARS, begin, end, baseline, textState.overflow, fillKey, textState.maxAngle, pixelRatio, offsetY, strokeKey, strokeWidth * pixelRatio, text, textKey, 1, this.declutterMode_]);
    this.hitDetectionInstructions.push([Instruction_default.DRAW_CHARS, begin, end, baseline, textState.overflow, fillKey ? defaultFillStyle : fillKey, textState.maxAngle, pixelRatio, offsetY, strokeKey, strokeWidth * pixelRatio, text, textKey, 1 / pixelRatio, this.declutterMode_]);
  }
  /**
   * @param {import("../../style/Text.js").default} textStyle Text style.
   * @param {Object} [sharedData] Shared data.
   * @override
   */
  setTextStyle(textStyle, sharedData) {
    let textState, fillState, strokeState;
    if (!textStyle) {
      this.text_ = "";
    } else {
      const textFillStyle = textStyle.getFill();
      if (!textFillStyle) {
        fillState = null;
        this.textFillState_ = fillState;
      } else {
        fillState = this.textFillState_;
        if (!fillState) {
          fillState = /** @type {import("../canvas.js").FillState} */
          {};
          this.textFillState_ = fillState;
        }
        fillState.fillStyle = asColorLike(textFillStyle.getColor() || defaultFillStyle);
      }
      const textStrokeStyle = textStyle.getStroke();
      if (!textStrokeStyle) {
        strokeState = null;
        this.textStrokeState_ = strokeState;
      } else {
        strokeState = this.textStrokeState_;
        if (!strokeState) {
          strokeState = /** @type {import("../canvas.js").StrokeState} */
          {};
          this.textStrokeState_ = strokeState;
        }
        const lineDash = textStrokeStyle.getLineDash();
        const lineDashOffset = textStrokeStyle.getLineDashOffset();
        const lineWidth = textStrokeStyle.getWidth();
        const miterLimit = textStrokeStyle.getMiterLimit();
        strokeState.lineCap = textStrokeStyle.getLineCap() || defaultLineCap;
        strokeState.lineDash = lineDash ? lineDash.slice() : defaultLineDash;
        strokeState.lineDashOffset = lineDashOffset === void 0 ? defaultLineDashOffset : lineDashOffset;
        strokeState.lineJoin = textStrokeStyle.getLineJoin() || defaultLineJoin;
        strokeState.lineWidth = lineWidth === void 0 ? defaultLineWidth : lineWidth;
        strokeState.miterLimit = miterLimit === void 0 ? defaultMiterLimit : miterLimit;
        strokeState.strokeStyle = asColorLike(textStrokeStyle.getColor() || defaultStrokeStyle);
      }
      textState = this.textState_;
      const font = textStyle.getFont() || defaultFont;
      registerFont(font);
      const textScale = textStyle.getScaleArray();
      textState.overflow = textStyle.getOverflow();
      textState.font = font;
      textState.maxAngle = textStyle.getMaxAngle();
      textState.placement = textStyle.getPlacement();
      textState.textAlign = textStyle.getTextAlign();
      textState.repeat = textStyle.getRepeat();
      textState.justify = textStyle.getJustify();
      textState.textBaseline = textStyle.getTextBaseline() || defaultTextBaseline;
      textState.backgroundFill = textStyle.getBackgroundFill();
      textState.backgroundStroke = textStyle.getBackgroundStroke();
      textState.padding = textStyle.getPadding() || defaultPadding;
      textState.scale = textScale === void 0 ? [1, 1] : textScale;
      const textOffsetX = textStyle.getOffsetX();
      const textOffsetY = textStyle.getOffsetY();
      const textRotateWithView = textStyle.getRotateWithView();
      const textRotation = textStyle.getRotation();
      this.text_ = textStyle.getText() || "";
      this.textOffsetX_ = textOffsetX === void 0 ? 0 : textOffsetX;
      this.textOffsetY_ = textOffsetY === void 0 ? 0 : textOffsetY;
      this.textRotateWithView_ = textRotateWithView === void 0 ? false : textRotateWithView;
      this.textRotation_ = textRotation === void 0 ? 0 : textRotation;
      this.strokeKey_ = strokeState ? (typeof strokeState.strokeStyle == "string" ? strokeState.strokeStyle : getUid(strokeState.strokeStyle)) + strokeState.lineCap + strokeState.lineDashOffset + "|" + strokeState.lineWidth + strokeState.lineJoin + strokeState.miterLimit + "[" + strokeState.lineDash.join() + "]" : "";
      this.textKey_ = textState.font + textState.scale + (textState.textAlign || "?") + (textState.repeat || "?") + (textState.justify || "?") + (textState.textBaseline || "?");
      this.fillKey_ = fillState && fillState.fillStyle ? typeof fillState.fillStyle == "string" ? fillState.fillStyle : "|" + getUid(fillState.fillStyle) : "";
    }
    this.declutterMode_ = textStyle.getDeclutterMode();
    this.declutterImageWithText_ = sharedData;
  }
};
var TextBuilder_default = CanvasTextBuilder;

// node_modules/ol/render/canvas/BuilderGroup.js
var BATCH_CONSTRUCTORS = {
  "Circle": PolygonBuilder_default,
  "Default": Builder_default,
  "Image": ImageBuilder_default,
  "LineString": LineStringBuilder_default,
  "Polygon": PolygonBuilder_default,
  "Text": TextBuilder_default
};
var BuilderGroup = class {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Max extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(tolerance, maxExtent, resolution, pixelRatio) {
    this.tolerance_ = tolerance;
    this.maxExtent_ = maxExtent;
    this.pixelRatio_ = pixelRatio;
    this.resolution_ = resolution;
    this.buildersByZIndex_ = {};
  }
  /**
   * @return {!Object<string, !Object<import("../canvas.js").BuilderType, import("./Builder.js").SerializableInstructions>>} The serializable instructions
   */
  finish() {
    const builderInstructions = {};
    for (const zKey in this.buildersByZIndex_) {
      builderInstructions[zKey] = builderInstructions[zKey] || {};
      const builders = this.buildersByZIndex_[zKey];
      for (const builderKey in builders) {
        const builderInstruction = builders[builderKey].finish();
        builderInstructions[zKey][builderKey] = builderInstruction;
      }
    }
    return builderInstructions;
  }
  /**
   * @param {number|undefined} zIndex Z index.
   * @param {import("../canvas.js").BuilderType} builderType Replay type.
   * @return {import("../VectorContext.js").default} Replay.
   */
  getBuilder(zIndex, builderType) {
    const zIndexKey = zIndex !== void 0 ? zIndex.toString() : "0";
    let replays = this.buildersByZIndex_[zIndexKey];
    if (replays === void 0) {
      replays = {};
      this.buildersByZIndex_[zIndexKey] = replays;
    }
    let replay = replays[builderType];
    if (replay === void 0) {
      const Constructor = BATCH_CONSTRUCTORS[builderType];
      replay = new Constructor(this.tolerance_, this.maxExtent_, this.resolution_, this.pixelRatio_);
      replays[builderType] = replay;
    }
    return replay;
  }
};
var BuilderGroup_default = BuilderGroup;

// node_modules/ol/geom/flat/textpath.js
function drawTextOnPath(flatCoordinates, offset, end, stride, text, startM, maxAngle, scale2, measureAndCacheTextWidth2, font, cache, rotation) {
  let x2 = flatCoordinates[offset];
  let y2 = flatCoordinates[offset + 1];
  let x1 = 0;
  let y1 = 0;
  let segmentLength = 0;
  let segmentM = 0;
  function advance() {
    x1 = x2;
    y1 = y2;
    offset += stride;
    x2 = flatCoordinates[offset];
    y2 = flatCoordinates[offset + 1];
    segmentM += segmentLength;
    segmentLength = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  }
  do {
    advance();
  } while (offset < end - stride && segmentM + segmentLength < startM);
  let interpolate = segmentLength === 0 ? 0 : (startM - segmentM) / segmentLength;
  const beginX = lerp(x1, x2, interpolate);
  const beginY = lerp(y1, y2, interpolate);
  const startOffset = offset - stride;
  const startLength = segmentM;
  const endM = startM + scale2 * measureAndCacheTextWidth2(font, text, cache);
  while (offset < end - stride && segmentM + segmentLength < endM) {
    advance();
  }
  interpolate = segmentLength === 0 ? 0 : (endM - segmentM) / segmentLength;
  const endX = lerp(x1, x2, interpolate);
  const endY = lerp(y1, y2, interpolate);
  let reverse;
  if (rotation) {
    const flat = [beginX, beginY, endX, endY];
    rotate2(flat, 0, 4, 2, rotation, flat, flat);
    reverse = flat[0] > flat[2];
  } else {
    reverse = beginX > endX;
  }
  const PI = Math.PI;
  const result = [];
  const singleSegment = startOffset + stride === offset;
  offset = startOffset;
  segmentLength = 0;
  segmentM = startLength;
  x2 = flatCoordinates[offset];
  y2 = flatCoordinates[offset + 1];
  let previousAngle;
  if (singleSegment) {
    advance();
    previousAngle = Math.atan2(y2 - y1, x2 - x1);
    if (reverse) {
      previousAngle += previousAngle > 0 ? -PI : PI;
    }
    const x = (endX + beginX) / 2;
    const y = (endY + beginY) / 2;
    result[0] = [x, y, (endM - startM) / 2, previousAngle, text];
    return result;
  }
  text = text.replace(/\n/g, " ");
  for (let i = 0, ii = text.length; i < ii; ) {
    advance();
    let angle = Math.atan2(y2 - y1, x2 - x1);
    if (reverse) {
      angle += angle > 0 ? -PI : PI;
    }
    if (previousAngle !== void 0) {
      let delta = angle - previousAngle;
      delta += delta > PI ? -2 * PI : delta < -PI ? 2 * PI : 0;
      if (Math.abs(delta) > maxAngle) {
        return null;
      }
    }
    previousAngle = angle;
    const iStart = i;
    let charLength = 0;
    for (; i < ii; ++i) {
      const index = reverse ? ii - i - 1 : i;
      const len = scale2 * measureAndCacheTextWidth2(font, text[index], cache);
      if (offset + stride < end && segmentM + segmentLength < startM + charLength + len / 2) {
        break;
      }
      charLength += len;
    }
    if (i === iStart) {
      continue;
    }
    const chars = reverse ? text.substring(ii - iStart, ii - i) : text.substring(iStart, i);
    interpolate = segmentLength === 0 ? 0 : (startM + charLength / 2 - segmentM) / segmentLength;
    const x = lerp(x1, x2, interpolate);
    const y = lerp(y1, y2, interpolate);
    result.push([x, y, charLength / 2, angle, chars]);
    startM += charLength;
  }
  return result;
}

// node_modules/ol/render/canvas/Executor.js
var tmpExtent = createEmpty();
var p1 = [];
var p2 = [];
var p3 = [];
var p4 = [];
function getDeclutterBox(replayImageOrLabelArgs) {
  return replayImageOrLabelArgs[3].declutterBox;
}
var rtlRegEx = new RegExp(
  /* eslint-disable prettier/prettier */
  "[" + String.fromCharCode(1425) + "-" + String.fromCharCode(2303) + String.fromCharCode(64285) + "-" + String.fromCharCode(65023) + String.fromCharCode(65136) + "-" + String.fromCharCode(65276) + String.fromCharCode(67584) + "-" + String.fromCharCode(69631) + String.fromCharCode(124928) + "-" + String.fromCharCode(126975) + "]"
  /* eslint-enable prettier/prettier */
);
function horizontalTextAlign(text, align) {
  if (align === "start") {
    align = rtlRegEx.test(text) ? "right" : "left";
  } else if (align === "end") {
    align = rtlRegEx.test(text) ? "left" : "right";
  }
  return TEXT_ALIGN[align];
}
function createTextChunks(acc, line2, i) {
  if (i > 0) {
    acc.push("\n", "");
  }
  acc.push(line2, "");
  return acc;
}
var Executor = class {
  /**
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {boolean} overlaps The replay can have overlapping geometries.
   * @param {import("../canvas.js").SerializableInstructions} instructions The serializable instructions.
   * @param {boolean} [deferredRendering] Enable deferred rendering.
   */
  constructor(resolution, pixelRatio, overlaps, instructions, deferredRendering) {
    this.overlaps = overlaps;
    this.pixelRatio = pixelRatio;
    this.resolution = resolution;
    this.alignAndScaleFill_;
    this.instructions = instructions.instructions;
    this.coordinates = instructions.coordinates;
    this.coordinateCache_ = {};
    this.renderedTransform_ = create();
    this.hitDetectionInstructions = instructions.hitDetectionInstructions;
    this.pixelCoordinates_ = null;
    this.viewRotation_ = 0;
    this.fillStates = instructions.fillStates || {};
    this.strokeStates = instructions.strokeStates || {};
    this.textStates = instructions.textStates || {};
    this.widths_ = {};
    this.labels_ = {};
    this.zIndexContext_ = deferredRendering ? new ZIndexContext_default() : null;
  }
  /**
   * @return {ZIndexContext} ZIndex context.
   */
  getZIndexContext() {
    return this.zIndexContext_;
  }
  /**
   * @param {string|Array<string>} text Text.
   * @param {string} textKey Text style key.
   * @param {string} fillKey Fill style key.
   * @param {string} strokeKey Stroke style key.
   * @return {import("../canvas.js").Label} Label.
   */
  createLabel(text, textKey, fillKey, strokeKey) {
    const key = text + textKey + fillKey + strokeKey;
    if (this.labels_[key]) {
      return this.labels_[key];
    }
    const strokeState = strokeKey ? this.strokeStates[strokeKey] : null;
    const fillState = fillKey ? this.fillStates[fillKey] : null;
    const textState = this.textStates[textKey];
    const pixelRatio = this.pixelRatio;
    const scale2 = [textState.scale[0] * pixelRatio, textState.scale[1] * pixelRatio];
    const align = textState.justify ? TEXT_ALIGN[textState.justify] : horizontalTextAlign(Array.isArray(text) ? text[0] : text, textState.textAlign || defaultTextAlign);
    const strokeWidth = strokeKey && strokeState.lineWidth ? strokeState.lineWidth : 0;
    const chunks = Array.isArray(text) ? text : String(text).split("\n").reduce(createTextChunks, []);
    const {
      width,
      height,
      widths,
      heights,
      lineWidths
    } = getTextDimensions(textState, chunks);
    const renderWidth = width + strokeWidth;
    const contextInstructions = [];
    const w = (renderWidth + 2) * scale2[0];
    const h = (height + strokeWidth) * scale2[1];
    const label = {
      width: w < 0 ? Math.floor(w) : Math.ceil(w),
      height: h < 0 ? Math.floor(h) : Math.ceil(h),
      contextInstructions
    };
    if (scale2[0] != 1 || scale2[1] != 1) {
      contextInstructions.push("scale", scale2);
    }
    if (strokeKey) {
      contextInstructions.push("strokeStyle", strokeState.strokeStyle);
      contextInstructions.push("lineWidth", strokeWidth);
      contextInstructions.push("lineCap", strokeState.lineCap);
      contextInstructions.push("lineJoin", strokeState.lineJoin);
      contextInstructions.push("miterLimit", strokeState.miterLimit);
      contextInstructions.push("setLineDash", [strokeState.lineDash]);
      contextInstructions.push("lineDashOffset", strokeState.lineDashOffset);
    }
    if (fillKey) {
      contextInstructions.push("fillStyle", fillState.fillStyle);
    }
    contextInstructions.push("textBaseline", "middle");
    contextInstructions.push("textAlign", "center");
    const leftRight = 0.5 - align;
    let x = align * renderWidth + leftRight * strokeWidth;
    const strokeInstructions = [];
    const fillInstructions = [];
    let lineHeight = 0;
    let lineOffset = 0;
    let widthHeightIndex = 0;
    let lineWidthIndex = 0;
    let previousFont;
    for (let i = 0, ii = chunks.length; i < ii; i += 2) {
      const text2 = chunks[i];
      if (text2 === "\n") {
        lineOffset += lineHeight;
        lineHeight = 0;
        x = align * renderWidth + leftRight * strokeWidth;
        ++lineWidthIndex;
        continue;
      }
      const font = chunks[i + 1] || textState.font;
      if (font !== previousFont) {
        if (strokeKey) {
          strokeInstructions.push("font", font);
        }
        if (fillKey) {
          fillInstructions.push("font", font);
        }
        previousFont = font;
      }
      lineHeight = Math.max(lineHeight, heights[widthHeightIndex]);
      const fillStrokeArgs = [text2, x + leftRight * widths[widthHeightIndex] + align * (widths[widthHeightIndex] - lineWidths[lineWidthIndex]), 0.5 * (strokeWidth + lineHeight) + lineOffset];
      x += widths[widthHeightIndex];
      if (strokeKey) {
        strokeInstructions.push("strokeText", fillStrokeArgs);
      }
      if (fillKey) {
        fillInstructions.push("fillText", fillStrokeArgs);
      }
      ++widthHeightIndex;
    }
    Array.prototype.push.apply(contextInstructions, strokeInstructions);
    Array.prototype.push.apply(contextInstructions, fillInstructions);
    this.labels_[key] = label;
    return label;
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../coordinate.js").Coordinate} p1 1st point of the background box.
   * @param {import("../../coordinate.js").Coordinate} p2 2nd point of the background box.
   * @param {import("../../coordinate.js").Coordinate} p3 3rd point of the background box.
   * @param {import("../../coordinate.js").Coordinate} p4 4th point of the background box.
   * @param {Array<*>} fillInstruction Fill instruction.
   * @param {Array<*>} strokeInstruction Stroke instruction.
   */
  replayTextBackground_(context, p12, p22, p32, p42, fillInstruction2, strokeInstruction2) {
    context.beginPath();
    context.moveTo.apply(context, p12);
    context.lineTo.apply(context, p22);
    context.lineTo.apply(context, p32);
    context.lineTo.apply(context, p42);
    context.lineTo.apply(context, p12);
    if (fillInstruction2) {
      this.alignAndScaleFill_ = /** @type {number} */
      fillInstruction2[2];
      this.fill_(context);
    }
    if (strokeInstruction2) {
      this.setStrokeStyle_(
        context,
        /** @type {Array<*>} */
        strokeInstruction2
      );
      context.stroke();
    }
  }
  /**
   * @private
   * @param {number} sheetWidth Width of the sprite sheet.
   * @param {number} sheetHeight Height of the sprite sheet.
   * @param {number} centerX X.
   * @param {number} centerY Y.
   * @param {number} width Width.
   * @param {number} height Height.
   * @param {number} anchorX Anchor X.
   * @param {number} anchorY Anchor Y.
   * @param {number} originX Origin X.
   * @param {number} originY Origin Y.
   * @param {number} rotation Rotation.
   * @param {import("../../size.js").Size} scale Scale.
   * @param {boolean} snapToPixel Snap to pixel.
   * @param {Array<number>} padding Padding.
   * @param {boolean} fillStroke Background fill or stroke.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @return {ImageOrLabelDimensions} Dimensions for positioning and decluttering the image or label.
   */
  calculateImageOrLabelDimensions_(sheetWidth, sheetHeight, centerX, centerY, width, height, anchorX, anchorY, originX, originY, rotation, scale2, snapToPixel, padding, fillStroke, feature) {
    anchorX *= scale2[0];
    anchorY *= scale2[1];
    let x = centerX - anchorX;
    let y = centerY - anchorY;
    const w = width + originX > sheetWidth ? sheetWidth - originX : width;
    const h = height + originY > sheetHeight ? sheetHeight - originY : height;
    const boxW = padding[3] + w * scale2[0] + padding[1];
    const boxH = padding[0] + h * scale2[1] + padding[2];
    const boxX = x - padding[3];
    const boxY = y - padding[0];
    if (fillStroke || rotation !== 0) {
      p1[0] = boxX;
      p4[0] = boxX;
      p1[1] = boxY;
      p2[1] = boxY;
      p2[0] = boxX + boxW;
      p3[0] = p2[0];
      p3[1] = boxY + boxH;
      p4[1] = p3[1];
    }
    let transform;
    if (rotation !== 0) {
      transform = compose(create(), centerX, centerY, 1, 1, rotation, -centerX, -centerY);
      apply(transform, p1);
      apply(transform, p2);
      apply(transform, p3);
      apply(transform, p4);
      createOrUpdate(Math.min(p1[0], p2[0], p3[0], p4[0]), Math.min(p1[1], p2[1], p3[1], p4[1]), Math.max(p1[0], p2[0], p3[0], p4[0]), Math.max(p1[1], p2[1], p3[1], p4[1]), tmpExtent);
    } else {
      createOrUpdate(Math.min(boxX, boxX + boxW), Math.min(boxY, boxY + boxH), Math.max(boxX, boxX + boxW), Math.max(boxY, boxY + boxH), tmpExtent);
    }
    if (snapToPixel) {
      x = Math.round(x);
      y = Math.round(y);
    }
    return {
      drawImageX: x,
      drawImageY: y,
      drawImageW: w,
      drawImageH: h,
      originX,
      originY,
      declutterBox: {
        minX: tmpExtent[0],
        minY: tmpExtent[1],
        maxX: tmpExtent[2],
        maxY: tmpExtent[3],
        value: feature
      },
      canvasTransform: transform,
      scale: scale2
    };
  }
  /**
   * @private
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import('../../size.js').Size} scaledCanvasSize Scaled canvas size.
   * @param {import("../canvas.js").Label|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} imageOrLabel Image.
   * @param {ImageOrLabelDimensions} dimensions Dimensions.
   * @param {number} opacity Opacity.
   * @param {Array<*>} fillInstruction Fill instruction.
   * @param {Array<*>} strokeInstruction Stroke instruction.
   * @return {boolean} The image or label was rendered.
   */
  replayImageOrLabel_(context, scaledCanvasSize, imageOrLabel, dimensions, opacity, fillInstruction2, strokeInstruction2) {
    const fillStroke = !!(fillInstruction2 || strokeInstruction2);
    const box = dimensions.declutterBox;
    const strokePadding = strokeInstruction2 ? strokeInstruction2[2] * dimensions.scale[0] / 2 : 0;
    const intersects2 = box.minX - strokePadding <= scaledCanvasSize[0] && box.maxX + strokePadding >= 0 && box.minY - strokePadding <= scaledCanvasSize[1] && box.maxY + strokePadding >= 0;
    if (intersects2) {
      if (fillStroke) {
        this.replayTextBackground_(
          context,
          p1,
          p2,
          p3,
          p4,
          /** @type {Array<*>} */
          fillInstruction2,
          /** @type {Array<*>} */
          strokeInstruction2
        );
      }
      drawImageOrLabel(context, dimensions.canvasTransform, opacity, imageOrLabel, dimensions.originX, dimensions.originY, dimensions.drawImageW, dimensions.drawImageH, dimensions.drawImageX, dimensions.drawImageY, dimensions.scale);
    }
    return true;
  }
  /**
   * @private
   * @param {CanvasRenderingContext2D} context Context.
   */
  fill_(context) {
    const alignAndScale = this.alignAndScaleFill_;
    if (alignAndScale) {
      const origin = apply(this.renderedTransform_, [0, 0]);
      const repeatSize = 512 * this.pixelRatio;
      context.save();
      context.translate(origin[0] % repeatSize, origin[1] % repeatSize);
      if (alignAndScale !== 1) {
        context.scale(alignAndScale, alignAndScale);
      }
      context.rotate(this.viewRotation_);
    }
    context.fill();
    if (alignAndScale) {
      context.restore();
    }
  }
  /**
   * @private
   * @param {CanvasRenderingContext2D} context Context.
   * @param {Array<*>} instruction Instruction.
   */
  setStrokeStyle_(context, instruction) {
    context.strokeStyle = /** @type {import("../../colorlike.js").ColorLike} */
    instruction[1];
    context.lineWidth = /** @type {number} */
    instruction[2];
    context.lineCap = /** @type {CanvasLineCap} */
    instruction[3];
    context.lineJoin = /** @type {CanvasLineJoin} */
    instruction[4];
    context.miterLimit = /** @type {number} */
    instruction[5];
    context.lineDashOffset = /** @type {number} */
    instruction[7];
    context.setLineDash(
      /** @type {Array<number>} */
      instruction[6]
    );
  }
  /**
   * @private
   * @param {string|Array<string>} text The text to draw.
   * @param {string} textKey The key of the text state.
   * @param {string} strokeKey The key for the stroke state.
   * @param {string} fillKey The key for the fill state.
   * @return {{label: import("../canvas.js").Label, anchorX: number, anchorY: number}} The text image and its anchor.
   */
  drawLabelWithPointPlacement_(text, textKey, strokeKey, fillKey) {
    const textState = this.textStates[textKey];
    const label = this.createLabel(text, textKey, fillKey, strokeKey);
    const strokeState = this.strokeStates[strokeKey];
    const pixelRatio = this.pixelRatio;
    const align = horizontalTextAlign(Array.isArray(text) ? text[0] : text, textState.textAlign || defaultTextAlign);
    const baseline = TEXT_ALIGN[textState.textBaseline || defaultTextBaseline];
    const strokeWidth = strokeState && strokeState.lineWidth ? strokeState.lineWidth : 0;
    const width = label.width / pixelRatio - 2 * textState.scale[0];
    const anchorX = align * width + 2 * (0.5 - align) * strokeWidth;
    const anchorY = baseline * label.height / pixelRatio + 2 * (0.5 - baseline) * strokeWidth;
    return {
      label,
      anchorX,
      anchorY
    };
  }
  /**
   * @private
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import('../../size.js').Size} scaledCanvasSize Scaled canvas size
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {Array<*>} instructions Instructions array.
   * @param {boolean} snapToPixel Snap point symbols and text to integer pixels.
   * @param {FeatureCallback<T>} [featureCallback] Feature callback.
   * @param {import("../../extent.js").Extent} [hitExtent] Only check
   *     features that intersect this extent.
   * @param {import("rbush").default<DeclutterEntry>} [declutterTree] Declutter tree.
   * @return {T|undefined} Callback result.
   * @template T
   */
  execute_(context, scaledCanvasSize, transform, instructions, snapToPixel, featureCallback, hitExtent, declutterTree) {
    const zIndexContext = this.zIndexContext_;
    let pixelCoordinates;
    if (this.pixelCoordinates_ && equals(transform, this.renderedTransform_)) {
      pixelCoordinates = this.pixelCoordinates_;
    } else {
      if (!this.pixelCoordinates_) {
        this.pixelCoordinates_ = [];
      }
      pixelCoordinates = transform2D(this.coordinates, 0, this.coordinates.length, 2, transform, this.pixelCoordinates_);
      setFromArray(this.renderedTransform_, transform);
    }
    let i = 0;
    const ii = instructions.length;
    let d = 0;
    let dd;
    let anchorX, anchorY, declutterMode, prevX, prevY, roundX, roundY, image, text, textKey, strokeKey, fillKey;
    let pendingFill = 0;
    let pendingStroke = 0;
    let lastFillInstruction = null;
    let lastStrokeInstruction = null;
    const coordinateCache = this.coordinateCache_;
    const viewRotation = this.viewRotation_;
    const viewRotationFromTransform = Math.round(Math.atan2(-transform[1], transform[0]) * 1e12) / 1e12;
    const state = (
      /** @type {import("../../render.js").State} */
      {
        context,
        pixelRatio: this.pixelRatio,
        resolution: this.resolution,
        rotation: viewRotation
      }
    );
    const batchSize = this.instructions != instructions || this.overlaps ? 0 : 200;
    let feature;
    let x, y, currentGeometry;
    while (i < ii) {
      const instruction = instructions[i];
      const type = (
        /** @type {import("./Instruction.js").default} */
        instruction[0]
      );
      switch (type) {
        case Instruction_default.BEGIN_GEOMETRY:
          feature = /** @type {import("../../Feature.js").FeatureLike} */
          instruction[1];
          currentGeometry = instruction[3];
          if (!feature.getGeometry()) {
            i = /** @type {number} */
            instruction[2];
          } else if (hitExtent !== void 0 && !intersects(hitExtent, currentGeometry.getExtent())) {
            i = /** @type {number} */
            instruction[2] + 1;
          } else {
            ++i;
          }
          if (zIndexContext) {
            zIndexContext.zIndex = instruction[4];
          }
          break;
        case Instruction_default.BEGIN_PATH:
          if (pendingFill > batchSize) {
            this.fill_(context);
            pendingFill = 0;
          }
          if (pendingStroke > batchSize) {
            context.stroke();
            pendingStroke = 0;
          }
          if (!pendingFill && !pendingStroke) {
            context.beginPath();
            prevX = NaN;
            prevY = NaN;
          }
          ++i;
          break;
        case Instruction_default.CIRCLE:
          d = /** @type {number} */
          instruction[1];
          const x1 = pixelCoordinates[d];
          const y1 = pixelCoordinates[d + 1];
          const x2 = pixelCoordinates[d + 2];
          const y2 = pixelCoordinates[d + 3];
          const dx = x2 - x1;
          const dy = y2 - y1;
          const r = Math.sqrt(dx * dx + dy * dy);
          context.moveTo(x1 + r, y1);
          context.arc(x1, y1, r, 0, 2 * Math.PI, true);
          ++i;
          break;
        case Instruction_default.CLOSE_PATH:
          context.closePath();
          ++i;
          break;
        case Instruction_default.CUSTOM:
          d = /** @type {number} */
          instruction[1];
          dd = instruction[2];
          const geometry = (
            /** @type {import("../../geom/SimpleGeometry.js").default} */
            instruction[3]
          );
          const renderer = instruction[4];
          const fn = instruction[5];
          state.geometry = geometry;
          state.feature = feature;
          if (!(i in coordinateCache)) {
            coordinateCache[i] = [];
          }
          const coords = coordinateCache[i];
          if (fn) {
            fn(pixelCoordinates, d, dd, 2, coords);
          } else {
            coords[0] = pixelCoordinates[d];
            coords[1] = pixelCoordinates[d + 1];
            coords.length = 2;
          }
          if (zIndexContext) {
            zIndexContext.zIndex = instruction[6];
          }
          renderer(coords, state);
          ++i;
          break;
        case Instruction_default.DRAW_IMAGE:
          d = /** @type {number} */
          instruction[1];
          dd = /** @type {number} */
          instruction[2];
          image = /** @type {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} */
          instruction[3];
          anchorX = /** @type {number} */
          instruction[4];
          anchorY = /** @type {number} */
          instruction[5];
          let height = (
            /** @type {number} */
            instruction[6]
          );
          const opacity = (
            /** @type {number} */
            instruction[7]
          );
          const originX = (
            /** @type {number} */
            instruction[8]
          );
          const originY = (
            /** @type {number} */
            instruction[9]
          );
          const rotateWithView = (
            /** @type {boolean} */
            instruction[10]
          );
          let rotation = (
            /** @type {number} */
            instruction[11]
          );
          const scale2 = (
            /** @type {import("../../size.js").Size} */
            instruction[12]
          );
          let width = (
            /** @type {number} */
            instruction[13]
          );
          declutterMode = instruction[14] || "declutter";
          const declutterImageWithText = (
            /** @type {{args: import("../canvas.js").DeclutterImageWithText, declutterMode: import('../../style/Style.js').DeclutterMode}} */
            instruction[15]
          );
          if (!image && instruction.length >= 20) {
            text = /** @type {string} */
            instruction[19];
            textKey = /** @type {string} */
            instruction[20];
            strokeKey = /** @type {string} */
            instruction[21];
            fillKey = /** @type {string} */
            instruction[22];
            const labelWithAnchor = this.drawLabelWithPointPlacement_(text, textKey, strokeKey, fillKey);
            image = labelWithAnchor.label;
            instruction[3] = image;
            const textOffsetX = (
              /** @type {number} */
              instruction[23]
            );
            anchorX = (labelWithAnchor.anchorX - textOffsetX) * this.pixelRatio;
            instruction[4] = anchorX;
            const textOffsetY = (
              /** @type {number} */
              instruction[24]
            );
            anchorY = (labelWithAnchor.anchorY - textOffsetY) * this.pixelRatio;
            instruction[5] = anchorY;
            height = image.height;
            instruction[6] = height;
            width = image.width;
            instruction[13] = width;
          }
          let geometryWidths;
          if (instruction.length > 25) {
            geometryWidths = /** @type {number} */
            instruction[25];
          }
          let padding, backgroundFill, backgroundStroke;
          if (instruction.length > 17) {
            padding = /** @type {Array<number>} */
            instruction[16];
            backgroundFill = /** @type {boolean} */
            instruction[17];
            backgroundStroke = /** @type {boolean} */
            instruction[18];
          } else {
            padding = defaultPadding;
            backgroundFill = false;
            backgroundStroke = false;
          }
          if (rotateWithView && viewRotationFromTransform) {
            rotation += viewRotation;
          } else if (!rotateWithView && !viewRotationFromTransform) {
            rotation -= viewRotation;
          }
          let widthIndex = 0;
          for (; d < dd; d += 2) {
            if (geometryWidths && geometryWidths[widthIndex++] < width / this.pixelRatio) {
              continue;
            }
            const dimensions = this.calculateImageOrLabelDimensions_(image.width, image.height, pixelCoordinates[d], pixelCoordinates[d + 1], width, height, anchorX, anchorY, originX, originY, rotation, scale2, snapToPixel, padding, backgroundFill || backgroundStroke, feature);
            const args = [context, scaledCanvasSize, image, dimensions, opacity, backgroundFill ? (
              /** @type {Array<*>} */
              lastFillInstruction
            ) : null, backgroundStroke ? (
              /** @type {Array<*>} */
              lastStrokeInstruction
            ) : null];
            if (declutterTree) {
              let imageArgs, imageDeclutterMode, imageDeclutterBox;
              if (declutterImageWithText) {
                const index = dd - d;
                if (!declutterImageWithText[index]) {
                  declutterImageWithText[index] = {
                    args,
                    declutterMode
                  };
                  continue;
                }
                const imageDeclutter = declutterImageWithText[index];
                imageArgs = imageDeclutter.args;
                imageDeclutterMode = imageDeclutter.declutterMode;
                delete declutterImageWithText[index];
                imageDeclutterBox = getDeclutterBox(imageArgs);
              }
              let renderImage, renderText;
              if (imageArgs && (imageDeclutterMode !== "declutter" || !declutterTree.collides(imageDeclutterBox))) {
                renderImage = true;
              }
              if (declutterMode !== "declutter" || !declutterTree.collides(dimensions.declutterBox)) {
                renderText = true;
              }
              if (imageDeclutterMode === "declutter" && declutterMode === "declutter") {
                const render = renderImage && renderText;
                renderImage = render;
                renderText = render;
              }
              if (renderImage) {
                if (imageDeclutterMode !== "none") {
                  declutterTree.insert(imageDeclutterBox);
                }
                this.replayImageOrLabel_.apply(this, imageArgs);
              }
              if (renderText) {
                if (declutterMode !== "none") {
                  declutterTree.insert(dimensions.declutterBox);
                }
                this.replayImageOrLabel_.apply(this, args);
              }
            } else {
              this.replayImageOrLabel_.apply(this, args);
            }
          }
          ++i;
          break;
        case Instruction_default.DRAW_CHARS:
          const begin = (
            /** @type {number} */
            instruction[1]
          );
          const end = (
            /** @type {number} */
            instruction[2]
          );
          const baseline = (
            /** @type {number} */
            instruction[3]
          );
          const overflow = (
            /** @type {number} */
            instruction[4]
          );
          fillKey = /** @type {string} */
          instruction[5];
          const maxAngle = (
            /** @type {number} */
            instruction[6]
          );
          const measurePixelRatio = (
            /** @type {number} */
            instruction[7]
          );
          const offsetY = (
            /** @type {number} */
            instruction[8]
          );
          strokeKey = /** @type {string} */
          instruction[9];
          const strokeWidth = (
            /** @type {number} */
            instruction[10]
          );
          text = /** @type {string} */
          instruction[11];
          textKey = /** @type {string} */
          instruction[12];
          const pixelRatioScale = [
            /** @type {number} */
            instruction[13],
            /** @type {number} */
            instruction[13]
          ];
          declutterMode = instruction[14] || "declutter";
          const textState = this.textStates[textKey];
          const font = textState.font;
          const textScale = [textState.scale[0] * measurePixelRatio, textState.scale[1] * measurePixelRatio];
          let cachedWidths;
          if (font in this.widths_) {
            cachedWidths = this.widths_[font];
          } else {
            cachedWidths = {};
            this.widths_[font] = cachedWidths;
          }
          const pathLength = lineStringLength(pixelCoordinates, begin, end, 2);
          const textLength = Math.abs(textScale[0]) * measureAndCacheTextWidth(font, text, cachedWidths);
          if (overflow || textLength <= pathLength) {
            const textAlign = this.textStates[textKey].textAlign;
            const startM = (pathLength - textLength) * horizontalTextAlign(text, textAlign);
            const parts = drawTextOnPath(pixelCoordinates, begin, end, 2, text, startM, maxAngle, Math.abs(textScale[0]), measureAndCacheTextWidth, font, cachedWidths, viewRotationFromTransform ? 0 : this.viewRotation_);
            drawChars: if (parts) {
              const replayImageOrLabelArgs = [];
              let c, cc, chars, label, part;
              if (strokeKey) {
                for (c = 0, cc = parts.length; c < cc; ++c) {
                  part = parts[c];
                  chars = /** @type {string} */
                  part[4];
                  label = this.createLabel(chars, textKey, "", strokeKey);
                  anchorX = /** @type {number} */
                  part[2] + (textScale[0] < 0 ? -strokeWidth : strokeWidth);
                  anchorY = baseline * label.height + (0.5 - baseline) * 2 * strokeWidth * textScale[1] / textScale[0] - offsetY;
                  const dimensions = this.calculateImageOrLabelDimensions_(label.width, label.height, part[0], part[1], label.width, label.height, anchorX, anchorY, 0, 0, part[3], pixelRatioScale, false, defaultPadding, false, feature);
                  if (declutterTree && declutterMode === "declutter" && declutterTree.collides(dimensions.declutterBox)) {
                    break drawChars;
                  }
                  replayImageOrLabelArgs.push([context, scaledCanvasSize, label, dimensions, 1, null, null]);
                }
              }
              if (fillKey) {
                for (c = 0, cc = parts.length; c < cc; ++c) {
                  part = parts[c];
                  chars = /** @type {string} */
                  part[4];
                  label = this.createLabel(chars, textKey, fillKey, "");
                  anchorX = /** @type {number} */
                  part[2];
                  anchorY = baseline * label.height - offsetY;
                  const dimensions = this.calculateImageOrLabelDimensions_(label.width, label.height, part[0], part[1], label.width, label.height, anchorX, anchorY, 0, 0, part[3], pixelRatioScale, false, defaultPadding, false, feature);
                  if (declutterTree && declutterMode === "declutter" && declutterTree.collides(dimensions.declutterBox)) {
                    break drawChars;
                  }
                  replayImageOrLabelArgs.push([context, scaledCanvasSize, label, dimensions, 1, null, null]);
                }
              }
              if (declutterTree && declutterMode !== "none") {
                declutterTree.load(replayImageOrLabelArgs.map(getDeclutterBox));
              }
              for (let i2 = 0, ii2 = replayImageOrLabelArgs.length; i2 < ii2; ++i2) {
                this.replayImageOrLabel_.apply(this, replayImageOrLabelArgs[i2]);
              }
            }
          }
          ++i;
          break;
        case Instruction_default.END_GEOMETRY:
          if (featureCallback !== void 0) {
            feature = /** @type {import("../../Feature.js").FeatureLike} */
            instruction[1];
            const result = featureCallback(feature, currentGeometry, declutterMode);
            if (result) {
              return result;
            }
          }
          ++i;
          break;
        case Instruction_default.FILL:
          if (batchSize) {
            pendingFill++;
          } else {
            this.fill_(context);
          }
          ++i;
          break;
        case Instruction_default.MOVE_TO_LINE_TO:
          d = /** @type {number} */
          instruction[1];
          dd = /** @type {number} */
          instruction[2];
          x = pixelCoordinates[d];
          y = pixelCoordinates[d + 1];
          context.moveTo(x, y);
          prevX = x + 0.5 | 0;
          prevY = y + 0.5 | 0;
          for (d += 2; d < dd; d += 2) {
            x = pixelCoordinates[d];
            y = pixelCoordinates[d + 1];
            roundX = x + 0.5 | 0;
            roundY = y + 0.5 | 0;
            if (d == dd - 2 || roundX !== prevX || roundY !== prevY) {
              context.lineTo(x, y);
              prevX = roundX;
              prevY = roundY;
            }
          }
          ++i;
          break;
        case Instruction_default.SET_FILL_STYLE:
          lastFillInstruction = instruction;
          this.alignAndScaleFill_ = instruction[2];
          if (pendingFill) {
            this.fill_(context);
            pendingFill = 0;
            if (pendingStroke) {
              context.stroke();
              pendingStroke = 0;
            }
          }
          context.fillStyle = instruction[1];
          ++i;
          break;
        case Instruction_default.SET_STROKE_STYLE:
          lastStrokeInstruction = instruction;
          if (pendingStroke) {
            context.stroke();
            pendingStroke = 0;
          }
          this.setStrokeStyle_(
            context,
            /** @type {Array<*>} */
            instruction
          );
          ++i;
          break;
        case Instruction_default.STROKE:
          if (batchSize) {
            pendingStroke++;
          } else {
            context.stroke();
          }
          ++i;
          break;
        default:
          ++i;
          break;
      }
    }
    if (pendingFill) {
      this.fill_(context);
    }
    if (pendingStroke) {
      context.stroke();
    }
    return void 0;
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import('../../size.js').Size} scaledCanvasSize Scaled canvas size.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {boolean} snapToPixel Snap point symbols and text to integer pixels.
   * @param {import("rbush").default<DeclutterEntry>} [declutterTree] Declutter tree.
   */
  execute(context, scaledCanvasSize, transform, viewRotation, snapToPixel, declutterTree) {
    this.viewRotation_ = viewRotation;
    this.execute_(context, scaledCanvasSize, transform, this.instructions, snapToPixel, void 0, void 0, declutterTree);
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {FeatureCallback<T>} [featureCallback] Feature callback.
   * @param {import("../../extent.js").Extent} [hitExtent] Only check
   *     features that intersect this extent.
   * @return {T|undefined} Callback result.
   * @template T
   */
  executeHitDetection(context, transform, viewRotation, featureCallback, hitExtent) {
    this.viewRotation_ = viewRotation;
    return this.execute_(context, [context.canvas.width, context.canvas.height], transform, this.hitDetectionInstructions, true, featureCallback, hitExtent);
  }
};
var Executor_default = Executor;

// node_modules/ol/render/canvas/ExecutorGroup.js
var ALL = ["Polygon", "Circle", "LineString", "Image", "Text", "Default"];
var DECLUTTER = ["Image", "Text"];
var NON_DECLUTTER = ALL.filter((builderType) => !DECLUTTER.includes(builderType));
var ExecutorGroup = class {
  /**
   * @param {import("../../extent.js").Extent} maxExtent Max extent for clipping. When a
   * `maxExtent` was set on the Builder for this executor group, the same `maxExtent`
   * should be set here, unless the target context does not exceed that extent (which
   * can be the case when rendering to tiles).
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {boolean} overlaps The executor group can have overlapping geometries.
   * @param {!Object<string, !Object<import("../canvas.js").BuilderType, import("../canvas.js").SerializableInstructions>>} allInstructions
   * The serializable instructions.
   * @param {number} [renderBuffer] Optional rendering buffer.
   * @param {boolean} [deferredRendering] Enable deferred rendering with renderDeferred().
   */
  constructor(maxExtent, resolution, pixelRatio, overlaps, allInstructions, renderBuffer, deferredRendering) {
    this.maxExtent_ = maxExtent;
    this.overlaps_ = overlaps;
    this.pixelRatio_ = pixelRatio;
    this.resolution_ = resolution;
    this.renderBuffer_ = renderBuffer;
    this.executorsByZIndex_ = {};
    this.hitDetectionContext_ = null;
    this.hitDetectionTransform_ = create();
    this.renderedContext_ = null;
    this.deferredZIndexContexts_ = {};
    this.createExecutors_(allInstructions, deferredRendering);
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../transform.js").Transform} transform Transform.
   */
  clip(context, transform) {
    const flatClipCoords = this.getClipCoords(transform);
    context.beginPath();
    context.moveTo(flatClipCoords[0], flatClipCoords[1]);
    context.lineTo(flatClipCoords[2], flatClipCoords[3]);
    context.lineTo(flatClipCoords[4], flatClipCoords[5]);
    context.lineTo(flatClipCoords[6], flatClipCoords[7]);
    context.clip();
  }
  /**
   * Create executors and populate them using the provided instructions.
   * @private
   * @param {!Object<string, !Object<string, import("../canvas.js").SerializableInstructions>>} allInstructions The serializable instructions
   * @param {boolean} deferredRendering Enable deferred rendering.
   */
  createExecutors_(allInstructions, deferredRendering) {
    for (const zIndex in allInstructions) {
      let executors = this.executorsByZIndex_[zIndex];
      if (executors === void 0) {
        executors = {};
        this.executorsByZIndex_[zIndex] = executors;
      }
      const instructionByZindex = allInstructions[zIndex];
      for (const builderType in instructionByZindex) {
        const instructions = instructionByZindex[builderType];
        executors[builderType] = new Executor_default(this.resolution_, this.pixelRatio_, this.overlaps_, instructions, deferredRendering);
      }
    }
  }
  /**
   * @param {Array<import("../canvas.js").BuilderType>} executors Executors.
   * @return {boolean} Has executors of the provided types.
   */
  hasExecutors(executors) {
    for (const zIndex in this.executorsByZIndex_) {
      const candidates = this.executorsByZIndex_[zIndex];
      for (let i = 0, ii = executors.length; i < ii; ++i) {
        if (executors[i] in candidates) {
          return true;
        }
      }
    }
    return false;
  }
  /**
   * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {number} resolution Resolution.
   * @param {number} rotation Rotation.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {function(import("../../Feature.js").FeatureLike, import("../../geom/SimpleGeometry.js").default, number): T} callback Feature callback.
   * @param {Array<import("../../Feature.js").FeatureLike>} declutteredFeatures Decluttered features.
   * @return {T|undefined} Callback result.
   * @template T
   */
  forEachFeatureAtCoordinate(coordinate, resolution, rotation, hitTolerance, callback, declutteredFeatures) {
    hitTolerance = Math.round(hitTolerance);
    const contextSize = hitTolerance * 2 + 1;
    const transform = compose(this.hitDetectionTransform_, hitTolerance + 0.5, hitTolerance + 0.5, 1 / resolution, -1 / resolution, -rotation, -coordinate[0], -coordinate[1]);
    const newContext = !this.hitDetectionContext_;
    if (newContext) {
      this.hitDetectionContext_ = createCanvasContext2D(contextSize, contextSize, void 0, {
        willReadFrequently: true
      });
    }
    const context = this.hitDetectionContext_;
    if (context.canvas.width !== contextSize || context.canvas.height !== contextSize) {
      context.canvas.width = contextSize;
      context.canvas.height = contextSize;
    } else if (!newContext) {
      context.clearRect(0, 0, contextSize, contextSize);
    }
    let hitExtent;
    if (this.renderBuffer_ !== void 0) {
      hitExtent = createEmpty();
      extendCoordinate(hitExtent, coordinate);
      buffer(hitExtent, resolution * (this.renderBuffer_ + hitTolerance), hitExtent);
    }
    const indexes = getPixelIndexArray(hitTolerance);
    let builderType;
    function featureCallback(feature, geometry, declutterMode) {
      const imageData = context.getImageData(0, 0, contextSize, contextSize).data;
      for (let i2 = 0, ii = indexes.length; i2 < ii; i2++) {
        if (imageData[indexes[i2]] > 0) {
          if (!declutteredFeatures || declutterMode === "none" || builderType !== "Image" && builderType !== "Text" || declutteredFeatures.includes(feature)) {
            const idx = (indexes[i2] - 3) / 4;
            const x = hitTolerance - idx % contextSize;
            const y = hitTolerance - (idx / contextSize | 0);
            const result2 = callback(feature, geometry, x * x + y * y);
            if (result2) {
              return result2;
            }
          }
          context.clearRect(0, 0, contextSize, contextSize);
          break;
        }
      }
      return void 0;
    }
    const zs = Object.keys(this.executorsByZIndex_).map(Number);
    zs.sort(ascending);
    let i, j, executors, executor, result;
    for (i = zs.length - 1; i >= 0; --i) {
      const zIndexKey = zs[i].toString();
      executors = this.executorsByZIndex_[zIndexKey];
      for (j = ALL.length - 1; j >= 0; --j) {
        builderType = ALL[j];
        executor = executors[builderType];
        if (executor !== void 0) {
          result = executor.executeHitDetection(context, transform, rotation, featureCallback, hitExtent);
          if (result) {
            return result;
          }
        }
      }
    }
    return void 0;
  }
  /**
   * @param {import("../../transform.js").Transform} transform Transform.
   * @return {Array<number>|null} Clip coordinates.
   */
  getClipCoords(transform) {
    const maxExtent = this.maxExtent_;
    if (!maxExtent) {
      return null;
    }
    const minX = maxExtent[0];
    const minY = maxExtent[1];
    const maxX = maxExtent[2];
    const maxY = maxExtent[3];
    const flatClipCoords = [minX, minY, minX, maxY, maxX, maxY, maxX, minY];
    transform2D(flatClipCoords, 0, 8, 2, transform, flatClipCoords);
    return flatClipCoords;
  }
  /**
   * @return {boolean} Is empty.
   */
  isEmpty() {
    return isEmpty(this.executorsByZIndex_);
  }
  /**
   * @param {CanvasRenderingContext2D} targetContext Context.
   * @param {import('../../size.js').Size} scaledCanvasSize Scale of the context.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {boolean} snapToPixel Snap point symbols and test to integer pixel.
   * @param {Array<import("../canvas.js").BuilderType>} [builderTypes] Ordered replay types to replay.
   *     Default is {@link module:ol/render/replay~ALL}
   * @param {import("rbush").default<import('./Executor.js').DeclutterEntry>|null} [declutterTree] Declutter tree.
   *     When set to null, no decluttering is done, even when the executor group has a `ZIndexContext`.
   */
  execute(targetContext, scaledCanvasSize, transform, viewRotation, snapToPixel, builderTypes, declutterTree) {
    const zs = Object.keys(this.executorsByZIndex_).map(Number);
    zs.sort(ascending);
    builderTypes = builderTypes ? builderTypes : ALL;
    const maxBuilderTypes = ALL.length;
    let i, ii, j, jj, replays;
    if (declutterTree) {
      zs.reverse();
    }
    for (i = 0, ii = zs.length; i < ii; ++i) {
      const zIndexKey = zs[i].toString();
      replays = this.executorsByZIndex_[zIndexKey];
      for (j = 0, jj = builderTypes.length; j < jj; ++j) {
        const builderType = builderTypes[j];
        const replay = replays[builderType];
        if (replay !== void 0) {
          const zIndexContext = declutterTree === null ? void 0 : replay.getZIndexContext();
          const context = zIndexContext ? zIndexContext.getContext() : targetContext;
          const requireClip = this.maxExtent_ && builderType !== "Image" && builderType !== "Text";
          if (requireClip) {
            context.save();
            this.clip(context, transform);
          }
          if (!zIndexContext || builderType === "Text" || builderType === "Image") {
            replay.execute(context, scaledCanvasSize, transform, viewRotation, snapToPixel, declutterTree);
          } else {
            zIndexContext.pushFunction((context2) => replay.execute(context2, scaledCanvasSize, transform, viewRotation, snapToPixel, declutterTree));
          }
          if (requireClip) {
            context.restore();
          }
          if (zIndexContext) {
            zIndexContext.offset();
            const index = zs[i] * maxBuilderTypes + j;
            if (!this.deferredZIndexContexts_[index]) {
              this.deferredZIndexContexts_[index] = [];
            }
            this.deferredZIndexContexts_[index].push(zIndexContext);
          }
        }
      }
    }
    this.renderedContext_ = targetContext;
  }
  getDeferredZIndexContexts() {
    return this.deferredZIndexContexts_;
  }
  getRenderedContext() {
    return this.renderedContext_;
  }
  renderDeferred() {
    const deferredZIndexContexts = this.deferredZIndexContexts_;
    const zs = Object.keys(deferredZIndexContexts).map(Number).sort(ascending);
    for (let i = 0, ii = zs.length; i < ii; ++i) {
      deferredZIndexContexts[zs[i]].forEach((zIndexContext) => {
        zIndexContext.draw(this.renderedContext_);
        zIndexContext.clear();
      });
      deferredZIndexContexts[zs[i]].length = 0;
    }
  }
};
var circlePixelIndexArrayCache = {};
function getPixelIndexArray(radius) {
  if (circlePixelIndexArrayCache[radius] !== void 0) {
    return circlePixelIndexArrayCache[radius];
  }
  const size = radius * 2 + 1;
  const maxDistanceSq = radius * radius;
  const distances = new Array(maxDistanceSq + 1);
  for (let i = 0; i <= radius; ++i) {
    for (let j = 0; j <= radius; ++j) {
      const distanceSq = i * i + j * j;
      if (distanceSq > maxDistanceSq) {
        break;
      }
      let distance = distances[distanceSq];
      if (!distance) {
        distance = [];
        distances[distanceSq] = distance;
      }
      distance.push(((radius + i) * size + (radius + j)) * 4 + 3);
      if (i > 0) {
        distance.push(((radius - i) * size + (radius + j)) * 4 + 3);
      }
      if (j > 0) {
        distance.push(((radius + i) * size + (radius - j)) * 4 + 3);
        if (i > 0) {
          distance.push(((radius - i) * size + (radius - j)) * 4 + 3);
        }
      }
    }
  }
  const pixelIndex = [];
  for (let i = 0, ii = distances.length; i < ii; ++i) {
    if (distances[i]) {
      pixelIndex.push(...distances[i]);
    }
  }
  circlePixelIndexArrayCache[radius] = pixelIndex;
  return pixelIndex;
}
var ExecutorGroup_default = ExecutorGroup;

// node_modules/ol/render/canvas/Immediate.js
var CanvasImmediateRenderer = class extends VectorContext_default {
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../../extent.js").Extent} extent Extent.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {number} [squaredTolerance] Optional squared tolerance for simplification.
   * @param {import("../../proj.js").TransformFunction} [userTransform] Transform from user to view projection.
   */
  constructor(context, pixelRatio, extent, transform, viewRotation, squaredTolerance, userTransform) {
    super();
    this.context_ = context;
    this.pixelRatio_ = pixelRatio;
    this.extent_ = extent;
    this.transform_ = transform;
    this.transformRotation_ = transform ? toFixed(Math.atan2(transform[1], transform[0]), 10) : 0;
    this.viewRotation_ = viewRotation;
    this.squaredTolerance_ = squaredTolerance;
    this.userTransform_ = userTransform;
    this.contextFillState_ = null;
    this.contextStrokeState_ = null;
    this.contextTextState_ = null;
    this.fillState_ = null;
    this.strokeState_ = null;
    this.image_ = null;
    this.imageAnchorX_ = 0;
    this.imageAnchorY_ = 0;
    this.imageHeight_ = 0;
    this.imageOpacity_ = 0;
    this.imageOriginX_ = 0;
    this.imageOriginY_ = 0;
    this.imageRotateWithView_ = false;
    this.imageRotation_ = 0;
    this.imageScale_ = [0, 0];
    this.imageWidth_ = 0;
    this.text_ = "";
    this.textOffsetX_ = 0;
    this.textOffsetY_ = 0;
    this.textRotateWithView_ = false;
    this.textRotation_ = 0;
    this.textScale_ = [0, 0];
    this.textFillState_ = null;
    this.textStrokeState_ = null;
    this.textState_ = null;
    this.pixelCoordinates_ = [];
    this.tmpLocalTransform_ = create();
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @private
   */
  drawImages_(flatCoordinates, offset, end, stride) {
    if (!this.image_) {
      return;
    }
    const pixelCoordinates = transform2D(flatCoordinates, offset, end, stride, this.transform_, this.pixelCoordinates_);
    const context = this.context_;
    const localTransform = this.tmpLocalTransform_;
    const alpha = context.globalAlpha;
    if (this.imageOpacity_ != 1) {
      context.globalAlpha = alpha * this.imageOpacity_;
    }
    let rotation = this.imageRotation_;
    if (this.transformRotation_ === 0) {
      rotation -= this.viewRotation_;
    }
    if (this.imageRotateWithView_) {
      rotation += this.viewRotation_;
    }
    for (let i = 0, ii = pixelCoordinates.length; i < ii; i += 2) {
      const x = pixelCoordinates[i] - this.imageAnchorX_;
      const y = pixelCoordinates[i + 1] - this.imageAnchorY_;
      if (rotation !== 0 || this.imageScale_[0] != 1 || this.imageScale_[1] != 1) {
        const centerX = x + this.imageAnchorX_;
        const centerY = y + this.imageAnchorY_;
        compose(localTransform, centerX, centerY, 1, 1, rotation, -centerX, -centerY);
        context.save();
        context.transform.apply(context, localTransform);
        context.translate(centerX, centerY);
        context.scale(this.imageScale_[0], this.imageScale_[1]);
        context.drawImage(this.image_, this.imageOriginX_, this.imageOriginY_, this.imageWidth_, this.imageHeight_, -this.imageAnchorX_, -this.imageAnchorY_, this.imageWidth_, this.imageHeight_);
        context.restore();
      } else {
        context.drawImage(this.image_, this.imageOriginX_, this.imageOriginY_, this.imageWidth_, this.imageHeight_, x, y, this.imageWidth_, this.imageHeight_);
      }
    }
    if (this.imageOpacity_ != 1) {
      context.globalAlpha = alpha;
    }
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @private
   */
  drawText_(flatCoordinates, offset, end, stride) {
    if (!this.textState_ || this.text_ === "") {
      return;
    }
    if (this.textFillState_) {
      this.setContextFillState_(this.textFillState_);
    }
    if (this.textStrokeState_) {
      this.setContextStrokeState_(this.textStrokeState_);
    }
    this.setContextTextState_(this.textState_);
    const pixelCoordinates = transform2D(flatCoordinates, offset, end, stride, this.transform_, this.pixelCoordinates_);
    const context = this.context_;
    let rotation = this.textRotation_;
    if (this.transformRotation_ === 0) {
      rotation -= this.viewRotation_;
    }
    if (this.textRotateWithView_) {
      rotation += this.viewRotation_;
    }
    for (; offset < end; offset += stride) {
      const x = pixelCoordinates[offset] + this.textOffsetX_;
      const y = pixelCoordinates[offset + 1] + this.textOffsetY_;
      if (rotation !== 0 || this.textScale_[0] != 1 || this.textScale_[1] != 1) {
        context.save();
        context.translate(x - this.textOffsetX_, y - this.textOffsetY_);
        context.rotate(rotation);
        context.translate(this.textOffsetX_, this.textOffsetY_);
        context.scale(this.textScale_[0], this.textScale_[1]);
        if (this.textStrokeState_) {
          context.strokeText(this.text_, 0, 0);
        }
        if (this.textFillState_) {
          context.fillText(this.text_, 0, 0);
        }
        context.restore();
      } else {
        if (this.textStrokeState_) {
          context.strokeText(this.text_, x, y);
        }
        if (this.textFillState_) {
          context.fillText(this.text_, x, y);
        }
      }
    }
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @param {boolean} close Close.
   * @private
   * @return {number} end End.
   */
  moveToLineTo_(flatCoordinates, offset, end, stride, close) {
    const context = this.context_;
    const pixelCoordinates = transform2D(flatCoordinates, offset, end, stride, this.transform_, this.pixelCoordinates_);
    context.moveTo(pixelCoordinates[0], pixelCoordinates[1]);
    let length = pixelCoordinates.length;
    if (close) {
      length -= 2;
    }
    for (let i = 2; i < length; i += 2) {
      context.lineTo(pixelCoordinates[i], pixelCoordinates[i + 1]);
    }
    if (close) {
      context.closePath();
    }
    return end;
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {Array<number>} ends Ends.
   * @param {number} stride Stride.
   * @private
   * @return {number} End.
   */
  drawRings_(flatCoordinates, offset, ends, stride) {
    for (let i = 0, ii = ends.length; i < ii; ++i) {
      offset = this.moveToLineTo_(flatCoordinates, offset, ends[i], stride, true);
    }
    return offset;
  }
  /**
   * Render a circle geometry into the canvas.  Rendering is immediate and uses
   * the current fill and stroke styles.
   *
   * @param {import("../../geom/Circle.js").default} geometry Circle geometry.
   * @api
   * @override
   */
  drawCircle(geometry) {
    if (this.squaredTolerance_) {
      geometry = /** @type {import("../../geom/Circle.js").default} */
      geometry.simplifyTransformed(this.squaredTolerance_, this.userTransform_);
    }
    if (!intersects(this.extent_, geometry.getExtent())) {
      return;
    }
    if (this.fillState_ || this.strokeState_) {
      if (this.fillState_) {
        this.setContextFillState_(this.fillState_);
      }
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
      }
      const pixelCoordinates = transformGeom2D(geometry, this.transform_, this.pixelCoordinates_);
      const dx = pixelCoordinates[2] - pixelCoordinates[0];
      const dy = pixelCoordinates[3] - pixelCoordinates[1];
      const radius = Math.sqrt(dx * dx + dy * dy);
      const context = this.context_;
      context.beginPath();
      context.arc(pixelCoordinates[0], pixelCoordinates[1], radius, 0, 2 * Math.PI);
      if (this.fillState_) {
        context.fill();
      }
      if (this.strokeState_) {
        context.stroke();
      }
    }
    if (this.text_ !== "") {
      this.drawText_(geometry.getCenter(), 0, 2, 2);
    }
  }
  /**
   * Set the rendering style.  Note that since this is an immediate rendering API,
   * any `zIndex` on the provided style will be ignored.
   *
   * @param {import("../../style/Style.js").default} style The rendering style.
   * @api
   * @override
   */
  setStyle(style) {
    this.setFillStrokeStyle(style.getFill(), style.getStroke());
    this.setImageStyle(style.getImage());
    this.setTextStyle(style.getText());
  }
  /**
   * @param {import("../../transform.js").Transform} transform Transform.
   */
  setTransform(transform) {
    this.transform_ = transform;
  }
  /**
   * Render a geometry into the canvas.  Call
   * {@link module:ol/render/canvas/Immediate~CanvasImmediateRenderer#setStyle renderer.setStyle()} first to set the rendering style.
   *
   * @param {import("../../geom/Geometry.js").default|import("../Feature.js").default} geometry The geometry to render.
   * @api
   * @override
   */
  drawGeometry(geometry) {
    const type = geometry.getType();
    switch (type) {
      case "Point":
        this.drawPoint(
          /** @type {import("../../geom/Point.js").default} */
          geometry
        );
        break;
      case "LineString":
        this.drawLineString(
          /** @type {import("../../geom/LineString.js").default} */
          geometry
        );
        break;
      case "Polygon":
        this.drawPolygon(
          /** @type {import("../../geom/Polygon.js").default} */
          geometry
        );
        break;
      case "MultiPoint":
        this.drawMultiPoint(
          /** @type {import("../../geom/MultiPoint.js").default} */
          geometry
        );
        break;
      case "MultiLineString":
        this.drawMultiLineString(
          /** @type {import("../../geom/MultiLineString.js").default} */
          geometry
        );
        break;
      case "MultiPolygon":
        this.drawMultiPolygon(
          /** @type {import("../../geom/MultiPolygon.js").default} */
          geometry
        );
        break;
      case "GeometryCollection":
        this.drawGeometryCollection(
          /** @type {import("../../geom/GeometryCollection.js").default} */
          geometry
        );
        break;
      case "Circle":
        this.drawCircle(
          /** @type {import("../../geom/Circle.js").default} */
          geometry
        );
        break;
      default:
    }
  }
  /**
   * Render a feature into the canvas.  Note that any `zIndex` on the provided
   * style will be ignored - features are rendered immediately in the order that
   * this method is called.  If you need `zIndex` support, you should be using an
   * {@link module:ol/layer/Vector~VectorLayer} instead.
   *
   * @param {import("../../Feature.js").default} feature Feature.
   * @param {import("../../style/Style.js").default} style Style.
   * @api
   * @override
   */
  drawFeature(feature, style) {
    const geometry = style.getGeometryFunction()(feature);
    if (!geometry) {
      return;
    }
    this.setStyle(style);
    this.drawGeometry(geometry);
  }
  /**
   * Render a GeometryCollection to the canvas.  Rendering is immediate and
   * uses the current styles appropriate for each geometry in the collection.
   *
   * @param {import("../../geom/GeometryCollection.js").default} geometry Geometry collection.
   * @override
   */
  drawGeometryCollection(geometry) {
    const geometries = geometry.getGeometriesArray();
    for (let i = 0, ii = geometries.length; i < ii; ++i) {
      this.drawGeometry(geometries[i]);
    }
  }
  /**
   * Render a Point geometry into the canvas.  Rendering is immediate and uses
   * the current style.
   *
   * @param {import("../../geom/Point.js").default|import("../Feature.js").default} geometry Point geometry.
   * @override
   */
  drawPoint(geometry) {
    if (this.squaredTolerance_) {
      geometry = /** @type {import("../../geom/Point.js").default} */
      geometry.simplifyTransformed(this.squaredTolerance_, this.userTransform_);
    }
    const flatCoordinates = geometry.getFlatCoordinates();
    const stride = geometry.getStride();
    if (this.image_) {
      this.drawImages_(flatCoordinates, 0, flatCoordinates.length, stride);
    }
    if (this.text_ !== "") {
      this.drawText_(flatCoordinates, 0, flatCoordinates.length, stride);
    }
  }
  /**
   * Render a MultiPoint geometry  into the canvas.  Rendering is immediate and
   * uses the current style.
   *
   * @param {import("../../geom/MultiPoint.js").default|import("../Feature.js").default} geometry MultiPoint geometry.
   * @override
   */
  drawMultiPoint(geometry) {
    if (this.squaredTolerance_) {
      geometry = /** @type {import("../../geom/MultiPoint.js").default} */
      geometry.simplifyTransformed(this.squaredTolerance_, this.userTransform_);
    }
    const flatCoordinates = geometry.getFlatCoordinates();
    const stride = geometry.getStride();
    if (this.image_) {
      this.drawImages_(flatCoordinates, 0, flatCoordinates.length, stride);
    }
    if (this.text_ !== "") {
      this.drawText_(flatCoordinates, 0, flatCoordinates.length, stride);
    }
  }
  /**
   * Render a LineString into the canvas.  Rendering is immediate and uses
   * the current style.
   *
   * @param {import("../../geom/LineString.js").default|import("../Feature.js").default} geometry LineString geometry.
   * @override
   */
  drawLineString(geometry) {
    if (this.squaredTolerance_) {
      geometry = /** @type {import("../../geom/LineString.js").default} */
      geometry.simplifyTransformed(this.squaredTolerance_, this.userTransform_);
    }
    if (!intersects(this.extent_, geometry.getExtent())) {
      return;
    }
    if (this.strokeState_) {
      this.setContextStrokeState_(this.strokeState_);
      const context = this.context_;
      const flatCoordinates = geometry.getFlatCoordinates();
      context.beginPath();
      this.moveToLineTo_(flatCoordinates, 0, flatCoordinates.length, geometry.getStride(), false);
      context.stroke();
    }
    if (this.text_ !== "") {
      const flatMidpoint = geometry.getFlatMidpoint();
      this.drawText_(flatMidpoint, 0, 2, 2);
    }
  }
  /**
   * Render a MultiLineString geometry into the canvas.  Rendering is immediate
   * and uses the current style.
   *
   * @param {import("../../geom/MultiLineString.js").default|import("../Feature.js").default} geometry MultiLineString geometry.
   * @override
   */
  drawMultiLineString(geometry) {
    if (this.squaredTolerance_) {
      geometry = /** @type {import("../../geom/MultiLineString.js").default} */
      geometry.simplifyTransformed(this.squaredTolerance_, this.userTransform_);
    }
    const geometryExtent = geometry.getExtent();
    if (!intersects(this.extent_, geometryExtent)) {
      return;
    }
    if (this.strokeState_) {
      this.setContextStrokeState_(this.strokeState_);
      const context = this.context_;
      const flatCoordinates = geometry.getFlatCoordinates();
      let offset = 0;
      const ends = (
        /** @type {Array<number>} */
        geometry.getEnds()
      );
      const stride = geometry.getStride();
      context.beginPath();
      for (let i = 0, ii = ends.length; i < ii; ++i) {
        offset = this.moveToLineTo_(flatCoordinates, offset, ends[i], stride, false);
      }
      context.stroke();
    }
    if (this.text_ !== "") {
      const flatMidpoints = geometry.getFlatMidpoints();
      this.drawText_(flatMidpoints, 0, flatMidpoints.length, 2);
    }
  }
  /**
   * Render a Polygon geometry into the canvas.  Rendering is immediate and uses
   * the current style.
   *
   * @param {import("../../geom/Polygon.js").default|import("../Feature.js").default} geometry Polygon geometry.
   * @override
   */
  drawPolygon(geometry) {
    if (this.squaredTolerance_) {
      geometry = /** @type {import("../../geom/Polygon.js").default} */
      geometry.simplifyTransformed(this.squaredTolerance_, this.userTransform_);
    }
    if (!intersects(this.extent_, geometry.getExtent())) {
      return;
    }
    if (this.strokeState_ || this.fillState_) {
      if (this.fillState_) {
        this.setContextFillState_(this.fillState_);
      }
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
      }
      const context = this.context_;
      context.beginPath();
      this.drawRings_(
        geometry.getOrientedFlatCoordinates(),
        0,
        /** @type {Array<number>} */
        geometry.getEnds(),
        geometry.getStride()
      );
      if (this.fillState_) {
        context.fill();
      }
      if (this.strokeState_) {
        context.stroke();
      }
    }
    if (this.text_ !== "") {
      const flatInteriorPoint = geometry.getFlatInteriorPoint();
      this.drawText_(flatInteriorPoint, 0, 2, 2);
    }
  }
  /**
   * Render MultiPolygon geometry into the canvas.  Rendering is immediate and
   * uses the current style.
   * @param {import("../../geom/MultiPolygon.js").default} geometry MultiPolygon geometry.
   * @override
   */
  drawMultiPolygon(geometry) {
    if (this.squaredTolerance_) {
      geometry = /** @type {import("../../geom/MultiPolygon.js").default} */
      geometry.simplifyTransformed(this.squaredTolerance_, this.userTransform_);
    }
    if (!intersects(this.extent_, geometry.getExtent())) {
      return;
    }
    if (this.strokeState_ || this.fillState_) {
      if (this.fillState_) {
        this.setContextFillState_(this.fillState_);
      }
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
      }
      const context = this.context_;
      const flatCoordinates = geometry.getOrientedFlatCoordinates();
      let offset = 0;
      const endss = geometry.getEndss();
      const stride = geometry.getStride();
      context.beginPath();
      for (let i = 0, ii = endss.length; i < ii; ++i) {
        const ends = endss[i];
        offset = this.drawRings_(flatCoordinates, offset, ends, stride);
      }
      if (this.fillState_) {
        context.fill();
      }
      if (this.strokeState_) {
        context.stroke();
      }
    }
    if (this.text_ !== "") {
      const flatInteriorPoints = geometry.getFlatInteriorPoints();
      this.drawText_(flatInteriorPoints, 0, flatInteriorPoints.length, 2);
    }
  }
  /**
   * @param {import("../canvas.js").FillState} fillState Fill state.
   * @private
   */
  setContextFillState_(fillState) {
    const context = this.context_;
    const contextFillState = this.contextFillState_;
    if (!contextFillState) {
      context.fillStyle = fillState.fillStyle;
      this.contextFillState_ = {
        fillStyle: fillState.fillStyle
      };
    } else {
      if (contextFillState.fillStyle != fillState.fillStyle) {
        contextFillState.fillStyle = fillState.fillStyle;
        context.fillStyle = fillState.fillStyle;
      }
    }
  }
  /**
   * @param {import("../canvas.js").StrokeState} strokeState Stroke state.
   * @private
   */
  setContextStrokeState_(strokeState) {
    const context = this.context_;
    const contextStrokeState = this.contextStrokeState_;
    if (!contextStrokeState) {
      context.lineCap = strokeState.lineCap;
      context.setLineDash(strokeState.lineDash);
      context.lineDashOffset = strokeState.lineDashOffset;
      context.lineJoin = strokeState.lineJoin;
      context.lineWidth = strokeState.lineWidth;
      context.miterLimit = strokeState.miterLimit;
      context.strokeStyle = strokeState.strokeStyle;
      this.contextStrokeState_ = {
        lineCap: strokeState.lineCap,
        lineDash: strokeState.lineDash,
        lineDashOffset: strokeState.lineDashOffset,
        lineJoin: strokeState.lineJoin,
        lineWidth: strokeState.lineWidth,
        miterLimit: strokeState.miterLimit,
        strokeStyle: strokeState.strokeStyle
      };
    } else {
      if (contextStrokeState.lineCap != strokeState.lineCap) {
        contextStrokeState.lineCap = strokeState.lineCap;
        context.lineCap = strokeState.lineCap;
      }
      if (!equals(contextStrokeState.lineDash, strokeState.lineDash)) {
        context.setLineDash(contextStrokeState.lineDash = strokeState.lineDash);
      }
      if (contextStrokeState.lineDashOffset != strokeState.lineDashOffset) {
        contextStrokeState.lineDashOffset = strokeState.lineDashOffset;
        context.lineDashOffset = strokeState.lineDashOffset;
      }
      if (contextStrokeState.lineJoin != strokeState.lineJoin) {
        contextStrokeState.lineJoin = strokeState.lineJoin;
        context.lineJoin = strokeState.lineJoin;
      }
      if (contextStrokeState.lineWidth != strokeState.lineWidth) {
        contextStrokeState.lineWidth = strokeState.lineWidth;
        context.lineWidth = strokeState.lineWidth;
      }
      if (contextStrokeState.miterLimit != strokeState.miterLimit) {
        contextStrokeState.miterLimit = strokeState.miterLimit;
        context.miterLimit = strokeState.miterLimit;
      }
      if (contextStrokeState.strokeStyle != strokeState.strokeStyle) {
        contextStrokeState.strokeStyle = strokeState.strokeStyle;
        context.strokeStyle = strokeState.strokeStyle;
      }
    }
  }
  /**
   * @param {import("../canvas.js").TextState} textState Text state.
   * @private
   */
  setContextTextState_(textState) {
    const context = this.context_;
    const contextTextState = this.contextTextState_;
    const textAlign = textState.textAlign ? textState.textAlign : defaultTextAlign;
    if (!contextTextState) {
      context.font = textState.font;
      context.textAlign = textAlign;
      context.textBaseline = textState.textBaseline;
      this.contextTextState_ = {
        font: textState.font,
        textAlign,
        textBaseline: textState.textBaseline
      };
    } else {
      if (contextTextState.font != textState.font) {
        contextTextState.font = textState.font;
        context.font = textState.font;
      }
      if (contextTextState.textAlign != textAlign) {
        contextTextState.textAlign = textAlign;
        context.textAlign = textAlign;
      }
      if (contextTextState.textBaseline != textState.textBaseline) {
        contextTextState.textBaseline = textState.textBaseline;
        context.textBaseline = textState.textBaseline;
      }
    }
  }
  /**
   * Set the fill and stroke style for subsequent draw operations.  To clear
   * either fill or stroke styles, pass null for the appropriate parameter.
   *
   * @param {import("../../style/Fill.js").default} fillStyle Fill style.
   * @param {import("../../style/Stroke.js").default} strokeStyle Stroke style.
   * @override
   */
  setFillStrokeStyle(fillStyle, strokeStyle) {
    if (!fillStyle) {
      this.fillState_ = null;
    } else {
      const fillStyleColor = fillStyle.getColor();
      this.fillState_ = {
        fillStyle: asColorLike(fillStyleColor ? fillStyleColor : defaultFillStyle)
      };
    }
    if (!strokeStyle) {
      this.strokeState_ = null;
    } else {
      const strokeStyleColor = strokeStyle.getColor();
      const strokeStyleLineCap = strokeStyle.getLineCap();
      const strokeStyleLineDash = strokeStyle.getLineDash();
      const strokeStyleLineDashOffset = strokeStyle.getLineDashOffset();
      const strokeStyleLineJoin = strokeStyle.getLineJoin();
      const strokeStyleWidth = strokeStyle.getWidth();
      const strokeStyleMiterLimit = strokeStyle.getMiterLimit();
      const lineDash = strokeStyleLineDash ? strokeStyleLineDash : defaultLineDash;
      this.strokeState_ = {
        lineCap: strokeStyleLineCap !== void 0 ? strokeStyleLineCap : defaultLineCap,
        lineDash: this.pixelRatio_ === 1 ? lineDash : lineDash.map((n) => n * this.pixelRatio_),
        lineDashOffset: (strokeStyleLineDashOffset ? strokeStyleLineDashOffset : defaultLineDashOffset) * this.pixelRatio_,
        lineJoin: strokeStyleLineJoin !== void 0 ? strokeStyleLineJoin : defaultLineJoin,
        lineWidth: (strokeStyleWidth !== void 0 ? strokeStyleWidth : defaultLineWidth) * this.pixelRatio_,
        miterLimit: strokeStyleMiterLimit !== void 0 ? strokeStyleMiterLimit : defaultMiterLimit,
        strokeStyle: asColorLike(strokeStyleColor ? strokeStyleColor : defaultStrokeStyle)
      };
    }
  }
  /**
   * Set the image style for subsequent draw operations.  Pass null to remove
   * the image style.
   *
   * @param {import("../../style/Image.js").default} imageStyle Image style.
   * @override
   */
  setImageStyle(imageStyle) {
    let imageSize;
    if (!imageStyle || !(imageSize = imageStyle.getSize())) {
      this.image_ = null;
      return;
    }
    const imagePixelRatio = imageStyle.getPixelRatio(this.pixelRatio_);
    const imageAnchor = imageStyle.getAnchor();
    const imageOrigin = imageStyle.getOrigin();
    this.image_ = imageStyle.getImage(this.pixelRatio_);
    this.imageAnchorX_ = imageAnchor[0] * imagePixelRatio;
    this.imageAnchorY_ = imageAnchor[1] * imagePixelRatio;
    this.imageHeight_ = imageSize[1] * imagePixelRatio;
    this.imageOpacity_ = imageStyle.getOpacity();
    this.imageOriginX_ = imageOrigin[0];
    this.imageOriginY_ = imageOrigin[1];
    this.imageRotateWithView_ = imageStyle.getRotateWithView();
    this.imageRotation_ = imageStyle.getRotation();
    const imageScale = imageStyle.getScaleArray();
    this.imageScale_ = [imageScale[0] * this.pixelRatio_ / imagePixelRatio, imageScale[1] * this.pixelRatio_ / imagePixelRatio];
    this.imageWidth_ = imageSize[0] * imagePixelRatio;
  }
  /**
   * Set the text style for subsequent draw operations.  Pass null to
   * remove the text style.
   *
   * @param {import("../../style/Text.js").default} textStyle Text style.
   * @override
   */
  setTextStyle(textStyle) {
    if (!textStyle) {
      this.text_ = "";
    } else {
      const textFillStyle = textStyle.getFill();
      if (!textFillStyle) {
        this.textFillState_ = null;
      } else {
        const textFillStyleColor = textFillStyle.getColor();
        this.textFillState_ = {
          fillStyle: asColorLike(textFillStyleColor ? textFillStyleColor : defaultFillStyle)
        };
      }
      const textStrokeStyle = textStyle.getStroke();
      if (!textStrokeStyle) {
        this.textStrokeState_ = null;
      } else {
        const textStrokeStyleColor = textStrokeStyle.getColor();
        const textStrokeStyleLineCap = textStrokeStyle.getLineCap();
        const textStrokeStyleLineDash = textStrokeStyle.getLineDash();
        const textStrokeStyleLineDashOffset = textStrokeStyle.getLineDashOffset();
        const textStrokeStyleLineJoin = textStrokeStyle.getLineJoin();
        const textStrokeStyleWidth = textStrokeStyle.getWidth();
        const textStrokeStyleMiterLimit = textStrokeStyle.getMiterLimit();
        this.textStrokeState_ = {
          lineCap: textStrokeStyleLineCap !== void 0 ? textStrokeStyleLineCap : defaultLineCap,
          lineDash: textStrokeStyleLineDash ? textStrokeStyleLineDash : defaultLineDash,
          lineDashOffset: textStrokeStyleLineDashOffset ? textStrokeStyleLineDashOffset : defaultLineDashOffset,
          lineJoin: textStrokeStyleLineJoin !== void 0 ? textStrokeStyleLineJoin : defaultLineJoin,
          lineWidth: textStrokeStyleWidth !== void 0 ? textStrokeStyleWidth : defaultLineWidth,
          miterLimit: textStrokeStyleMiterLimit !== void 0 ? textStrokeStyleMiterLimit : defaultMiterLimit,
          strokeStyle: asColorLike(textStrokeStyleColor ? textStrokeStyleColor : defaultStrokeStyle)
        };
      }
      const textFont = textStyle.getFont();
      const textOffsetX = textStyle.getOffsetX();
      const textOffsetY = textStyle.getOffsetY();
      const textRotateWithView = textStyle.getRotateWithView();
      const textRotation = textStyle.getRotation();
      const textScale = textStyle.getScaleArray();
      const textText = textStyle.getText();
      const textTextAlign = textStyle.getTextAlign();
      const textTextBaseline = textStyle.getTextBaseline();
      this.textState_ = {
        font: textFont !== void 0 ? textFont : defaultFont,
        textAlign: textTextAlign !== void 0 ? textTextAlign : defaultTextAlign,
        textBaseline: textTextBaseline !== void 0 ? textTextBaseline : defaultTextBaseline
      };
      this.text_ = textText !== void 0 ? Array.isArray(textText) ? textText.reduce((acc, t, i) => acc += i % 2 ? " " : t, "") : textText : "";
      this.textOffsetX_ = textOffsetX !== void 0 ? this.pixelRatio_ * textOffsetX : 0;
      this.textOffsetY_ = textOffsetY !== void 0 ? this.pixelRatio_ * textOffsetY : 0;
      this.textRotateWithView_ = textRotateWithView !== void 0 ? textRotateWithView : false;
      this.textRotation_ = textRotation !== void 0 ? textRotation : 0;
      this.textScale_ = [this.pixelRatio_ * textScale[0], this.pixelRatio_ * textScale[1]];
    }
  }
};
var Immediate_default = CanvasImmediateRenderer;

// node_modules/ol/render/canvas/hitdetect.js
var HIT_DETECT_RESOLUTION = 0.5;
function createHitDetectionImageData(size, transforms, features, styleFunction, extent, resolution, rotation, squaredTolerance, projection) {
  const userExtent = projection ? toUserExtent(extent, projection) : extent;
  const width = size[0] * HIT_DETECT_RESOLUTION;
  const height = size[1] * HIT_DETECT_RESOLUTION;
  const context = createCanvasContext2D(width, height);
  context.imageSmoothingEnabled = false;
  const canvas = context.canvas;
  const renderer = new Immediate_default(context, HIT_DETECT_RESOLUTION, extent, null, rotation, squaredTolerance, projection ? getTransformFromProjections(getUserProjection(), projection) : null);
  const featureCount = features.length;
  const indexFactor = Math.floor((256 * 256 * 256 - 1) / featureCount);
  const featuresByZIndex = {};
  for (let i = 1; i <= featureCount; ++i) {
    const feature = features[i - 1];
    const featureStyleFunction = feature.getStyleFunction() || styleFunction;
    if (!featureStyleFunction) {
      continue;
    }
    let styles = featureStyleFunction(feature, resolution);
    if (!styles) {
      continue;
    }
    if (!Array.isArray(styles)) {
      styles = [styles];
    }
    const index = i * indexFactor;
    const color = index.toString(16).padStart(7, "#00000");
    for (let j = 0, jj = styles.length; j < jj; ++j) {
      const originalStyle = styles[j];
      const geometry = originalStyle.getGeometryFunction()(feature);
      if (!geometry || !intersects(userExtent, geometry.getExtent())) {
        continue;
      }
      const style = originalStyle.clone();
      const fill = style.getFill();
      if (fill) {
        fill.setColor(color);
      }
      const stroke = style.getStroke();
      if (stroke) {
        stroke.setColor(color);
        stroke.setLineDash(null);
      }
      style.setText(void 0);
      const image = originalStyle.getImage();
      if (image) {
        const imgSize = image.getImageSize();
        if (!imgSize) {
          continue;
        }
        const imgContext = createCanvasContext2D(imgSize[0], imgSize[1], void 0, {
          alpha: false
        });
        const img = imgContext.canvas;
        imgContext.fillStyle = color;
        imgContext.fillRect(0, 0, img.width, img.height);
        style.setImage(new Icon_default({
          img,
          anchor: image.getAnchor(),
          anchorXUnits: "pixels",
          anchorYUnits: "pixels",
          offset: image.getOrigin(),
          opacity: 1,
          size: image.getSize(),
          scale: image.getScale(),
          rotation: image.getRotation(),
          rotateWithView: image.getRotateWithView()
        }));
      }
      const zIndex = style.getZIndex() || 0;
      let byGeometryType = featuresByZIndex[zIndex];
      if (!byGeometryType) {
        byGeometryType = {};
        featuresByZIndex[zIndex] = byGeometryType;
        byGeometryType["Polygon"] = [];
        byGeometryType["Circle"] = [];
        byGeometryType["LineString"] = [];
        byGeometryType["Point"] = [];
      }
      const type = geometry.getType();
      if (type === "GeometryCollection") {
        const geometries = (
          /** @type {import("../../geom/GeometryCollection.js").default} */
          geometry.getGeometriesArrayRecursive()
        );
        for (let i2 = 0, ii = geometries.length; i2 < ii; ++i2) {
          const geometry2 = geometries[i2];
          byGeometryType[geometry2.getType().replace("Multi", "")].push(geometry2, style);
        }
      } else {
        byGeometryType[type.replace("Multi", "")].push(geometry, style);
      }
    }
  }
  const zIndexKeys = Object.keys(featuresByZIndex).map(Number).sort(ascending);
  for (let i = 0, ii = zIndexKeys.length; i < ii; ++i) {
    const byGeometryType = featuresByZIndex[zIndexKeys[i]];
    for (const type in byGeometryType) {
      const geomAndStyle = byGeometryType[type];
      for (let j = 0, jj = geomAndStyle.length; j < jj; j += 2) {
        renderer.setStyle(geomAndStyle[j + 1]);
        for (let k = 0, kk = transforms.length; k < kk; ++k) {
          renderer.setTransform(transforms[k]);
          renderer.drawGeometry(geomAndStyle[j]);
        }
      }
    }
  }
  return context.getImageData(0, 0, canvas.width, canvas.height);
}
function hitDetect(pixel, features, imageData) {
  const resultFeatures = [];
  if (imageData) {
    const x = Math.floor(Math.round(pixel[0]) * HIT_DETECT_RESOLUTION);
    const y = Math.floor(Math.round(pixel[1]) * HIT_DETECT_RESOLUTION);
    const index = (clamp(x, 0, imageData.width - 1) + clamp(y, 0, imageData.height - 1) * imageData.width) * 4;
    const r = imageData.data[index];
    const g = imageData.data[index + 1];
    const b = imageData.data[index + 2];
    const i = b + 256 * (g + 256 * r);
    const indexFactor = Math.floor((256 * 256 * 256 - 1) / features.length);
    if (i && i % indexFactor === 0) {
      resultFeatures.push(features[i / indexFactor - 1]);
    }
  }
  return resultFeatures;
}

// node_modules/ol/renderer/vector.js
var SIMPLIFY_TOLERANCE = 0.5;
var GEOMETRY_RENDERERS = {
  "Point": renderPointGeometry,
  "LineString": renderLineStringGeometry,
  "Polygon": renderPolygonGeometry,
  "MultiPoint": renderMultiPointGeometry,
  "MultiLineString": renderMultiLineStringGeometry,
  "MultiPolygon": renderMultiPolygonGeometry,
  "GeometryCollection": renderGeometryCollectionGeometry,
  "Circle": renderCircleGeometry
};
function defaultOrder(feature1, feature2) {
  return parseInt(getUid(feature1), 10) - parseInt(getUid(feature2), 10);
}
function getSquaredTolerance(resolution, pixelRatio) {
  const tolerance = getTolerance(resolution, pixelRatio);
  return tolerance * tolerance;
}
function getTolerance(resolution, pixelRatio) {
  return SIMPLIFY_TOLERANCE * resolution / pixelRatio;
}
function renderCircleGeometry(builderGroup, geometry, style, feature, index) {
  const fillStyle = style.getFill();
  const strokeStyle = style.getStroke();
  if (fillStyle || strokeStyle) {
    const circleReplay = builderGroup.getBuilder(style.getZIndex(), "Circle");
    circleReplay.setFillStrokeStyle(fillStyle, strokeStyle);
    circleReplay.drawCircle(geometry, feature, index);
  }
  const textStyle = style.getText();
  if (textStyle && textStyle.getText()) {
    const textReplay = builderGroup.getBuilder(style.getZIndex(), "Text");
    textReplay.setTextStyle(textStyle);
    textReplay.drawText(geometry, feature);
  }
}
function renderFeature(replayGroup, feature, style, squaredTolerance, listener, transform, declutter, index) {
  const loadingPromises = [];
  const imageStyle = style.getImage();
  if (imageStyle) {
    let loading2 = true;
    const imageState = imageStyle.getImageState();
    if (imageState == ImageState_default.LOADED || imageState == ImageState_default.ERROR) {
      loading2 = false;
    } else {
      if (imageState == ImageState_default.IDLE) {
        imageStyle.load();
      }
    }
    if (loading2) {
      loadingPromises.push(imageStyle.ready());
    }
  }
  const fillStyle = style.getFill();
  if (fillStyle && fillStyle.loading()) {
    loadingPromises.push(fillStyle.ready());
  }
  const loading = loadingPromises.length > 0;
  if (loading) {
    Promise.all(loadingPromises).then(() => listener(null));
  }
  renderFeatureInternal(replayGroup, feature, style, squaredTolerance, transform, declutter, index);
  return loading;
}
function renderFeatureInternal(replayGroup, feature, style, squaredTolerance, transform, declutter, index) {
  const geometry = style.getGeometryFunction()(feature);
  if (!geometry) {
    return;
  }
  const simplifiedGeometry = geometry.simplifyTransformed(squaredTolerance, transform);
  const renderer = style.getRenderer();
  if (renderer) {
    renderGeometry(replayGroup, simplifiedGeometry, style, feature, index);
  } else {
    const geometryRenderer = GEOMETRY_RENDERERS[simplifiedGeometry.getType()];
    geometryRenderer(replayGroup, simplifiedGeometry, style, feature, index, declutter);
  }
}
function renderGeometry(replayGroup, geometry, style, feature, index) {
  if (geometry.getType() == "GeometryCollection") {
    const geometries = (
      /** @type {import("../geom/GeometryCollection.js").default} */
      geometry.getGeometries()
    );
    for (let i = 0, ii = geometries.length; i < ii; ++i) {
      renderGeometry(replayGroup, geometries[i], style, feature, index);
    }
    return;
  }
  const replay = replayGroup.getBuilder(style.getZIndex(), "Default");
  replay.drawCustom(
    /** @type {import("../geom/SimpleGeometry.js").default} */
    geometry,
    feature,
    style.getRenderer(),
    style.getHitDetectionRenderer(),
    index
  );
}
function renderGeometryCollectionGeometry(replayGroup, geometry, style, feature, declutterBuilderGroup, index) {
  const geometries = geometry.getGeometriesArray();
  let i, ii;
  for (i = 0, ii = geometries.length; i < ii; ++i) {
    const geometryRenderer = GEOMETRY_RENDERERS[geometries[i].getType()];
    geometryRenderer(replayGroup, geometries[i], style, feature, declutterBuilderGroup, index);
  }
}
function renderLineStringGeometry(builderGroup, geometry, style, feature, index) {
  const strokeStyle = style.getStroke();
  if (strokeStyle) {
    const lineStringReplay = builderGroup.getBuilder(style.getZIndex(), "LineString");
    lineStringReplay.setFillStrokeStyle(null, strokeStyle);
    lineStringReplay.drawLineString(geometry, feature, index);
  }
  const textStyle = style.getText();
  if (textStyle && textStyle.getText()) {
    const textReplay = builderGroup.getBuilder(style.getZIndex(), "Text");
    textReplay.setTextStyle(textStyle);
    textReplay.drawText(geometry, feature, index);
  }
}
function renderMultiLineStringGeometry(builderGroup, geometry, style, feature, index) {
  const strokeStyle = style.getStroke();
  if (strokeStyle) {
    const lineStringReplay = builderGroup.getBuilder(style.getZIndex(), "LineString");
    lineStringReplay.setFillStrokeStyle(null, strokeStyle);
    lineStringReplay.drawMultiLineString(geometry, feature, index);
  }
  const textStyle = style.getText();
  if (textStyle && textStyle.getText()) {
    const textReplay = builderGroup.getBuilder(style.getZIndex(), "Text");
    textReplay.setTextStyle(textStyle);
    textReplay.drawText(geometry, feature, index);
  }
}
function renderMultiPolygonGeometry(builderGroup, geometry, style, feature, index) {
  const fillStyle = style.getFill();
  const strokeStyle = style.getStroke();
  if (strokeStyle || fillStyle) {
    const polygonReplay = builderGroup.getBuilder(style.getZIndex(), "Polygon");
    polygonReplay.setFillStrokeStyle(fillStyle, strokeStyle);
    polygonReplay.drawMultiPolygon(geometry, feature, index);
  }
  const textStyle = style.getText();
  if (textStyle && textStyle.getText()) {
    const textReplay = builderGroup.getBuilder(style.getZIndex(), "Text");
    textReplay.setTextStyle(textStyle);
    textReplay.drawText(geometry, feature, index);
  }
}
function renderPointGeometry(builderGroup, geometry, style, feature, index, declutter) {
  const imageStyle = style.getImage();
  const textStyle = style.getText();
  const hasText = textStyle && textStyle.getText();
  const declutterImageWithText = declutter && imageStyle && hasText ? {} : void 0;
  if (imageStyle) {
    if (imageStyle.getImageState() != ImageState_default.LOADED) {
      return;
    }
    const imageReplay = builderGroup.getBuilder(style.getZIndex(), "Image");
    imageReplay.setImageStyle(imageStyle, declutterImageWithText);
    imageReplay.drawPoint(geometry, feature, index);
  }
  if (hasText) {
    const textReplay = builderGroup.getBuilder(style.getZIndex(), "Text");
    textReplay.setTextStyle(textStyle, declutterImageWithText);
    textReplay.drawText(geometry, feature, index);
  }
}
function renderMultiPointGeometry(builderGroup, geometry, style, feature, index, declutter) {
  const imageStyle = style.getImage();
  const hasImage = imageStyle && imageStyle.getOpacity() !== 0;
  const textStyle = style.getText();
  const hasText = textStyle && textStyle.getText();
  const declutterImageWithText = declutter && hasImage && hasText ? {} : void 0;
  if (hasImage) {
    if (imageStyle.getImageState() != ImageState_default.LOADED) {
      return;
    }
    const imageReplay = builderGroup.getBuilder(style.getZIndex(), "Image");
    imageReplay.setImageStyle(imageStyle, declutterImageWithText);
    imageReplay.drawMultiPoint(geometry, feature, index);
  }
  if (hasText) {
    const textReplay = builderGroup.getBuilder(style.getZIndex(), "Text");
    textReplay.setTextStyle(textStyle, declutterImageWithText);
    textReplay.drawText(geometry, feature, index);
  }
}
function renderPolygonGeometry(builderGroup, geometry, style, feature, index) {
  const fillStyle = style.getFill();
  const strokeStyle = style.getStroke();
  if (fillStyle || strokeStyle) {
    const polygonReplay = builderGroup.getBuilder(style.getZIndex(), "Polygon");
    polygonReplay.setFillStrokeStyle(fillStyle, strokeStyle);
    polygonReplay.drawPolygon(geometry, feature, index);
  }
  const textStyle = style.getText();
  if (textStyle && textStyle.getText()) {
    const textReplay = builderGroup.getBuilder(style.getZIndex(), "Text");
    textReplay.setTextStyle(textStyle);
    textReplay.drawText(geometry, feature, index);
  }
}

// node_modules/ol/renderer/canvas/VectorLayer.js
var CanvasVectorLayerRenderer = class extends Layer_default3 {
  /**
   * @param {import("../../layer/BaseVector.js").default} vectorLayer Vector layer.
   */
  constructor(vectorLayer) {
    super(vectorLayer);
    this.boundHandleStyleImageChange_ = this.handleStyleImageChange_.bind(this);
    this.animatingOrInteracting_;
    this.hitDetectionImageData_ = null;
    this.clipped_ = false;
    this.renderedFeatures_ = null;
    this.renderedRevision_ = -1;
    this.renderedResolution_ = NaN;
    this.renderedExtent_ = createEmpty();
    this.wrappedRenderedExtent_ = createEmpty();
    this.renderedRotation_;
    this.renderedCenter_ = null;
    this.renderedProjection_ = null;
    this.renderedPixelRatio_ = 1;
    this.renderedRenderOrder_ = null;
    this.renderedFrameDeclutter_;
    this.replayGroup_ = null;
    this.replayGroupChanged = true;
    this.clipping = true;
    this.targetContext_ = null;
    this.opacity_ = 1;
  }
  /**
   * @param {ExecutorGroup} executorGroup Executor group.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {boolean} [declutterable] `true` to only render declutterable items,
   *     `false` to only render non-declutterable items, `undefined` to render all.
   */
  renderWorlds(executorGroup, frameState, declutterable) {
    const extent = frameState.extent;
    const viewState = frameState.viewState;
    const center = viewState.center;
    const resolution = viewState.resolution;
    const projection = viewState.projection;
    const rotation = viewState.rotation;
    const projectionExtent = projection.getExtent();
    const vectorSource = this.getLayer().getSource();
    const declutter = this.getLayer().getDeclutter();
    const pixelRatio = frameState.pixelRatio;
    const viewHints = frameState.viewHints;
    const snapToPixel = !(viewHints[ViewHint_default.ANIMATING] || viewHints[ViewHint_default.INTERACTING]);
    const context = this.context;
    const width = Math.round(getWidth(extent) / resolution * pixelRatio);
    const height = Math.round(getHeight(extent) / resolution * pixelRatio);
    const multiWorld = vectorSource.getWrapX() && projection.canWrapX();
    const worldWidth = multiWorld ? getWidth(projectionExtent) : null;
    const endWorld = multiWorld ? Math.ceil((extent[2] - projectionExtent[2]) / worldWidth) + 1 : 1;
    let world = multiWorld ? Math.floor((extent[0] - projectionExtent[0]) / worldWidth) : 0;
    do {
      let transform = this.getRenderTransform(center, resolution, 0, pixelRatio, width, height, world * worldWidth);
      if (frameState.declutter) {
        transform = transform.slice(0);
      }
      executorGroup.execute(context, [context.canvas.width, context.canvas.height], transform, rotation, snapToPixel, declutterable === void 0 ? ALL : declutterable ? DECLUTTER : NON_DECLUTTER, declutterable ? declutter && frameState.declutter[declutter] : void 0);
    } while (++world < endWorld);
  }
  /**
   * @private
   */
  setDrawContext_() {
    if (this.opacity_ !== 1) {
      this.targetContext_ = this.context;
      this.context = createCanvasContext2D(this.context.canvas.width, this.context.canvas.height, canvasPool);
    }
  }
  /**
   * @private
   */
  resetDrawContext_() {
    if (this.opacity_ !== 1) {
      const alpha = this.targetContext_.globalAlpha;
      this.targetContext_.globalAlpha = this.opacity_;
      this.targetContext_.drawImage(this.context.canvas, 0, 0);
      this.targetContext_.globalAlpha = alpha;
      releaseCanvas(this.context);
      canvasPool.push(this.context.canvas);
      this.context = this.targetContext_;
      this.targetContext_ = null;
    }
  }
  /**
   * Render declutter items for this layer
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   */
  renderDeclutter(frameState) {
    if (!this.replayGroup_ || !this.getLayer().getDeclutter()) {
      return;
    }
    this.renderWorlds(this.replayGroup_, frameState, true);
  }
  /**
   * Render deferred instructions.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @override
   */
  renderDeferredInternal(frameState) {
    if (!this.replayGroup_) {
      return;
    }
    this.replayGroup_.renderDeferred();
    if (this.clipped_) {
      this.context.restore();
    }
    this.resetDrawContext_();
  }
  /**
   * Render the layer.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement|null} target Target that may be used to render content to.
   * @return {HTMLElement|null} The rendered element.
   * @override
   */
  renderFrame(frameState, target) {
    const layerState = frameState.layerStatesArray[frameState.layerIndex];
    this.opacity_ = layerState.opacity;
    const viewState = frameState.viewState;
    this.prepareContainer(frameState, target);
    const context = this.context;
    const replayGroup = this.replayGroup_;
    let render = replayGroup && !replayGroup.isEmpty();
    if (!render) {
      const hasRenderListeners = this.getLayer().hasListener(EventType_default2.PRERENDER) || this.getLayer().hasListener(EventType_default2.POSTRENDER);
      if (!hasRenderListeners) {
        return null;
      }
    }
    this.setDrawContext_();
    this.preRender(context, frameState);
    const projection = viewState.projection;
    this.clipped_ = false;
    if (render && layerState.extent && this.clipping) {
      const layerExtent = fromUserExtent(layerState.extent, projection);
      render = intersects(layerExtent, frameState.extent);
      this.clipped_ = render && !containsExtent(layerExtent, frameState.extent);
      if (this.clipped_) {
        this.clipUnrotated(context, frameState, layerExtent);
      }
    }
    if (render) {
      this.renderWorlds(replayGroup, frameState, this.getLayer().getDeclutter() ? false : void 0);
    }
    if (!frameState.declutter && this.clipped_) {
      context.restore();
    }
    this.postRender(context, frameState);
    if (this.renderedRotation_ !== viewState.rotation) {
      this.renderedRotation_ = viewState.rotation;
      this.hitDetectionImageData_ = null;
    }
    if (!frameState.declutter) {
      this.resetDrawContext_();
    }
    return this.container;
  }
  /**
   * Asynchronous layer level hit detection.
   * @param {import("../../pixel.js").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../../Feature").default>>} Promise
   * that resolves with an array of features.
   * @override
   */
  getFeatures(pixel) {
    return new Promise((resolve) => {
      if (this.frameState && !this.hitDetectionImageData_ && !this.animatingOrInteracting_) {
        const size = this.frameState.size.slice();
        const center = this.renderedCenter_;
        const resolution = this.renderedResolution_;
        const rotation = this.renderedRotation_;
        const projection = this.renderedProjection_;
        const extent = this.wrappedRenderedExtent_;
        const layer = this.getLayer();
        const transforms = [];
        const width = size[0] * HIT_DETECT_RESOLUTION;
        const height = size[1] * HIT_DETECT_RESOLUTION;
        transforms.push(this.getRenderTransform(center, resolution, rotation, HIT_DETECT_RESOLUTION, width, height, 0).slice());
        const source = layer.getSource();
        const projectionExtent = projection.getExtent();
        if (source.getWrapX() && projection.canWrapX() && !containsExtent(projectionExtent, extent)) {
          let startX = extent[0];
          const worldWidth = getWidth(projectionExtent);
          let world = 0;
          let offsetX;
          while (startX < projectionExtent[0]) {
            --world;
            offsetX = worldWidth * world;
            transforms.push(this.getRenderTransform(center, resolution, rotation, HIT_DETECT_RESOLUTION, width, height, offsetX).slice());
            startX += worldWidth;
          }
          world = 0;
          startX = extent[2];
          while (startX > projectionExtent[2]) {
            ++world;
            offsetX = worldWidth * world;
            transforms.push(this.getRenderTransform(center, resolution, rotation, HIT_DETECT_RESOLUTION, width, height, offsetX).slice());
            startX -= worldWidth;
          }
        }
        const userProjection = getUserProjection();
        this.hitDetectionImageData_ = createHitDetectionImageData(size, transforms, this.renderedFeatures_, layer.getStyleFunction(), extent, resolution, rotation, getSquaredTolerance(resolution, this.renderedPixelRatio_), userProjection ? projection : null);
      }
      resolve(hitDetect(pixel, this.renderedFeatures_, this.hitDetectionImageData_));
    });
  }
  /**
   * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {import("../vector.js").FeatureCallback<T>} callback Feature callback.
   * @param {Array<import("../Map.js").HitMatch<T>>} matches The hit detected matches with tolerance.
   * @return {T|undefined} Callback result.
   * @template T
   * @override
   */
  forEachFeatureAtCoordinate(coordinate, frameState, hitTolerance, callback, matches) {
    if (!this.replayGroup_) {
      return void 0;
    }
    const resolution = frameState.viewState.resolution;
    const rotation = frameState.viewState.rotation;
    const layer = this.getLayer();
    const features = {};
    const featureCallback = function(feature, geometry, distanceSq) {
      const key = getUid(feature);
      const match = features[key];
      if (!match) {
        if (distanceSq === 0) {
          features[key] = true;
          return callback(feature, layer, geometry);
        }
        matches.push(features[key] = {
          feature,
          layer,
          geometry,
          distanceSq,
          callback
        });
      } else if (match !== true && distanceSq < match.distanceSq) {
        if (distanceSq === 0) {
          features[key] = true;
          matches.splice(matches.lastIndexOf(match), 1);
          return callback(feature, layer, geometry);
        }
        match.geometry = geometry;
        match.distanceSq = distanceSq;
      }
      return void 0;
    };
    let result;
    const executorGroups = [this.replayGroup_];
    const declutter = this.getLayer().getDeclutter();
    executorGroups.some((executorGroup) => {
      return result = executorGroup.forEachFeatureAtCoordinate(coordinate, resolution, rotation, hitTolerance, featureCallback, declutter && frameState.declutter[declutter] ? frameState.declutter[declutter].all().map((item) => item.value) : null);
    });
    return result;
  }
  /**
   * Perform action necessary to get the layer rendered after new fonts have loaded
   * @override
   */
  handleFontsChanged() {
    const layer = this.getLayer();
    if (layer.getVisible() && this.replayGroup_) {
      layer.changed();
    }
  }
  /**
   * Handle changes in image style state.
   * @param {import("../../events/Event.js").default} event Image style change event.
   * @private
   */
  handleStyleImageChange_(event) {
    this.renderIfReadyAndVisible();
  }
  /**
   * Determine whether render should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   * @override
   */
  prepareFrame(frameState) {
    const vectorLayer = this.getLayer();
    const vectorSource = vectorLayer.getSource();
    if (!vectorSource) {
      return false;
    }
    const animating = frameState.viewHints[ViewHint_default.ANIMATING];
    const interacting = frameState.viewHints[ViewHint_default.INTERACTING];
    const updateWhileAnimating = vectorLayer.getUpdateWhileAnimating();
    const updateWhileInteracting = vectorLayer.getUpdateWhileInteracting();
    if (this.ready && !updateWhileAnimating && animating || !updateWhileInteracting && interacting) {
      this.animatingOrInteracting_ = true;
      return true;
    }
    this.animatingOrInteracting_ = false;
    const frameStateExtent = frameState.extent;
    const viewState = frameState.viewState;
    const projection = viewState.projection;
    const resolution = viewState.resolution;
    const pixelRatio = frameState.pixelRatio;
    const vectorLayerRevision = vectorLayer.getRevision();
    const vectorLayerRenderBuffer = vectorLayer.getRenderBuffer();
    let vectorLayerRenderOrder = vectorLayer.getRenderOrder();
    if (vectorLayerRenderOrder === void 0) {
      vectorLayerRenderOrder = defaultOrder;
    }
    const center = viewState.center.slice();
    const extent = buffer(frameStateExtent, vectorLayerRenderBuffer * resolution);
    const renderedExtent = extent.slice();
    const loadExtents = [extent.slice()];
    const projectionExtent = projection.getExtent();
    if (vectorSource.getWrapX() && projection.canWrapX() && !containsExtent(projectionExtent, frameState.extent)) {
      const worldWidth = getWidth(projectionExtent);
      const gutter = Math.max(getWidth(extent) / 2, worldWidth);
      extent[0] = projectionExtent[0] - gutter;
      extent[2] = projectionExtent[2] + gutter;
      wrapX2(center, projection);
      const loadExtent = wrapX(loadExtents[0], projection);
      if (loadExtent[0] < projectionExtent[0] && loadExtent[2] < projectionExtent[2]) {
        loadExtents.push([loadExtent[0] + worldWidth, loadExtent[1], loadExtent[2] + worldWidth, loadExtent[3]]);
      } else if (loadExtent[0] > projectionExtent[0] && loadExtent[2] > projectionExtent[2]) {
        loadExtents.push([loadExtent[0] - worldWidth, loadExtent[1], loadExtent[2] - worldWidth, loadExtent[3]]);
      }
    }
    if (this.ready && this.renderedResolution_ == resolution && this.renderedRevision_ == vectorLayerRevision && this.renderedRenderOrder_ == vectorLayerRenderOrder && this.renderedFrameDeclutter_ === !!frameState.declutter && containsExtent(this.wrappedRenderedExtent_, extent)) {
      if (!equals(this.renderedExtent_, renderedExtent)) {
        this.hitDetectionImageData_ = null;
        this.renderedExtent_ = renderedExtent;
      }
      this.renderedCenter_ = center;
      this.replayGroupChanged = false;
      return true;
    }
    this.replayGroup_ = null;
    const replayGroup = new BuilderGroup_default(getTolerance(resolution, pixelRatio), extent, resolution, pixelRatio);
    const userProjection = getUserProjection();
    let userTransform;
    if (userProjection) {
      for (let i = 0, ii = loadExtents.length; i < ii; ++i) {
        const extent2 = loadExtents[i];
        const userExtent2 = toUserExtent(extent2, projection);
        vectorSource.loadFeatures(userExtent2, toUserResolution(resolution, projection), userProjection);
      }
      userTransform = getTransformFromProjections(userProjection, projection);
    } else {
      for (let i = 0, ii = loadExtents.length; i < ii; ++i) {
        vectorSource.loadFeatures(loadExtents[i], resolution, projection);
      }
    }
    const squaredTolerance = getSquaredTolerance(resolution, pixelRatio);
    let ready = true;
    const render = (
      /**
       * @param {import("../../Feature.js").default} feature Feature.
       * @param {number} index Index.
       */
      (feature, index) => {
        let styles;
        const styleFunction = feature.getStyleFunction() || vectorLayer.getStyleFunction();
        if (styleFunction) {
          styles = styleFunction(feature, resolution);
        }
        if (styles) {
          const dirty = this.renderFeature(feature, squaredTolerance, styles, replayGroup, userTransform, this.getLayer().getDeclutter(), index);
          ready = ready && !dirty;
        }
      }
    );
    const userExtent = toUserExtent(extent, projection);
    const features = vectorSource.getFeaturesInExtent(userExtent);
    if (vectorLayerRenderOrder) {
      features.sort(vectorLayerRenderOrder);
    }
    for (let i = 0, ii = features.length; i < ii; ++i) {
      render(features[i], i);
    }
    this.renderedFeatures_ = features;
    this.ready = ready;
    const replayGroupInstructions = replayGroup.finish();
    const executorGroup = new ExecutorGroup_default(extent, resolution, pixelRatio, vectorSource.getOverlaps(), replayGroupInstructions, vectorLayer.getRenderBuffer(), !!frameState.declutter);
    this.renderedResolution_ = resolution;
    this.renderedRevision_ = vectorLayerRevision;
    this.renderedRenderOrder_ = vectorLayerRenderOrder;
    this.renderedFrameDeclutter_ = !!frameState.declutter;
    this.renderedExtent_ = renderedExtent;
    this.wrappedRenderedExtent_ = extent;
    this.renderedCenter_ = center;
    this.renderedProjection_ = projection;
    this.renderedPixelRatio_ = pixelRatio;
    this.replayGroup_ = executorGroup;
    this.hitDetectionImageData_ = null;
    this.replayGroupChanged = true;
    return true;
  }
  /**
   * @param {import("../../Feature.js").default} feature Feature.
   * @param {number} squaredTolerance Squared render tolerance.
   * @param {import("../../style/Style.js").default|Array<import("../../style/Style.js").default>} styles The style or array of styles.
   * @param {import("../../render/canvas/BuilderGroup.js").default} builderGroup Builder group.
   * @param {import("../../proj.js").TransformFunction} [transform] Transform from user to view projection.
   * @param {boolean} [declutter] Enable decluttering.
   * @param {number} [index] Render order index.
   * @return {boolean} `true` if an image is loading.
   */
  renderFeature(feature, squaredTolerance, styles, builderGroup, transform, declutter, index) {
    if (!styles) {
      return false;
    }
    let loading = false;
    if (Array.isArray(styles)) {
      for (let i = 0, ii = styles.length; i < ii; ++i) {
        loading = renderFeature(builderGroup, feature, styles[i], squaredTolerance, this.boundHandleStyleImageChange_, transform, declutter, index) || loading;
      }
    } else {
      loading = renderFeature(builderGroup, feature, styles, squaredTolerance, this.boundHandleStyleImageChange_, transform, declutter, index);
    }
    return loading;
  }
};
var VectorLayer_default = CanvasVectorLayerRenderer;

// node_modules/ol/layer/Vector.js
var VectorLayer = class extends BaseVector_default {
  /**
   * @param {Options<VectorSourceType, FeatureType>} [options] Options.
   */
  constructor(options) {
    super(options);
  }
  /**
   * @override
   */
  createRenderer() {
    return new VectorLayer_default(this);
  }
};
var Vector_default2 = VectorLayer;

// node_modules/ol/render.js
function getVectorContext(event) {
  if (!(event.context instanceof CanvasRenderingContext2D)) {
    throw new Error("Only works for render events from Canvas 2D layers");
  }
  const a = event.inversePixelTransform[0];
  const b = event.inversePixelTransform[1];
  const canvasPixelRatio = Math.sqrt(a * a + b * b);
  const frameState = event.frameState;
  const transform = multiply(event.inversePixelTransform.slice(), frameState.coordinateToPixelTransform);
  const squaredTolerance = getSquaredTolerance(frameState.viewState.resolution, canvasPixelRatio);
  let userTransform;
  const userProjection = getUserProjection();
  if (userProjection) {
    userTransform = getTransformFromProjections(userProjection, frameState.viewState.projection);
  }
  return new Immediate_default(event.context, canvasPixelRatio, frameState.extent, transform, frameState.viewState.rotation, squaredTolerance, userTransform);
}

// node_modules/ol/geom/flat/geodesic.js
function line(interpolate, transform, squaredTolerance) {
  const flatCoordinates = [];
  let geoA = interpolate(0);
  let geoB = interpolate(1);
  let a = transform(geoA);
  let b = transform(geoB);
  const geoStack = [geoB, geoA];
  const stack = [b, a];
  const fractionStack = [1, 0];
  const fractions = {};
  let maxIterations = 1e5;
  let geoM, m, fracA, fracB, fracM, key;
  while (--maxIterations > 0 && fractionStack.length > 0) {
    fracA = fractionStack.pop();
    geoA = geoStack.pop();
    a = stack.pop();
    key = fracA.toString();
    if (!(key in fractions)) {
      flatCoordinates.push(a[0], a[1]);
      fractions[key] = true;
    }
    fracB = fractionStack.pop();
    geoB = geoStack.pop();
    b = stack.pop();
    fracM = (fracA + fracB) / 2;
    geoM = interpolate(fracM);
    m = transform(geoM);
    if (squaredSegmentDistance(m[0], m[1], a[0], a[1], b[0], b[1]) < squaredTolerance) {
      flatCoordinates.push(b[0], b[1]);
      key = fracB.toString();
      fractions[key] = true;
    } else {
      fractionStack.push(fracB, fracM, fracM, fracA);
      stack.push(b, m, m, a);
      geoStack.push(geoB, geoM, geoM, geoA);
    }
  }
  return flatCoordinates;
}
function meridian(lon, lat1, lat2, projection, squaredTolerance) {
  const epsg4326Projection = get("EPSG:4326");
  return line(
    /**
     * @param {number} frac Fraction.
     * @return {import("../../coordinate.js").Coordinate} Coordinate.
     */
    function(frac) {
      return [lon, lat1 + (lat2 - lat1) * frac];
    },
    getTransform(epsg4326Projection, projection),
    squaredTolerance
  );
}
function parallel(lat, lon1, lon2, projection, squaredTolerance) {
  const epsg4326Projection = get("EPSG:4326");
  return line(
    /**
     * @param {number} frac Fraction.
     * @return {import("../../coordinate.js").Coordinate} Coordinate.
     */
    function(frac) {
      return [lon1 + (lon2 - lon1) * frac, lat];
    },
    getTransform(epsg4326Projection, projection),
    squaredTolerance
  );
}

// node_modules/ol/layer/Graticule.js
var DEFAULT_STROKE_STYLE = new Stroke_default({
  color: "rgba(0,0,0,0.2)"
});
var INTERVALS = [90, 45, 30, 20, 10, 5, 2, 1, 30 / 60, 20 / 60, 10 / 60, 5 / 60, 2 / 60, 1 / 60, 30 / 3600, 20 / 3600, 10 / 3600, 5 / 3600, 2 / 3600, 1 / 3600];
var Graticule = class extends Vector_default2 {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    options = options ? options : {};
    const baseOptions = Object.assign({
      updateWhileAnimating: true,
      updateWhileInteracting: true,
      renderBuffer: 0
    }, options);
    delete baseOptions.maxLines;
    delete baseOptions.strokeStyle;
    delete baseOptions.targetSize;
    delete baseOptions.showLabels;
    delete baseOptions.lonLabelFormatter;
    delete baseOptions.latLabelFormatter;
    delete baseOptions.lonLabelPosition;
    delete baseOptions.latLabelPosition;
    delete baseOptions.lonLabelStyle;
    delete baseOptions.latLabelStyle;
    delete baseOptions.intervals;
    super(baseOptions);
    this.projection_ = null;
    this.maxLat_ = Infinity;
    this.maxLon_ = Infinity;
    this.minLat_ = -Infinity;
    this.minLon_ = -Infinity;
    this.maxX_ = Infinity;
    this.maxY_ = Infinity;
    this.minX_ = -Infinity;
    this.minY_ = -Infinity;
    this.targetSize_ = options.targetSize !== void 0 ? options.targetSize : 100;
    this.maxLines_ = options.maxLines !== void 0 ? options.maxLines : 100;
    this.meridians_ = [];
    this.parallels_ = [];
    this.strokeStyle_ = options.strokeStyle !== void 0 ? options.strokeStyle : DEFAULT_STROKE_STYLE;
    this.fromLonLatTransform_ = void 0;
    this.toLonLatTransform_ = void 0;
    this.projectionCenterLonLat_ = null;
    this.bottomLeft_ = null;
    this.bottomRight_ = null;
    this.topLeft_ = null;
    this.topRight_ = null;
    this.meridiansLabels_ = null;
    this.parallelsLabels_ = null;
    if (options.showLabels) {
      this.lonLabelFormatter_ = options.lonLabelFormatter == void 0 ? degreesToStringHDMS.bind(this, "EW") : options.lonLabelFormatter;
      this.latLabelFormatter_ = options.latLabelFormatter == void 0 ? degreesToStringHDMS.bind(this, "NS") : options.latLabelFormatter;
      this.lonLabelPosition_ = options.lonLabelPosition == void 0 ? 0 : options.lonLabelPosition;
      this.latLabelPosition_ = options.latLabelPosition == void 0 ? 1 : options.latLabelPosition;
      this.lonLabelStyleBase_ = new Style_default({
        text: options.lonLabelStyle !== void 0 ? options.lonLabelStyle.clone() : new Text_default({
          font: "12px Calibri,sans-serif",
          textBaseline: "bottom",
          fill: new Fill_default({
            color: "rgba(0,0,0,1)"
          }),
          stroke: new Stroke_default({
            color: "rgba(255,255,255,1)",
            width: 3
          })
        })
      });
      this.lonLabelStyle_ = (feature) => {
        const label = feature.get("graticule_label");
        this.lonLabelStyleBase_.getText().setText(label);
        return this.lonLabelStyleBase_;
      };
      this.latLabelStyleBase_ = new Style_default({
        text: options.latLabelStyle !== void 0 ? options.latLabelStyle.clone() : new Text_default({
          font: "12px Calibri,sans-serif",
          textAlign: "right",
          fill: new Fill_default({
            color: "rgba(0,0,0,1)"
          }),
          stroke: new Stroke_default({
            color: "rgba(255,255,255,1)",
            width: 3
          })
        })
      });
      this.latLabelStyle_ = (feature) => {
        const label = feature.get("graticule_label");
        this.latLabelStyleBase_.getText().setText(label);
        return this.latLabelStyleBase_;
      };
      this.meridiansLabels_ = [];
      this.parallelsLabels_ = [];
      this.addEventListener(EventType_default2.POSTRENDER, this.drawLabels_.bind(this));
    }
    this.intervals_ = options.intervals !== void 0 ? options.intervals : INTERVALS;
    this.setSource(new Vector_default({
      loader: this.loaderFunction.bind(this),
      strategy: this.strategyFunction.bind(this),
      features: new Collection_default(),
      overlaps: false,
      useSpatialIndex: false,
      wrapX: options.wrapX
    }));
    this.featurePool_ = [];
    this.lineStyle_ = new Style_default({
      stroke: this.strokeStyle_
    });
    this.loadedExtent_ = null;
    this.renderedExtent_ = null;
    this.renderedResolution_ = null;
    this.setRenderOrder(null);
  }
  /**
   * Strategy function for loading features based on the view's extent and
   * resolution.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} resolution Resolution.
   * @return {Array<import("../extent.js").Extent>} Extents.
   */
  strategyFunction(extent, resolution) {
    let realWorldExtent = extent.slice();
    if (this.projection_ && this.getSource().getWrapX()) {
      wrapX(realWorldExtent, this.projection_);
    }
    if (this.loadedExtent_) {
      if (approximatelyEquals(this.loadedExtent_, realWorldExtent, resolution)) {
        realWorldExtent = this.loadedExtent_.slice();
      } else {
        this.getSource().removeLoadedExtent(this.loadedExtent_);
      }
    }
    return [realWorldExtent];
  }
  /**
   * Update geometries in the source based on current view
   * @param {import("../extent").Extent} extent Extent
   * @param {number} resolution Resolution
   * @param {import("../proj/Projection.js").default} projection Projection
   */
  loaderFunction(extent, resolution, projection) {
    this.loadedExtent_ = extent;
    const source = this.getSource();
    const layerExtent = this.getExtent() || [-Infinity, -Infinity, Infinity, Infinity];
    const renderExtent = getIntersection(layerExtent, extent);
    if (this.renderedExtent_ && equals2(this.renderedExtent_, renderExtent) && this.renderedResolution_ === resolution) {
      return;
    }
    this.renderedExtent_ = renderExtent;
    this.renderedResolution_ = resolution;
    if (isEmpty2(renderExtent)) {
      return;
    }
    const center = getCenter(renderExtent);
    const squaredTolerance = resolution * resolution / 4;
    const updateProjectionInfo = !this.projection_ || !equivalent(this.projection_, projection);
    if (updateProjectionInfo) {
      this.updateProjectionInfo_(projection);
    }
    this.createGraticule_(renderExtent, center, resolution, squaredTolerance);
    let featureCount = this.meridians_.length + this.parallels_.length;
    if (this.meridiansLabels_) {
      featureCount += this.meridians_.length;
    }
    if (this.parallelsLabels_) {
      featureCount += this.parallels_.length;
    }
    let feature;
    while (featureCount > this.featurePool_.length) {
      feature = new Feature_default();
      this.featurePool_.push(feature);
    }
    const featuresColl = source.getFeaturesCollection();
    featuresColl.clear();
    let poolIndex = 0;
    let i, l;
    for (i = 0, l = this.meridians_.length; i < l; ++i) {
      feature = this.featurePool_[poolIndex++];
      feature.setGeometry(this.meridians_[i]);
      feature.setStyle(this.lineStyle_);
      featuresColl.push(feature);
    }
    for (i = 0, l = this.parallels_.length; i < l; ++i) {
      feature = this.featurePool_[poolIndex++];
      feature.setGeometry(this.parallels_[i]);
      feature.setStyle(this.lineStyle_);
      featuresColl.push(feature);
    }
  }
  /**
   * @param {number} lon Longitude.
   * @param {number} minLat Minimal latitude.
   * @param {number} maxLat Maximal latitude.
   * @param {number} squaredTolerance Squared tolerance.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} index Index.
   * @return {number} Index.
   * @private
   */
  addMeridian_(lon, minLat, maxLat, squaredTolerance, extent, index) {
    const lineString = this.getMeridian_(lon, minLat, maxLat, squaredTolerance, index);
    if (intersects(lineString.getExtent(), extent)) {
      if (this.meridiansLabels_) {
        const text = this.lonLabelFormatter_(lon);
        if (index in this.meridiansLabels_) {
          this.meridiansLabels_[index].text = text;
        } else {
          this.meridiansLabels_[index] = {
            geom: new Point_default([]),
            text
          };
        }
      }
      this.meridians_[index++] = lineString;
    }
    return index;
  }
  /**
   * @param {number} lat Latitude.
   * @param {number} minLon Minimal longitude.
   * @param {number} maxLon Maximal longitude.
   * @param {number} squaredTolerance Squared tolerance.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} index Index.
   * @return {number} Index.
   * @private
   */
  addParallel_(lat, minLon, maxLon, squaredTolerance, extent, index) {
    const lineString = this.getParallel_(lat, minLon, maxLon, squaredTolerance, index);
    if (intersects(lineString.getExtent(), extent)) {
      if (this.parallelsLabels_) {
        const text = this.latLabelFormatter_(lat);
        if (index in this.parallelsLabels_) {
          this.parallelsLabels_[index].text = text;
        } else {
          this.parallelsLabels_[index] = {
            geom: new Point_default([]),
            text
          };
        }
      }
      this.parallels_[index++] = lineString;
    }
    return index;
  }
  /**
   * @param {import("../render/Event.js").default} event Render event.
   * @private
   */
  drawLabels_(event) {
    const rotation = event.frameState.viewState.rotation;
    const resolution = event.frameState.viewState.resolution;
    const size = event.frameState.size;
    const extent = event.frameState.extent;
    const rotationCenter = getCenter(extent);
    let rotationExtent = extent;
    if (rotation) {
      const unrotatedWidth = size[0] * resolution;
      const unrotatedHeight = size[1] * resolution;
      rotationExtent = [rotationCenter[0] - unrotatedWidth / 2, rotationCenter[1] - unrotatedHeight / 2, rotationCenter[0] + unrotatedWidth / 2, rotationCenter[1] + unrotatedHeight / 2];
    }
    let startWorld = 0;
    let endWorld = 0;
    let labelsAtStart = this.latLabelPosition_ < 0.5;
    const projectionExtent = this.projection_.getExtent();
    const worldWidth = getWidth(projectionExtent);
    if (this.getSource().getWrapX() && this.projection_.canWrapX() && !containsExtent(projectionExtent, extent)) {
      startWorld = Math.floor((extent[0] - projectionExtent[0]) / worldWidth);
      endWorld = Math.ceil((extent[2] - projectionExtent[2]) / worldWidth);
      const inverted = Math.abs(rotation) > Math.PI / 2;
      labelsAtStart = labelsAtStart !== inverted;
    }
    const vectorContext = getVectorContext(event);
    for (let world = startWorld; world <= endWorld; ++world) {
      let poolIndex = this.meridians_.length + this.parallels_.length;
      let feature, index, l, textPoint;
      if (this.meridiansLabels_) {
        for (index = 0, l = this.meridiansLabels_.length; index < l; ++index) {
          const lineString = this.meridians_[index];
          if (!rotation && world === 0) {
            textPoint = this.getMeridianPoint_(lineString, extent, index);
          } else {
            const clone2 = lineString.clone();
            clone2.translate(world * worldWidth, 0);
            clone2.rotate(-rotation, rotationCenter);
            textPoint = this.getMeridianPoint_(clone2, rotationExtent, index);
            textPoint.rotate(rotation, rotationCenter);
          }
          feature = this.featurePool_[poolIndex++];
          feature.setGeometry(textPoint);
          feature.set("graticule_label", this.meridiansLabels_[index].text);
          vectorContext.drawFeature(feature, this.lonLabelStyle_(feature));
        }
      }
      if (this.parallelsLabels_) {
        if (world === startWorld && labelsAtStart || world === endWorld && !labelsAtStart) {
          for (index = 0, l = this.parallels_.length; index < l; ++index) {
            const lineString = this.parallels_[index];
            if (!rotation && world === 0) {
              textPoint = this.getParallelPoint_(lineString, extent, index);
            } else {
              const clone2 = lineString.clone();
              clone2.translate(world * worldWidth, 0);
              clone2.rotate(-rotation, rotationCenter);
              textPoint = this.getParallelPoint_(clone2, rotationExtent, index);
              textPoint.rotate(rotation, rotationCenter);
            }
            feature = this.featurePool_[poolIndex++];
            feature.setGeometry(textPoint);
            feature.set("graticule_label", this.parallelsLabels_[index].text);
            vectorContext.drawFeature(feature, this.latLabelStyle_(feature));
          }
        }
      }
    }
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {import("../coordinate.js").Coordinate} center Center.
   * @param {number} resolution Resolution.
   * @param {number} squaredTolerance Squared tolerance.
   * @private
   */
  createGraticule_(extent, center, resolution, squaredTolerance) {
    const interval = this.getInterval_(resolution);
    if (interval == -1) {
      this.meridians_.length = 0;
      this.parallels_.length = 0;
      if (this.meridiansLabels_) {
        this.meridiansLabels_.length = 0;
      }
      if (this.parallelsLabels_) {
        this.parallelsLabels_.length = 0;
      }
      return;
    }
    let wrapX3 = false;
    const projectionExtent = this.projection_.getExtent();
    const worldWidth = getWidth(projectionExtent);
    if (this.getSource().getWrapX() && this.projection_.canWrapX() && !containsExtent(projectionExtent, extent)) {
      if (getWidth(extent) >= worldWidth) {
        extent[0] = projectionExtent[0];
        extent[2] = projectionExtent[2];
      } else {
        wrapX3 = true;
      }
    }
    const validCenterP = [clamp(center[0], this.minX_, this.maxX_), clamp(center[1], this.minY_, this.maxY_)];
    const centerLonLat = this.toLonLatTransform_(validCenterP);
    if (isNaN(centerLonLat[1])) {
      centerLonLat[1] = Math.abs(this.maxLat_) >= Math.abs(this.minLat_) ? this.maxLat_ : this.minLat_;
    }
    let centerLon = clamp(centerLonLat[0], this.minLon_, this.maxLon_);
    let centerLat = clamp(centerLonLat[1], this.minLat_, this.maxLat_);
    const maxLines = this.maxLines_;
    let cnt, idx, lat, lon;
    let validExtentP = extent;
    if (!wrapX3) {
      validExtentP = [clamp(extent[0], this.minX_, this.maxX_), clamp(extent[1], this.minY_, this.maxY_), clamp(extent[2], this.minX_, this.maxX_), clamp(extent[3], this.minY_, this.maxY_)];
    }
    const validExtent = applyTransform(validExtentP, this.toLonLatTransform_, void 0, 8);
    let maxLat = validExtent[3];
    let maxLon = validExtent[2];
    let minLat = validExtent[1];
    let minLon = validExtent[0];
    if (!wrapX3) {
      if (containsCoordinate(validExtentP, this.bottomLeft_)) {
        minLon = this.minLon_;
        minLat = this.minLat_;
      }
      if (containsCoordinate(validExtentP, this.bottomRight_)) {
        maxLon = this.maxLon_;
        minLat = this.minLat_;
      }
      if (containsCoordinate(validExtentP, this.topLeft_)) {
        minLon = this.minLon_;
        maxLat = this.maxLat_;
      }
      if (containsCoordinate(validExtentP, this.topRight_)) {
        maxLon = this.maxLon_;
        maxLat = this.maxLat_;
      }
      maxLat = clamp(maxLat, centerLat, this.maxLat_);
      maxLon = clamp(maxLon, centerLon, this.maxLon_);
      minLat = clamp(minLat, this.minLat_, centerLat);
      minLon = clamp(minLon, this.minLon_, centerLon);
    }
    centerLon = Math.floor(centerLon / interval) * interval;
    lon = clamp(centerLon, this.minLon_, this.maxLon_);
    idx = this.addMeridian_(lon, minLat, maxLat, squaredTolerance, extent, 0);
    cnt = 0;
    if (wrapX3) {
      while ((lon -= interval) >= minLon && cnt++ < maxLines) {
        idx = this.addMeridian_(lon, minLat, maxLat, squaredTolerance, extent, idx);
      }
    } else {
      while (lon != this.minLon_ && cnt++ < maxLines) {
        lon = Math.max(lon - interval, this.minLon_);
        idx = this.addMeridian_(lon, minLat, maxLat, squaredTolerance, extent, idx);
      }
    }
    lon = clamp(centerLon, this.minLon_, this.maxLon_);
    cnt = 0;
    if (wrapX3) {
      while ((lon += interval) <= maxLon && cnt++ < maxLines) {
        idx = this.addMeridian_(lon, minLat, maxLat, squaredTolerance, extent, idx);
      }
    } else {
      while (lon != this.maxLon_ && cnt++ < maxLines) {
        lon = Math.min(lon + interval, this.maxLon_);
        idx = this.addMeridian_(lon, minLat, maxLat, squaredTolerance, extent, idx);
      }
    }
    this.meridians_.length = idx;
    if (this.meridiansLabels_) {
      this.meridiansLabels_.length = idx;
    }
    centerLat = Math.floor(centerLat / interval) * interval;
    lat = clamp(centerLat, this.minLat_, this.maxLat_);
    idx = this.addParallel_(lat, minLon, maxLon, squaredTolerance, extent, 0);
    cnt = 0;
    while (lat != this.minLat_ && cnt++ < maxLines) {
      lat = Math.max(lat - interval, this.minLat_);
      idx = this.addParallel_(lat, minLon, maxLon, squaredTolerance, extent, idx);
    }
    lat = clamp(centerLat, this.minLat_, this.maxLat_);
    cnt = 0;
    while (lat != this.maxLat_ && cnt++ < maxLines) {
      lat = Math.min(lat + interval, this.maxLat_);
      idx = this.addParallel_(lat, minLon, maxLon, squaredTolerance, extent, idx);
    }
    this.parallels_.length = idx;
    if (this.parallelsLabels_) {
      this.parallelsLabels_.length = idx;
    }
  }
  /**
   * @param {number} resolution Resolution.
   * @return {number} The interval in degrees.
   * @private
   */
  getInterval_(resolution) {
    const centerLon = this.projectionCenterLonLat_[0];
    const centerLat = this.projectionCenterLonLat_[1];
    let interval = -1;
    const target = Math.pow(this.targetSize_ * resolution, 2);
    const p12 = [];
    const p22 = [];
    for (let i = 0, ii = this.intervals_.length; i < ii; ++i) {
      const delta = clamp(this.intervals_[i] / 2, 0, 90);
      const clampedLat = clamp(centerLat, -90 + delta, 90 - delta);
      p12[0] = centerLon - delta;
      p12[1] = clampedLat - delta;
      p22[0] = centerLon + delta;
      p22[1] = clampedLat + delta;
      this.fromLonLatTransform_(p12, p12);
      this.fromLonLatTransform_(p22, p22);
      const dist = Math.pow(p22[0] - p12[0], 2) + Math.pow(p22[1] - p12[1], 2);
      if (dist <= target) {
        break;
      }
      interval = this.intervals_[i];
    }
    return interval;
  }
  /**
   * @param {number} lon Longitude.
   * @param {number} minLat Minimal latitude.
   * @param {number} maxLat Maximal latitude.
   * @param {number} squaredTolerance Squared tolerance.
   * @return {LineString} The meridian line string.
   * @param {number} index Index.
   * @private
   */
  getMeridian_(lon, minLat, maxLat, squaredTolerance, index) {
    const flatCoordinates = meridian(lon, minLat, maxLat, this.projection_, squaredTolerance);
    let lineString = this.meridians_[index];
    if (!lineString) {
      lineString = new LineString_default(flatCoordinates, "XY");
      this.meridians_[index] = lineString;
    } else {
      lineString.setFlatCoordinates("XY", flatCoordinates);
      lineString.changed();
    }
    return lineString;
  }
  /**
   * @param {LineString} lineString Meridian
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} index Index.
   * @return {Point} Meridian point.
   * @private
   */
  getMeridianPoint_(lineString, extent, index) {
    const flatCoordinates = lineString.getFlatCoordinates();
    let bottom = 1;
    let top = flatCoordinates.length - 1;
    if (flatCoordinates[bottom] > flatCoordinates[top]) {
      bottom = top;
      top = 1;
    }
    const clampedBottom = Math.max(extent[1], flatCoordinates[bottom]);
    const clampedTop = Math.min(extent[3], flatCoordinates[top]);
    const lat = clamp(extent[1] + Math.abs(extent[1] - extent[3]) * this.lonLabelPosition_, clampedBottom, clampedTop);
    const coordinate0 = flatCoordinates[bottom - 1] + (flatCoordinates[top - 1] - flatCoordinates[bottom - 1]) * (lat - flatCoordinates[bottom]) / (flatCoordinates[top] - flatCoordinates[bottom]);
    const coordinate = [coordinate0, lat];
    const point = this.meridiansLabels_[index].geom;
    point.setCoordinates(coordinate);
    return point;
  }
  /**
   * Get the list of meridians.  Meridians are lines of equal longitude.
   * @return {Array<LineString>} The meridians.
   * @api
   */
  getMeridians() {
    return this.meridians_;
  }
  /**
   * @param {number} lat Latitude.
   * @param {number} minLon Minimal longitude.
   * @param {number} maxLon Maximal longitude.
   * @param {number} squaredTolerance Squared tolerance.
   * @return {LineString} The parallel line string.
   * @param {number} index Index.
   * @private
   */
  getParallel_(lat, minLon, maxLon, squaredTolerance, index) {
    const flatCoordinates = parallel(lat, minLon, maxLon, this.projection_, squaredTolerance);
    let lineString = this.parallels_[index];
    if (!lineString) {
      lineString = new LineString_default(flatCoordinates, "XY");
    } else {
      lineString.setFlatCoordinates("XY", flatCoordinates);
      lineString.changed();
    }
    return lineString;
  }
  /**
   * @param {LineString} lineString Parallels.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} index Index.
   * @return {Point} Parallel point.
   * @private
   */
  getParallelPoint_(lineString, extent, index) {
    const flatCoordinates = lineString.getFlatCoordinates();
    let left = 0;
    let right = flatCoordinates.length - 2;
    if (flatCoordinates[left] > flatCoordinates[right]) {
      left = right;
      right = 0;
    }
    const clampedLeft = Math.max(extent[0], flatCoordinates[left]);
    const clampedRight = Math.min(extent[2], flatCoordinates[right]);
    const lon = clamp(extent[0] + Math.abs(extent[0] - extent[2]) * this.latLabelPosition_, clampedLeft, clampedRight);
    const coordinate1 = flatCoordinates[left + 1] + (flatCoordinates[right + 1] - flatCoordinates[left + 1]) * (lon - flatCoordinates[left]) / (flatCoordinates[right] - flatCoordinates[left]);
    const coordinate = [lon, coordinate1];
    const point = this.parallelsLabels_[index].geom;
    point.setCoordinates(coordinate);
    return point;
  }
  /**
   * Get the list of parallels.  Parallels are lines of equal latitude.
   * @return {Array<LineString>} The parallels.
   * @api
   */
  getParallels() {
    return this.parallels_;
  }
  /**
   * @param {import("../proj/Projection.js").default} projection Projection.
   * @private
   */
  updateProjectionInfo_(projection) {
    const epsg4326Projection = get("EPSG:4326");
    const worldExtent = projection.getWorldExtent();
    this.maxLat_ = worldExtent[3];
    this.maxLon_ = worldExtent[2];
    this.minLat_ = worldExtent[1];
    this.minLon_ = worldExtent[0];
    const toLonLatTransform = getTransform(projection, epsg4326Projection);
    if (this.minLon_ < this.maxLon_) {
      this.toLonLatTransform_ = toLonLatTransform;
    } else {
      const split = this.minLon_ + this.maxLon_ / 2;
      this.maxLon_ += 360;
      this.toLonLatTransform_ = function(coordinates, output, dimension) {
        dimension = dimension || 2;
        const lonLatCoordinates = toLonLatTransform(coordinates, output, dimension);
        for (let i = 0, l = lonLatCoordinates.length; i < l; i += dimension) {
          if (lonLatCoordinates[i] < split) {
            lonLatCoordinates[i] += 360;
          }
        }
        return lonLatCoordinates;
      };
    }
    this.fromLonLatTransform_ = getTransform(epsg4326Projection, projection);
    const worldExtentP = applyTransform([this.minLon_, this.minLat_, this.maxLon_, this.maxLat_], this.fromLonLatTransform_, void 0, 8);
    this.minX_ = worldExtentP[0];
    this.maxX_ = worldExtentP[2];
    this.minY_ = worldExtentP[1];
    this.maxY_ = worldExtentP[3];
    this.bottomLeft_ = this.fromLonLatTransform_([this.minLon_, this.minLat_]);
    this.bottomRight_ = this.fromLonLatTransform_([this.maxLon_, this.minLat_]);
    this.topLeft_ = this.fromLonLatTransform_([this.minLon_, this.maxLat_]);
    this.topRight_ = this.fromLonLatTransform_([this.maxLon_, this.maxLat_]);
    this.projectionCenterLonLat_ = this.toLonLatTransform_(getCenter(projection.getExtent()));
    if (isNaN(this.projectionCenterLonLat_[1])) {
      this.projectionCenterLonLat_[1] = Math.abs(this.maxLat_) >= Math.abs(this.minLat_) ? this.maxLat_ : this.minLat_;
    }
    this.projection_ = projection;
  }
};
var Graticule_default = Graticule;

// node_modules/ol/webgl.js
var ARRAY_BUFFER = 34962;
var ELEMENT_ARRAY_BUFFER = 34963;
var STREAM_DRAW = 35040;
var STATIC_DRAW = 35044;
var DYNAMIC_DRAW = 35048;
var UNSIGNED_BYTE = 5121;
var UNSIGNED_SHORT = 5123;
var UNSIGNED_INT = 5125;
var FLOAT = 5126;
var CONTEXT_IDS = ["experimental-webgl", "webgl", "webkit-3d", "moz-webgl"];
function getContext(canvas, attributes) {
  attributes = Object.assign({
    preserveDrawingBuffer: true,
    antialias: SAFARI_BUG_237906 ? false : true
    // https://bugs.webkit.org/show_bug.cgi?id=237906
  }, attributes);
  const ii = CONTEXT_IDS.length;
  for (let i = 0; i < ii; ++i) {
    try {
      const context = canvas.getContext(CONTEXT_IDS[i], attributes);
      if (context) {
        return (
          /** @type {!WebGLRenderingContext} */
          context
        );
      }
    } catch (e) {
    }
  }
  return null;
}

// node_modules/ol/webgl/Buffer.js
var BufferUsage = {
  STATIC_DRAW,
  STREAM_DRAW,
  DYNAMIC_DRAW
};
var WebGLArrayBuffer = class {
  /**
   * @param {number} type Buffer type, either ARRAY_BUFFER or ELEMENT_ARRAY_BUFFER.
   * @param {number} [usage] Intended usage, either `STATIC_DRAW`, `STREAM_DRAW` or `DYNAMIC_DRAW`.
   * Default is `DYNAMIC_DRAW`.
   */
  constructor(type, usage) {
    this.array_ = null;
    this.type_ = type;
    assert(type === ARRAY_BUFFER || type === ELEMENT_ARRAY_BUFFER, "A `WebGLArrayBuffer` must either be of type `ELEMENT_ARRAY_BUFFER` or `ARRAY_BUFFER`");
    this.usage_ = usage !== void 0 ? usage : BufferUsage.STATIC_DRAW;
  }
  /**
   * Populates the buffer with an array of the given size (all values will be zeroes).
   * @param {number} size Array size
   * @return {WebGLArrayBuffer} This
   */
  ofSize(size) {
    this.array_ = new (getArrayClassForType(this.type_))(size);
    return this;
  }
  /**
   * Populates the buffer with an array of the given size.
   * @param {Array<number>} array Numerical array
   * @return {WebGLArrayBuffer} This
   */
  fromArray(array) {
    this.array_ = getArrayClassForType(this.type_).from(array);
    return this;
  }
  /**
   * Populates the buffer with a raw binary array buffer.
   * @param {ArrayBuffer} buffer Raw binary buffer to populate the array with. Note that this buffer must have been
   * initialized for the same typed array class.
   * @return {WebGLArrayBuffer} This
   */
  fromArrayBuffer(buffer2) {
    this.array_ = new (getArrayClassForType(this.type_))(buffer2);
    return this;
  }
  /**
   * @return {number} Buffer type.
   */
  getType() {
    return this.type_;
  }
  /**
   * Will return null if the buffer was not initialized
   * @return {Float32Array|Uint32Array|null} Array.
   */
  getArray() {
    return this.array_;
  }
  /**
   * @return {number} Usage.
   */
  getUsage() {
    return this.usage_;
  }
  /**
   * Will return 0 if the buffer is not initialized
   * @return {number} Array size
   */
  getSize() {
    return this.array_ ? this.array_.length : 0;
  }
};
function getArrayClassForType(type) {
  switch (type) {
    case ARRAY_BUFFER:
      return Float32Array;
    case ELEMENT_ARRAY_BUFFER:
      return Uint32Array;
    default:
      return Float32Array;
  }
}
var Buffer_default = WebGLArrayBuffer;

// node_modules/ol/webgl/ContextEventType.js
var ContextEventType_default = {
  LOST: "webglcontextlost",
  RESTORED: "webglcontextrestored"
};

// node_modules/ol/webgl/PostProcessingPass.js
var DEFAULT_VERTEX_SHADER = `
  precision mediump float;

  attribute vec2 a_position;
  varying vec2 v_texCoord;
  varying vec2 v_screenCoord;

  uniform vec2 u_screenSize;

  void main() {
    v_texCoord = a_position * 0.5 + 0.5;
    v_screenCoord = v_texCoord * u_screenSize;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;
var DEFAULT_FRAGMENT_SHADER = `
  precision mediump float;

  uniform sampler2D u_image;
  uniform float u_opacity;

  varying vec2 v_texCoord;

  void main() {
    gl_FragColor = texture2D(u_image, v_texCoord) * u_opacity;
  }
`;
var WebGLPostProcessingPass = class {
  /**
   * @param {Options} options Options.
   */
  constructor(options) {
    this.gl_ = options.webGlContext;
    const gl = this.gl_;
    this.scaleRatio_ = options.scaleRatio || 1;
    this.renderTargetTexture_ = gl.createTexture();
    this.renderTargetTextureSize_ = null;
    this.frameBuffer_ = gl.createFramebuffer();
    this.depthBuffer_ = gl.createRenderbuffer();
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, options.vertexShader || DEFAULT_VERTEX_SHADER);
    gl.compileShader(vertexShader);
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, options.fragmentShader || DEFAULT_FRAGMENT_SHADER);
    gl.compileShader(fragmentShader);
    this.renderTargetProgram_ = gl.createProgram();
    gl.attachShader(this.renderTargetProgram_, vertexShader);
    gl.attachShader(this.renderTargetProgram_, fragmentShader);
    gl.linkProgram(this.renderTargetProgram_);
    this.renderTargetVerticesBuffer_ = gl.createBuffer();
    const verticesArray = [-1, -1, 1, -1, -1, 1, 1, -1, 1, 1, -1, 1];
    gl.bindBuffer(gl.ARRAY_BUFFER, this.renderTargetVerticesBuffer_);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesArray), gl.STATIC_DRAW);
    this.renderTargetAttribLocation_ = gl.getAttribLocation(this.renderTargetProgram_, "a_position");
    this.renderTargetUniformLocation_ = gl.getUniformLocation(this.renderTargetProgram_, "u_screenSize");
    this.renderTargetOpacityLocation_ = gl.getUniformLocation(this.renderTargetProgram_, "u_opacity");
    this.renderTargetTextureLocation_ = gl.getUniformLocation(this.renderTargetProgram_, "u_image");
    this.uniforms_ = [];
    options.uniforms && Object.keys(options.uniforms).forEach((name) => {
      this.uniforms_.push({
        value: options.uniforms[name],
        location: gl.getUniformLocation(this.renderTargetProgram_, name)
      });
    });
  }
  /**
   * Get the WebGL rendering context
   * @return {WebGLRenderingContext} The rendering context.
   */
  getGL() {
    return this.gl_;
  }
  /**
   * Initialize the render target texture of the post process, make sure it is at the
   * right size and bind it as a render target for the next draw calls.
   * The last step to be initialized will be the one where the primitives are rendered.
   * @param {import("../Map.js").FrameState} frameState current frame state
   */
  init(frameState) {
    const gl = this.getGL();
    const textureSize = [gl.drawingBufferWidth * this.scaleRatio_, gl.drawingBufferHeight * this.scaleRatio_];
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.getFrameBuffer());
    gl.bindRenderbuffer(gl.RENDERBUFFER, this.getDepthBuffer());
    gl.viewport(0, 0, textureSize[0], textureSize[1]);
    if (!this.renderTargetTextureSize_ || this.renderTargetTextureSize_[0] !== textureSize[0] || this.renderTargetTextureSize_[1] !== textureSize[1]) {
      this.renderTargetTextureSize_ = textureSize;
      const level = 0;
      const internalFormat = gl.RGBA;
      const border = 0;
      const format = gl.RGBA;
      const type = gl.UNSIGNED_BYTE;
      const data = null;
      gl.bindTexture(gl.TEXTURE_2D, this.renderTargetTexture_);
      gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, textureSize[0], textureSize[1], border, format, type, data);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.renderTargetTexture_, 0);
      gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, textureSize[0], textureSize[1]);
      gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.depthBuffer_);
    }
  }
  /**
   * Render to the next postprocessing pass (or to the canvas if final pass).
   * @param {import("../Map.js").FrameState} frameState current frame state
   * @param {WebGLPostProcessingPass} [nextPass] Next pass, optional
   * @param {function(WebGLRenderingContext, import("../Map.js").FrameState):void} [preCompose] Called before composing.
   * @param {function(WebGLRenderingContext, import("../Map.js").FrameState):void} [postCompose] Called before composing.
   */
  apply(frameState, nextPass, preCompose, postCompose) {
    const gl = this.getGL();
    const size = frameState.size;
    gl.bindFramebuffer(gl.FRAMEBUFFER, nextPass ? nextPass.getFrameBuffer() : null);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.renderTargetTexture_);
    if (!nextPass) {
      const canvasId = getUid(gl.canvas);
      if (!frameState.renderTargets[canvasId]) {
        const attributes = gl.getContextAttributes();
        if (attributes && attributes.preserveDrawingBuffer) {
          gl.clearColor(0, 0, 0, 0);
          gl.clearDepth(1);
          gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        }
        frameState.renderTargets[canvasId] = true;
      }
    }
    gl.disable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.renderTargetVerticesBuffer_);
    gl.useProgram(this.renderTargetProgram_);
    gl.enableVertexAttribArray(this.renderTargetAttribLocation_);
    gl.vertexAttribPointer(this.renderTargetAttribLocation_, 2, gl.FLOAT, false, 0, 0);
    gl.uniform2f(this.renderTargetUniformLocation_, size[0], size[1]);
    gl.uniform1i(this.renderTargetTextureLocation_, 0);
    const opacity = frameState.layerStatesArray[frameState.layerIndex].opacity;
    gl.uniform1f(this.renderTargetOpacityLocation_, opacity);
    this.applyUniforms(frameState);
    if (preCompose) {
      preCompose(gl, frameState);
    }
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    if (postCompose) {
      postCompose(gl, frameState);
    }
  }
  /**
   * @return {WebGLFramebuffer} Frame buffer
   */
  getFrameBuffer() {
    return this.frameBuffer_;
  }
  /**
   * @return {WebGLRenderbuffer} Depth buffer
   */
  getDepthBuffer() {
    return this.depthBuffer_;
  }
  /**
   * Sets the custom uniforms based on what was given in the constructor.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @private
   */
  applyUniforms(frameState) {
    const gl = this.getGL();
    let value;
    let textureSlot = 1;
    this.uniforms_.forEach(function(uniform) {
      value = typeof uniform.value === "function" ? uniform.value(frameState) : uniform.value;
      if (value instanceof HTMLCanvasElement || value instanceof ImageData) {
        if (!uniform.texture) {
          uniform.texture = gl.createTexture();
        }
        gl.activeTexture(gl[`TEXTURE${textureSlot}`]);
        gl.bindTexture(gl.TEXTURE_2D, uniform.texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        if (value instanceof ImageData) {
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, value.width, value.height, 0, gl.UNSIGNED_BYTE, new Uint8Array(value.data));
        } else {
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, value);
        }
        gl.uniform1i(uniform.location, textureSlot++);
      } else if (Array.isArray(value)) {
        switch (value.length) {
          case 2:
            gl.uniform2f(uniform.location, value[0], value[1]);
            return;
          case 3:
            gl.uniform3f(uniform.location, value[0], value[1], value[2]);
            return;
          case 4:
            gl.uniform4f(uniform.location, value[0], value[1], value[2], value[3]);
            return;
          default:
            return;
        }
      } else if (typeof value === "number") {
        gl.uniform1f(uniform.location, value);
      }
    });
  }
};
var PostProcessingPass_default = WebGLPostProcessingPass;

// node_modules/ol/vec/mat4.js
function create2() {
  return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}
function fromTransform(mat4, transform) {
  mat4[0] = transform[0];
  mat4[1] = transform[1];
  mat4[4] = transform[2];
  mat4[5] = transform[3];
  mat4[12] = transform[4];
  mat4[13] = transform[5];
  return mat4;
}

// node_modules/ol/webgl/Helper.js
var DefaultUniform = {
  PROJECTION_MATRIX: "u_projectionMatrix",
  SCREEN_TO_WORLD_MATRIX: "u_screenToWorldMatrix",
  TIME: "u_time",
  ZOOM: "u_zoom",
  RESOLUTION: "u_resolution",
  ROTATION: "u_rotation",
  VIEWPORT_SIZE_PX: "u_viewportSizePx",
  PIXEL_RATIO: "u_pixelRatio",
  HIT_DETECTION: "u_hitDetection"
};
var AttributeType = {
  UNSIGNED_BYTE,
  UNSIGNED_SHORT,
  UNSIGNED_INT,
  FLOAT
};
var canvasCache = {};
function getSharedCanvasCacheKey(key) {
  return "shared/" + key;
}
var uniqueCanvasCacheKeyCount = 0;
function getUniqueCanvasCacheKey() {
  const key = "unique/" + uniqueCanvasCacheKeyCount;
  uniqueCanvasCacheKeyCount += 1;
  return key;
}
function getOrCreateContext(key) {
  let cacheItem = canvasCache[key];
  if (!cacheItem) {
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    canvas.style.position = "absolute";
    canvas.style.left = "0";
    const context = getContext(canvas);
    cacheItem = {
      users: 0,
      context
    };
    canvasCache[key] = cacheItem;
  }
  cacheItem.users += 1;
  return cacheItem.context;
}
function releaseCanvas2(key) {
  const cacheItem = canvasCache[key];
  if (!cacheItem) {
    return;
  }
  cacheItem.users -= 1;
  if (cacheItem.users > 0) {
    return;
  }
  const gl = cacheItem.context;
  const extension = gl.getExtension("WEBGL_lose_context");
  if (extension) {
    extension.loseContext();
  }
  const canvas = gl.canvas;
  canvas.width = 1;
  canvas.height = 1;
  delete canvasCache[key];
}
var WebGLHelper = class extends Disposable_default {
  /**
   * @param {Options} [options] Options.
   */
  constructor(options) {
    super();
    options = options || {};
    this.boundHandleWebGLContextLost_ = this.handleWebGLContextLost.bind(this);
    this.boundHandleWebGLContextRestored_ = this.handleWebGLContextRestored.bind(this);
    this.canvasCacheKey_ = options.canvasCacheKey ? getSharedCanvasCacheKey(options.canvasCacheKey) : getUniqueCanvasCacheKey();
    this.gl_ = getOrCreateContext(this.canvasCacheKey_);
    this.bufferCache_ = {};
    this.extensionCache_ = {};
    this.currentProgram_ = null;
    this.needsToBeRecreated_ = false;
    const canvas = this.gl_.canvas;
    canvas.addEventListener(ContextEventType_default.LOST, this.boundHandleWebGLContextLost_);
    canvas.addEventListener(ContextEventType_default.RESTORED, this.boundHandleWebGLContextRestored_);
    this.offsetRotateMatrix_ = create();
    this.offsetScaleMatrix_ = create();
    this.tmpMat4_ = create2();
    this.uniformLocationsByProgram_ = {};
    this.attribLocationsByProgram_ = {};
    this.uniforms_ = [];
    if (options.uniforms) {
      this.setUniforms(options.uniforms);
    }
    this.postProcessPasses_ = options.postProcesses ? options.postProcesses.map((options2) => new PostProcessingPass_default({
      webGlContext: this.gl_,
      scaleRatio: options2.scaleRatio,
      vertexShader: options2.vertexShader,
      fragmentShader: options2.fragmentShader,
      uniforms: options2.uniforms
    })) : [new PostProcessingPass_default({
      webGlContext: this.gl_
    })];
    this.shaderCompileErrors_ = null;
    this.startTime_ = Date.now();
  }
  /**
   * @param {Object<string, UniformValue>} uniforms Uniform definitions.
   */
  setUniforms(uniforms) {
    this.uniforms_ = [];
    this.addUniforms(uniforms);
  }
  /**
   * @param {Object<string, UniformValue>} uniforms Uniform definitions.
   */
  addUniforms(uniforms) {
    for (const name in uniforms) {
      this.uniforms_.push({
        name,
        value: uniforms[name]
      });
    }
  }
  /**
   * @param {string} canvasCacheKey The canvas cache key.
   * @return {boolean} The provided key matches the one this helper was constructed with.
   */
  canvasCacheKeyMatches(canvasCacheKey) {
    return this.canvasCacheKey_ === getSharedCanvasCacheKey(canvasCacheKey);
  }
  /**
   * Get a WebGL extension.  If the extension is not supported, null is returned.
   * Extensions are cached after they are enabled for the first time.
   * @param {string} name The extension name.
   * @return {Object|null} The extension or null if not supported.
   */
  getExtension(name) {
    if (name in this.extensionCache_) {
      return this.extensionCache_[name];
    }
    const extension = this.gl_.getExtension(name);
    this.extensionCache_[name] = extension;
    return extension;
  }
  /**
   * Just bind the buffer if it's in the cache. Otherwise create
   * the WebGL buffer, bind it, populate it, and add an entry to
   * the cache.
   * @param {import("./Buffer").default} buffer Buffer.
   */
  bindBuffer(buffer2) {
    const gl = this.gl_;
    const bufferKey = getUid(buffer2);
    let bufferCache = this.bufferCache_[bufferKey];
    if (!bufferCache) {
      const webGlBuffer = gl.createBuffer();
      bufferCache = {
        buffer: buffer2,
        webGlBuffer
      };
      this.bufferCache_[bufferKey] = bufferCache;
    }
    gl.bindBuffer(buffer2.getType(), bufferCache.webGlBuffer);
  }
  /**
   * Update the data contained in the buffer array; this is required for the
   * new data to be rendered
   * @param {import("./Buffer").default} buffer Buffer.
   */
  flushBufferData(buffer2) {
    const gl = this.gl_;
    this.bindBuffer(buffer2);
    gl.bufferData(buffer2.getType(), buffer2.getArray(), buffer2.getUsage());
  }
  /**
   * @param {import("./Buffer.js").default} buf Buffer.
   */
  deleteBuffer(buf) {
    const gl = this.gl_;
    const bufferKey = getUid(buf);
    const bufferCacheEntry = this.bufferCache_[bufferKey];
    if (bufferCacheEntry && !gl.isContextLost()) {
      gl.deleteBuffer(bufferCacheEntry.webGlBuffer);
    }
    delete this.bufferCache_[bufferKey];
  }
  /**
   * Clean up.
   * @override
   */
  disposeInternal() {
    const canvas = this.gl_.canvas;
    canvas.removeEventListener(ContextEventType_default.LOST, this.boundHandleWebGLContextLost_);
    canvas.removeEventListener(ContextEventType_default.RESTORED, this.boundHandleWebGLContextRestored_);
    releaseCanvas2(this.canvasCacheKey_);
    delete this.gl_;
  }
  /**
   * Clear the buffer & set the viewport to draw.
   * Post process passes will be initialized here, the first one being bound as a render target for
   * subsequent draw calls.
   * @param {import("../Map.js").FrameState} frameState current frame state
   * @param {boolean} [disableAlphaBlend] If true, no alpha blending will happen.
   * @param {boolean} [enableDepth] If true, enables depth testing.
   */
  prepareDraw(frameState, disableAlphaBlend, enableDepth) {
    const gl = this.gl_;
    const canvas = this.getCanvas();
    const size = frameState.size;
    const pixelRatio = frameState.pixelRatio;
    if (canvas.width !== size[0] * pixelRatio || canvas.height !== size[1] * pixelRatio) {
      canvas.width = size[0] * pixelRatio;
      canvas.height = size[1] * pixelRatio;
      canvas.style.width = size[0] + "px";
      canvas.style.height = size[1] + "px";
    }
    for (let i = this.postProcessPasses_.length - 1; i >= 0; i--) {
      this.postProcessPasses_[i].init(frameState);
    }
    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.clearColor(0, 0, 0, 0);
    gl.depthRange(0, 1);
    gl.clearDepth(1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, disableAlphaBlend ? gl.ZERO : gl.ONE_MINUS_SRC_ALPHA);
    if (enableDepth) {
      gl.enable(gl.DEPTH_TEST);
      gl.depthFunc(gl.LEQUAL);
    } else {
      gl.disable(gl.DEPTH_TEST);
    }
  }
  /**
   * Prepare a program to use a texture.
   * @param {WebGLTexture} texture The texture.
   * @param {number} slot The texture slot.
   * @param {string} uniformName The corresponding uniform name.
   */
  bindTexture(texture, slot, uniformName) {
    const gl = this.gl_;
    gl.activeTexture(gl.TEXTURE0 + slot);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.uniform1i(this.getUniformLocation(uniformName), slot);
  }
  /**
   * Clear the render target & bind it for future draw operations.
   * This is similar to `prepareDraw`, only post processes will not be applied.
   * Note: the whole viewport will be drawn to the render target, regardless of its size.
   * @param {import("../Map.js").FrameState} frameState current frame state
   * @param {import("./RenderTarget.js").default} renderTarget Render target to draw to
   * @param {boolean} [disableAlphaBlend] If true, no alpha blending will happen.
   * @param {boolean} [enableDepth] If true, enables depth testing.
   */
  prepareDrawToRenderTarget(frameState, renderTarget, disableAlphaBlend, enableDepth) {
    const gl = this.gl_;
    const size = renderTarget.getSize();
    gl.bindFramebuffer(gl.FRAMEBUFFER, renderTarget.getFramebuffer());
    gl.bindRenderbuffer(gl.RENDERBUFFER, renderTarget.getDepthbuffer());
    gl.viewport(0, 0, size[0], size[1]);
    gl.bindTexture(gl.TEXTURE_2D, renderTarget.getTexture());
    gl.clearColor(0, 0, 0, 0);
    gl.depthRange(0, 1);
    gl.clearDepth(1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, disableAlphaBlend ? gl.ZERO : gl.ONE_MINUS_SRC_ALPHA);
    if (enableDepth) {
      gl.enable(gl.DEPTH_TEST);
      gl.depthFunc(gl.LEQUAL);
    } else {
      gl.disable(gl.DEPTH_TEST);
    }
  }
  /**
   * Execute a draw call based on the currently bound program, texture, buffers, attributes.
   * @param {number} start Start index.
   * @param {number} end End index.
   */
  drawElements(start, end) {
    const gl = this.gl_;
    this.getExtension("OES_element_index_uint");
    const elementType = gl.UNSIGNED_INT;
    const elementSize = 4;
    const numItems = end - start;
    const offsetInBytes = start * elementSize;
    gl.drawElements(gl.TRIANGLES, numItems, elementType, offsetInBytes);
  }
  /**
   * Apply the successive post process passes which will eventually render to the actual canvas.
   * @param {import("../Map.js").FrameState} frameState current frame state
   * @param {function(WebGLRenderingContext, import("../Map.js").FrameState):void} [preCompose] Called before composing.
   * @param {function(WebGLRenderingContext, import("../Map.js").FrameState):void} [postCompose] Called before composing.
   */
  finalizeDraw(frameState, preCompose, postCompose) {
    for (let i = 0, ii = this.postProcessPasses_.length; i < ii; i++) {
      if (i === ii - 1) {
        this.postProcessPasses_[i].apply(frameState, null, preCompose, postCompose);
      } else {
        this.postProcessPasses_[i].apply(frameState, this.postProcessPasses_[i + 1]);
      }
    }
  }
  /**
   * @return {HTMLCanvasElement} Canvas.
   */
  getCanvas() {
    return (
      /** @type {HTMLCanvasElement} */
      this.gl_.canvas
    );
  }
  /**
   * Get the WebGL rendering context
   * @return {WebGLRenderingContext} The rendering context.
   */
  getGL() {
    return this.gl_;
  }
  /**
   * Sets the default matrix uniforms for a given frame state. This is called internally in `prepareDraw`.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   */
  applyFrameState(frameState) {
    const size = frameState.size;
    const rotation = frameState.viewState.rotation;
    const pixelRatio = frameState.pixelRatio;
    this.setUniformFloatValue(DefaultUniform.TIME, (Date.now() - this.startTime_) * 1e-3);
    this.setUniformFloatValue(DefaultUniform.ZOOM, frameState.viewState.zoom);
    this.setUniformFloatValue(DefaultUniform.RESOLUTION, frameState.viewState.resolution);
    this.setUniformFloatValue(DefaultUniform.PIXEL_RATIO, pixelRatio);
    this.setUniformFloatVec2(DefaultUniform.VIEWPORT_SIZE_PX, [size[0], size[1]]);
    this.setUniformFloatValue(DefaultUniform.ROTATION, rotation);
  }
  /**
   * Sets the `u_hitDetection` uniform.
   * @param {boolean} enabled Whether to enable the hit detection code path
   */
  applyHitDetectionUniform(enabled) {
    const loc = this.getUniformLocation(DefaultUniform.HIT_DETECTION);
    this.getGL().uniform1i(loc, enabled ? 1 : 0);
    if (enabled) {
      this.setUniformFloatValue(DefaultUniform.PIXEL_RATIO, 0.5);
    }
  }
  /**
   * Sets the custom uniforms based on what was given in the constructor. This is called internally in `prepareDraw`.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   */
  applyUniforms(frameState) {
    const gl = this.gl_;
    let value;
    let textureSlot = 0;
    this.uniforms_.forEach((uniform) => {
      value = typeof uniform.value === "function" ? uniform.value(frameState) : uniform.value;
      if (value instanceof HTMLCanvasElement || value instanceof HTMLImageElement || value instanceof ImageData || value instanceof WebGLTexture) {
        if (value instanceof WebGLTexture && !uniform.texture) {
          uniform.prevValue = void 0;
          uniform.texture = value;
        } else if (!uniform.texture) {
          uniform.prevValue = void 0;
          uniform.texture = gl.createTexture();
        }
        this.bindTexture(uniform.texture, textureSlot, uniform.name);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        const imageReady = !(value instanceof HTMLImageElement) || /** @type {HTMLImageElement} */
        value.complete;
        if (!(value instanceof WebGLTexture) && imageReady && uniform.prevValue !== value) {
          uniform.prevValue = value;
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, value);
        }
        textureSlot++;
      } else if (Array.isArray(value) && value.length === 6) {
        this.setUniformMatrixValue(uniform.name, fromTransform(this.tmpMat4_, value));
      } else if (Array.isArray(value) && value.length <= 4) {
        switch (value.length) {
          case 2:
            gl.uniform2f(this.getUniformLocation(uniform.name), value[0], value[1]);
            return;
          case 3:
            gl.uniform3f(this.getUniformLocation(uniform.name), value[0], value[1], value[2]);
            return;
          case 4:
            gl.uniform4f(this.getUniformLocation(uniform.name), value[0], value[1], value[2], value[3]);
            return;
          default:
            return;
        }
      } else if (typeof value === "number") {
        gl.uniform1f(this.getUniformLocation(uniform.name), value);
      }
    });
  }
  /**
   * Set up a program for use. The program will be set as the current one. Then, the uniforms used
   * in the program will be set based on the current frame state and the helper configuration.
   * @param {WebGLProgram} program Program.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   */
  useProgram(program, frameState) {
    const gl = this.gl_;
    gl.useProgram(program);
    this.currentProgram_ = program;
    this.applyFrameState(frameState);
    this.applyUniforms(frameState);
  }
  /**
   * Will attempt to compile a vertex or fragment shader based on source
   * On error, the shader will be returned but
   * `gl.getShaderParameter(shader, gl.COMPILE_STATUS)` will return `true`
   * Use `gl.getShaderInfoLog(shader)` to have details
   * @param {string} source Shader source
   * @param {ShaderType} type VERTEX_SHADER or FRAGMENT_SHADER
   * @return {WebGLShader} Shader object
   */
  compileShader(source, type) {
    const gl = this.gl_;
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return shader;
  }
  /**
   * Create a program for a vertex and fragment shader.  Throws if shader compilation fails.
   * @param {string} fragmentShaderSource Fragment shader source.
   * @param {string} vertexShaderSource Vertex shader source.
   * @return {WebGLProgram} Program
   */
  getProgram(fragmentShaderSource, vertexShaderSource) {
    const gl = this.gl_;
    const fragmentShader = this.compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);
    const vertexShader = this.compileShader(vertexShaderSource, gl.VERTEX_SHADER);
    const program = gl.createProgram();
    gl.attachShader(program, fragmentShader);
    gl.attachShader(program, vertexShader);
    gl.linkProgram(program);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      const message = `Fragment shader compilation failed: ${gl.getShaderInfoLog(fragmentShader)}`;
      throw new Error(message);
    }
    gl.deleteShader(fragmentShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
      const message = `Vertex shader compilation failed: ${gl.getShaderInfoLog(vertexShader)}`;
      throw new Error(message);
    }
    gl.deleteShader(vertexShader);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      const message = `GL program linking failed: ${gl.getProgramInfoLog(program)}`;
      throw new Error(message);
    }
    return program;
  }
  /**
   * Will get the location from the shader or the cache
   * @param {string} name Uniform name
   * @return {WebGLUniformLocation} uniformLocation
   */
  getUniformLocation(name) {
    const programUid = getUid(this.currentProgram_);
    if (this.uniformLocationsByProgram_[programUid] === void 0) {
      this.uniformLocationsByProgram_[programUid] = {};
    }
    if (this.uniformLocationsByProgram_[programUid][name] === void 0) {
      this.uniformLocationsByProgram_[programUid][name] = this.gl_.getUniformLocation(this.currentProgram_, name);
    }
    return this.uniformLocationsByProgram_[programUid][name];
  }
  /**
   * Will get the location from the shader or the cache
   * @param {string} name Attribute name
   * @return {number} attribLocation
   */
  getAttributeLocation(name) {
    const programUid = getUid(this.currentProgram_);
    if (this.attribLocationsByProgram_[programUid] === void 0) {
      this.attribLocationsByProgram_[programUid] = {};
    }
    if (this.attribLocationsByProgram_[programUid][name] === void 0) {
      this.attribLocationsByProgram_[programUid][name] = this.gl_.getAttribLocation(this.currentProgram_, name);
    }
    return this.attribLocationsByProgram_[programUid][name];
  }
  /**
   * Sets the given transform to apply the rotation/translation/scaling of the given frame state.
   * The resulting transform can be used to convert world space coordinates to view coordinates in the [-1, 1] range.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @param {import("../transform").Transform} transform Transform to update.
   * @return {import("../transform").Transform} The updated transform object.
   */
  makeProjectionTransform(frameState, transform) {
    const size = frameState.size;
    const rotation = frameState.viewState.rotation;
    const resolution = frameState.viewState.resolution;
    const center = frameState.viewState.center;
    compose(transform, 0, 0, 2 / (resolution * size[0]), 2 / (resolution * size[1]), -rotation, -center[0], -center[1]);
    return transform;
  }
  /**
   * Give a value for a standard float uniform
   * @param {string} uniform Uniform name
   * @param {number} value Value
   */
  setUniformFloatValue(uniform, value) {
    this.gl_.uniform1f(this.getUniformLocation(uniform), value);
  }
  /**
   * Give a value for a vec2 uniform
   * @param {string} uniform Uniform name
   * @param {Array<number>} value Array of length 4.
   */
  setUniformFloatVec2(uniform, value) {
    this.gl_.uniform2fv(this.getUniformLocation(uniform), value);
  }
  /**
   * Give a value for a vec4 uniform
   * @param {string} uniform Uniform name
   * @param {Array<number>} value Array of length 4.
   */
  setUniformFloatVec4(uniform, value) {
    this.gl_.uniform4fv(this.getUniformLocation(uniform), value);
  }
  /**
   * Give a value for a standard matrix4 uniform
   * @param {string} uniform Uniform name
   * @param {Array<number>} value Matrix value
   */
  setUniformMatrixValue(uniform, value) {
    this.gl_.uniformMatrix4fv(this.getUniformLocation(uniform), false, value);
  }
  /**
   * Will set the currently bound buffer to an attribute of the shader program. Used by `#enableAttributes`
   * internally.
   * @param {string} attribName Attribute name
   * @param {number} size Number of components per attributes
   * @param {number} type UNSIGNED_INT, UNSIGNED_BYTE, UNSIGNED_SHORT or FLOAT
   * @param {number} stride Stride in bytes (0 means attribs are packed)
   * @param {number} offset Offset in bytes
   * @private
   */
  enableAttributeArray_(attribName, size, type, stride, offset) {
    const location = this.getAttributeLocation(attribName);
    if (location < 0) {
      return;
    }
    this.gl_.enableVertexAttribArray(location);
    this.gl_.vertexAttribPointer(location, size, type, false, stride, offset);
  }
  /**
   * Will enable the following attributes to be read from the currently bound buffer,
   * i.e. tell the GPU where to read the different attributes in the buffer. An error in the
   * size/type/order of attributes will most likely break the rendering and throw a WebGL exception.
   * @param {Array<AttributeDescription>} attributes Ordered list of attributes to read from the buffer
   */
  enableAttributes(attributes) {
    const stride = computeAttributesStride(attributes);
    let offset = 0;
    for (let i = 0; i < attributes.length; i++) {
      const attr = attributes[i];
      this.enableAttributeArray_(attr.name, attr.size, attr.type || FLOAT, stride, offset);
      offset += attr.size * getByteSizeFromType(attr.type);
    }
  }
  /**
   * WebGL context was lost
   * @param {WebGLContextEvent} event The context loss event.
   * @private
   */
  handleWebGLContextLost(event) {
    clear(this.bufferCache_);
    this.currentProgram_ = null;
    event.preventDefault();
  }
  /**
   * WebGL context was restored
   * @private
   */
  handleWebGLContextRestored() {
    this.needsToBeRecreated_ = true;
  }
  /**
   * Returns whether this helper needs to be recreated, as the context was lost and then restored.
   * @return {boolean} Whether this helper needs to be recreated.
   */
  needsToBeRecreated() {
    return this.needsToBeRecreated_;
  }
  /**
   * Will create or reuse a given webgl texture and apply the given size. If no image data
   * specified, the texture will be empty, otherwise image data will be used and the `size`
   * parameter will be ignored.
   * Note: wrap parameters are set to clamp to edge, min filter is set to linear.
   * @param {Array<number>} size Expected size of the texture
   * @param {ImageData|HTMLImageElement|HTMLCanvasElement} [data] Image data/object to bind to the texture
   * @param {WebGLTexture} [texture] Existing texture to reuse
   * @return {WebGLTexture} The generated texture
   */
  createTexture(size, data, texture) {
    const gl = this.gl_;
    texture = texture || gl.createTexture();
    const level = 0;
    const internalFormat = gl.RGBA;
    const border = 0;
    const format = gl.RGBA;
    const type = gl.UNSIGNED_BYTE;
    gl.bindTexture(gl.TEXTURE_2D, texture);
    if (data) {
      gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, format, type, data);
    } else {
      gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, size[0], size[1], border, format, type, null);
    }
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    return texture;
  }
};
function computeAttributesStride(attributes) {
  let stride = 0;
  for (let i = 0; i < attributes.length; i++) {
    const attr = attributes[i];
    stride += attr.size * getByteSizeFromType(attr.type);
  }
  return stride;
}
function getByteSizeFromType(type) {
  switch (type) {
    case AttributeType.UNSIGNED_BYTE:
      return Uint8Array.BYTES_PER_ELEMENT;
    case AttributeType.UNSIGNED_SHORT:
      return Uint16Array.BYTES_PER_ELEMENT;
    case AttributeType.UNSIGNED_INT:
      return Uint32Array.BYTES_PER_ELEMENT;
    case AttributeType.FLOAT:
    default:
      return Float32Array.BYTES_PER_ELEMENT;
  }
}
var Helper_default = WebGLHelper;

// node_modules/ol/renderer/webgl/Layer.js
var WebGLLayerRenderer = class _WebGLLayerRenderer extends Layer_default2 {
  /**
   * @param {LayerType} layer Layer.
   * @param {Options} [options] Options.
   */
  constructor(layer, options) {
    super(layer);
    options = options || {};
    this.inversePixelTransform_ = create();
    this.postProcesses_ = options.postProcesses;
    this.uniforms_ = options.uniforms;
    this.helper;
    this.onMapChanged_ = () => {
      this.clearCache();
      this.removeHelper();
    };
    layer.addChangeListener(Property_default.MAP, this.onMapChanged_);
    this.dispatchPreComposeEvent = this.dispatchPreComposeEvent.bind(this);
    this.dispatchPostComposeEvent = this.dispatchPostComposeEvent.bind(this);
  }
  /**
   * @param {WebGLRenderingContext} context The WebGL rendering context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  dispatchPreComposeEvent(context, frameState) {
    const layer = this.getLayer();
    if (layer.hasListener(EventType_default2.PRECOMPOSE)) {
      const event = new Event_default(EventType_default2.PRECOMPOSE, void 0, frameState, context);
      layer.dispatchEvent(event);
    }
  }
  /**
   * @param {WebGLRenderingContext} context The WebGL rendering context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  dispatchPostComposeEvent(context, frameState) {
    const layer = this.getLayer();
    if (layer.hasListener(EventType_default2.POSTCOMPOSE)) {
      const event = new Event_default(EventType_default2.POSTCOMPOSE, void 0, frameState, context);
      layer.dispatchEvent(event);
    }
  }
  /**
   * Reset options (only handles uniforms).
   * @param {Options} options Options.
   */
  reset(options) {
    this.uniforms_ = options.uniforms;
    if (this.helper) {
      this.helper.setUniforms(this.uniforms_);
    }
  }
  /**
   * @protected
   */
  removeHelper() {
    if (this.helper) {
      this.helper.dispose();
      delete this.helper;
    }
  }
  /**
   * Determine whether renderFrame should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   * @override
   */
  prepareFrame(frameState) {
    if (this.getLayer().getRenderSource()) {
      let incrementGroup = true;
      let groupNumber = -1;
      let className;
      for (let i = 0, ii = frameState.layerStatesArray.length; i < ii; i++) {
        const layer = frameState.layerStatesArray[i].layer;
        const renderer = layer.getRenderer();
        if (!(renderer instanceof _WebGLLayerRenderer)) {
          incrementGroup = true;
          continue;
        }
        const layerClassName = layer.getClassName();
        if (incrementGroup || layerClassName !== className) {
          groupNumber += 1;
          incrementGroup = false;
        }
        className = layerClassName;
        if (renderer === this) {
          break;
        }
      }
      const canvasCacheKey = "map/" + frameState.mapId + "/group/" + groupNumber;
      if (!this.helper || !this.helper.canvasCacheKeyMatches(canvasCacheKey) || this.helper.needsToBeRecreated()) {
        this.removeHelper();
        this.helper = new Helper_default({
          postProcesses: this.postProcesses_,
          uniforms: this.uniforms_,
          canvasCacheKey
        });
        if (className) {
          this.helper.getCanvas().className = className;
        }
        this.afterHelperCreated();
      }
    }
    return this.prepareFrameInternal(frameState);
  }
  /**
   * @protected
   */
  afterHelperCreated() {
  }
  /**
   * Determine whether renderFrame should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   * @protected
   */
  prepareFrameInternal(frameState) {
    return true;
  }
  /**
   * @protected
   */
  clearCache() {
  }
  /**
   * Clean up.
   * @override
   */
  disposeInternal() {
    this.clearCache();
    this.removeHelper();
    this.getLayer()?.removeChangeListener(Property_default.MAP, this.onMapChanged_);
    super.disposeInternal();
  }
  /**
   * @param {import("../../render/EventType.js").default} type Event type.
   * @param {WebGLRenderingContext} context The rendering context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @private
   */
  dispatchRenderEvent_(type, context, frameState) {
    const layer = this.getLayer();
    if (layer.hasListener(type)) {
      compose(this.inversePixelTransform_, 0, 0, frameState.pixelRatio, -frameState.pixelRatio, 0, 0, -frameState.size[1]);
      const event = new Event_default(type, this.inversePixelTransform_, frameState, context);
      layer.dispatchEvent(event);
    }
  }
  /**
   * @param {WebGLRenderingContext} context The rendering context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  preRender(context, frameState) {
    this.dispatchRenderEvent_(EventType_default2.PRERENDER, context, frameState);
  }
  /**
   * @param {WebGLRenderingContext} context The rendering context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  postRender(context, frameState) {
    this.dispatchRenderEvent_(EventType_default2.POSTRENDER, context, frameState);
  }
};
var Layer_default4 = WebGLLayerRenderer;

// node_modules/ol/webgl/RenderTarget.js
var tmpArray4 = new Uint8Array(4);
var WebGLRenderTarget = class {
  /**
   * @param {import("./Helper.js").default} helper WebGL helper; mandatory.
   * @param {Array<number>} [size] Expected size of the render target texture; note: this can be changed later on.
   */
  constructor(helper, size) {
    this.helper_ = helper;
    const gl = helper.getGL();
    this.texture_ = gl.createTexture();
    this.framebuffer_ = gl.createFramebuffer();
    this.depthbuffer_ = gl.createRenderbuffer();
    this.size_ = size || [1, 1];
    this.data_ = new Uint8Array(0);
    this.dataCacheDirty_ = true;
    this.updateSize_();
  }
  /**
   * Changes the size of the render target texture. Note: will do nothing if the size
   * is already the same.
   * @param {Array<number>} size Expected size of the render target texture
   */
  setSize(size) {
    if (equals(size, this.size_)) {
      return;
    }
    this.size_[0] = size[0];
    this.size_[1] = size[1];
    this.updateSize_();
  }
  /**
   * Returns the size of the render target texture
   * @return {Array<number>} Size of the render target texture
   */
  getSize() {
    return this.size_;
  }
  /**
   * This will cause following calls to `#readAll` or `#readPixel` to download the content of the
   * render target into memory, which is an expensive operation.
   * This content will be kept in cache but should be cleared after each new render.
   */
  clearCachedData() {
    this.dataCacheDirty_ = true;
  }
  /**
   * Returns the full content of the frame buffer as a series of r, g, b, a components
   * in the 0-255 range (unsigned byte).
   * @return {Uint8Array} Integer array of color values
   */
  readAll() {
    if (this.dataCacheDirty_) {
      const size = this.size_;
      const gl = this.helper_.getGL();
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer_);
      gl.readPixels(0, 0, size[0], size[1], gl.RGBA, gl.UNSIGNED_BYTE, this.data_);
      this.dataCacheDirty_ = false;
    }
    return this.data_;
  }
  /**
   * Reads one pixel of the frame buffer as an array of r, g, b, a components
   * in the 0-255 range (unsigned byte).
   * If x and/or y are outside of existing data, an array filled with 0 is returned.
   * @param {number} x Pixel coordinate
   * @param {number} y Pixel coordinate
   * @return {Uint8Array} Integer array with one color value (4 components)
   */
  readPixel(x, y) {
    if (x < 0 || y < 0 || x > this.size_[0] || y >= this.size_[1]) {
      tmpArray4[0] = 0;
      tmpArray4[1] = 0;
      tmpArray4[2] = 0;
      tmpArray4[3] = 0;
      return tmpArray4;
    }
    this.readAll();
    const index = Math.floor(x) + (this.size_[1] - Math.floor(y) - 1) * this.size_[0];
    tmpArray4[0] = this.data_[index * 4];
    tmpArray4[1] = this.data_[index * 4 + 1];
    tmpArray4[2] = this.data_[index * 4 + 2];
    tmpArray4[3] = this.data_[index * 4 + 3];
    return tmpArray4;
  }
  /**
   * @return {WebGLTexture} Texture to render to
   */
  getTexture() {
    return this.texture_;
  }
  /**
   * @return {WebGLFramebuffer} Frame buffer of the render target
   */
  getFramebuffer() {
    return this.framebuffer_;
  }
  /**
   * @return {WebGLRenderbuffer} Depth buffer of the render target
   */
  getDepthbuffer() {
    return this.depthbuffer_;
  }
  /**
   * @private
   */
  updateSize_() {
    const size = this.size_;
    const gl = this.helper_.getGL();
    this.texture_ = this.helper_.createTexture(size, null, this.texture_);
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer_);
    gl.viewport(0, 0, size[0], size[1]);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture_, 0);
    gl.bindRenderbuffer(gl.RENDERBUFFER, this.depthbuffer_);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, size[0], size[1]);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.depthbuffer_);
    this.data_ = new Uint8Array(size[0] * size[1] * 4);
  }
};
var RenderTarget_default = WebGLRenderTarget;

// node_modules/ol/render/webgl/constants.js
var WebGLWorkerMessageType = {
  GENERATE_POLYGON_BUFFERS: "GENERATE_POLYGON_BUFFERS",
  GENERATE_POINT_BUFFERS: "GENERATE_POINT_BUFFERS",
  GENERATE_LINE_STRING_BUFFERS: "GENERATE_LINE_STRING_BUFFERS"
};

// node_modules/ol/render/webgl/utils.js
var LINESTRING_ANGLE_COSINE_CUTOFF = 0.985;
function colorEncodeId(id, array) {
  array = array || [];
  const radix = 256;
  const divide = radix - 1;
  array[0] = Math.floor(id / radix / radix / radix) / divide;
  array[1] = Math.floor(id / radix / radix) % radix / divide;
  array[2] = Math.floor(id / radix) % radix / divide;
  array[3] = id % radix / divide;
  return array;
}
function colorDecodeId(color) {
  let id = 0;
  const radix = 256;
  const mult = radix - 1;
  id += Math.round(color[0] * radix * radix * radix * mult);
  id += Math.round(color[1] * radix * radix * mult);
  id += Math.round(color[2] * radix * mult);
  id += Math.round(color[3] * mult);
  return id;
}

// node_modules/ol/worker/webgl.js
function create3() {
  const source = 'const t="GENERATE_POLYGON_BUFFERS",e="GENERATE_POINT_BUFFERS",n="GENERATE_LINE_STRING_BUFFERS";function r(t,e){const n=e[0],r=e[1];return e[0]=t[0]*n+t[2]*r+t[4],e[1]=t[1]*n+t[3]*r+t[5],e}function x(t,e){const n=(r=e)[0]*r[3]-r[1]*r[2];var r;!function(t,e){if(!t)throw new Error(e)}(0!==n,"Transformation matrix cannot be inverted");const x=e[0],o=e[1],u=e[2],i=e[3],f=e[4],s=e[5];return t[0]=i/n,t[1]=-o/n,t[2]=-u/n,t[3]=x/n,t[4]=(u*s-i*f)/n,t[5]=-(x*s-o*f)/n,t}function o(t,e,n=2){const r=e&&e.length,x=r?e[0]*n:t.length;let o=u(t,0,x,n,!0);const i=[];if(!o||o.next===o.prev)return i;let s,l,c;if(r&&(o=function(t,e,n,r){const x=[];for(let n=0,o=e.length;n<o;n++){const i=u(t,e[n]*r,n<o-1?e[n+1]*r:t.length,r,!1);i===i.next&&(i.steiner=!0),x.push(g(i))}x.sort(y);for(let t=0;t<x.length;t++)n=h(x[t],n);return n}(t,e,o,n)),t.length>80*n){s=1/0,l=1/0;let e=-1/0,r=-1/0;for(let o=n;o<x;o+=n){const n=t[o],x=t[o+1];n<s&&(s=n),x<l&&(l=x),n>e&&(e=n),x>r&&(r=x)}c=Math.max(e-s,r-l),c=0!==c?32767/c:0}return f(o,i,n,s,l,c,0),i}function u(t,e,n,r,x){let o;if(x===function(t,e,n,r){let x=0;for(let o=e,u=n-r;o<n;o+=r)x+=(t[u]-t[o])*(t[o+1]+t[u+1]),u=o;return x}(t,e,n,r)>0)for(let x=e;x<n;x+=r)o=z(x/r|0,t[x],t[x+1],o);else for(let x=n-r;x>=e;x-=r)o=z(x/r|0,t[x],t[x+1],o);return o&&M(o,o.next)&&(F(o),o=o.next),o}function i(t,e){if(!t)return t;e||(e=t);let n,r=t;do{if(n=!1,r.steiner||!M(r,r.next)&&0!==d(r.prev,r,r.next))r=r.next;else{if(F(r),r=e=r.prev,r===r.next)break;n=!0}}while(n||r!==e);return e}function f(t,e,n,r,x,o,u){if(!t)return;!u&&o&&function(t,e,n,r){let x=t;do{0===x.z&&(x.z=v(x.x,x.y,e,n,r)),x.prevZ=x.prev,x.nextZ=x.next,x=x.next}while(x!==t);x.prevZ.nextZ=null,x.prevZ=null,function(t){let e,n=1;do{let r,x=t;t=null;let o=null;for(e=0;x;){e++;let u=x,i=0;for(let t=0;t<n&&(i++,u=u.nextZ,u);t++);let f=n;for(;i>0||f>0&&u;)0!==i&&(0===f||!u||x.z<=u.z)?(r=x,x=x.nextZ,i--):(r=u,u=u.nextZ,f--),o?o.nextZ=r:t=r,r.prevZ=o,o=r;x=u}o.nextZ=null,n*=2}while(e>1)}(x)}(t,r,x,o);let y=t;for(;t.prev!==t.next;){const h=t.prev,p=t.next;if(o?l(t,r,x,o):s(t))e.push(h.i,t.i,p.i),F(t),t=p.next,y=p.next;else if((t=p)===y){u?1===u?f(t=c(i(t),e),e,n,r,x,o,2):2===u&&a(t,e,n,r,x,o):f(i(t),e,n,r,x,o,1);break}}}function s(t){const e=t.prev,n=t,r=t.next;if(d(e,n,r)>=0)return!1;const x=e.x,o=n.x,u=r.x,i=e.y,f=n.y,s=r.y,l=x<o?x<u?x:u:o<u?o:u,c=i<f?i<s?i:s:f<s?f:s,a=x>o?x>u?x:u:o>u?o:u,y=i>f?i>s?i:s:f>s?f:s;let h=r.next;for(;h!==e;){if(h.x>=l&&h.x<=a&&h.y>=c&&h.y<=y&&b(x,i,o,f,u,s,h.x,h.y)&&d(h.prev,h,h.next)>=0)return!1;h=h.next}return!0}function l(t,e,n,r){const x=t.prev,o=t,u=t.next;if(d(x,o,u)>=0)return!1;const i=x.x,f=o.x,s=u.x,l=x.y,c=o.y,a=u.y,y=i<f?i<s?i:s:f<s?f:s,h=l<c?l<a?l:a:c<a?c:a,p=i>f?i>s?i:s:f>s?f:s,g=l>c?l>a?l:a:c>a?c:a,Z=v(y,h,e,n,r),M=v(p,g,e,n,r);let w=t.prevZ,m=t.nextZ;for(;w&&w.z>=Z&&m&&m.z<=M;){if(w.x>=y&&w.x<=p&&w.y>=h&&w.y<=g&&w!==x&&w!==u&&b(i,l,f,c,s,a,w.x,w.y)&&d(w.prev,w,w.next)>=0)return!1;if(w=w.prevZ,m.x>=y&&m.x<=p&&m.y>=h&&m.y<=g&&m!==x&&m!==u&&b(i,l,f,c,s,a,m.x,m.y)&&d(m.prev,m,m.next)>=0)return!1;m=m.nextZ}for(;w&&w.z>=Z;){if(w.x>=y&&w.x<=p&&w.y>=h&&w.y<=g&&w!==x&&w!==u&&b(i,l,f,c,s,a,w.x,w.y)&&d(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;m&&m.z<=M;){if(m.x>=y&&m.x<=p&&m.y>=h&&m.y<=g&&m!==x&&m!==u&&b(i,l,f,c,s,a,m.x,m.y)&&d(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function c(t,e){let n=t;do{const r=n.prev,x=n.next.next;!M(r,x)&&w(r,n,n.next,x)&&E(r,x)&&E(x,r)&&(e.push(r.i,n.i,x.i),F(n),F(n.next),n=t=x),n=n.next}while(n!==t);return i(n)}function a(t,e,n,r,x,o){let u=t;do{let t=u.next.next;for(;t!==u.prev;){if(u.i!==t.i&&Z(u,t)){let s=I(u,t);return u=i(u,u.next),s=i(s,s.next),f(u,e,n,r,x,o,0),void f(s,e,n,r,x,o,0)}t=t.next}u=u.next}while(u!==t)}function y(t,e){return t.x-e.x}function h(t,e){const n=function(t,e){let n=e;const r=t.x,x=t.y;let o,u=-1/0;do{if(x<=n.y&&x>=n.next.y&&n.next.y!==n.y){const t=n.x+(x-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(t<=r&&t>u&&(u=t,o=n.x<n.next.x?n:n.next,t===r))return o}n=n.next}while(n!==e);if(!o)return null;const i=o,f=o.x,s=o.y;let l=1/0;n=o;do{if(r>=n.x&&n.x>=f&&r!==n.x&&b(x<s?r:u,x,f,s,x<s?u:r,x,n.x,n.y)){const e=Math.abs(x-n.y)/(r-n.x);E(n,t)&&(e<l||e===l&&(n.x>o.x||n.x===o.x&&p(o,n)))&&(o=n,l=e)}n=n.next}while(n!==i);return o}(t,e);if(!n)return e;const r=I(n,t);return i(r,r.next),i(n,n.next)}function p(t,e){return d(t.prev,t,e.prev)<0&&d(e.next,t,t.next)<0}function v(t,e,n,r,x){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-n)*x|0)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-r)*x|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function g(t){let e=t,n=t;do{(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next}while(e!==t);return n}function b(t,e,n,r,x,o,u,i){return(x-u)*(e-i)>=(t-u)*(o-i)&&(t-u)*(r-i)>=(n-u)*(e-i)&&(n-u)*(o-i)>=(x-u)*(r-i)}function Z(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&w(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}(t,e)&&(E(t,e)&&E(e,t)&&function(t,e){let n=t,r=!1;const x=(t.x+e.x)/2,o=(t.y+e.y)/2;do{n.y>o!=n.next.y>o&&n.next.y!==n.y&&x<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==t);return r}(t,e)&&(d(t.prev,t,e.prev)||d(t,e.prev,e))||M(t,e)&&d(t.prev,t,t.next)>0&&d(e.prev,e,e.next)>0)}function d(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function M(t,e){return t.x===e.x&&t.y===e.y}function w(t,e,n,r){const x=A(d(t,e,n)),o=A(d(t,e,r)),u=A(d(n,r,t)),i=A(d(n,r,e));return x!==o&&u!==i||(!(0!==x||!m(t,n,e))||(!(0!==o||!m(t,r,e))||(!(0!==u||!m(n,t,r))||!(0!==i||!m(n,e,r)))))}function m(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function A(t){return t>0?1:t<0?-1:0}function E(t,e){return d(t.prev,t,t.next)<0?d(t,e,t.next)>=0&&d(t,t.prev,e)>=0:d(t,e,t.prev)<0||d(t,t.next,e)<0}function I(t,e){const n=P(t.i,t.x,t.y),r=P(e.i,e.x,e.y),x=t.next,o=e.prev;return t.next=e,e.prev=t,n.next=x,x.prev=n,r.next=n,n.prev=r,o.next=r,r.prev=o,r}function z(t,e,n,r){const x=P(t,e,n);return r?(x.next=r.next,x.prev=r,r.next.prev=x,r.next=x):(x.prev=x,x.next=x),x}function F(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function P(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}new Array(6);const B=[],N={vertexPosition:0,indexPosition:0};function R(t,e,n,r,x){t[e+0]=n,t[e+1]=r,t[e+2]=x}function S(t,e,n,r,x,o){const u=3+x,i=t[e+0],f=t[e+1],s=B;s.length=x;for(let n=0;n<s.length;n++)s[n]=t[e+2+n];let l=o?o.vertexPosition:0,c=o?o.indexPosition:0;const a=l/u;return R(n,l,i,f,0),s.length&&n.set(s,l+3),l+=u,R(n,l,i,f,1),s.length&&n.set(s,l+3),l+=u,R(n,l,i,f,2),s.length&&n.set(s,l+3),l+=u,R(n,l,i,f,3),s.length&&n.set(s,l+3),l+=u,r[c++]=a,r[c++]=a+1,r[c++]=a+3,r[c++]=a+1,r[c++]=a+2,r[c++]=a+3,N.vertexPosition=l,N.indexPosition=c,N}function T(t,e,n,x,o,u,i,f,s,l,c){const a=10+f.length,y=u.length/a,h=[t[e+0],t[e+1]],p=[t[n],t[n+1]],v=t[e+2],g=t[n+2],b=r(s,[...h]),Z=r(s,[...p]);function d(t,e,n){const r=Math.sqrt((e[0]-t[0])*(e[0]-t[0])+(e[1]-t[1])*(e[1]-t[1])),x=[(e[0]-t[0])/r,(e[1]-t[1])/r],o=[-x[1],x[0]],u=Math.sqrt((n[0]-t[0])*(n[0]-t[0])+(n[1]-t[1])*(n[1]-t[1])),i=[(n[0]-t[0])/u,(n[1]-t[1])/u],f=0===r||0===u?0:Math.acos((s=i[0]*x[0]+i[1]*x[1],l=-1,c=1,Math.min(Math.max(s,l),c)));var s,l,c;return i[0]*o[0]+i[1]*o[1]>0?f:2*Math.PI-f}let M=-1,w=-1,m=c;const A=null!==o;if(null!==x){M=d(b,Z,r(s,[...[t[x],t[x+1]]])),Math.cos(M)<=.985&&(m+=Math.tan((M-Math.PI)/2))}if(A){w=d(Z,b,r(s,[...[t[o],t[o+1]]])),Math.cos(w)<=.985&&(m+=Math.tan((Math.PI-w)/2))}function E(t,e){return 0===e?1e4*t:Math.sign(e)*(1e4*t+Math.abs(e))}return u.push(h[0],h[1],v,p[0],p[1],g,M,w,l,E(0,c)),u.push(...f),u.push(h[0],h[1],v,p[0],p[1],g,M,w,l,E(1,c)),u.push(...f),u.push(h[0],h[1],v,p[0],p[1],g,M,w,l,E(2,c)),u.push(...f),u.push(h[0],h[1],v,p[0],p[1],g,M,w,l,E(3,c)),u.push(...f),i.push(y,y+1,y+2,y+1,y+3,y+2),{length:l+Math.sqrt((Z[0]-b[0])*(Z[0]-b[0])+(Z[1]-b[1])*(Z[1]-b[1])),angle:m}}function _(t,e,n,r,x){const u=2+x;let i=e;const f=t.slice(i,i+x);i+=x;const s=t[i++];let l=0;const c=new Array(s-1);for(let e=0;e<s;e++)l+=t[i++],e<s-1&&(c[e]=l);const a=t.slice(i,i+2*l),y=o(a,c,2);for(let t=0;t<y.length;t++)r.push(y[t]+n.length/u);for(let t=0;t<a.length;t+=2)n.push(a[t],a[t+1],...f);return i+2*l}const O=self;O.onmessage=r=>{const o=r.data;switch(o.type){case e:{const t=3,e=2,n=o.customAttributesSize,r=e+n,x=new Float32Array(o.renderInstructions),u=x.length/r,i=4*u*(n+t),f=new Uint32Array(6*u),s=new Float32Array(i);let l;for(let t=0;t<x.length;t+=r)l=S(x,t,s,f,n,l);const c=Object.assign({vertexBuffer:s.buffer,indexBuffer:f.buffer,renderInstructions:x.buffer},o);O.postMessage(c,[s.buffer,f.buffer,x.buffer]);break}case n:{const t=[],e=[],n=o.customAttributesSize,r=3,u=new Float32Array(o.renderInstructions);let i=0;const f=[1,0,0,1,0,0];let s,l;for(x(f,o.renderInstructionsTransform);i<u.length;){l=Array.from(u.slice(i,i+n)),i+=n,s=u[i++];const x=i,o=i+(s-1)*r,c=u[x]===u[o]&&u[x+1]===u[o+1];let a=0,y=0;for(let n=0;n<s-1;n++){let h=null;n>0?h=i+(n-1)*r:c&&(h=o-r);let p=null;n<s-2?p=i+(n+2)*r:c&&(p=x+r);const v=T(u,i+n*r,i+(n+1)*r,h,p,t,e,l,f,a,y);a=v.length,y=v.angle}i+=s*r}const c=Uint32Array.from(e),a=Float32Array.from(t),y=Object.assign({vertexBuffer:a.buffer,indexBuffer:c.buffer,renderInstructions:u.buffer},o);O.postMessage(y,[a.buffer,c.buffer,u.buffer]);break}case t:{const t=[],e=[],n=o.customAttributesSize,r=new Float32Array(o.renderInstructions);let x=0;for(;x<r.length;)x=_(r,x,t,e,n);const u=Uint32Array.from(e),i=Float32Array.from(t),f=Object.assign({vertexBuffer:i.buffer,indexBuffer:u.buffer,renderInstructions:r.buffer},o);O.postMessage(f,[i.buffer,u.buffer,r.buffer]);break}}};';
  return new Worker(typeof Blob === "undefined" ? "data:application/javascript;base64," + Buffer.from(source, "binary").toString("base64") : URL.createObjectURL(new Blob([source], {
    type: "application/javascript"
  })));
}

// node_modules/ol/renderer/webgl/worldUtil.js
function getWorldParameters(frameState, layer) {
  const projection = frameState.viewState.projection;
  const vectorSource = layer.getSource();
  const multiWorld = vectorSource.getWrapX() && projection.canWrapX();
  const projectionExtent = projection.getExtent();
  const extent = frameState.extent;
  const worldWidth = multiWorld ? getWidth(projectionExtent) : null;
  const endWorld = multiWorld ? Math.ceil((extent[2] - projectionExtent[2]) / worldWidth) + 1 : 1;
  const startWorld = multiWorld ? Math.floor((extent[0] - projectionExtent[0]) / worldWidth) : 0;
  return [startWorld, endWorld, worldWidth];
}

// node_modules/ol/renderer/webgl/PointsLayer.js
var WebGLPointsLayerRenderer = class extends Layer_default4 {
  /**
   * @param {import("../../layer/Layer.js").default} layer Layer.
   * @param {Options} options Options.
   */
  constructor(layer, options) {
    const uniforms = options.uniforms || {};
    const projectionMatrixTransform = create();
    uniforms[DefaultUniform.PROJECTION_MATRIX] = projectionMatrixTransform;
    super(layer, {
      uniforms,
      postProcesses: options.postProcesses
    });
    this.sourceRevision_ = -1;
    this.verticesBuffer_ = new Buffer_default(ARRAY_BUFFER, DYNAMIC_DRAW);
    this.indicesBuffer_ = new Buffer_default(ELEMENT_ARRAY_BUFFER, DYNAMIC_DRAW);
    this.vertexShader_ = options.vertexShader;
    this.fragmentShader_ = options.fragmentShader;
    this.program_;
    this.hitDetectionEnabled_ = options.hitDetectionEnabled ?? true;
    const customAttributes = options.attributes ? options.attributes.map(function(attribute) {
      return {
        name: "a_prop_" + attribute.name,
        size: 1,
        type: AttributeType.FLOAT
      };
    }) : [];
    this.attributes = [{
      name: "a_position",
      size: 2,
      type: AttributeType.FLOAT
    }, {
      name: "a_index",
      size: 1,
      type: AttributeType.FLOAT
    }];
    if (this.hitDetectionEnabled_) {
      this.attributes.push({
        name: "a_prop_hitColor",
        size: 4,
        type: AttributeType.FLOAT
      });
      this.attributes.push({
        name: "a_featureUid",
        size: 1,
        type: AttributeType.FLOAT
      });
    }
    this.attributes.push(...customAttributes);
    this.customAttributes = options.attributes ? options.attributes : [];
    this.previousExtent_ = createEmpty();
    this.currentTransform_ = projectionMatrixTransform;
    this.renderTransform_ = create();
    this.invertRenderTransform_ = create();
    this.renderInstructions_ = new Float32Array(0);
    this.hitRenderTarget_;
    this.lastSentId = 0;
    this.worker_ = create3();
    this.worker_.addEventListener(
      "message",
      /**
       * @param {*} event Event.
       */
      (event) => {
        const received = event.data;
        if (received.type === WebGLWorkerMessageType.GENERATE_POINT_BUFFERS) {
          const projectionTransform = received.projectionTransform;
          this.verticesBuffer_.fromArrayBuffer(received.vertexBuffer);
          this.helper.flushBufferData(this.verticesBuffer_);
          this.indicesBuffer_.fromArrayBuffer(received.indexBuffer);
          this.helper.flushBufferData(this.indicesBuffer_);
          this.renderTransform_ = projectionTransform;
          makeInverse(this.invertRenderTransform_, this.renderTransform_);
          this.renderInstructions_ = new Float32Array(event.data.renderInstructions);
          if (received.id === this.lastSentId) {
            this.ready = true;
          }
          this.getLayer().changed();
        }
      }
    );
    this.featureCache_ = {};
    this.featureCount_ = 0;
    const source = this.getLayer().getSource();
    this.sourceListenKeys_ = [listen(source, VectorEventType_default.ADDFEATURE, this.handleSourceFeatureAdded_, this), listen(source, VectorEventType_default.CHANGEFEATURE, this.handleSourceFeatureChanged_, this), listen(source, VectorEventType_default.REMOVEFEATURE, this.handleSourceFeatureDelete_, this), listen(source, VectorEventType_default.CLEAR, this.handleSourceFeatureClear_, this)];
    source.forEachFeature((feature) => {
      this.featureCache_[getUid(feature)] = {
        feature,
        properties: feature.getProperties(),
        geometry: feature.getGeometry()
      };
      this.featureCount_++;
    });
  }
  /**
   * @override
   */
  afterHelperCreated() {
    this.program_ = this.helper.getProgram(this.fragmentShader_, this.vertexShader_);
    if (this.hitDetectionEnabled_) {
      this.hitRenderTarget_ = new RenderTarget_default(this.helper);
    }
    if (this.verticesBuffer_.getArray()) {
      this.helper.flushBufferData(this.verticesBuffer_);
    }
    if (this.indicesBuffer_.getArray()) {
      this.helper.flushBufferData(this.indicesBuffer_);
    }
  }
  /**
   * @param {import("../../source/Vector.js").VectorSourceEvent} event Event.
   * @private
   */
  handleSourceFeatureAdded_(event) {
    const feature = event.feature;
    this.featureCache_[getUid(feature)] = {
      feature,
      properties: feature.getProperties(),
      geometry: feature.getGeometry()
    };
    this.featureCount_++;
  }
  /**
   * @param {import("../../source/Vector.js").VectorSourceEvent} event Event.
   * @private
   */
  handleSourceFeatureChanged_(event) {
    const feature = event.feature;
    this.featureCache_[getUid(feature)] = {
      feature,
      properties: feature.getProperties(),
      geometry: feature.getGeometry()
    };
  }
  /**
   * @param {import("../../source/Vector.js").VectorSourceEvent} event Event.
   * @private
   */
  handleSourceFeatureDelete_(event) {
    const feature = event.feature;
    delete this.featureCache_[getUid(feature)];
    this.featureCount_--;
  }
  /**
   * @private
   */
  handleSourceFeatureClear_() {
    this.featureCache_ = {};
    this.featureCount_ = 0;
  }
  /**
   * Render the layer.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {HTMLElement} The rendered element.
   * @override
   */
  renderFrame(frameState) {
    const gl = this.helper.getGL();
    this.preRender(gl, frameState);
    const [startWorld, endWorld, worldWidth] = getWorldParameters(frameState, this.getLayer());
    this.renderWorlds(frameState, false, startWorld, endWorld, worldWidth);
    this.helper.finalizeDraw(frameState, this.dispatchPreComposeEvent, this.dispatchPostComposeEvent);
    if (this.hitDetectionEnabled_) {
      this.renderWorlds(frameState, true, startWorld, endWorld, worldWidth);
      this.hitRenderTarget_.clearCachedData();
    }
    this.postRender(gl, frameState);
    const canvas = this.helper.getCanvas();
    return canvas;
  }
  /**
   * Determine whether renderFrame should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   * @override
   */
  prepareFrameInternal(frameState) {
    const layer = this.getLayer();
    const vectorSource = layer.getSource();
    const viewState = frameState.viewState;
    const viewNotMoving = !frameState.viewHints[ViewHint_default.ANIMATING] && !frameState.viewHints[ViewHint_default.INTERACTING];
    const extentChanged = !equals2(this.previousExtent_, frameState.extent);
    const sourceChanged = this.sourceRevision_ < vectorSource.getRevision();
    if (sourceChanged) {
      this.sourceRevision_ = vectorSource.getRevision();
    }
    if (viewNotMoving && (extentChanged || sourceChanged)) {
      const projection = viewState.projection;
      const resolution = viewState.resolution;
      const renderBuffer = layer instanceof BaseVector_default ? layer.getRenderBuffer() : 0;
      const extent = buffer(frameState.extent, renderBuffer * resolution);
      vectorSource.loadFeatures(extent, resolution, projection);
      this.rebuildBuffers_(frameState);
      this.previousExtent_ = frameState.extent.slice();
    }
    this.helper.useProgram(this.program_, frameState);
    this.helper.prepareDraw(frameState);
    this.helper.bindBuffer(this.verticesBuffer_);
    this.helper.bindBuffer(this.indicesBuffer_);
    this.helper.enableAttributes(this.attributes);
    return true;
  }
  /**
   * Rebuild internal webgl buffers based on current view extent; costly, should not be called too much
   * @param {import("../../Map").FrameState} frameState Frame state.
   * @private
   */
  rebuildBuffers_(frameState) {
    const projectionTransform = create();
    this.helper.makeProjectionTransform(frameState, projectionTransform);
    const userProjection = getUserProjection();
    const baseInstructionLength = this.hitDetectionEnabled_ ? 7 : 2;
    const singleInstructionLength = baseInstructionLength + this.customAttributes.length;
    const totalSize = singleInstructionLength * this.featureCount_;
    if (!this.renderInstructions_ || this.renderInstructions_.length !== totalSize) {
      this.renderInstructions_ = new Float32Array(totalSize);
    }
    let featureCache, geometry;
    const tmpCoords = [];
    const tmpColor = [];
    let idx = -1;
    for (const featureUid in this.featureCache_) {
      featureCache = this.featureCache_[featureUid];
      geometry = /** @type {import("../../geom").Point} */
      featureCache.geometry;
      if (!geometry || geometry.getType() !== "Point") {
        continue;
      }
      if (userProjection) {
        const userCoords = fromUserCoordinate(geometry.getFlatCoordinates(), frameState.viewState.projection);
        tmpCoords[0] = userCoords[0];
        tmpCoords[1] = userCoords[1];
      } else {
        tmpCoords[0] = geometry.getFlatCoordinates()[0];
        tmpCoords[1] = geometry.getFlatCoordinates()[1];
      }
      apply(projectionTransform, tmpCoords);
      this.renderInstructions_[++idx] = tmpCoords[0];
      this.renderInstructions_[++idx] = tmpCoords[1];
      if (this.hitDetectionEnabled_) {
        const hitColor = colorEncodeId(idx + 5, tmpColor);
        this.renderInstructions_[++idx] = hitColor[0];
        this.renderInstructions_[++idx] = hitColor[1];
        this.renderInstructions_[++idx] = hitColor[2];
        this.renderInstructions_[++idx] = hitColor[3];
        this.renderInstructions_[++idx] = Number(featureUid);
      }
      for (let j = 0; j < this.customAttributes.length; j++) {
        const value = this.customAttributes[j].callback(featureCache.feature, featureCache.properties);
        this.renderInstructions_[++idx] = value;
      }
    }
    const message = {
      id: ++this.lastSentId,
      type: WebGLWorkerMessageType.GENERATE_POINT_BUFFERS,
      renderInstructions: this.renderInstructions_.buffer,
      customAttributesSize: singleInstructionLength - 2
    };
    message["projectionTransform"] = projectionTransform;
    this.ready = false;
    this.worker_.postMessage(message, [this.renderInstructions_.buffer]);
    this.renderInstructions_ = null;
  }
  /**
   * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {import("../vector.js").FeatureCallback<T>} callback Feature callback.
   * @param {Array<import("../Map.js").HitMatch<T>>} matches The hit detected matches with tolerance.
   * @return {T|undefined} Callback result.
   * @template T
   * @override
   */
  forEachFeatureAtCoordinate(coordinate, frameState, hitTolerance, callback, matches) {
    assert(this.hitDetectionEnabled_, "`forEachFeatureAtCoordinate` cannot be used on a WebGL layer if the hit detection logic has been disabled using the `disableHitDetection: true` option.");
    if (!this.renderInstructions_ || !this.hitDetectionEnabled_) {
      return void 0;
    }
    const pixel = apply(frameState.coordinateToPixelTransform, coordinate.slice());
    const data = this.hitRenderTarget_.readPixel(pixel[0] / 2, pixel[1] / 2);
    const color = [data[0] / 255, data[1] / 255, data[2] / 255, data[3] / 255];
    const index = colorDecodeId(color);
    const opacity = this.renderInstructions_[index];
    const uid = Math.floor(opacity).toString();
    const source = this.getLayer().getSource();
    const feature = source.getFeatureByUid(uid);
    if (feature) {
      return callback(feature, this.getLayer(), null);
    }
    return void 0;
  }
  /**
   * Render the world, either to the main framebuffer or to the hit framebuffer
   * @param {import("../../Map.js").FrameState} frameState current frame state
   * @param {boolean} forHitDetection whether the rendering is for hit detection
   * @param {number} startWorld the world to render in the first iteration
   * @param {number} endWorld the last world to render
   * @param {number} worldWidth the width of the worlds being rendered
   */
  renderWorlds(frameState, forHitDetection, startWorld, endWorld, worldWidth) {
    let world = startWorld;
    this.helper.useProgram(this.program_, frameState);
    if (forHitDetection) {
      this.hitRenderTarget_.setSize([Math.floor(frameState.size[0] / 2), Math.floor(frameState.size[1] / 2)]);
      this.helper.prepareDrawToRenderTarget(frameState, this.hitRenderTarget_, true);
    }
    this.helper.bindBuffer(this.verticesBuffer_);
    this.helper.bindBuffer(this.indicesBuffer_);
    this.helper.enableAttributes(this.attributes);
    do {
      this.helper.makeProjectionTransform(frameState, this.currentTransform_);
      translate(this.currentTransform_, world * worldWidth, 0);
      multiply(this.currentTransform_, this.invertRenderTransform_);
      this.helper.applyUniforms(frameState);
      this.helper.applyHitDetectionUniform(forHitDetection);
      const renderCount = this.indicesBuffer_.getSize();
      this.helper.drawElements(0, renderCount);
    } while (++world < endWorld);
  }
  /**
   * Clean up.
   * @override
   */
  disposeInternal() {
    this.worker_.terminate();
    this.sourceListenKeys_.forEach(function(key) {
      unlistenByKey(key);
    });
    this.sourceListenKeys_ = null;
    super.disposeInternal();
  }
  renderDeclutter() {
  }
};
var PointsLayer_default = WebGLPointsLayerRenderer;

// node_modules/ol/webgl/PaletteTexture.js
var PaletteTexture = class {
  /**
   * @param {string} name The name of the texture.
   * @param {Uint8Array} data The texture data.
   */
  constructor(name, data) {
    this.name = name;
    this.data = data;
    this.texture_ = null;
  }
  /**
   * @param {WebGLRenderingContext} gl Rendering context.
   * @return {WebGLTexture} The texture.
   */
  getTexture(gl) {
    if (!this.texture_) {
      const texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.data.length / 4, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, this.data);
      this.texture_ = texture;
    }
    return this.texture_;
  }
  /**
   * @param {WebGLRenderingContext} gl Rendering context.
   */
  delete(gl) {
    if (this.texture_) {
      gl.deleteTexture(this.texture_);
    }
    this.texture_ = null;
  }
};
var PaletteTexture_default = PaletteTexture;

// node_modules/ol/webgl/BaseTileRepresentation.js
var BaseTileRepresentation = class extends Target_default {
  /**
   * @param {TileRepresentationOptions<TileType>} options The tile representation options.
   */
  constructor(options) {
    super();
    this.tile;
    this.handleTileChange_ = this.handleTileChange_.bind(this);
    this.gutter = options.gutter || 0;
    this.helper = options.helper;
    this.loaded = false;
    this.ready = false;
  }
  /**
   * @param {TileType} tile Tile.
   */
  setTile(tile) {
    if (tile !== this.tile) {
      if (this.tile) {
        this.tile.removeEventListener(EventType_default.CHANGE, this.handleTileChange_);
      }
      this.tile = tile;
      this.loaded = tile.getState() === TileState_default.LOADED;
      if (this.loaded) {
        this.uploadTile();
      } else {
        if (tile instanceof ImageTile_default) {
          const image = tile.getImage();
          if (image instanceof Image && !image.crossOrigin) {
            image.crossOrigin = "anonymous";
          }
        }
        tile.addEventListener(EventType_default.CHANGE, this.handleTileChange_);
      }
    }
  }
  /**
   * @abstract
   * @protected
   */
  uploadTile() {
    abstract();
  }
  setReady() {
    this.ready = true;
    this.dispatchEvent(EventType_default.CHANGE);
  }
  handleTileChange_() {
    if (this.tile.getState() === TileState_default.LOADED) {
      this.loaded = true;
      this.uploadTile();
    }
  }
  /**
   * @param {import("./Helper.js").default} helper The WebGL helper.
   */
  setHelper(helper) {
    this.helper = helper;
    if (this.helper && this.loaded) {
      this.uploadTile();
    }
  }
  /**
   * @override
   */
  disposeInternal() {
    this.setHelper(null);
    this.tile.removeEventListener(EventType_default.CHANGE, this.handleTileChange_);
  }
};
var BaseTileRepresentation_default = BaseTileRepresentation;

// node_modules/ol/webgl/TileTexture.js
function bindAndConfigure(gl, texture, interpolate) {
  const resampleFilter = interpolate ? gl.LINEAR : gl.NEAREST;
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, resampleFilter);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, resampleFilter);
}
function uploadImageTexture(gl, texture, image, interpolate) {
  bindAndConfigure(gl, texture, interpolate);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
}
function uploadDataTexture(helper, texture, data, size, bandCount, interpolate) {
  const gl = helper.getGL();
  let textureType;
  let canInterpolate;
  if (data instanceof Float32Array) {
    textureType = gl.FLOAT;
    helper.getExtension("OES_texture_float");
    const extension = helper.getExtension("OES_texture_float_linear");
    canInterpolate = extension !== null;
  } else {
    textureType = gl.UNSIGNED_BYTE;
    canInterpolate = true;
  }
  bindAndConfigure(gl, texture, interpolate && canInterpolate);
  const bytesPerRow = data.byteLength / size[1];
  let unpackAlignment = 1;
  if (bytesPerRow % 8 === 0) {
    unpackAlignment = 8;
  } else if (bytesPerRow % 4 === 0) {
    unpackAlignment = 4;
  } else if (bytesPerRow % 2 === 0) {
    unpackAlignment = 2;
  }
  let format;
  switch (bandCount) {
    case 1: {
      format = gl.LUMINANCE;
      break;
    }
    case 2: {
      format = gl.LUMINANCE_ALPHA;
      break;
    }
    case 3: {
      format = gl.RGB;
      break;
    }
    case 4: {
      format = gl.RGBA;
      break;
    }
    default: {
      throw new Error(`Unsupported number of bands: ${bandCount}`);
    }
  }
  const oldUnpackAlignment = gl.getParameter(gl.UNPACK_ALIGNMENT);
  gl.pixelStorei(gl.UNPACK_ALIGNMENT, unpackAlignment);
  gl.texImage2D(gl.TEXTURE_2D, 0, format, size[0], size[1], 0, format, textureType, data);
  gl.pixelStorei(gl.UNPACK_ALIGNMENT, oldUnpackAlignment);
}
var pixelContext = null;
function createPixelContext() {
  pixelContext = createCanvasContext2D(1, 1, void 0, {
    willReadFrequently: true
  });
}
var TileTexture = class extends BaseTileRepresentation_default {
  /**
   * @param {import("./BaseTileRepresentation.js").TileRepresentationOptions<TileType>} options The tile texture options.
   */
  constructor(options) {
    super(options);
    this.textures = [];
    this.renderSize_ = toSize(options.grid.getTileSize(options.tile.tileCoord[0]));
    this.bandCount = NaN;
    const coords = new Buffer_default(ARRAY_BUFFER, STATIC_DRAW);
    coords.fromArray([
      0,
      // P0
      1,
      1,
      // P1
      1,
      1,
      // P2
      0,
      0,
      // P3
      0
    ]);
    this.helper.flushBufferData(coords);
    this.coords = coords;
    this.setTile(options.tile);
  }
  /**
   * @override
   * @param {import("./Helper.js").default} helper The WebGL helper.
   */
  setHelper(helper) {
    const gl = this.helper?.getGL();
    if (gl) {
      this.helper.deleteBuffer(this.coords);
      for (let i = 0; i < this.textures.length; ++i) {
        gl.deleteTexture(this.textures[i]);
      }
    }
    super.setHelper(helper);
    if (helper) {
      helper.flushBufferData(this.coords);
    }
  }
  /**
   * @override
   */
  uploadTile() {
    const helper = this.helper;
    const gl = helper.getGL();
    const tile = this.tile;
    this.textures.length = 0;
    let data;
    if (tile instanceof ImageTile_default || tile instanceof Tile_default) {
      data = tile.getImage();
    } else {
      data = tile.getData();
    }
    const image = asImageLike(data);
    if (image) {
      const texture = gl.createTexture();
      this.textures.push(texture);
      this.bandCount = 4;
      uploadImageTexture(gl, texture, image, tile.interpolate);
      this.setReady();
      return;
    }
    data = asArrayLike(data);
    const sourceTileSize = (
      /** @type {DataTile} */
      tile.getSize()
    );
    const pixelSize = [sourceTileSize[0] + 2 * this.gutter, sourceTileSize[1] + 2 * this.gutter];
    const isFloat = data instanceof Float32Array;
    const pixelCount = pixelSize[0] * pixelSize[1];
    const DataType = isFloat ? Float32Array : Uint8Array;
    const bytesPerElement = DataType.BYTES_PER_ELEMENT;
    const bytesPerRow = data.byteLength / pixelSize[1];
    this.bandCount = Math.floor(bytesPerRow / bytesPerElement / pixelSize[0]);
    const textureCount = Math.ceil(this.bandCount / 4);
    if (textureCount === 1) {
      const texture = gl.createTexture();
      this.textures.push(texture);
      uploadDataTexture(helper, texture, data, pixelSize, this.bandCount, tile.interpolate);
      this.setReady();
      return;
    }
    const textureDataArrays = new Array(textureCount);
    for (let textureIndex = 0; textureIndex < textureCount; ++textureIndex) {
      const texture = gl.createTexture();
      this.textures.push(texture);
      const bandCount = textureIndex < textureCount - 1 ? 4 : (this.bandCount - 1) % 4 + 1;
      textureDataArrays[textureIndex] = new DataType(pixelCount * bandCount);
    }
    let dataIndex = 0;
    let rowOffset = 0;
    const colCount = pixelSize[0] * this.bandCount;
    for (let rowIndex = 0; rowIndex < pixelSize[1]; ++rowIndex) {
      for (let colIndex = 0; colIndex < colCount; ++colIndex) {
        const dataValue = data[rowOffset + colIndex];
        const pixelIndex = Math.floor(dataIndex / this.bandCount);
        const bandIndex = colIndex % this.bandCount;
        const textureIndex = Math.floor(bandIndex / 4);
        const textureData = textureDataArrays[textureIndex];
        const bandCount = textureData.length / pixelCount;
        const textureBandIndex = bandIndex % 4;
        textureData[pixelIndex * bandCount + textureBandIndex] = dataValue;
        ++dataIndex;
      }
      rowOffset += bytesPerRow / bytesPerElement;
    }
    for (let textureIndex = 0; textureIndex < textureCount; ++textureIndex) {
      const texture = this.textures[textureIndex];
      const textureData = textureDataArrays[textureIndex];
      const bandCount = textureData.length / pixelCount;
      uploadDataTexture(helper, texture, textureData, pixelSize, bandCount, tile.interpolate);
    }
    this.setReady();
  }
  /**
   * @param {import("../DataTile.js").ImageLike} image The image.
   * @param {number} renderCol The column index (in rendered tile space).
   * @param {number} renderRow The row index (in rendered tile space).
   * @return {Uint8ClampedArray|null} The data.
   * @private
   */
  getImagePixelData_(image, renderCol, renderRow) {
    const gutter = this.gutter;
    const renderWidth = this.renderSize_[0];
    const renderHeight = this.renderSize_[1];
    if (!pixelContext) {
      createPixelContext();
    }
    pixelContext.clearRect(0, 0, 1, 1);
    const sourceWidth = image.width;
    const sourceHeight = image.height;
    const sourceWidthWithoutGutter = sourceWidth - 2 * gutter;
    const sourceHeightWithoutGutter = sourceHeight - 2 * gutter;
    const sourceCol = gutter + Math.floor(sourceWidthWithoutGutter * (renderCol / renderWidth));
    const sourceRow = gutter + Math.floor(sourceHeightWithoutGutter * (renderRow / renderHeight));
    let data;
    try {
      pixelContext.drawImage(image, sourceCol, sourceRow, 1, 1, 0, 0, 1, 1);
      data = pixelContext.getImageData(0, 0, 1, 1).data;
    } catch (err) {
      pixelContext = null;
      return null;
    }
    return data;
  }
  /**
   * @param {import("../DataTile.js").ArrayLike} data The data.
   * @param {import("../size.js").Size} sourceSize The size.
   * @param {number} renderCol The column index (in rendered tile space).
   * @param {number} renderRow The row index (in rendered tile space).
   * @return {import("../DataTile.js").ArrayLike|null} The data.
   * @private
   */
  getArrayPixelData_(data, sourceSize, renderCol, renderRow) {
    const gutter = this.gutter;
    const renderWidth = this.renderSize_[0];
    const renderHeight = this.renderSize_[1];
    const sourceWidthWithoutGutter = sourceSize[0];
    const sourceHeightWithoutGutter = sourceSize[1];
    const sourceWidth = sourceWidthWithoutGutter + 2 * gutter;
    const sourceHeight = sourceHeightWithoutGutter + 2 * gutter;
    const sourceCol = gutter + Math.floor(sourceWidthWithoutGutter * (renderCol / renderWidth));
    const sourceRow = gutter + Math.floor(sourceHeightWithoutGutter * (renderRow / renderHeight));
    if (data instanceof DataView) {
      const bytesPerPixel = data.byteLength / (sourceWidth * sourceHeight);
      const offset2 = bytesPerPixel * (sourceRow * sourceWidth + sourceCol);
      const buffer2 = data.buffer.slice(offset2, offset2 + bytesPerPixel);
      return new DataView(buffer2);
    }
    const offset = this.bandCount * (sourceRow * sourceWidth + sourceCol);
    return data.slice(offset, offset + this.bandCount);
  }
  /**
   * Get data for a pixel.  If the tile is not loaded, null is returned.
   * @param {number} renderCol The column index (in rendered tile space).
   * @param {number} renderRow The row index (in rendered tile space).
   * @return {import("../DataTile.js").ArrayLike|null} The data.
   */
  getPixelData(renderCol, renderRow) {
    if (!this.loaded) {
      return null;
    }
    if (this.tile instanceof DataTile_default) {
      const data = this.tile.getData();
      const arrayData = asArrayLike(data);
      if (arrayData) {
        const sourceSize = this.tile.getSize();
        return this.getArrayPixelData_(arrayData, sourceSize, renderCol, renderRow);
      }
      return this.getImagePixelData_(asImageLike(data), renderCol, renderRow);
    }
    return this.getImagePixelData_(this.tile.getImage(), renderCol, renderRow);
  }
};
var TileTexture_default = TileTexture;

// node_modules/ol/renderer/webgl/TileLayerBase.js
var Uniforms = {
  TILE_TRANSFORM: "u_tileTransform",
  TRANSITION_ALPHA: "u_transitionAlpha",
  DEPTH: "u_depth",
  RENDER_EXTENT: "u_renderExtent",
  // intersection of layer, source, and view extent
  PATTERN_ORIGIN: "u_patternOrigin",
  RESOLUTION: "u_resolution",
  ZOOM: "u_zoom",
  GLOBAL_ALPHA: "u_globalAlpha",
  PROJECTION_MATRIX: "u_projectionMatrix",
  SCREEN_TO_WORLD_MATRIX: "u_screenToWorldMatrix"
};
var empty = {};
function depthForZ(z) {
  return 1 / (z + 2);
}
function newTileRepresentationLookup() {
  return {
    tileIds: /* @__PURE__ */ new Set(),
    representationsByZ: {}
  };
}
function lookupHasTile(tileRepresentationLookup, tile) {
  return tileRepresentationLookup.tileIds.has(getUid(tile));
}
function addTileRepresentationToLookup(tileRepresentationLookup, tileRepresentation, z) {
  const representationsByZ = tileRepresentationLookup.representationsByZ;
  if (!(z in representationsByZ)) {
    representationsByZ[z] = /* @__PURE__ */ new Set();
  }
  representationsByZ[z].add(tileRepresentation);
  tileRepresentationLookup.tileIds.add(getUid(tileRepresentation.tile));
}
function getRenderExtent(frameState, extent) {
  const layerState = frameState.layerStatesArray[frameState.layerIndex];
  if (layerState.extent) {
    extent = getIntersection(extent, fromUserExtent(layerState.extent, frameState.viewState.projection));
  }
  const source = (
    /** @type {import("../../source/Tile.js").default} */
    layerState.layer.getRenderSource()
  );
  if (!source.getWrapX()) {
    const gridExtent = source.getTileGridForProjection(frameState.viewState.projection).getExtent();
    if (gridExtent) {
      extent = getIntersection(extent, gridExtent);
    }
  }
  return extent;
}
function getCacheKey(source, tileCoord) {
  return `${source.getKey()},${getKey(tileCoord)}`;
}
var WebGLBaseTileLayerRenderer = class extends Layer_default4 {
  /**
   * @param {LayerType} tileLayer Tile layer.
   * @param {Options} options Options.
   */
  constructor(tileLayer, options) {
    super(tileLayer, {
      uniforms: options.uniforms,
      postProcesses: options.postProcesses
    });
    this.renderComplete = false;
    this.tileTransform_ = create();
    this.tempMat4 = create2();
    this.tempTileRange_ = new TileRange_default(0, 0, 0, 0);
    this.tempTileCoord_ = createOrUpdate2(0, 0, 0);
    this.tempSize_ = [0, 0];
    const cacheSize = options.cacheSize !== void 0 ? options.cacheSize : 512;
    this.tileRepresentationCache = new LRUCache_default(cacheSize);
    this.frameState = null;
    this.projection_ = void 0;
  }
  /**
   * @param {Options} options Options.
   * @override
   */
  reset(options) {
    super.reset({
      uniforms: options.uniforms
    });
  }
  /**
   * Determine whether renderFrame should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   * @override
   */
  prepareFrameInternal(frameState) {
    if (!this.projection_) {
      this.projection_ = frameState.viewState.projection;
    } else if (frameState.viewState.projection !== this.projection_) {
      this.clearCache();
      this.projection_ = frameState.viewState.projection;
    }
    const layer = this.getLayer();
    const source = layer.getRenderSource();
    if (!source) {
      return false;
    }
    if (isEmpty2(getRenderExtent(frameState, frameState.extent))) {
      return false;
    }
    return source.getState() === "ready";
  }
  /**
   * @abstract
   * @param {import("../../webgl/BaseTileRepresentation.js").TileRepresentationOptions<TileType>} options tile representation options
   * @return {TileRepresentation} A new tile representation
   * @protected
   */
  createTileRepresentation(options) {
    return abstract();
  }
  /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {import("../../extent.js").Extent} extent The extent to be rendered.
   * @param {number} initialZ The zoom level.
   * @param {TileRepresentationLookup} tileRepresentationLookup The zoom level.
   * @param {number} preload Number of additional levels to load.
   */
  enqueueTiles(frameState, extent, initialZ, tileRepresentationLookup, preload) {
    const viewState = frameState.viewState;
    const tileLayer = this.getLayer();
    const tileSource = tileLayer.getRenderSource();
    const tileGrid = tileSource.getTileGridForProjection(viewState.projection);
    const gutter = tileSource.getGutterForProjection(viewState.projection);
    const tileSourceKey = getUid(tileSource);
    if (!(tileSourceKey in frameState.wantedTiles)) {
      frameState.wantedTiles[tileSourceKey] = {};
    }
    const wantedTiles = frameState.wantedTiles[tileSourceKey];
    const tileRepresentationCache = this.tileRepresentationCache;
    const map = tileLayer.getMapInternal();
    const minZ = Math.max(initialZ - preload, tileGrid.getMinZoom(), tileGrid.getZForResolution(Math.min(tileLayer.getMaxResolution(), map ? map.getView().getResolutionForZoom(Math.max(tileLayer.getMinZoom(), 0)) : tileGrid.getResolution(0)), tileSource.zDirection));
    for (let z = initialZ; z >= minZ; --z) {
      const tileRange = tileGrid.getTileRangeForExtentAndZ(extent, z, this.tempTileRange_);
      const tileResolution = tileGrid.getResolution(z);
      for (let x = tileRange.minX; x <= tileRange.maxX; ++x) {
        for (let y = tileRange.minY; y <= tileRange.maxY; ++y) {
          const tileCoord = createOrUpdate2(z, x, y, this.tempTileCoord_);
          const cacheKey = getCacheKey(tileSource, tileCoord);
          let tileRepresentation;
          let tile;
          if (tileRepresentationCache.containsKey(cacheKey)) {
            tileRepresentation = tileRepresentationCache.get(cacheKey);
            tile = tileRepresentation.tile;
          }
          if (!tileRepresentation || tileRepresentation.tile.key !== tileSource.getKey()) {
            tile = tileSource.getTile(z, x, y, frameState.pixelRatio, viewState.projection);
            if (!tile) {
              continue;
            }
          }
          if (lookupHasTile(tileRepresentationLookup, tile)) {
            continue;
          }
          if (!tileRepresentation) {
            tileRepresentation = this.createTileRepresentation({
              tile,
              grid: tileGrid,
              helper: this.helper,
              gutter
            });
            tileRepresentationCache.set(cacheKey, tileRepresentation);
          } else {
            tileRepresentation.setTile(tile);
          }
          addTileRepresentationToLookup(tileRepresentationLookup, tileRepresentation, z);
          const tileQueueKey = tile.getKey();
          wantedTiles[tileQueueKey] = true;
          if (tile.getState() === TileState_default.IDLE) {
            if (!frameState.tileQueue.isKeyQueued(tileQueueKey)) {
              frameState.tileQueue.enqueue([tile, tileSourceKey, tileGrid.getTileCoordCenter(tileCoord), tileResolution]);
            }
          }
        }
      }
    }
  }
  /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {boolean} tilesWithAlpha True if at least one of the rendered tiles has alpha
   * @protected
   */
  beforeTilesRender(frameState, tilesWithAlpha) {
    this.helper.prepareDraw(this.frameState, !tilesWithAlpha, true);
  }
  /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} If returns false, tile mask rendering will be skipped
   * @protected
   */
  beforeTilesMaskRender(frameState) {
    return false;
  }
  /**
   * @param {TileRepresentation} tileRepresentation Tile representation
   * @param {import("../../transform.js").Transform} tileTransform Tile transform
   * @param {import("../../Map.js").FrameState} frameState Frame state
   * @param {import("../../extent.js").Extent} renderExtent Render extent
   * @param {number} tileResolution Tile resolution
   * @param {import("../../size.js").Size} tileSize Tile size
   * @param {import("../../coordinate.js").Coordinate} tileOrigin Tile origin
   * @param {import("../../extent.js").Extent} tileExtent tile Extent
   * @param {number} depth Depth
   * @param {number} gutter Gutter
   * @param {number} alpha Alpha
   * @protected
   */
  renderTile(tileRepresentation, tileTransform, frameState, renderExtent, tileResolution, tileSize, tileOrigin, tileExtent, depth, gutter, alpha) {
  }
  /**
   * @param {TileRepresentation} tileRepresentation Tile representation
   * @param {number} tileZ Tile Z
   * @param {import("../../extent.js").Extent} extent Render extent
   * @param {number} depth Depth
   * @protected
   */
  renderTileMask(tileRepresentation, tileZ, extent, depth) {
  }
  drawTile_(frameState, tileRepresentation, tileZ, gutter, extent, alphaLookup, tileGrid) {
    if (!tileRepresentation.ready) {
      return;
    }
    const tile = tileRepresentation.tile;
    const tileCoord = tile.tileCoord;
    const tileCoordKey = getKey(tileCoord);
    const alpha = tileCoordKey in alphaLookup ? alphaLookup[tileCoordKey] : 1;
    const tileResolution = tileGrid.getResolution(tileZ);
    const tileSize = toSize(tileGrid.getTileSize(tileZ), this.tempSize_);
    const tileOrigin = tileGrid.getOrigin(tileZ);
    const tileExtent = tileGrid.getTileCoordExtent(tileCoord);
    const depth = alpha < 1 ? -1 : depthForZ(tileZ);
    if (alpha < 1) {
      frameState.animate = true;
    }
    const viewState = frameState.viewState;
    const centerX = viewState.center[0];
    const centerY = viewState.center[1];
    const tileWidthWithGutter = tileSize[0] + 2 * gutter;
    const tileHeightWithGutter = tileSize[1] + 2 * gutter;
    const aspectRatio = tileWidthWithGutter / tileHeightWithGutter;
    const centerI = (centerX - tileOrigin[0]) / (tileSize[0] * tileResolution);
    const centerJ = (tileOrigin[1] - centerY) / (tileSize[1] * tileResolution);
    const tileScale = viewState.resolution / tileResolution;
    const tileCenterI = tileCoord[1];
    const tileCenterJ = tileCoord[2];
    reset(this.tileTransform_);
    scale(this.tileTransform_, 2 / (frameState.size[0] * tileScale / tileWidthWithGutter), -2 / (frameState.size[1] * tileScale / tileWidthWithGutter));
    rotate(this.tileTransform_, viewState.rotation);
    scale(this.tileTransform_, 1, 1 / aspectRatio);
    translate(this.tileTransform_, (tileSize[0] * (tileCenterI - centerI) - gutter) / tileWidthWithGutter, (tileSize[1] * (tileCenterJ - centerJ) - gutter) / tileHeightWithGutter);
    this.renderTile(
      /** @type {TileRepresentation} */
      tileRepresentation,
      this.tileTransform_,
      frameState,
      extent,
      tileResolution,
      tileSize,
      tileOrigin,
      tileExtent,
      depth,
      gutter,
      alpha
    );
  }
  /**
   * Render the layer.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {HTMLElement} The rendered element.
   * @override
   */
  renderFrame(frameState) {
    this.frameState = frameState;
    this.renderComplete = true;
    const gl = this.helper.getGL();
    this.preRender(gl, frameState);
    const viewState = frameState.viewState;
    const tileLayer = this.getLayer();
    const tileSource = tileLayer.getRenderSource();
    const tileGrid = tileSource.getTileGridForProjection(viewState.projection);
    const gutter = tileSource.getGutterForProjection(viewState.projection);
    const extent = getRenderExtent(frameState, frameState.extent);
    const z = tileGrid.getZForResolution(viewState.resolution, tileSource.zDirection);
    const tileRepresentationLookup = newTileRepresentationLookup();
    const preload = tileLayer.getPreload();
    if (frameState.nextExtent) {
      const targetZ = tileGrid.getZForResolution(viewState.nextResolution, tileSource.zDirection);
      const nextExtent = getRenderExtent(frameState, frameState.nextExtent);
      this.enqueueTiles(frameState, nextExtent, targetZ, tileRepresentationLookup, preload);
    }
    this.enqueueTiles(frameState, extent, z, tileRepresentationLookup, 0);
    if (preload > 0) {
      setTimeout(() => {
        this.enqueueTiles(frameState, extent, z - 1, tileRepresentationLookup, preload - 1);
      }, 0);
    }
    const alphaLookup = {};
    const uid = getUid(this);
    const time = frameState.time;
    let blend = false;
    const representationsByZ = tileRepresentationLookup.representationsByZ;
    if (z in representationsByZ) {
      for (const tileRepresentation of representationsByZ[z]) {
        const tile = tileRepresentation.tile;
        if ((tile instanceof Tile_default || tile instanceof DataTile_default2) && tile.getState() === TileState_default.EMPTY) {
          continue;
        }
        const tileCoord = tile.tileCoord;
        if (tileRepresentation.ready) {
          const alpha = tile.getAlpha(uid, time);
          if (alpha === 1) {
            tile.endTransition(uid);
            continue;
          }
          blend = true;
          const tileCoordKey = getKey(tileCoord);
          alphaLookup[tileCoordKey] = alpha;
        }
        this.renderComplete = false;
        const coveredByChildren = this.findAltTiles_(tileGrid, tileCoord, z + 1, tileRepresentationLookup);
        if (coveredByChildren) {
          continue;
        }
        const minZoom = tileGrid.getMinZoom();
        for (let parentZ = z - 1; parentZ >= minZoom; --parentZ) {
          const coveredByParent = this.findAltTiles_(tileGrid, tileCoord, parentZ, tileRepresentationLookup);
          if (coveredByParent) {
            break;
          }
        }
      }
    }
    const zs = Object.keys(representationsByZ).map(Number).sort(descending);
    const renderTileMask = this.beforeTilesMaskRender(frameState);
    if (renderTileMask) {
      for (let j = 0, jj = zs.length; j < jj; ++j) {
        const tileZ = zs[j];
        for (const tileRepresentation of representationsByZ[tileZ]) {
          const tileCoord = tileRepresentation.tile.tileCoord;
          const tileCoordKey = getKey(tileCoord);
          if (tileCoordKey in alphaLookup) {
            continue;
          }
          const tileExtent = tileGrid.getTileCoordExtent(tileCoord);
          this.renderTileMask(
            /** @type {TileRepresentation} */
            tileRepresentation,
            tileZ,
            tileExtent,
            depthForZ(tileZ)
          );
        }
      }
    }
    this.beforeTilesRender(frameState, blend);
    for (let j = 0, jj = zs.length; j < jj; ++j) {
      const tileZ = zs[j];
      for (const tileRepresentation of representationsByZ[tileZ]) {
        const tileCoord = tileRepresentation.tile.tileCoord;
        const tileCoordKey = getKey(tileCoord);
        if (tileCoordKey in alphaLookup) {
          continue;
        }
        this.drawTile_(frameState, tileRepresentation, tileZ, gutter, extent, alphaLookup, tileGrid);
      }
    }
    if (z in representationsByZ) {
      for (const tileRepresentation of representationsByZ[z]) {
        const tileCoord = tileRepresentation.tile.tileCoord;
        const tileCoordKey = getKey(tileCoord);
        if (tileCoordKey in alphaLookup) {
          this.drawTile_(frameState, tileRepresentation, z, gutter, extent, alphaLookup, tileGrid);
        }
      }
    }
    this.helper.finalizeDraw(frameState, this.dispatchPreComposeEvent, this.dispatchPostComposeEvent);
    const canvas = this.helper.getCanvas();
    const tileRepresentationCache = this.tileRepresentationCache;
    while (tileRepresentationCache.canExpireCache()) {
      const tileRepresentation = tileRepresentationCache.pop();
      tileRepresentation.dispose();
    }
    const postRenderFunction = function(map, frameState2) {
      tileSource.expireCache(frameState2.viewState.projection, empty);
    };
    frameState.postRenderFunctions.push(postRenderFunction);
    this.postRender(gl, frameState);
    return canvas;
  }
  /**
   * Look for tiles covering the provided tile coordinate at an alternate
   * zoom level.  Loaded tiles will be added to the provided tile representation lookup.
   * @param {import("../../tilegrid/TileGrid.js").default} tileGrid The tile grid.
   * @param {import("../../tilecoord.js").TileCoord} tileCoord The target tile coordinate.
   * @param {number} altZ The alternate zoom level.
   * @param {TileRepresentationLookup} tileRepresentationLookup Lookup of
   * tile representations by zoom level.
   * @return {boolean} The tile coordinate is covered by loaded tiles at the alternate zoom level.
   * @private
   */
  findAltTiles_(tileGrid, tileCoord, altZ, tileRepresentationLookup) {
    const tileRange = tileGrid.getTileRangeForTileCoordAndZ(tileCoord, altZ, this.tempTileRange_);
    if (!tileRange) {
      return false;
    }
    let covered = true;
    const tileRepresentationCache = this.tileRepresentationCache;
    const source = this.getLayer().getRenderSource();
    for (let x = tileRange.minX; x <= tileRange.maxX; ++x) {
      for (let y = tileRange.minY; y <= tileRange.maxY; ++y) {
        const cacheKey = getCacheKey(source, [altZ, x, y]);
        let loaded = false;
        if (tileRepresentationCache.containsKey(cacheKey)) {
          const tileRepresentation = tileRepresentationCache.get(cacheKey);
          if (tileRepresentation.ready && !lookupHasTile(tileRepresentationLookup, tileRepresentation.tile)) {
            addTileRepresentationToLookup(tileRepresentationLookup, tileRepresentation, altZ);
            loaded = true;
          }
        }
        if (!loaded) {
          covered = false;
        }
      }
    }
    return covered;
  }
  /**
   * @override
   */
  clearCache() {
    super.clearCache();
    const tileRepresentationCache = this.tileRepresentationCache;
    tileRepresentationCache.forEach((tileRepresentation) => tileRepresentation.dispose());
    tileRepresentationCache.clear();
  }
  /**
   * @override
   */
  afterHelperCreated() {
    super.afterHelperCreated();
    this.tileRepresentationCache.forEach((tileRepresentation) => tileRepresentation.setHelper(this.helper));
  }
  /**
   * Clean up.
   * @override
   */
  disposeInternal() {
    super.disposeInternal();
    delete this.frameState;
  }
};
var TileLayerBase_default = WebGLBaseTileLayerRenderer;

// node_modules/ol/renderer/webgl/TileLayer.js
var Uniforms2 = __spreadProps(__spreadValues({}, Uniforms), {
  TILE_TEXTURE_ARRAY: "u_tileTextures",
  TEXTURE_PIXEL_WIDTH: "u_texturePixelWidth",
  TEXTURE_PIXEL_HEIGHT: "u_texturePixelHeight",
  TEXTURE_RESOLUTION: "u_textureResolution",
  // map units per texture pixel
  TEXTURE_ORIGIN_X: "u_textureOriginX",
  // map x coordinate of left edge of texture
  TEXTURE_ORIGIN_Y: "u_textureOriginY"
  // map y coordinate of top edge of texture
});
var Attributes = {
  TEXTURE_COORD: "a_textureCoord"
};
var attributeDescriptions = [{
  name: Attributes.TEXTURE_COORD,
  size: 2,
  type: AttributeType.FLOAT
}];
var WebGLTileLayerRenderer = class extends TileLayerBase_default {
  /**
   * @param {LayerType} tileLayer Tile layer.
   * @param {Options} options Options.
   */
  constructor(tileLayer, options) {
    super(tileLayer, options);
    this.program_;
    this.vertexShader_ = options.vertexShader;
    this.fragmentShader_ = options.fragmentShader;
    this.indices_ = new Buffer_default(ELEMENT_ARRAY_BUFFER, STATIC_DRAW);
    this.indices_.fromArray([0, 1, 3, 1, 2, 3]);
    this.paletteTextures_ = options.paletteTextures || [];
  }
  /**
   * @param {Options} options Options.
   * @override
   */
  reset(options) {
    super.reset(options);
    if (this.helper) {
      const gl = this.helper.getGL();
      for (const paletteTexture of this.paletteTextures_) {
        paletteTexture.delete(gl);
      }
    }
    this.vertexShader_ = options.vertexShader;
    this.fragmentShader_ = options.fragmentShader;
    this.paletteTextures_ = options.paletteTextures || [];
    if (this.helper) {
      this.program_ = this.helper.getProgram(this.fragmentShader_, this.vertexShader_);
    }
  }
  /**
   * @override
   */
  afterHelperCreated() {
    super.afterHelperCreated();
    this.program_ = this.helper.getProgram(this.fragmentShader_, this.vertexShader_);
    this.helper.flushBufferData(this.indices_);
  }
  /**
   * @override
   */
  removeHelper() {
    if (this.helper) {
      const gl = this.helper.getGL();
      for (const paletteTexture of this.paletteTextures_) {
        paletteTexture.delete(gl);
      }
    }
    super.removeHelper();
  }
  /**
   * @override
   */
  createTileRepresentation(options) {
    return new TileTexture_default(options);
  }
  /**
   * @override
   */
  beforeTilesRender(frameState, tilesWithAlpha) {
    super.beforeTilesRender(frameState, tilesWithAlpha);
    this.helper.useProgram(this.program_, frameState);
  }
  /**
   * @override
   */
  renderTile(tileTexture, tileTransform, frameState, renderExtent, tileResolution, tileSize, tileOrigin, tileExtent, depth, gutter, alpha) {
    const gl = this.helper.getGL();
    this.helper.bindBuffer(tileTexture.coords);
    this.helper.bindBuffer(this.indices_);
    this.helper.enableAttributes(attributeDescriptions);
    let textureSlot = 0;
    while (textureSlot < tileTexture.textures.length) {
      const uniformName = `${Uniforms2.TILE_TEXTURE_ARRAY}[${textureSlot}]`;
      this.helper.bindTexture(tileTexture.textures[textureSlot], textureSlot, uniformName);
      ++textureSlot;
    }
    for (let paletteIndex = 0; paletteIndex < this.paletteTextures_.length; ++paletteIndex) {
      const paletteTexture = this.paletteTextures_[paletteIndex];
      const texture = paletteTexture.getTexture(gl);
      this.helper.bindTexture(texture, textureSlot, paletteTexture.name);
      ++textureSlot;
    }
    const viewState = frameState.viewState;
    const tileWidthWithGutter = tileSize[0] + 2 * gutter;
    const tileHeightWithGutter = tileSize[1] + 2 * gutter;
    const tile = tileTexture.tile;
    const tileCoord = tile.tileCoord;
    const tileCenterI = tileCoord[1];
    const tileCenterJ = tileCoord[2];
    this.helper.setUniformMatrixValue(Uniforms2.TILE_TRANSFORM, fromTransform(this.tempMat4, tileTransform));
    this.helper.setUniformFloatValue(Uniforms2.TRANSITION_ALPHA, alpha);
    this.helper.setUniformFloatValue(Uniforms2.DEPTH, depth);
    let gutterExtent = renderExtent;
    if (gutter > 0) {
      gutterExtent = tileExtent;
      getIntersection(gutterExtent, renderExtent, gutterExtent);
    }
    this.helper.setUniformFloatVec4(Uniforms2.RENDER_EXTENT, gutterExtent);
    this.helper.setUniformFloatValue(Uniforms2.RESOLUTION, viewState.resolution);
    this.helper.setUniformFloatValue(Uniforms2.ZOOM, viewState.zoom);
    this.helper.setUniformFloatValue(Uniforms2.TEXTURE_PIXEL_WIDTH, tileWidthWithGutter);
    this.helper.setUniformFloatValue(Uniforms2.TEXTURE_PIXEL_HEIGHT, tileHeightWithGutter);
    this.helper.setUniformFloatValue(Uniforms2.TEXTURE_RESOLUTION, tileResolution);
    this.helper.setUniformFloatValue(Uniforms2.TEXTURE_ORIGIN_X, tileOrigin[0] + tileCenterI * tileSize[0] * tileResolution - gutter * tileResolution);
    this.helper.setUniformFloatValue(Uniforms2.TEXTURE_ORIGIN_Y, tileOrigin[1] - tileCenterJ * tileSize[1] * tileResolution + gutter * tileResolution);
    this.helper.drawElements(0, this.indices_.getSize());
  }
  /**
   * @param {import("../../pixel.js").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView} Data at the pixel location.
   * @override
   */
  getData(pixel) {
    const gl = this.helper.getGL();
    if (!gl) {
      return null;
    }
    const frameState = this.frameState;
    if (!frameState) {
      return null;
    }
    const layer = this.getLayer();
    const coordinate = apply(frameState.pixelToCoordinateTransform, pixel.slice());
    const viewState = frameState.viewState;
    const layerExtent = layer.getExtent();
    if (layerExtent) {
      if (!containsCoordinate(fromUserExtent(layerExtent, viewState.projection), coordinate)) {
        return null;
      }
    }
    const sources = layer.getSources(boundingExtent([coordinate]), viewState.resolution);
    let i, source, tileGrid;
    for (i = sources.length - 1; i >= 0; --i) {
      source = sources[i];
      if (source.getState() === "ready") {
        tileGrid = source.getTileGridForProjection(viewState.projection);
        if (source.getWrapX()) {
          break;
        }
        const gridExtent = tileGrid.getExtent();
        if (!gridExtent || containsCoordinate(gridExtent, coordinate)) {
          break;
        }
      }
    }
    if (i < 0) {
      return null;
    }
    const tileTextureCache = this.tileRepresentationCache;
    for (let z = tileGrid.getZForResolution(viewState.resolution); z >= tileGrid.getMinZoom(); --z) {
      const tileCoord = tileGrid.getTileCoordForCoordAndZ(coordinate, z);
      const cacheKey = getCacheKey(source, tileCoord);
      if (!tileTextureCache.containsKey(cacheKey)) {
        continue;
      }
      const tileTexture = tileTextureCache.get(cacheKey);
      const tile = tileTexture.tile;
      if ((tile instanceof Tile_default || tile instanceof DataTile_default2) && tile.getState() === TileState_default.EMPTY) {
        return null;
      }
      if (!tileTexture.loaded) {
        continue;
      }
      const tileOrigin = tileGrid.getOrigin(z);
      const tileSize = toSize(tileGrid.getTileSize(z));
      const tileResolution = tileGrid.getResolution(z);
      const col = (coordinate[0] - tileOrigin[0]) / tileResolution - tileCoord[1] * tileSize[0];
      const row = (tileOrigin[1] - coordinate[1]) / tileResolution - tileCoord[2] * tileSize[1];
      return tileTexture.getPixelData(col, row);
    }
    return null;
  }
  /**
   * Clean up.
   * @override
   */
  disposeInternal() {
    const helper = this.helper;
    if (helper) {
      const gl = helper.getGL();
      for (const paletteTexture of this.paletteTextures_) {
        paletteTexture.delete(gl);
      }
      this.paletteTextures_.length = 0;
      gl.deleteProgram(this.program_);
      delete this.program_;
      helper.deleteBuffer(this.indices_);
    }
    super.disposeInternal();
    delete this.indices_;
  }
};
var TileLayer_default2 = WebGLTileLayerRenderer;

// node_modules/ol/expr/gpu.js
function computeOperatorFunctionName(operator, context) {
  return `operator_${operator}_${Object.keys(context.functions).length}`;
}
function numberToGlsl(v) {
  const s = v.toString();
  return s.includes(".") ? s : s + ".0";
}
function arrayToGlsl(array) {
  if (array.length < 2 || array.length > 4) {
    throw new Error("`formatArray` can only output `vec2`, `vec3` or `vec4` arrays.");
  }
  return `vec${array.length}(${array.map(numberToGlsl).join(", ")})`;
}
function colorToGlsl(color) {
  const array = asArray(color);
  const alpha = array.length > 3 ? array[3] : 1;
  return arrayToGlsl([array[0] / 255, array[1] / 255, array[2] / 255, alpha]);
}
function sizeToGlsl(size) {
  const array = toSize(size);
  return arrayToGlsl(array);
}
var stringToFloatMap = {};
var stringToFloatCounter = 0;
function getStringNumberEquivalent(string) {
  if (!(string in stringToFloatMap)) {
    stringToFloatMap[string] = stringToFloatCounter++;
  }
  return stringToFloatMap[string];
}
function stringToGlsl(string) {
  return numberToGlsl(getStringNumberEquivalent(string));
}
function uniformNameForVariable(variableName) {
  return "u_var_" + variableName;
}
function newCompilationContext() {
  return {
    inFragmentShader: false,
    variables: {},
    properties: {},
    functions: {},
    bandCount: 0,
    style: {}
  };
}
var GET_BAND_VALUE_FUNC = "getBandValue";
var PALETTE_TEXTURE_ARRAY = "u_paletteTextures";
function buildExpression(encoded, type, parsingContext, compilationContext) {
  const expression = parse(encoded, type, parsingContext);
  return compile(expression, type, compilationContext);
}
function createCompiler(output) {
  return (context, expression, type) => {
    const length = expression.args.length;
    const args = new Array(length);
    for (let i = 0; i < length; ++i) {
      args[i] = compile(expression.args[i], type, context);
    }
    return output(args, context);
  };
}
var compilers = {
  [Ops.Get]: (context, expression) => {
    const firstArg = (
      /** @type {LiteralExpression} */
      expression.args[0]
    );
    const propName = (
      /** @type {string} */
      firstArg.value
    );
    const isExisting = propName in context.properties;
    if (!isExisting) {
      context.properties[propName] = {
        name: propName,
        type: expression.type
      };
    }
    const prefix = context.inFragmentShader ? "v_prop_" : "a_prop_";
    return prefix + propName;
  },
  [Ops.GeometryType]: (context, expression, type) => {
    const propName = "geometryType";
    const isExisting = propName in context.properties;
    if (!isExisting) {
      context.properties[propName] = {
        name: propName,
        type: StringType,
        evaluator: (feature) => {
          return computeGeometryType(feature.getGeometry());
        }
      };
    }
    const prefix = context.inFragmentShader ? "v_prop_" : "a_prop_";
    return prefix + propName;
  },
  [Ops.LineMetric]: () => "currentLineMetric",
  // this variable is assumed to always be present in shaders, default is 0.
  [Ops.Var]: (context, expression) => {
    const firstArg = (
      /** @type {LiteralExpression} */
      expression.args[0]
    );
    const varName = (
      /** @type {string} */
      firstArg.value
    );
    const isExisting = varName in context.variables;
    if (!isExisting) {
      context.variables[varName] = {
        name: varName,
        type: expression.type
      };
    }
    return uniformNameForVariable(varName);
  },
  [Ops.Resolution]: () => "u_resolution",
  [Ops.Zoom]: () => "u_zoom",
  [Ops.Time]: () => "u_time",
  [Ops.Any]: createCompiler((compiledArgs) => `(${compiledArgs.join(` || `)})`),
  [Ops.All]: createCompiler((compiledArgs) => `(${compiledArgs.join(` && `)})`),
  [Ops.Not]: createCompiler(([value]) => `(!${value})`),
  [Ops.Equal]: createCompiler(([firstValue, secondValue]) => `(${firstValue} == ${secondValue})`),
  [Ops.NotEqual]: createCompiler(([firstValue, secondValue]) => `(${firstValue} != ${secondValue})`),
  [Ops.GreaterThan]: createCompiler(([firstValue, secondValue]) => `(${firstValue} > ${secondValue})`),
  [Ops.GreaterThanOrEqualTo]: createCompiler(([firstValue, secondValue]) => `(${firstValue} >= ${secondValue})`),
  [Ops.LessThan]: createCompiler(([firstValue, secondValue]) => `(${firstValue} < ${secondValue})`),
  [Ops.LessThanOrEqualTo]: createCompiler(([firstValue, secondValue]) => `(${firstValue} <= ${secondValue})`),
  [Ops.Multiply]: createCompiler((compiledArgs) => `(${compiledArgs.join(" * ")})`),
  [Ops.Divide]: createCompiler(([firstValue, secondValue]) => `(${firstValue} / ${secondValue})`),
  [Ops.Add]: createCompiler((compiledArgs) => `(${compiledArgs.join(" + ")})`),
  [Ops.Subtract]: createCompiler(([firstValue, secondValue]) => `(${firstValue} - ${secondValue})`),
  [Ops.Clamp]: createCompiler(([value, min, max]) => `clamp(${value}, ${min}, ${max})`),
  [Ops.Mod]: createCompiler(([value, modulo]) => `mod(${value}, ${modulo})`),
  [Ops.Pow]: createCompiler(([value, power]) => `pow(${value}, ${power})`),
  [Ops.Abs]: createCompiler(([value]) => `abs(${value})`),
  [Ops.Floor]: createCompiler(([value]) => `floor(${value})`),
  [Ops.Ceil]: createCompiler(([value]) => `ceil(${value})`),
  [Ops.Round]: createCompiler(([value]) => `floor(${value} + 0.5)`),
  [Ops.Sin]: createCompiler(([value]) => `sin(${value})`),
  [Ops.Cos]: createCompiler(([value]) => `cos(${value})`),
  [Ops.Atan]: createCompiler(([firstValue, secondValue]) => {
    return secondValue !== void 0 ? `atan(${firstValue}, ${secondValue})` : `atan(${firstValue})`;
  }),
  [Ops.Sqrt]: createCompiler(([value]) => `sqrt(${value})`),
  [Ops.Match]: createCompiler((compiledArgs) => {
    const input = compiledArgs[0];
    const fallback = compiledArgs[compiledArgs.length - 1];
    let result = null;
    for (let i = compiledArgs.length - 3; i >= 1; i -= 2) {
      const match = compiledArgs[i];
      const output = compiledArgs[i + 1];
      result = `(${input} == ${match} ? ${output} : ${result || fallback})`;
    }
    return result;
  }),
  [Ops.Between]: createCompiler(([value, min, max]) => `(${value} >= ${min} && ${value} <= ${max})`),
  [Ops.Interpolate]: createCompiler(([exponent, input, ...compiledArgs]) => {
    let result = "";
    for (let i = 0; i < compiledArgs.length - 2; i += 2) {
      const stop1 = compiledArgs[i];
      const output1 = result || compiledArgs[i + 1];
      const stop2 = compiledArgs[i + 2];
      const output2 = compiledArgs[i + 3];
      let ratio;
      if (exponent === numberToGlsl(1)) {
        ratio = `(${input} - ${stop1}) / (${stop2} - ${stop1})`;
      } else {
        ratio = `(pow(${exponent}, (${input} - ${stop1})) - 1.0) / (pow(${exponent}, (${stop2} - ${stop1})) - 1.0)`;
      }
      result = `mix(${output1}, ${output2}, clamp(${ratio}, 0.0, 1.0))`;
    }
    return result;
  }),
  [Ops.Case]: createCompiler((compiledArgs) => {
    const fallback = compiledArgs[compiledArgs.length - 1];
    let result = null;
    for (let i = compiledArgs.length - 3; i >= 0; i -= 2) {
      const condition = compiledArgs[i];
      const output = compiledArgs[i + 1];
      result = `(${condition} ? ${output} : ${result || fallback})`;
    }
    return result;
  }),
  [Ops.In]: createCompiler(([needle, ...haystack], context) => {
    const funcName = computeOperatorFunctionName("in", context);
    const tests = [];
    for (let i = 0; i < haystack.length; i += 1) {
      tests.push(`  if (inputValue == ${haystack[i]}) { return true; }`);
    }
    context.functions[funcName] = `bool ${funcName}(float inputValue) {
${tests.join("\n")}
  return false;
}`;
    return `${funcName}(${needle})`;
  }),
  [Ops.Array]: createCompiler((args) => `vec${args.length}(${args.join(", ")})`),
  [Ops.Color]: createCompiler((compiledArgs) => {
    if (compiledArgs.length === 1) {
      return `vec4(vec3(${compiledArgs[0]} / 255.0), 1.0)`;
    }
    if (compiledArgs.length === 2) {
      return `vec4(vec3(${compiledArgs[0]} / 255.0), ${compiledArgs[1]})`;
    }
    const rgb = compiledArgs.slice(0, 3).map((color) => `${color} / 255.0`);
    if (compiledArgs.length === 3) {
      return `vec4(${rgb.join(", ")}, 1.0)`;
    }
    const alpha = compiledArgs[3];
    return `vec4(${rgb.join(", ")}, ${alpha})`;
  }),
  [Ops.Band]: createCompiler(([band, xOffset, yOffset], context) => {
    if (!(GET_BAND_VALUE_FUNC in context.functions)) {
      let ifBlocks = "";
      const bandCount = context.bandCount || 1;
      for (let i = 0; i < bandCount; i++) {
        const colorIndex = Math.floor(i / 4);
        let bandIndex = i % 4;
        if (i === bandCount - 1 && bandIndex === 1) {
          bandIndex = 3;
        }
        const textureName = `${Uniforms2.TILE_TEXTURE_ARRAY}[${colorIndex}]`;
        ifBlocks += `  if (band == ${i + 1}.0) {
    return texture2D(${textureName}, v_textureCoord + vec2(dx, dy))[${bandIndex}];
  }
`;
      }
      context.functions[GET_BAND_VALUE_FUNC] = `float getBandValue(float band, float xOffset, float yOffset) {
  float dx = xOffset / ${Uniforms2.TEXTURE_PIXEL_WIDTH};
  float dy = yOffset / ${Uniforms2.TEXTURE_PIXEL_HEIGHT};
${ifBlocks}
}`;
    }
    return `${GET_BAND_VALUE_FUNC}(${band}, ${xOffset ?? "0.0"}, ${yOffset ?? "0.0"})`;
  }),
  [Ops.Palette]: (context, expression) => {
    const [index, ...colors] = expression.args;
    const numColors = colors.length;
    const palette = new Uint8Array(numColors * 4);
    for (let i = 0; i < colors.length; i++) {
      const parsedValue = (
        /** @type {string | Array<number>} */
        /** @type {LiteralExpression} */
        colors[i].value
      );
      const color = asArray(parsedValue);
      const offset = i * 4;
      palette[offset] = color[0];
      palette[offset + 1] = color[1];
      palette[offset + 2] = color[2];
      palette[offset + 3] = color[3] * 255;
    }
    if (!context.paletteTextures) {
      context.paletteTextures = [];
    }
    const paletteName = `${PALETTE_TEXTURE_ARRAY}[${context.paletteTextures.length}]`;
    const paletteTexture = new PaletteTexture_default(paletteName, palette);
    context.paletteTextures.push(paletteTexture);
    const compiledIndex = compile(index, NumberType, context);
    return `texture2D(${paletteName}, vec2((${compiledIndex} + 0.5) / ${numColors}.0, 0.5))`;
  }
  // TODO: unimplemented
  // Ops.Number
  // Ops.String
  // Ops.Coalesce
  // Ops.Concat
  // Ops.ToString
};
function compile(expression, returnType, context) {
  if (expression instanceof CallExpression) {
    const compiler = compilers[expression.operator];
    if (compiler === void 0) {
      throw new Error(`No compiler defined for this operator: ${JSON.stringify(expression.operator)}`);
    }
    return compiler(context, expression, returnType);
  }
  if ((expression.type & NumberType) > 0) {
    return numberToGlsl(
      /** @type {number} */
      expression.value
    );
  }
  if ((expression.type & BooleanType) > 0) {
    return expression.value.toString();
  }
  if ((expression.type & StringType) > 0) {
    return stringToGlsl(expression.value.toString());
  }
  if ((expression.type & ColorType) > 0) {
    return colorToGlsl(
      /** @type {Array<number> | string} */
      expression.value
    );
  }
  if ((expression.type & NumberArrayType) > 0) {
    return arrayToGlsl(
      /** @type {Array<number>} */
      expression.value
    );
  }
  if ((expression.type & SizeType) > 0) {
    return sizeToGlsl(
      /** @type {number|import('../size.js').Size} */
      expression.value
    );
  }
  throw new Error(`Unexpected expression ${expression.value} (expected type ${typeName(returnType)})`);
}

// node_modules/ol/style/flat.js
function createDefaultStyle() {
  return {
    "fill-color": "rgba(255,255,255,0.4)",
    "stroke-color": "#3399CC",
    "stroke-width": 1.25,
    "circle-radius": 5,
    "circle-fill-color": "rgba(255,255,255,0.4)",
    "circle-stroke-width": 1.25,
    "circle-stroke-color": "#3399CC"
  };
}

// node_modules/ol/webgl/ShaderBuilder.js
var COMMON_HEADER = `#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform mat4 u_projectionMatrix;
uniform mat4 u_screenToWorldMatrix;
uniform vec2 u_viewportSizePx;
uniform float u_pixelRatio;
uniform float u_globalAlpha;
uniform float u_time;
uniform float u_zoom;
uniform float u_resolution;
uniform float u_rotation;
uniform vec4 u_renderExtent;
uniform vec2 u_patternOrigin;
uniform float u_depth;
uniform mediump int u_hitDetection;

const float PI = 3.141592653589793238;
const float TWO_PI = 2.0 * PI;
float currentLineMetric = 0.; // an actual value will be used in the stroke shaders
`;
var DEFAULT_STYLE = createDefaultStyle();
var ShaderBuilder = class {
  constructor() {
    this.uniforms_ = [];
    this.attributes_ = [];
    this.varyings_ = [];
    this.hasSymbol_ = false;
    this.symbolSizeExpression_ = `vec2(${numberToGlsl(DEFAULT_STYLE["circle-radius"])} + ${numberToGlsl(DEFAULT_STYLE["circle-stroke-width"] * 0.5)})`;
    this.symbolRotationExpression_ = "0.0";
    this.symbolOffsetExpression_ = "vec2(0.0)";
    this.symbolColorExpression_ = colorToGlsl(
      /** @type {string} */
      DEFAULT_STYLE["circle-fill-color"]
    );
    this.texCoordExpression_ = "vec4(0.0, 0.0, 1.0, 1.0)";
    this.discardExpression_ = "false";
    this.symbolRotateWithView_ = false;
    this.hasStroke_ = false;
    this.strokeWidthExpression_ = numberToGlsl(DEFAULT_STYLE["stroke-width"]);
    this.strokeColorExpression_ = colorToGlsl(
      /** @type {string} */
      DEFAULT_STYLE["stroke-color"]
    );
    this.strokeOffsetExpression_ = "0.";
    this.strokeCapExpression_ = stringToGlsl("round");
    this.strokeJoinExpression_ = stringToGlsl("round");
    this.strokeMiterLimitExpression_ = "10.";
    this.strokeDistanceFieldExpression_ = "-1000.";
    this.hasFill_ = false;
    this.fillColorExpression_ = colorToGlsl(
      /** @type {string} */
      DEFAULT_STYLE["fill-color"]
    );
    this.vertexShaderFunctions_ = [];
    this.fragmentShaderFunctions_ = [];
  }
  /**
   * Adds a uniform accessible in both fragment and vertex shaders.
   * The given name should include a type, such as `sampler2D u_texture`.
   * @param {string} name Uniform name
   * @return {ShaderBuilder} the builder object
   */
  addUniform(name) {
    this.uniforms_.push(name);
    return this;
  }
  /**
   * Adds an attribute accessible in the vertex shader, read from the geometry buffer.
   * The given name should include a type, such as `vec2 a_position`.
   * @param {string} name Attribute name
   * @return {ShaderBuilder} the builder object
   */
  addAttribute(name) {
    this.attributes_.push(name);
    return this;
  }
  /**
   * Adds a varying defined in the vertex shader and accessible from the fragment shader.
   * The type and expression of the varying have to be specified separately.
   * @param {string} name Varying name
   * @param {'float'|'vec2'|'vec3'|'vec4'} type Type
   * @param {string} expression Expression used to assign a value to the varying.
   * @return {ShaderBuilder} the builder object
   */
  addVarying(name, type, expression) {
    this.varyings_.push({
      name,
      type,
      expression
    });
    return this;
  }
  /**
   * Sets an expression to compute the size of the shape.
   * This expression can use all the uniforms and attributes available
   * in the vertex shader, and should evaluate to a `vec2` value.
   * @param {string} expression Size expression
   * @return {ShaderBuilder} the builder object
   */
  setSymbolSizeExpression(expression) {
    this.hasSymbol_ = true;
    this.symbolSizeExpression_ = expression;
    return this;
  }
  /**
   * @return {string} The current symbol size expression
   */
  getSymbolSizeExpression() {
    return this.symbolSizeExpression_;
  }
  /**
   * Sets an expression to compute the rotation of the shape.
   * This expression can use all the uniforms and attributes available
   * in the vertex shader, and should evaluate to a `float` value in radians.
   * @param {string} expression Size expression
   * @return {ShaderBuilder} the builder object
   */
  setSymbolRotationExpression(expression) {
    this.symbolRotationExpression_ = expression;
    return this;
  }
  /**
   * Sets an expression to compute the offset of the symbol from the point center.
   * This expression can use all the uniforms and attributes available
   * in the vertex shader, and should evaluate to a `vec2` value.
   * @param {string} expression Offset expression
   * @return {ShaderBuilder} the builder object
   */
  setSymbolOffsetExpression(expression) {
    this.symbolOffsetExpression_ = expression;
    return this;
  }
  /**
   * @return {string} The current symbol offset expression
   */
  getSymbolOffsetExpression() {
    return this.symbolOffsetExpression_;
  }
  /**
   * Sets an expression to compute the color of the shape.
   * This expression can use all the uniforms, varyings and attributes available
   * in the fragment shader, and should evaluate to a `vec4` value.
   * @param {string} expression Color expression
   * @return {ShaderBuilder} the builder object
   */
  setSymbolColorExpression(expression) {
    this.hasSymbol_ = true;
    this.symbolColorExpression_ = expression;
    return this;
  }
  /**
   * @return {string} The current symbol color expression
   */
  getSymbolColorExpression() {
    return this.symbolColorExpression_;
  }
  /**
   * Sets an expression to compute the texture coordinates of the vertices.
   * This expression can use all the uniforms and attributes available
   * in the vertex shader, and should evaluate to a `vec4` value.
   * @param {string} expression Texture coordinate expression
   * @return {ShaderBuilder} the builder object
   */
  setTextureCoordinateExpression(expression) {
    this.texCoordExpression_ = expression;
    return this;
  }
  /**
   * Sets an expression to determine whether a fragment (pixel) should be discarded,
   * i.e. not drawn at all.
   * This expression can use all the uniforms, varyings and attributes available
   * in the fragment shader, and should evaluate to a `bool` value (it will be
   * used in an `if` statement)
   * @param {string} expression Fragment discard expression
   * @return {ShaderBuilder} the builder object
   */
  setFragmentDiscardExpression(expression) {
    this.discardExpression_ = expression;
    return this;
  }
  /**
   * @return {string} The current fragment discard expression
   */
  getFragmentDiscardExpression() {
    return this.discardExpression_;
  }
  /**
   * Sets whether the symbols should rotate with the view or stay aligned with the map.
   * Note: will only be used for point geometry shaders.
   * @param {boolean} rotateWithView Rotate with view
   * @return {ShaderBuilder} the builder object
   */
  setSymbolRotateWithView(rotateWithView) {
    this.symbolRotateWithView_ = rotateWithView;
    return this;
  }
  /**
   * @param {string} expression Stroke width expression, returning value in pixels
   * @return {ShaderBuilder} the builder object
   */
  setStrokeWidthExpression(expression) {
    this.hasStroke_ = true;
    this.strokeWidthExpression_ = expression;
    return this;
  }
  /**
   * @param {string} expression Stroke color expression, evaluate to `vec4`: can rely on currentLengthPx and currentRadiusPx
   * @return {ShaderBuilder} the builder object
   */
  setStrokeColorExpression(expression) {
    this.hasStroke_ = true;
    this.strokeColorExpression_ = expression;
    return this;
  }
  /**
   * @return {string} The current stroke color expression
   */
  getStrokeColorExpression() {
    return this.strokeColorExpression_;
  }
  /**
   * @param {string} expression Stroke color expression, evaluate to `float`
   * @return {ShaderBuilder} the builder object
   */
  setStrokeOffsetExpression(expression) {
    this.strokeOffsetExpression_ = expression;
    return this;
  }
  /**
   * @param {string} expression Stroke line cap expression, evaluate to `float`
   * @return {ShaderBuilder} the builder object
   */
  setStrokeCapExpression(expression) {
    this.strokeCapExpression_ = expression;
    return this;
  }
  /**
   * @param {string} expression Stroke line join expression, evaluate to `float`
   * @return {ShaderBuilder} the builder object
   */
  setStrokeJoinExpression(expression) {
    this.strokeJoinExpression_ = expression;
    return this;
  }
  /**
   * @param {string} expression Stroke miter limit expression, evaluate to `float`
   * @return {ShaderBuilder} the builder object
   */
  setStrokeMiterLimitExpression(expression) {
    this.strokeMiterLimitExpression_ = expression;
    return this;
  }
  /**
   * @param {string} expression Stroke distance field expression, evaluate to `float`
   * This can override the default distance field; can rely on currentLengthPx and currentRadiusPx
   * @return {ShaderBuilder} the builder object
   */
  setStrokeDistanceFieldExpression(expression) {
    this.strokeDistanceFieldExpression_ = expression;
    return this;
  }
  /**
   * @param {string} expression Fill color expression, evaluate to `vec4`
   * @return {ShaderBuilder} the builder object
   */
  setFillColorExpression(expression) {
    this.hasFill_ = true;
    this.fillColorExpression_ = expression;
    return this;
  }
  /**
   * @return {string} The current fill color expression
   */
  getFillColorExpression() {
    return this.fillColorExpression_;
  }
  addVertexShaderFunction(code) {
    if (this.vertexShaderFunctions_.includes(code)) {
      return;
    }
    this.vertexShaderFunctions_.push(code);
  }
  addFragmentShaderFunction(code) {
    if (this.fragmentShaderFunctions_.includes(code)) {
      return;
    }
    this.fragmentShaderFunctions_.push(code);
  }
  /**
   * Generates a symbol vertex shader from the builder parameters
   * @return {string|null} The full shader as a string; null if no size or color specified
   */
  getSymbolVertexShader() {
    if (!this.hasSymbol_) {
      return null;
    }
    return `${COMMON_HEADER}
${this.uniforms_.map(function(uniform) {
      return "uniform " + uniform + ";";
    }).join("\n")}
attribute vec2 a_position;
attribute float a_index;
attribute vec4 a_prop_hitColor;
${this.attributes_.map(function(attribute) {
      return "attribute " + attribute + ";";
    }).join("\n")}
varying vec2 v_texCoord;
varying vec2 v_quadCoord;
varying vec4 v_prop_hitColor;
varying vec2 v_centerPx;
varying float v_angle;
varying vec2 v_quadSizePx;
${this.varyings_.map(function(varying) {
      return "varying " + varying.type + " " + varying.name + ";";
    }).join("\n")}
${this.vertexShaderFunctions_.join("\n")}
vec2 pxToScreen(vec2 coordPx) {
  vec2 scaled = coordPx / u_viewportSizePx / 0.5;
  return scaled;
}

vec2 screenToPx(vec2 coordScreen) {
  return (coordScreen * 0.5 + 0.5) * u_viewportSizePx;
}

void main(void) {
  v_quadSizePx = ${this.symbolSizeExpression_};
  vec2 halfSizePx = v_quadSizePx * 0.5;
  vec2 centerOffsetPx = ${this.symbolOffsetExpression_};
  vec2 offsetPx = centerOffsetPx;
  if (a_index == 0.0) {
    offsetPx -= halfSizePx;
  } else if (a_index == 1.0) {
    offsetPx += halfSizePx * vec2(1., -1.);
  } else if (a_index == 2.0) {
    offsetPx += halfSizePx;
  } else {
    offsetPx += halfSizePx * vec2(-1., 1.);
  }
  float angle = ${this.symbolRotationExpression_};
  ${this.symbolRotateWithView_ ? "angle += u_rotation;" : ""}
  float c = cos(-angle);
  float s = sin(-angle);
  offsetPx = vec2(c * offsetPx.x - s * offsetPx.y, s * offsetPx.x + c * offsetPx.y);
  vec4 center = u_projectionMatrix * vec4(a_position, 0.0, 1.0);
  gl_Position = center + vec4(pxToScreen(offsetPx), u_depth, 0.);
  vec4 texCoord = ${this.texCoordExpression_};
  float u = a_index == 0.0 || a_index == 3.0 ? texCoord.s : texCoord.p;
  float v = a_index == 2.0 || a_index == 3.0 ? texCoord.t : texCoord.q;
  v_texCoord = vec2(u, v);
  v_prop_hitColor = a_prop_hitColor;
  v_angle = angle;
  c = cos(-v_angle);
  s = sin(-v_angle);
  centerOffsetPx = vec2(c * centerOffsetPx.x - s * centerOffsetPx.y, s * centerOffsetPx.x + c * centerOffsetPx.y); 
  v_centerPx = screenToPx(center.xy) + centerOffsetPx;
${this.varyings_.map(function(varying) {
      return "  " + varying.name + " = " + varying.expression + ";";
    }).join("\n")}
}`;
  }
  /**
   * Generates a symbol fragment shader from the builder parameters
   * @return {string|null} The full shader as a string; null if no size or color specified
   */
  getSymbolFragmentShader() {
    if (!this.hasSymbol_) {
      return null;
    }
    return `${COMMON_HEADER}
${this.uniforms_.map(function(uniform) {
      return "uniform " + uniform + ";";
    }).join("\n")}
varying vec2 v_texCoord;
varying vec4 v_prop_hitColor;
varying vec2 v_centerPx;
varying float v_angle;
varying vec2 v_quadSizePx;
${this.varyings_.map(function(varying) {
      return "varying " + varying.type + " " + varying.name + ";";
    }).join("\n")}
${this.fragmentShaderFunctions_.join("\n")}

void main(void) {
  if (${this.discardExpression_}) { discard; }
  vec2 coordsPx = gl_FragCoord.xy / u_pixelRatio - v_centerPx; // relative to center
  float c = cos(v_angle);
  float s = sin(v_angle);
  coordsPx = vec2(c * coordsPx.x - s * coordsPx.y, s * coordsPx.x + c * coordsPx.y);
  gl_FragColor = ${this.symbolColorExpression_};
  gl_FragColor.rgb *= gl_FragColor.a;
  if (u_hitDetection > 0) {
    if (gl_FragColor.a < 0.05) { discard; };
    gl_FragColor = v_prop_hitColor;
  }
}`;
  }
  /**
   * Generates a stroke vertex shader from the builder parameters
   * @return {string|null} The full shader as a string; null if no size or color specified
   */
  getStrokeVertexShader() {
    if (!this.hasStroke_) {
      return null;
    }
    return `${COMMON_HEADER}
${this.uniforms_.map(function(uniform) {
      return "uniform " + uniform + ";";
    }).join("\n")}
attribute vec2 a_segmentStart;
attribute vec2 a_segmentEnd;
attribute float a_measureStart;
attribute float a_measureEnd;
attribute float a_parameters;
attribute float a_distance;
attribute vec2 a_joinAngles;
attribute vec4 a_prop_hitColor;
${this.attributes_.map(function(attribute) {
      return "attribute " + attribute + ";";
    }).join("\n")}
varying vec2 v_segmentStart;
varying vec2 v_segmentEnd;
varying float v_angleStart;
varying float v_angleEnd;
varying float v_width;
varying vec4 v_prop_hitColor;
varying float v_distanceOffsetPx;
varying float v_measureStart;
varying float v_measureEnd;
${this.varyings_.map(function(varying) {
      return "varying " + varying.type + " " + varying.name + ";";
    }).join("\n")}
${this.vertexShaderFunctions_.join("\n")}
vec2 worldToPx(vec2 worldPos) {
  vec4 screenPos = u_projectionMatrix * vec4(worldPos, 0.0, 1.0);
  return (0.5 * screenPos.xy + 0.5) * u_viewportSizePx;
}

vec4 pxToScreen(vec2 pxPos) {
  vec2 screenPos = 2.0 * pxPos / u_viewportSizePx - 1.0;
  return vec4(screenPos, u_depth, 1.0);
}

bool isCap(float joinAngle) {
  return joinAngle < -0.1;
}

vec2 getJoinOffsetDirection(vec2 normalPx, float joinAngle) {
  float halfAngle = joinAngle / 2.0;
  float c = cos(halfAngle);
  float s = sin(halfAngle);
  vec2 angleBisectorNormal = vec2(s * normalPx.x + c * normalPx.y, -c * normalPx.x + s * normalPx.y);
  float length = 1.0 / s;
  return angleBisectorNormal * length;
}

vec2 getOffsetPoint(vec2 point, vec2 normal, float joinAngle, float offsetPx) {
  // if on a cap or the join angle is too high, offset the line along the segment normal
  if (cos(joinAngle) > 0.998 || isCap(joinAngle)) {
    return point - normal * offsetPx;
  }
  // offset is applied along the inverted normal (positive offset goes "right" relative to line direction)
  return point - getJoinOffsetDirection(normal, joinAngle) * offsetPx;
}

void main(void) {
  v_angleStart = a_joinAngles.x;
  v_angleEnd = a_joinAngles.y;
  float vertexNumber = floor(abs(a_parameters) / 10000. + 0.5);
  currentLineMetric = vertexNumber < 1.5 ? a_measureStart : a_measureEnd;
  // we're reading the fractional part while keeping the sign (so -4.12 gives -0.12, 3.45 gives 0.45)
  float angleTangentSum = fract(abs(a_parameters) / 10000.) * 10000. * sign(a_parameters);

  float lineWidth = ${this.strokeWidthExpression_};
  float lineOffsetPx = ${this.strokeOffsetExpression_};

  // compute segment start/end in px with offset
  vec2 segmentStartPx = worldToPx(a_segmentStart);
  vec2 segmentEndPx = worldToPx(a_segmentEnd);
  vec2 tangentPx = normalize(segmentEndPx - segmentStartPx);
  vec2 normalPx = vec2(-tangentPx.y, tangentPx.x);
  segmentStartPx = getOffsetPoint(segmentStartPx, normalPx, v_angleStart, lineOffsetPx),
  segmentEndPx = getOffsetPoint(segmentEndPx, normalPx, v_angleEnd, lineOffsetPx);
  
  // compute current vertex position
  float normalDir = vertexNumber < 0.5 || (vertexNumber > 1.5 && vertexNumber < 2.5) ? 1.0 : -1.0;
  float tangentDir = vertexNumber < 1.5 ? 1.0 : -1.0;
  float angle = vertexNumber < 1.5 ? v_angleStart : v_angleEnd;
  vec2 joinDirection;
  vec2 positionPx = vertexNumber < 1.5 ? segmentStartPx : segmentEndPx;
  // if angle is too high, do not make a proper join
  if (cos(angle) > ${LINESTRING_ANGLE_COSINE_CUTOFF} || isCap(angle)) {
    joinDirection = normalPx * normalDir - tangentPx * tangentDir;
  } else {
    joinDirection = getJoinOffsetDirection(normalPx * normalDir, angle);
  }
  positionPx = positionPx + joinDirection * (lineWidth * 0.5 + 1.); // adding 1 pixel for antialiasing
  gl_Position = pxToScreen(positionPx);

  v_segmentStart = segmentStartPx;
  v_segmentEnd = segmentEndPx;
  v_width = lineWidth;
  v_prop_hitColor = a_prop_hitColor;
  v_distanceOffsetPx = a_distance / u_resolution - (lineOffsetPx * angleTangentSum);
  v_measureStart = a_measureStart;
  v_measureEnd = a_measureEnd;
${this.varyings_.map(function(varying) {
      return "  " + varying.name + " = " + varying.expression + ";";
    }).join("\n")}
}`;
  }
  /**
   * Generates a stroke fragment shader from the builder parameters
   *
   * @return {string|null} The full shader as a string; null if no size or color specified
   */
  getStrokeFragmentShader() {
    if (!this.hasStroke_) {
      return null;
    }
    return `${COMMON_HEADER}
${this.uniforms_.map(function(uniform) {
      return "uniform " + uniform + ";";
    }).join("\n")}
varying vec2 v_segmentStart;
varying vec2 v_segmentEnd;
varying float v_angleStart;
varying float v_angleEnd;
varying float v_width;
varying vec4 v_prop_hitColor;
varying float v_distanceOffsetPx;
varying float v_measureStart;
varying float v_measureEnd;
${this.varyings_.map(function(varying) {
      return "varying " + varying.type + " " + varying.name + ";";
    }).join("\n")}
${this.fragmentShaderFunctions_.join("\n")}

vec2 pxToWorld(vec2 pxPos) {
  vec2 screenPos = 2.0 * pxPos / u_viewportSizePx - 1.0;
  return (u_screenToWorldMatrix * vec4(screenPos, 0.0, 1.0)).xy;
}

bool isCap(float joinAngle) {
  return joinAngle < -0.1;
}

float segmentDistanceField(vec2 point, vec2 start, vec2 end, float width) {
  vec2 tangent = normalize(end - start);
  vec2 normal = vec2(-tangent.y, tangent.x);
  vec2 startToPoint = point - start;
  return abs(dot(startToPoint, normal)) - width * 0.5;
}

float buttCapDistanceField(vec2 point, vec2 start, vec2 end) {
  vec2 startToPoint = point - start;
  vec2 tangent = normalize(end - start);
  return dot(startToPoint, -tangent);
}

float squareCapDistanceField(vec2 point, vec2 start, vec2 end, float width) {
  return buttCapDistanceField(point, start, end) - width * 0.5;
}

float roundCapDistanceField(vec2 point, vec2 start, vec2 end, float width) {
  float onSegment = max(0., 1000. * dot(point - start, end - start)); // this is very high when inside the segment
  return length(point - start) - width * 0.5 - onSegment;
}

float roundJoinDistanceField(vec2 point, vec2 start, vec2 end, float width) {
  return roundCapDistanceField(point, start, end, width);
}

float bevelJoinField(vec2 point, vec2 start, vec2 end, float width, float joinAngle) {
  vec2 startToPoint = point - start;
  vec2 tangent = normalize(end - start);
  float c = cos(joinAngle * 0.5);
  float s = sin(joinAngle * 0.5);
  float direction = -sign(sin(joinAngle));
  vec2 bisector = vec2(c * tangent.x - s * tangent.y, s * tangent.x + c * tangent.y);
  float radius = width * 0.5 * s;
  return dot(startToPoint, bisector * direction) - radius;
}

float miterJoinDistanceField(vec2 point, vec2 start, vec2 end, float width, float joinAngle) {
  if (cos(joinAngle) > ${LINESTRING_ANGLE_COSINE_CUTOFF}) { // avoid risking a division by zero
    return bevelJoinField(point, start, end, width, joinAngle);
  }
  float miterLength = 1. / sin(joinAngle * 0.5);
  float miterLimit = ${this.strokeMiterLimitExpression_};
  if (miterLength > miterLimit) {
    return bevelJoinField(point, start, end, width, joinAngle);
  }
  return -1000.;
}

float capDistanceField(vec2 point, vec2 start, vec2 end, float width, float capType) {
   if (capType == ${stringToGlsl("butt")}) {
    return buttCapDistanceField(point, start, end);
  } else if (capType == ${stringToGlsl("square")}) {
    return squareCapDistanceField(point, start, end, width);
  }
  return roundCapDistanceField(point, start, end, width);
}

float joinDistanceField(vec2 point, vec2 start, vec2 end, float width, float joinAngle, float joinType) {
  if (joinType == ${stringToGlsl("bevel")}) {
    return bevelJoinField(point, start, end, width, joinAngle);
  } else if (joinType == ${stringToGlsl("miter")}) {
    return miterJoinDistanceField(point, start, end, width, joinAngle);
  }
  return roundJoinDistanceField(point, start, end, width);
}

float computeSegmentPointDistance(vec2 point, vec2 start, vec2 end, float width, float joinAngle, float capType, float joinType) {
  if (isCap(joinAngle)) {
    return capDistanceField(point, start, end, width, capType);
  }
  return joinDistanceField(point, start, end, width, joinAngle, joinType);
}

void main(void) {
  vec2 currentPoint = gl_FragCoord.xy / u_pixelRatio;
  #ifdef GL_FRAGMENT_PRECISION_HIGH
  vec2 worldPos = pxToWorld(currentPoint);
  if (
    abs(u_renderExtent[0] - u_renderExtent[2]) > 0.0 && (
      worldPos[0] < u_renderExtent[0] ||
      worldPos[1] < u_renderExtent[1] ||
      worldPos[0] > u_renderExtent[2] ||
      worldPos[1] > u_renderExtent[3]
    )
  ) {
    discard;
  }
  #endif

  float segmentLength = length(v_segmentEnd - v_segmentStart);
  vec2 segmentTangent = (v_segmentEnd - v_segmentStart) / segmentLength;
  vec2 segmentNormal = vec2(-segmentTangent.y, segmentTangent.x);
  vec2 startToPoint = currentPoint - v_segmentStart;
  float lengthToPoint = max(0., min(dot(segmentTangent, startToPoint), segmentLength));
  float currentLengthPx = lengthToPoint + v_distanceOffsetPx; 
  float currentRadiusPx = abs(dot(segmentNormal, startToPoint));
  float currentRadiusRatio = dot(segmentNormal, startToPoint) * 2. / v_width;
  currentLineMetric = mix(v_measureStart, v_measureEnd, lengthToPoint / segmentLength);

  if (${this.discardExpression_}) { discard; }

  vec4 color = ${this.strokeColorExpression_};
  float capType = ${this.strokeCapExpression_};
  float joinType = ${this.strokeJoinExpression_};
  float segmentStartDistance = computeSegmentPointDistance(currentPoint, v_segmentStart, v_segmentEnd, v_width, v_angleStart, capType, joinType);
  float segmentEndDistance = computeSegmentPointDistance(currentPoint, v_segmentEnd, v_segmentStart, v_width, v_angleEnd, capType, joinType);
  float distance = max(
    segmentDistanceField(currentPoint, v_segmentStart, v_segmentEnd, v_width),
    max(segmentStartDistance, segmentEndDistance)
  );
  distance = max(distance, ${this.strokeDistanceFieldExpression_});
  color.a *= smoothstep(0.5, -0.5, distance);
  gl_FragColor = color;
  gl_FragColor.a *= u_globalAlpha;
  gl_FragColor.rgb *= gl_FragColor.a;
  if (u_hitDetection > 0) {
    if (gl_FragColor.a < 0.1) { discard; };
    gl_FragColor = v_prop_hitColor;
  }
}`;
  }
  /**
   * Generates a fill vertex shader from the builder parameters
   *
   * @return {string|null} The full shader as a string; null if no color specified
   */
  getFillVertexShader() {
    if (!this.hasFill_) {
      return null;
    }
    return `${COMMON_HEADER}
${this.uniforms_.map(function(uniform) {
      return "uniform " + uniform + ";";
    }).join("\n")}
attribute vec2 a_position;
attribute vec4 a_prop_hitColor;
${this.attributes_.map(function(attribute) {
      return "attribute " + attribute + ";";
    }).join("\n")}
varying vec4 v_prop_hitColor;
${this.varyings_.map(function(varying) {
      return "varying " + varying.type + " " + varying.name + ";";
    }).join("\n")}
${this.vertexShaderFunctions_.join("\n")}
void main(void) {
  gl_Position = u_projectionMatrix * vec4(a_position, u_depth, 1.0);
  v_prop_hitColor = a_prop_hitColor;
${this.varyings_.map(function(varying) {
      return "  " + varying.name + " = " + varying.expression + ";";
    }).join("\n")}
}`;
  }
  /**
   * Generates a fill fragment shader from the builder parameters
   * @return {string|null} The full shader as a string; null if no color specified
   */
  getFillFragmentShader() {
    if (!this.hasFill_) {
      return null;
    }
    return `${COMMON_HEADER}
${this.uniforms_.map(function(uniform) {
      return "uniform " + uniform + ";";
    }).join("\n")}
varying vec4 v_prop_hitColor;
${this.varyings_.map(function(varying) {
      return "varying " + varying.type + " " + varying.name + ";";
    }).join("\n")}
${this.fragmentShaderFunctions_.join("\n")}
vec2 pxToWorld(vec2 pxPos) {
  vec2 screenPos = 2.0 * pxPos / u_viewportSizePx - 1.0;
  return (u_screenToWorldMatrix * vec4(screenPos, 0.0, 1.0)).xy;
}

vec2 worldToPx(vec2 worldPos) {
  vec4 screenPos = u_projectionMatrix * vec4(worldPos, 0.0, 1.0);
  return (0.5 * screenPos.xy + 0.5) * u_viewportSizePx;
}

void main(void) {
  vec2 pxPos = gl_FragCoord.xy / u_pixelRatio;
  vec2 pxOrigin = worldToPx(u_patternOrigin);
  #ifdef GL_FRAGMENT_PRECISION_HIGH
  vec2 worldPos = pxToWorld(pxPos);
  if (
    abs(u_renderExtent[0] - u_renderExtent[2]) > 0.0 && (
      worldPos[0] < u_renderExtent[0] ||
      worldPos[1] < u_renderExtent[1] ||
      worldPos[0] > u_renderExtent[2] ||
      worldPos[1] > u_renderExtent[3]
    )
  ) {
    discard;
  }
  #endif
  if (${this.discardExpression_}) { discard; }
  gl_FragColor = ${this.fillColorExpression_};
  gl_FragColor.a *= u_globalAlpha;
  gl_FragColor.rgb *= gl_FragColor.a;
  if (u_hitDetection > 0) {
    if (gl_FragColor.a < 0.1) { discard; };
    gl_FragColor = v_prop_hitColor;
  }
}`;
  }
};

// node_modules/ol/layer/Heatmap.js
var Property = {
  BLUR: "blur",
  GRADIENT: "gradient",
  RADIUS: "radius"
};
var DEFAULT_GRADIENT = ["#00f", "#0ff", "#0f0", "#ff0", "#f00"];
var Heatmap = class extends BaseVector_default {
  /**
   * @param {Options<FeatureType, VectorSourceType>} [options] Options.
   */
  constructor(options) {
    options = options ? options : {};
    const baseOptions = Object.assign({}, options);
    delete baseOptions.gradient;
    delete baseOptions.radius;
    delete baseOptions.blur;
    delete baseOptions.weight;
    super(baseOptions);
    this.gradient_ = null;
    this.addChangeListener(Property.GRADIENT, this.handleGradientChanged_);
    this.setGradient(options.gradient ? options.gradient : DEFAULT_GRADIENT);
    this.setBlur(options.blur !== void 0 ? options.blur : 15);
    this.setRadius(options.radius !== void 0 ? options.radius : 8);
    const weight = options.weight ? options.weight : "weight";
    this.weightFunction_ = typeof weight === "string" ? (
      /**
       * @param {import('../Feature.js').default} feature Feature
       * @return {any} weight
       */
      (feature) => feature.get(weight)
    ) : weight;
    this.setRenderOrder(null);
  }
  /**
   * Return the blur size in pixels.
   * @return {number} Blur size in pixels.
   * @api
   * @observable
   */
  getBlur() {
    return (
      /** @type {number} */
      this.get(Property.BLUR)
    );
  }
  /**
   * Return the gradient colors as array of strings.
   * @return {Array<string>} Colors.
   * @api
   * @observable
   */
  getGradient() {
    return (
      /** @type {Array<string>} */
      this.get(Property.GRADIENT)
    );
  }
  /**
   * Return the size of the radius in pixels.
   * @return {number} Radius size in pixel.
   * @api
   * @observable
   */
  getRadius() {
    return (
      /** @type {number} */
      this.get(Property.RADIUS)
    );
  }
  /**
   * @private
   */
  handleGradientChanged_() {
    this.gradient_ = createGradient(this.getGradient());
  }
  /**
   * Set the blur size in pixels.
   * @param {number} blur Blur size in pixels.
   * @api
   * @observable
   */
  setBlur(blur) {
    this.set(Property.BLUR, blur);
  }
  /**
   * Set the gradient colors as array of strings.
   * @param {Array<string>} colors Gradient.
   * @api
   * @observable
   */
  setGradient(colors) {
    this.set(Property.GRADIENT, colors);
  }
  /**
   * Set the size of the radius in pixels.
   * @param {number} radius Radius size in pixel.
   * @api
   * @observable
   */
  setRadius(radius) {
    this.set(Property.RADIUS, radius);
  }
  /**
   * @override
   */
  createRenderer() {
    const builder = new ShaderBuilder().addAttribute("float a_prop_weight").addVarying("v_prop_weight", "float", "a_prop_weight").addUniform("float u_size").addUniform("float u_blurSlope").setSymbolSizeExpression("vec2(u_size)").setSymbolColorExpression("vec4(smoothstep(0., 1., (1. - length(coordsPx * 2. / v_quadSizePx)) * u_blurSlope) * v_prop_weight)");
    return new PointsLayer_default(this, {
      className: this.getClassName(),
      attributes: [{
        name: "weight",
        callback: (feature) => {
          const weight = this.weightFunction_(feature);
          return weight !== void 0 ? clamp(weight, 0, 1) : 1;
        }
      }],
      uniforms: {
        u_size: () => {
          return (this.get(Property.RADIUS) + this.get(Property.BLUR)) * 2;
        },
        u_blurSlope: () => {
          return this.get(Property.RADIUS) / Math.max(1, this.get(Property.BLUR));
        }
      },
      hitDetectionEnabled: true,
      vertexShader: builder.getSymbolVertexShader(),
      fragmentShader: builder.getSymbolFragmentShader(),
      postProcesses: [{
        fragmentShader: `
            precision mediump float;

            uniform sampler2D u_image;
            uniform sampler2D u_gradientTexture;
            uniform float u_opacity;

            varying vec2 v_texCoord;

            void main() {
              vec4 color = texture2D(u_image, v_texCoord);
              gl_FragColor.a = color.a * u_opacity;
              gl_FragColor.rgb = texture2D(u_gradientTexture, vec2(0.5, color.a)).rgb;
              gl_FragColor.rgb *= gl_FragColor.a;
            }`,
        uniforms: {
          u_gradientTexture: () => this.gradient_,
          u_opacity: () => this.getOpacity()
        }
      }]
    });
  }
  /**
   * @override
   */
  renderDeclutter() {
  }
};
function createGradient(colors) {
  const width = 1;
  const height = 256;
  const context = createCanvasContext2D(width, height);
  const gradient = context.createLinearGradient(0, 0, width, height);
  const step = 1 / (colors.length - 1);
  for (let i = 0, ii = colors.length; i < ii; ++i) {
    gradient.addColorStop(i * step, colors[i]);
  }
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);
  return context.canvas;
}
var Heatmap_default = Heatmap;

// node_modules/ol/renderer/canvas/VectorImageLayer.js
var CanvasVectorImageLayerRenderer = class extends ImageLayer_default {
  /**
   * @param {import("../../layer/VectorImage.js").default} layer Vector image layer.
   */
  constructor(layer) {
    super(layer);
    this.vectorRenderer_ = new VectorLayer_default(layer);
    this.layerImageRatio_ = layer.getImageRatio();
    this.coordinateToVectorPixelTransform_ = create();
    this.renderedPixelToCoordinateTransform_ = null;
  }
  /**
   * Clean up.
   * @override
   */
  disposeInternal() {
    this.vectorRenderer_.dispose();
    super.disposeInternal();
  }
  /**
   * Asynchronous layer level hit detection.
   * @param {import("../../pixel.js").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../../Feature").default>>} Promise that resolves with an array of features.
   * @override
   */
  getFeatures(pixel) {
    if (!this.vectorRenderer_) {
      return Promise.resolve([]);
    }
    const vectorPixel = apply(this.coordinateToVectorPixelTransform_, apply(this.renderedPixelToCoordinateTransform_, pixel.slice()));
    return this.vectorRenderer_.getFeatures(vectorPixel);
  }
  /**
   * Perform action necessary to get the layer rendered after new fonts have loaded
   * @override
   */
  handleFontsChanged() {
    this.vectorRenderer_.handleFontsChanged();
  }
  /**
   * Determine whether render should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   * @override
   */
  prepareFrame(frameState) {
    const pixelRatio = frameState.pixelRatio;
    const viewState = frameState.viewState;
    const viewResolution = viewState.resolution;
    const hints = frameState.viewHints;
    const vectorRenderer = this.vectorRenderer_;
    let renderedExtent = frameState.extent;
    if (this.layerImageRatio_ !== 1) {
      renderedExtent = renderedExtent.slice(0);
      scaleFromCenter(renderedExtent, this.layerImageRatio_);
    }
    const width = getWidth(renderedExtent) / viewResolution;
    const height = getHeight(renderedExtent) / viewResolution;
    if (!hints[ViewHint_default.ANIMATING] && !hints[ViewHint_default.INTERACTING] && !isEmpty2(renderedExtent)) {
      vectorRenderer.useContainer(null, null);
      const context = vectorRenderer.context;
      const layerState = frameState.layerStatesArray[frameState.layerIndex];
      const imageLayerState = Object.assign({}, layerState, {
        opacity: 1
      });
      const imageFrameState = (
        /** @type {import("../../Map.js").FrameState} */
        Object.assign({}, frameState, {
          extent: renderedExtent,
          size: [width, height],
          viewState: (
            /** @type {import("../../View.js").State} */
            Object.assign({}, frameState.viewState, {
              rotation: 0
            })
          ),
          layerStatesArray: [imageLayerState],
          layerIndex: 0,
          declutter: null
        })
      );
      const declutter = this.getLayer().getDeclutter();
      if (declutter) {
        imageFrameState.declutter = {
          [declutter]: new RBush(9)
        };
      }
      let emptyImage = true;
      const image = new ImageCanvas_default(renderedExtent, viewResolution, pixelRatio, context.canvas, function(callback) {
        if (vectorRenderer.prepareFrame(imageFrameState) && vectorRenderer.replayGroupChanged) {
          vectorRenderer.clipping = false;
          if (vectorRenderer.renderFrame(imageFrameState, null)) {
            vectorRenderer.renderDeclutter(imageFrameState);
            vectorRenderer.renderDeferred(imageFrameState);
            emptyImage = false;
          }
          callback();
        }
      });
      image.addEventListener(EventType_default.CHANGE, () => {
        if (image.getState() !== ImageState_default.LOADED) {
          return;
        }
        this.image = emptyImage ? null : image;
        const imagePixelRatio = image.getPixelRatio();
        const renderedResolution = fromResolutionLike(image.getResolution()) * pixelRatio / imagePixelRatio;
        this.renderedResolution = renderedResolution;
        this.coordinateToVectorPixelTransform_ = compose(this.coordinateToVectorPixelTransform_, width / 2, height / 2, 1 / renderedResolution, -1 / renderedResolution, 0, -viewState.center[0], -viewState.center[1]);
      });
      image.load();
    }
    if (this.image) {
      this.renderedPixelToCoordinateTransform_ = frameState.pixelToCoordinateTransform.slice();
    }
    return !!this.image;
  }
  /**
   * @override
   */
  preRender() {
  }
  /**
   * @override
   */
  postRender() {
  }
  /**
   */
  renderDeclutter() {
  }
  /**
   * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {import("../vector.js").FeatureCallback<T>} callback Feature callback.
   * @param {Array<import("../Map.js").HitMatch<T>>} matches The hit detected matches with tolerance.
   * @return {T|undefined} Callback result.
   * @template T
   * @override
   */
  forEachFeatureAtCoordinate(coordinate, frameState, hitTolerance, callback, matches) {
    if (this.vectorRenderer_) {
      return this.vectorRenderer_.forEachFeatureAtCoordinate(coordinate, frameState, hitTolerance, callback, matches);
    }
    return super.forEachFeatureAtCoordinate(coordinate, frameState, hitTolerance, callback, matches);
  }
};
var VectorImageLayer_default = CanvasVectorImageLayerRenderer;

// node_modules/ol/layer/VectorImage.js
var VectorImageLayer = class extends BaseVector_default {
  /**
   * @param {Options<FeatureType, VectorSourceType>} [options] Options.
   */
  constructor(options) {
    options = options ? options : {};
    const baseOptions = Object.assign({}, options);
    delete baseOptions.imageRatio;
    super(baseOptions);
    this.imageRatio_ = options.imageRatio !== void 0 ? options.imageRatio : 1;
  }
  /**
   * @return {number} Ratio between rendered extent size and viewport extent size.
   */
  getImageRatio() {
    return this.imageRatio_;
  }
  /**
   * @override
   */
  createRenderer() {
    return new VectorImageLayer_default(this);
  }
};
var VectorImage_default = VectorImageLayer;

// node_modules/ol/renderer/canvas/VectorTileLayer.js
var IMAGE_REPLAYS = {
  "image": ["Polygon", "Circle", "LineString", "Image", "Text"],
  "hybrid": ["Polygon", "LineString"],
  "vector": []
};
var VECTOR_REPLAYS = {
  "hybrid": ["Image", "Text", "Default"],
  "vector": ["Polygon", "Circle", "LineString", "Image", "Text", "Default"]
};
var CanvasVectorTileLayerRenderer = class extends TileLayer_default {
  /**
   * @param {import("../../layer/VectorTile.js").default} layer VectorTile layer.
   * @param {import("./TileLayer.js").Options} options Options.
   */
  constructor(layer, options) {
    super(layer, options);
    this.boundHandleStyleImageChange_ = this.handleStyleImageChange_.bind(this);
    this.renderedLayerRevision_;
    this.renderedPixelToCoordinateTransform_ = null;
    this.renderedRotation_;
    this.renderedOpacity_ = 1;
    this.tmpTransform_ = create();
    this.tileClipContexts_ = null;
  }
  /**
   * @param {import("../../VectorRenderTile.js").default} tile Tile.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {number} x Left of the tile.
   * @param {number} y Top of the tile.
   * @param {number} w Width of the tile.
   * @param {number} h Height of the tile.
   * @param {number} gutter Tile gutter.
   * @param {boolean} transition Apply an alpha transition.
   * @override
   */
  drawTile(tile, frameState, x, y, w, h, gutter, transition) {
    this.updateExecutorGroup_(tile, frameState.pixelRatio, frameState.viewState.projection);
    if (this.tileImageNeedsRender_(tile)) {
      this.renderTileImage_(tile, frameState);
    }
    super.drawTile(tile, frameState, x, y, w, h, gutter, transition);
  }
  /**
   * @param {number} z Tile coordinate z.
   * @param {number} x Tile coordinate x.
   * @param {number} y Tile coordinate y.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {import("../../Tile.js").default|null} Tile (or null if outside source extent).
   * @override
   */
  getTile(z, x, y, frameState) {
    const tile = (
      /** @type {import("../../VectorRenderTile.js").default} */
      this.getOrCreateTile(z, x, y, frameState)
    );
    if (!tile) {
      return null;
    }
    const viewState = frameState.viewState;
    const resolution = viewState.resolution;
    const viewHints = frameState.viewHints;
    const hifi = !(viewHints[ViewHint_default.ANIMATING] || viewHints[ViewHint_default.INTERACTING]);
    if (hifi || !tile.wantedResolution) {
      tile.wantedResolution = resolution;
    }
    return tile;
  }
  /**
   * Determine whether render should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   * @override
   */
  prepareFrame(frameState) {
    const layerRevision = this.getLayer().getRevision();
    if (this.renderedLayerRevision_ !== layerRevision) {
      this.renderedLayerRevision_ = layerRevision;
      this.renderedTiles.length = 0;
    }
    return super.prepareFrame(frameState);
  }
  /**
   * @param {import("../../VectorRenderTile.js").default} tile Tile.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../../proj/Projection.js").default} projection Projection.
   * @private
   */
  updateExecutorGroup_(tile, pixelRatio, projection) {
    const layer = (
      /** @type {import("../../layer/VectorTile.js").default} */
      this.getLayer()
    );
    const revision = layer.getRevision();
    const renderOrder = layer.getRenderOrder() || null;
    const resolution = tile.wantedResolution;
    const builderState = tile.getReplayState(layer);
    if (!builderState.dirty && builderState.renderedResolution === resolution && builderState.renderedRevision == revision && builderState.renderedRenderOrder == renderOrder) {
      return;
    }
    const source = layer.getSource();
    const declutter = !!layer.getDeclutter();
    const sourceTileGrid = source.getTileGrid();
    const tileGrid = source.getTileGridForProjection(projection);
    const tileExtent = tileGrid.getTileCoordExtent(tile.wrappedTileCoord);
    const sourceTiles = source.getSourceTiles(pixelRatio, projection, tile);
    const layerUid = getUid(layer);
    delete tile.hitDetectionImageData[layerUid];
    tile.executorGroups[layerUid] = [];
    builderState.dirty = false;
    for (let t = 0, tt = sourceTiles.length; t < tt; ++t) {
      const sourceTile = sourceTiles[t];
      if (sourceTile.getState() != TileState_default.LOADED) {
        continue;
      }
      const sourceTileCoord = sourceTile.tileCoord;
      const sourceTileExtent = sourceTileGrid.getTileCoordExtent(sourceTileCoord);
      const sharedExtent = getIntersection(tileExtent, sourceTileExtent);
      const builderExtent = buffer(sharedExtent, layer.getRenderBuffer() * resolution, this.tempExtent);
      const bufferedExtent = equals2(sourceTileExtent, sharedExtent) ? null : builderExtent;
      const builderGroup = new BuilderGroup_default(0, sharedExtent, resolution, pixelRatio);
      const squaredTolerance = getSquaredTolerance(resolution, pixelRatio);
      const render = function(feature, index) {
        let styles;
        const styleFunction = feature.getStyleFunction() || layer.getStyleFunction();
        if (styleFunction) {
          styles = styleFunction(feature, resolution);
        }
        if (styles) {
          const dirty = this.renderFeature(feature, squaredTolerance, styles, builderGroup, declutter, index);
          builderState.dirty = builderState.dirty || dirty;
        }
      };
      const features = sourceTile.getFeatures();
      if (renderOrder && renderOrder !== builderState.renderedRenderOrder) {
        features.sort(renderOrder);
      }
      for (let i = 0, ii = features.length; i < ii; ++i) {
        const feature = features[i];
        if (!bufferedExtent || intersects(bufferedExtent, feature.getGeometry().getExtent())) {
          render.call(this, feature, i);
        }
      }
      const executorGroupInstructions = builderGroup.finish();
      const replayExtent = layer.getRenderMode() !== "vector" && declutter && sourceTiles.length === 1 ? null : sharedExtent;
      const renderingReplayGroup = new ExecutorGroup_default(replayExtent, resolution, pixelRatio, source.getOverlaps(), executorGroupInstructions, layer.getRenderBuffer(), true);
      tile.executorGroups[layerUid].push(renderingReplayGroup);
    }
    builderState.renderedRevision = revision;
    builderState.renderedRenderOrder = renderOrder;
    builderState.renderedResolution = resolution;
  }
  /**
   * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {import("../vector.js").FeatureCallback<T>} callback Feature callback.
   * @param {Array<import("../Map.js").HitMatch<T>>} matches The hit detected matches with tolerance.
   * @return {T|undefined} Callback result.
   * @template T
   * @override
   */
  forEachFeatureAtCoordinate(coordinate, frameState, hitTolerance, callback, matches) {
    const resolution = frameState.viewState.resolution;
    const rotation = frameState.viewState.rotation;
    hitTolerance = hitTolerance == void 0 ? 0 : hitTolerance;
    const layer = this.getLayer();
    const source = layer.getSource();
    const tileGrid = source.getTileGridForProjection(frameState.viewState.projection);
    const hitExtent = boundingExtent([coordinate]);
    buffer(hitExtent, resolution * hitTolerance, hitExtent);
    const features = {};
    const featureCallback = function(feature, geometry, distanceSq) {
      let key = feature.getId();
      if (key === void 0) {
        key = getUid(feature);
      }
      const match = features[key];
      if (!match) {
        if (distanceSq === 0) {
          features[key] = true;
          return callback(feature, layer, geometry);
        }
        matches.push(features[key] = {
          feature,
          layer,
          geometry,
          distanceSq,
          callback
        });
      } else if (match !== true && distanceSq < match.distanceSq) {
        if (distanceSq === 0) {
          features[key] = true;
          matches.splice(matches.lastIndexOf(match), 1);
          return callback(feature, layer, geometry);
        }
        match.geometry = geometry;
        match.distanceSq = distanceSq;
      }
      return void 0;
    };
    const renderedTiles = (
      /** @type {Array<import("../../VectorRenderTile.js").default>} */
      this.renderedTiles
    );
    let found;
    for (let i = 0, ii = renderedTiles.length; !found && i < ii; ++i) {
      const tile = renderedTiles[i];
      const tileExtent = tileGrid.getTileCoordExtent(tile.wrappedTileCoord);
      if (!intersects(tileExtent, hitExtent)) {
        continue;
      }
      const layerUid = getUid(layer);
      const executorGroups = [tile.executorGroups[layerUid]];
      const declutter = layer.getDeclutter();
      executorGroups.some((executorGroups2) => {
        const declutteredFeatures = declutter ? frameState.declutter[declutter].all().map((item) => item.value) : null;
        for (let t = 0, tt = executorGroups2.length; t < tt; ++t) {
          const executorGroup = executorGroups2[t];
          found = executorGroup.forEachFeatureAtCoordinate(coordinate, resolution, rotation, hitTolerance, featureCallback, declutteredFeatures);
          if (found) {
            return true;
          }
        }
      });
    }
    return found;
  }
  /**
   * Asynchronous layer level hit detection.
   * @param {import("../../pixel.js").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../../Feature.js").FeatureLike>>} Promise that resolves with an array of features.
   * @override
   */
  getFeatures(pixel) {
    return new Promise((resolve, reject) => {
      const layer = this.getLayer();
      const layerUid = getUid(layer);
      const source = layer.getSource();
      const projection = this.renderedProjection;
      const projectionExtent = projection.getExtent();
      const resolution = this.renderedResolution;
      const tileGrid = source.getTileGridForProjection(projection);
      const coordinate = apply(this.renderedPixelToCoordinateTransform_, pixel.slice());
      const tileCoord = tileGrid.getTileCoordForCoordAndResolution(coordinate, resolution);
      let tile;
      for (let i = 0, ii = this.renderedTiles.length; i < ii; ++i) {
        if (tileCoord.toString() === this.renderedTiles[i].tileCoord.toString()) {
          tile = /** @type {import("../../VectorRenderTile.js").default} */
          this.renderedTiles[i];
          if (tile.getState() === TileState_default.LOADED) {
            const extent2 = tileGrid.getTileCoordExtent(tile.tileCoord);
            if (source.getWrapX() && projection.canWrapX() && !containsExtent(projectionExtent, extent2)) {
              wrapX2(coordinate, projection);
            }
            break;
          }
          tile = void 0;
        }
      }
      if (!tile || tile.loadingSourceTiles > 0) {
        resolve([]);
        return;
      }
      const extent = tileGrid.getTileCoordExtent(tile.wrappedTileCoord);
      const corner = getTopLeft(extent);
      const tilePixel = [(coordinate[0] - corner[0]) / resolution, (corner[1] - coordinate[1]) / resolution];
      const features = tile.getSourceTiles().reduce(function(accumulator, sourceTile) {
        return accumulator.concat(sourceTile.getFeatures());
      }, []);
      let hitDetectionImageData = tile.hitDetectionImageData[layerUid];
      if (!hitDetectionImageData) {
        const tileSize = toSize(tileGrid.getTileSize(tileGrid.getZForResolution(resolution, source.zDirection)));
        const rotation = this.renderedRotation_;
        const transforms = [this.getRenderTransform(tileGrid.getTileCoordCenter(tile.wrappedTileCoord), resolution, 0, HIT_DETECT_RESOLUTION, tileSize[0] * HIT_DETECT_RESOLUTION, tileSize[1] * HIT_DETECT_RESOLUTION, 0)];
        hitDetectionImageData = createHitDetectionImageData(tileSize, transforms, features, layer.getStyleFunction(), tileGrid.getTileCoordExtent(tile.wrappedTileCoord), tile.getReplayState(layer).renderedResolution, rotation);
        tile.hitDetectionImageData[layerUid] = hitDetectionImageData;
      }
      resolve(hitDetect(tilePixel, features, hitDetectionImageData));
    });
  }
  /**
   * @param {import("../../extent.js").Extent} extent Extent.
   * @return {Array<import('../../Feature.js').FeatureLike>} Features.
   */
  getFeaturesInExtent(extent) {
    const features = [];
    const tileCache = this.getTileCache();
    if (tileCache.getCount() === 0) {
      return features;
    }
    const tileGrid = this.getLayer().getSource().tileGrid;
    const z = tileGrid.getZForResolution(this.renderedResolution);
    tileCache.forEach((tile) => {
      if (tile.tileCoord[0] !== z || tile.getState() !== TileState_default.LOADED) {
        return;
      }
      const sourceTiles = tile.getSourceTiles();
      for (let i = 0, ii = sourceTiles.length; i < ii; ++i) {
        const sourceTile = sourceTiles[i];
        const tileCoord = sourceTile.tileCoord;
        if (intersects(extent, tileGrid.getTileCoordExtent(tileCoord))) {
          const tileFeatures = sourceTile.getFeatures();
          if (tileFeatures) {
            for (let j = 0, jj = tileFeatures.length; j < jj; ++j) {
              const candidate = tileFeatures[j];
              const geometry = candidate.getGeometry();
              if (intersects(extent, geometry.getExtent())) {
                features.push(candidate);
              }
            }
          }
        }
      }
    });
    return features;
  }
  /**
   * Perform action necessary to get the layer rendered after new fonts have loaded
   * @override
   */
  handleFontsChanged() {
    const layer = this.getLayer();
    if (layer.getVisible() && this.renderedLayerRevision_ !== void 0) {
      layer.changed();
    }
  }
  /**
   * Handle changes in image style state.
   * @param {import("../../events/Event.js").default} event Image style change event.
   * @private
   */
  handleStyleImageChange_(event) {
    this.renderIfReadyAndVisible();
  }
  /**
   * Render declutter items for this layer
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {import("../../layer/Layer.js").State} layerState Layer state.
   */
  renderDeclutter(frameState, layerState) {
    const context = this.context;
    const alpha = context.globalAlpha;
    context.globalAlpha = layerState.opacity;
    const viewHints = frameState.viewHints;
    const hifi = !(viewHints[ViewHint_default.ANIMATING] || viewHints[ViewHint_default.INTERACTING]);
    const tiles = (
      /** @type {Array<import("../../VectorRenderTile.js").default>} */
      this.renderedTiles
    );
    for (let i = 0, ii = tiles.length; i < ii; ++i) {
      const tile = tiles[i];
      const executorGroups = tile.executorGroups[getUid(this.getLayer())];
      const declutter = this.getLayer().getDeclutter();
      if (executorGroups) {
        for (let j = executorGroups.length - 1; j >= 0; --j) {
          executorGroups[j].execute(this.context, [this.context.canvas.width, this.context.canvas.height], this.getTileRenderTransform(tile, frameState), frameState.viewState.rotation, hifi, DECLUTTER, declutter ? frameState.declutter[declutter] : void 0);
        }
      }
    }
    context.globalAlpha = alpha;
  }
  /**
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @override
   */
  renderDeferredInternal(frameState) {
    const tiles = (
      /** @type {Array<import("../../VectorRenderTile.js").default>} */
      this.renderedTiles
    );
    const executorGroups = tiles.reduce((acc, tile, index) => {
      tile.executorGroups[getUid(this.getLayer())].forEach((executorGroup) => acc.push({
        executorGroup,
        index
      }));
      return acc;
    }, []);
    const executorGroupZIndexContexts = executorGroups.map(({
      executorGroup
    }) => executorGroup.getDeferredZIndexContexts());
    const usedZIndices = {};
    for (let i = 0, ii = executorGroups.length; i < ii; ++i) {
      const executorGroupZindexContext = executorGroups[i].executorGroup.getDeferredZIndexContexts();
      for (const key in executorGroupZindexContext) {
        usedZIndices[key] = true;
      }
    }
    const zIndexKeys = Object.keys(usedZIndices).sort(ascending);
    zIndexKeys.map(Number).forEach((zIndex) => {
      executorGroupZIndexContexts.forEach((zIndexContexts, i) => {
        if (!zIndexContexts[zIndex]) {
          return;
        }
        zIndexContexts[zIndex].forEach((zIndexContext) => {
          const {
            executorGroup,
            index
          } = executorGroups[i];
          const context = executorGroup.getRenderedContext();
          const alpha = context.globalAlpha;
          context.globalAlpha = this.renderedOpacity_;
          const tileClipContext = this.tileClipContexts_[index];
          if (tileClipContext) {
            tileClipContext.draw(context);
          }
          zIndexContext.draw(context);
          if (tileClipContext) {
            context.restore();
          }
          context.globalAlpha = alpha;
          zIndexContext.clear();
        });
        zIndexContexts[zIndex].length = 0;
      });
    });
  }
  getTileRenderTransform(tile, frameState) {
    const pixelRatio = frameState.pixelRatio;
    const viewState = frameState.viewState;
    const center = viewState.center;
    const resolution = viewState.resolution;
    const rotation = viewState.rotation;
    const size = frameState.size;
    const width = Math.round(size[0] * pixelRatio);
    const height = Math.round(size[1] * pixelRatio);
    const source = this.getLayer().getSource();
    const tileGrid = source.getTileGridForProjection(frameState.viewState.projection);
    const tileCoord = tile.tileCoord;
    const tileExtent = tileGrid.getTileCoordExtent(tile.wrappedTileCoord);
    const worldOffset = tileGrid.getTileCoordExtent(tileCoord, this.tempExtent)[0] - tileExtent[0];
    const transform = multiply(scale(this.inversePixelTransform.slice(), 1 / pixelRatio, 1 / pixelRatio), this.getRenderTransform(center, resolution, rotation, pixelRatio, width, height, worldOffset));
    return transform;
  }
  /**
   * Render the vectors for this layer.
   * @param {CanvasRenderingContext2D} context Target context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @override
   */
  postRender(context, frameState) {
    const viewHints = frameState.viewHints;
    const hifi = !(viewHints[ViewHint_default.ANIMATING] || viewHints[ViewHint_default.INTERACTING]);
    this.renderedPixelToCoordinateTransform_ = frameState.pixelToCoordinateTransform.slice();
    this.renderedRotation_ = frameState.viewState.rotation;
    this.renderedOpacity_ = frameState.layerStatesArray[frameState.layerIndex].opacity;
    const layer = (
      /** @type {import("../../layer/VectorTile.js").default} */
      this.getLayer()
    );
    const renderMode = layer.getRenderMode();
    const alpha = context.globalAlpha;
    context.globalAlpha = this.renderedOpacity_;
    const declutter = layer.getDeclutter();
    const replayTypes = declutter ? VECTOR_REPLAYS[renderMode].filter((type) => !DECLUTTER.includes(type)) : VECTOR_REPLAYS[renderMode];
    const viewState = frameState.viewState;
    const rotation = viewState.rotation;
    const tileSource = layer.getSource();
    const tileGrid = tileSource.getTileGridForProjection(viewState.projection);
    const z = tileGrid.getZForResolution(viewState.resolution, tileSource.zDirection);
    const tiles = this.renderedTiles;
    const clips = [];
    const clipZs = [];
    const tileClipContexts = [];
    let ready = true;
    for (let i = tiles.length - 1; i >= 0; --i) {
      const tile = (
        /** @type {import("../../VectorRenderTile.js").default} */
        tiles[i]
      );
      ready = ready && !tile.getReplayState(layer).dirty;
      const executorGroups = tile.executorGroups[getUid(layer)].filter((group) => group.hasExecutors(replayTypes));
      if (executorGroups.length === 0) {
        continue;
      }
      const transform = this.getTileRenderTransform(tile, frameState);
      const currentZ = tile.tileCoord[0];
      let contextSaved = false;
      const currentClip = executorGroups[0].getClipCoords(transform);
      let clipContext = context;
      let tileClipContext;
      if (currentClip) {
        tileClipContext = new ZIndexContext_default();
        clipContext = tileClipContext.getContext();
        for (let j = 0, jj = clips.length; j < jj; ++j) {
          if (z !== currentZ && currentZ < clipZs[j]) {
            const clip = clips[j];
            if (intersects([currentClip[0], currentClip[3], currentClip[4], currentClip[7]], [clip[0], clip[3], clip[4], clip[7]])) {
              if (!contextSaved) {
                clipContext.save();
                contextSaved = true;
              }
              clipContext.beginPath();
              clipContext.moveTo(currentClip[0], currentClip[1]);
              clipContext.lineTo(currentClip[2], currentClip[3]);
              clipContext.lineTo(currentClip[4], currentClip[5]);
              clipContext.lineTo(currentClip[6], currentClip[7]);
              clipContext.moveTo(clip[6], clip[7]);
              clipContext.lineTo(clip[4], clip[5]);
              clipContext.lineTo(clip[2], clip[3]);
              clipContext.lineTo(clip[0], clip[1]);
              clipContext.clip();
            }
          }
        }
        clips.push(currentClip);
        clipZs.push(currentZ);
      }
      for (let t = 0, tt = executorGroups.length; t < tt; ++t) {
        const executorGroup = executorGroups[t];
        executorGroup.execute(context, [context.canvas.width, context.canvas.height], transform, rotation, hifi, replayTypes, frameState.declutter?.[declutter]);
      }
      if (contextSaved) {
        if (clipContext === context) {
          clipContext.restore();
        } else {
          tileClipContexts[i] = tileClipContext;
        }
      }
    }
    context.globalAlpha = alpha;
    this.ready = ready;
    this.tileClipContexts_ = tileClipContexts;
    if (!frameState.declutter) {
      this.renderDeferredInternal(frameState);
    }
    super.postRender(context, frameState);
  }
  /**
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {number} squaredTolerance Squared tolerance.
   * @param {import("../../style/Style.js").default|Array<import("../../style/Style.js").default>} styles The style or array of styles.
   * @param {import("../../render/canvas/BuilderGroup.js").default} builderGroup Replay group.
   * @param {boolean} [declutter] Enable decluttering.
   * @param {number} [index] Render order index.
   * @return {boolean} `true` if an image is loading.
   */
  renderFeature(feature, squaredTolerance, styles, builderGroup, declutter, index) {
    if (!styles) {
      return false;
    }
    let loading = false;
    if (Array.isArray(styles)) {
      for (let i = 0, ii = styles.length; i < ii; ++i) {
        loading = renderFeature(builderGroup, feature, styles[i], squaredTolerance, this.boundHandleStyleImageChange_, void 0, declutter, index) || loading;
      }
    } else {
      loading = renderFeature(builderGroup, feature, styles, squaredTolerance, this.boundHandleStyleImageChange_, void 0, declutter, index);
    }
    return loading;
  }
  /**
   * @param {import("../../VectorRenderTile.js").default} tile Tile.
   * @return {boolean} A new tile image was rendered.
   * @private
   */
  tileImageNeedsRender_(tile) {
    const layer = (
      /** @type {import("../../layer/VectorTile.js").default} */
      this.getLayer()
    );
    if (layer.getRenderMode() === "vector") {
      return false;
    }
    const replayState = tile.getReplayState(layer);
    const revision = layer.getRevision();
    const resolution = tile.wantedResolution;
    return replayState.renderedTileResolution !== resolution || replayState.renderedTileRevision !== revision;
  }
  /**
   * @param {import("../../VectorRenderTile.js").default} tile Tile.
   * @param {import("../../Map").FrameState} frameState Frame state.
   * @private
   */
  renderTileImage_(tile, frameState) {
    const layer = (
      /** @type {import("../../layer/VectorTile.js").default} */
      this.getLayer()
    );
    const replayState = tile.getReplayState(layer);
    const revision = layer.getRevision();
    const executorGroups = tile.executorGroups[getUid(layer)];
    replayState.renderedTileRevision = revision;
    const tileCoord = tile.wrappedTileCoord;
    const z = tileCoord[0];
    const source = layer.getSource();
    let pixelRatio = frameState.pixelRatio;
    const viewState = frameState.viewState;
    const projection = viewState.projection;
    const tileGrid = source.getTileGridForProjection(projection);
    const tileResolution = tileGrid.getResolution(tile.tileCoord[0]);
    const renderPixelRatio = frameState.pixelRatio / tile.wantedResolution * tileResolution;
    const resolution = tileGrid.getResolution(z);
    const context = tile.getContext();
    pixelRatio = Math.round(Math.max(pixelRatio, renderPixelRatio / pixelRatio));
    const size = source.getTilePixelSize(z, pixelRatio, projection);
    context.canvas.width = size[0];
    context.canvas.height = size[1];
    const renderScale = pixelRatio / renderPixelRatio;
    if (renderScale !== 1) {
      const canvasTransform = reset(this.tmpTransform_);
      scale(canvasTransform, renderScale, renderScale);
      context.setTransform.apply(context, canvasTransform);
    }
    const tileExtent = tileGrid.getTileCoordExtent(tileCoord, this.tempExtent);
    const pixelScale = renderPixelRatio / resolution;
    const transform = reset(this.tmpTransform_);
    scale(transform, pixelScale, -pixelScale);
    translate(transform, -tileExtent[0], -tileExtent[3]);
    for (let i = 0, ii = executorGroups.length; i < ii; ++i) {
      const executorGroup = executorGroups[i];
      executorGroup.execute(context, [context.canvas.width * renderScale, context.canvas.height * renderScale], transform, 0, true, IMAGE_REPLAYS[layer.getRenderMode()], null);
    }
    replayState.renderedTileResolution = tile.wantedResolution;
  }
};
var VectorTileLayer_default = CanvasVectorTileLayerRenderer;

// node_modules/ol/layer/VectorTile.js
var VectorTileLayer = class extends BaseVector_default {
  /**
   * @param {Options<VectorTileSourceType, FeatureType>} [options] Options.
   */
  constructor(options) {
    options = options ? options : {};
    const baseOptions = Object.assign({}, options);
    delete baseOptions.preload;
    const cacheSize = options.cacheSize === void 0 ? 0 : options.cacheSize;
    delete options.cacheSize;
    delete baseOptions.useInterimTilesOnError;
    super(baseOptions);
    this.on;
    this.once;
    this.un;
    this.cacheSize_ = cacheSize;
    const renderMode = options.renderMode || "hybrid";
    assert(renderMode == "hybrid" || renderMode == "vector", "`renderMode` must be `'hybrid'` or `'vector'`");
    this.renderMode_ = renderMode;
    this.setPreload(options.preload ? options.preload : 0);
    this.setUseInterimTilesOnError(options.useInterimTilesOnError !== void 0 ? options.useInterimTilesOnError : true);
    this.getBackground;
    this.setBackground;
  }
  /**
   * @override
   */
  createRenderer() {
    return new VectorTileLayer_default(this, {
      cacheSize: this.cacheSize_
    });
  }
  /**
   * Get the topmost feature that intersects the given pixel on the viewport. Returns a promise
   * that resolves with an array of features. The array will either contain the topmost feature
   * when a hit was detected, or it will be empty.
   *
   * The hit detection algorithm used for this method is optimized for performance, but is less
   * accurate than the one used in [map.getFeaturesAtPixel()]{@link import("../Map.js").default#getFeaturesAtPixel}.
   * Text is not considered, and icons are only represented by their bounding box instead of the exact
   * image.
   *
   * @param {import("../pixel.js").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../Feature").FeatureLike>>} Promise that resolves with an array of features.
   * @api
   * @override
   */
  getFeatures(pixel) {
    return super.getFeatures(pixel);
  }
  /**
   * Get features whose bounding box intersects the provided extent. Only features for cached
   * tiles for the last rendered zoom level are available in the source. So this method is only
   * suitable for requesting tiles for extents that are currently rendered.
   *
   * Features are returned in random tile order and as they are included in the tiles. This means
   * they can be clipped, duplicated across tiles, and simplified to the render resolution.
   *
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {Array<FeatureType>} Features.
   * @api
   */
  getFeaturesInExtent(extent) {
    return (
      /** @type {Array<FeatureType>} */
      /** @type {*} */
      this.getRenderer().getFeaturesInExtent(extent)
    );
  }
  /**
   * @return {VectorTileRenderType} The render mode.
   */
  getRenderMode() {
    return this.renderMode_;
  }
  /**
   * Return the level as number to which we will preload tiles up to.
   * @return {number} The level to preload tiles up to.
   * @observable
   * @api
   */
  getPreload() {
    return (
      /** @type {number} */
      this.get(TileProperty_default.PRELOAD)
    );
  }
  /**
   * Deprecated.  Whether we use interim tiles on error.
   * @return {boolean} Use interim tiles on error.
   * @observable
   * @api
   */
  getUseInterimTilesOnError() {
    return (
      /** @type {boolean} */
      this.get(TileProperty_default.USE_INTERIM_TILES_ON_ERROR)
    );
  }
  /**
   * Set the level as number to which we will preload tiles up to.
   * @param {number} preload The level to preload tiles up to.
   * @observable
   * @api
   */
  setPreload(preload) {
    this.set(TileProperty_default.PRELOAD, preload);
  }
  /**
   * Deprecated.  Set whether we use interim tiles on error.
   * @param {boolean} useInterimTilesOnError Use interim tiles on error.
   * @observable
   * @api
   */
  setUseInterimTilesOnError(useInterimTilesOnError) {
    this.set(TileProperty_default.USE_INTERIM_TILES_ON_ERROR, useInterimTilesOnError);
  }
};
var VectorTile_default = VectorTileLayer;

// node_modules/ol/webgl/styleparser.js
function expressionToGlsl(compilationContext, value, expectedType) {
  const parsingContext = newParsingContext();
  return buildExpression(value, expectedType, parsingContext, compilationContext);
}
function packColor(color) {
  const array = asArray(color);
  const r = array[0] * 256;
  const g = array[1];
  const b = array[2] * 256;
  const a = Math.round(array[3] * 255);
  return [r + g, b + a];
}
var UNPACK_COLOR_FN = `vec4 unpackColor(vec2 packedColor) {
  return vec4(
    fract(floor(packedColor[0] / 256.0) / 256.0),
    fract(packedColor[0] / 256.0),
    fract(floor(packedColor[1] / 256.0) / 256.0),
    fract(packedColor[1] / 256.0)
  );
}`;
function getGlslSizeFromType(type) {
  if (type === ColorType || type === SizeType) {
    return 2;
  }
  if (type === NumberArrayType) {
    return 4;
  }
  return 1;
}
function getGlslTypeFromType(type) {
  const size = getGlslSizeFromType(type);
  if (size > 1) {
    return (
      /** @type {'vec2'|'vec3'|'vec4'} */
      `vec${size}`
    );
  }
  return "float";
}
function computeHash(input) {
  const hash = JSON.stringify(input).split("").reduce((prev, curr) => (prev << 5) - prev + curr.charCodeAt(0), 0);
  return (hash >>> 0).toString();
}
function parseCommonSymbolProperties(style, builder, vertContext, prefix) {
  if (`${prefix}radius` in style && prefix !== "icon-") {
    let radius = expressionToGlsl(vertContext, style[`${prefix}radius`], NumberType);
    if (`${prefix}radius2` in style) {
      const radius2 = expressionToGlsl(vertContext, style[`${prefix}radius2`], NumberType);
      radius = `max(${radius}, ${radius2})`;
    }
    if (`${prefix}stroke-width` in style) {
      radius = `(${radius} + ${expressionToGlsl(vertContext, style[`${prefix}stroke-width`], NumberType)} * 0.5)`;
    }
    builder.setSymbolSizeExpression(`vec2(${radius} * 2. + 0.5)`);
  }
  if (`${prefix}scale` in style) {
    const scale2 = expressionToGlsl(vertContext, style[`${prefix}scale`], SizeType);
    builder.setSymbolSizeExpression(`${builder.getSymbolSizeExpression()} * ${scale2}`);
  }
  if (`${prefix}displacement` in style) {
    builder.setSymbolOffsetExpression(expressionToGlsl(vertContext, style[`${prefix}displacement`], NumberArrayType));
  }
  if (`${prefix}rotation` in style) {
    builder.setSymbolRotationExpression(expressionToGlsl(vertContext, style[`${prefix}rotation`], NumberType));
  }
  if (`${prefix}rotate-with-view` in style) {
    builder.setSymbolRotateWithView(!!style[`${prefix}rotate-with-view`]);
  }
}
function getColorFromDistanceField(distanceField, fillColor, strokeColor, strokeWidth, opacity) {
  let color = "vec4(0.)";
  if (fillColor !== null) {
    color = fillColor;
  }
  if (strokeColor !== null && strokeWidth !== null) {
    const strokeFillRatio = `smoothstep(-${strokeWidth} + 0.63, -${strokeWidth} - 0.58, ${distanceField})`;
    color = `mix(${strokeColor}, ${color}, ${strokeFillRatio})`;
  }
  const shapeOpacity = `(1.0 - smoothstep(-0.63, 0.58, ${distanceField}))`;
  let result = `${color} * vec4(1.0, 1.0, 1.0, ${shapeOpacity})`;
  if (opacity !== null) {
    result = `${result} * vec4(1.0, 1.0, 1.0, ${opacity})`;
  }
  return result;
}
function parseImageProperties(style, builder, uniforms, prefix, textureId) {
  const image = new Image();
  image.crossOrigin = style[`${prefix}cross-origin`] === void 0 ? "anonymous" : style[`${prefix}cross-origin`];
  image.src = style[`${prefix}src`];
  uniforms[`u_texture${textureId}_size`] = () => {
    return image.complete ? [image.width, image.height] : [0, 0];
  };
  builder.addUniform(`vec2 u_texture${textureId}_size`);
  const size = `u_texture${textureId}_size`;
  uniforms[`u_texture${textureId}`] = image;
  builder.addUniform(`sampler2D u_texture${textureId}`);
  return size;
}
function parseImageOffsetProperties(style, prefix, context, imageSize, sampleSize) {
  let offsetExpression = expressionToGlsl(context, style[`${prefix}offset`], NumberArrayType);
  if (`${prefix}offset-origin` in style) {
    switch (style[`${prefix}offset-origin`]) {
      case "top-right":
        offsetExpression = `vec2(${imageSize}.x, 0.) + ${sampleSize} * vec2(-1., 0.) + ${offsetExpression} * vec2(-1., 1.)`;
        break;
      case "bottom-left":
        offsetExpression = `vec2(0., ${imageSize}.y) + ${sampleSize} * vec2(0., -1.) + ${offsetExpression} * vec2(1., -1.)`;
        break;
      case "bottom-right":
        offsetExpression = `${imageSize} - ${sampleSize} - ${offsetExpression}`;
        break;
      default:
    }
  }
  return offsetExpression;
}
function parseCircleProperties(style, builder, uniforms, vertContext, fragContext) {
  fragContext.functions["circleDistanceField"] = `float circleDistanceField(vec2 point, float radius) {
  return length(point) - radius;
}`;
  parseCommonSymbolProperties(style, builder, vertContext, "circle-");
  let opacity = null;
  if ("circle-opacity" in style) {
    opacity = expressionToGlsl(fragContext, style["circle-opacity"], NumberType);
  }
  let currentPoint = "coordsPx";
  if ("circle-scale" in style) {
    const scale2 = expressionToGlsl(fragContext, style["circle-scale"], SizeType);
    currentPoint = `coordsPx / ${scale2}`;
  }
  let fillColor = null;
  if ("circle-fill-color" in style) {
    fillColor = expressionToGlsl(fragContext, style["circle-fill-color"], ColorType);
  }
  let strokeColor = null;
  if ("circle-stroke-color" in style) {
    strokeColor = expressionToGlsl(fragContext, style["circle-stroke-color"], ColorType);
  }
  let radius = expressionToGlsl(fragContext, style["circle-radius"], NumberType);
  let strokeWidth = null;
  if ("circle-stroke-width" in style) {
    strokeWidth = expressionToGlsl(fragContext, style["circle-stroke-width"], NumberType);
    radius = `(${radius} + ${strokeWidth} * 0.5)`;
  }
  const distanceField = `circleDistanceField(${currentPoint}, ${radius})`;
  const colorExpression = getColorFromDistanceField(distanceField, fillColor, strokeColor, strokeWidth, opacity);
  builder.setSymbolColorExpression(colorExpression);
}
function parseShapeProperties(style, builder, uniforms, vertContext, fragContext) {
  fragContext.functions["round"] = `float round(float v) {
  return sign(v) * floor(abs(v) + 0.5);
}`;
  fragContext.functions["starDistanceField"] = `float starDistanceField(vec2 point, float numPoints, float radius, float radius2, float angle) {
  float startAngle = -PI * 0.5 + angle; // tip starts upwards and rotates clockwise with angle
  float c = cos(startAngle);
  float s = sin(startAngle);
  vec2 pointRotated = vec2(c * point.x - s * point.y, s * point.x + c * point.y);
  float alpha = TWO_PI / numPoints; // the angle of one sector
  float beta = atan(pointRotated.y, pointRotated.x);
  float gamma = round(beta / alpha) * alpha; // angle in sector
  c = cos(-gamma);
  s = sin(-gamma);
  vec2 inSector = vec2(c * pointRotated.x - s * pointRotated.y, abs(s * pointRotated.x + c * pointRotated.y));
  vec2 tipToPoint = inSector + vec2(-radius, 0.);
  vec2 edgeNormal = vec2(radius2 * sin(alpha * 0.5), -radius2 * cos(alpha * 0.5) + radius);
  return dot(normalize(edgeNormal), tipToPoint);
}`;
  fragContext.functions["regularDistanceField"] = `float regularDistanceField(vec2 point, float numPoints, float radius, float angle) {
  float startAngle = -PI * 0.5 + angle; // tip starts upwards and rotates clockwise with angle
  float c = cos(startAngle);
  float s = sin(startAngle);
  vec2 pointRotated = vec2(c * point.x - s * point.y, s * point.x + c * point.y);
  float alpha = TWO_PI / numPoints; // the angle of one sector
  float radiusIn = radius * cos(PI / numPoints);
  float beta = atan(pointRotated.y, pointRotated.x);
  float gamma = round((beta - alpha * 0.5) / alpha) * alpha + alpha * 0.5; // angle in sector from mid
  c = cos(-gamma);
  s = sin(-gamma);
  vec2 inSector = vec2(c * pointRotated.x - s * pointRotated.y, abs(s * pointRotated.x + c * pointRotated.y));
  return inSector.x - radiusIn;
}`;
  parseCommonSymbolProperties(style, builder, vertContext, "shape-");
  let opacity = null;
  if ("shape-opacity" in style) {
    opacity = expressionToGlsl(fragContext, style["shape-opacity"], NumberType);
  }
  let currentPoint = "coordsPx";
  if ("shape-scale" in style) {
    const scale2 = expressionToGlsl(fragContext, style["shape-scale"], SizeType);
    currentPoint = `coordsPx / ${scale2}`;
  }
  let fillColor = null;
  if ("shape-fill-color" in style) {
    fillColor = expressionToGlsl(fragContext, style["shape-fill-color"], ColorType);
  }
  let strokeColor = null;
  if ("shape-stroke-color" in style) {
    strokeColor = expressionToGlsl(fragContext, style["shape-stroke-color"], ColorType);
  }
  let strokeWidth = null;
  if ("shape-stroke-width" in style) {
    strokeWidth = expressionToGlsl(fragContext, style["shape-stroke-width"], NumberType);
  }
  const numPoints = expressionToGlsl(fragContext, style["shape-points"], NumberType);
  let angle = "0.";
  if ("shape-angle" in style) {
    angle = expressionToGlsl(fragContext, style["shape-angle"], NumberType);
  }
  let shapeField;
  let radius = expressionToGlsl(fragContext, style["shape-radius"], NumberType);
  if (strokeWidth !== null) {
    radius = `${radius} + ${strokeWidth} * 0.5`;
  }
  if ("shape-radius2" in style) {
    let radius2 = expressionToGlsl(fragContext, style["shape-radius2"], NumberType);
    if (strokeWidth !== null) {
      radius2 = `${radius2} + ${strokeWidth} * 0.5`;
    }
    shapeField = `starDistanceField(${currentPoint}, ${numPoints}, ${radius}, ${radius2}, ${angle})`;
  } else {
    shapeField = `regularDistanceField(${currentPoint}, ${numPoints}, ${radius}, ${angle})`;
  }
  const colorExpression = getColorFromDistanceField(shapeField, fillColor, strokeColor, strokeWidth, opacity);
  builder.setSymbolColorExpression(colorExpression);
}
function parseIconProperties(style, builder, uniforms, vertContext, fragContext) {
  let color = "vec4(1.0)";
  if ("icon-color" in style) {
    color = expressionToGlsl(fragContext, style["icon-color"], ColorType);
  }
  if ("icon-opacity" in style) {
    color = `${color} * vec4(1.0, 1.0, 1.0, ${expressionToGlsl(fragContext, style["icon-opacity"], NumberType)})`;
  }
  const textureId = computeHash(style["icon-src"]);
  const sizeExpression = parseImageProperties(style, builder, uniforms, "icon-", textureId);
  builder.setSymbolColorExpression(`${color} * texture2D(u_texture${textureId}, v_texCoord)`).setSymbolSizeExpression(sizeExpression);
  if ("icon-width" in style && "icon-height" in style) {
    builder.setSymbolSizeExpression(`vec2(${expressionToGlsl(vertContext, style["icon-width"], NumberType)}, ${expressionToGlsl(vertContext, style["icon-height"], NumberType)})`);
  }
  if ("icon-offset" in style && "icon-size" in style) {
    const sampleSize = expressionToGlsl(vertContext, style["icon-size"], NumberArrayType);
    const fullsize = builder.getSymbolSizeExpression();
    builder.setSymbolSizeExpression(sampleSize);
    const offset = parseImageOffsetProperties(style, "icon-", vertContext, "v_quadSizePx", sampleSize);
    builder.setTextureCoordinateExpression(`(vec4((${offset}).xyxy) + vec4(0., 0., ${sampleSize})) / (${fullsize}).xyxy`);
  }
  parseCommonSymbolProperties(style, builder, vertContext, "icon-");
  if ("icon-anchor" in style) {
    const anchor = expressionToGlsl(vertContext, style["icon-anchor"], NumberArrayType);
    let scale2 = `1.0`;
    if (`icon-scale` in style) {
      scale2 = expressionToGlsl(vertContext, style[`icon-scale`], SizeType);
    }
    let shiftPx;
    if (style["icon-anchor-x-units"] === "pixels" && style["icon-anchor-y-units"] === "pixels") {
      shiftPx = `${anchor} * ${scale2}`;
    } else if (style["icon-anchor-x-units"] === "pixels") {
      shiftPx = `${anchor} * vec2(vec2(${scale2}).x, v_quadSizePx.y)`;
    } else if (style["icon-anchor-y-units"] === "pixels") {
      shiftPx = `${anchor} * vec2(v_quadSizePx.x, vec2(${scale2}).x)`;
    } else {
      shiftPx = `${anchor} * v_quadSizePx`;
    }
    let offsetPx = `v_quadSizePx * vec2(0.5, -0.5) + ${shiftPx} * vec2(-1., 1.)`;
    if ("icon-anchor-origin" in style) {
      switch (style["icon-anchor-origin"]) {
        case "top-right":
          offsetPx = `v_quadSizePx * -0.5 + ${shiftPx}`;
          break;
        case "bottom-left":
          offsetPx = `v_quadSizePx * 0.5 - ${shiftPx}`;
          break;
        case "bottom-right":
          offsetPx = `v_quadSizePx * vec2(-0.5, 0.5) + ${shiftPx} * vec2(1., -1.)`;
          break;
        default:
      }
    }
    builder.setSymbolOffsetExpression(`${builder.getSymbolOffsetExpression()} + ${offsetPx}`);
  }
}
function parseStrokeProperties(style, builder, uniforms, vertContext, fragContext) {
  if ("stroke-color" in style) {
    builder.setStrokeColorExpression(expressionToGlsl(fragContext, style["stroke-color"], ColorType));
  }
  if ("stroke-pattern-src" in style) {
    const textureId = computeHash(style["stroke-pattern-src"]);
    const sizeExpression = parseImageProperties(style, builder, uniforms, "stroke-pattern-", textureId);
    let sampleSizeExpression = sizeExpression;
    let offsetExpression = "vec2(0.)";
    if ("stroke-pattern-offset" in style && "stroke-pattern-size" in style) {
      sampleSizeExpression = expressionToGlsl(fragContext, style[`stroke-pattern-size`], NumberArrayType);
      offsetExpression = parseImageOffsetProperties(style, "stroke-pattern-", fragContext, sizeExpression, sampleSizeExpression);
    }
    let spacingExpression = "0.";
    if ("stroke-pattern-spacing" in style) {
      spacingExpression = expressionToGlsl(fragContext, style["stroke-pattern-spacing"], NumberType);
    }
    fragContext.functions["sampleStrokePattern"] = `vec4 sampleStrokePattern(sampler2D texture, vec2 textureSize, vec2 textureOffset, vec2 sampleSize, float spacingPx, float currentLengthPx, float currentRadiusRatio, float lineWidth) {
  float currentLengthScaled = currentLengthPx * sampleSize.y / lineWidth;
  float spacingScaled = spacingPx * sampleSize.y / lineWidth;
  float uCoordPx = mod(currentLengthScaled, (sampleSize.x + spacingScaled));
  // make sure that we're not sampling too close to the borders to avoid interpolation with outside pixels
  uCoordPx = clamp(uCoordPx, 0.5, sampleSize.x - 0.5);
  float vCoordPx = (-currentRadiusRatio * 0.5 + 0.5) * sampleSize.y;
  vec2 texCoord = (vec2(uCoordPx, vCoordPx) + textureOffset) / textureSize;
  return texture2D(texture, texCoord);
}`;
    const textureName = `u_texture${textureId}`;
    let tintExpression = "1.";
    if ("stroke-color" in style) {
      tintExpression = builder.getStrokeColorExpression();
    }
    builder.setStrokeColorExpression(`${tintExpression} * sampleStrokePattern(${textureName}, ${sizeExpression}, ${offsetExpression}, ${sampleSizeExpression}, ${spacingExpression}, currentLengthPx, currentRadiusRatio, v_width)`);
  }
  if ("stroke-width" in style) {
    builder.setStrokeWidthExpression(expressionToGlsl(vertContext, style["stroke-width"], NumberType));
  }
  if ("stroke-offset" in style) {
    builder.setStrokeOffsetExpression(expressionToGlsl(vertContext, style["stroke-offset"], NumberType));
  }
  if ("stroke-line-cap" in style) {
    builder.setStrokeCapExpression(expressionToGlsl(vertContext, style["stroke-line-cap"], StringType));
  }
  if ("stroke-line-join" in style) {
    builder.setStrokeJoinExpression(expressionToGlsl(vertContext, style["stroke-line-join"], StringType));
  }
  if ("stroke-miter-limit" in style) {
    builder.setStrokeMiterLimitExpression(expressionToGlsl(vertContext, style["stroke-miter-limit"], NumberType));
  }
  if ("stroke-line-dash" in style) {
    fragContext.functions["getSingleDashDistance"] = `float getSingleDashDistance(float distance, float radius, float dashOffset, float dashLength, float dashLengthTotal, float capType) {
  float localDistance = mod(distance, dashLengthTotal);
  float distanceSegment = abs(localDistance - dashOffset - dashLength * 0.5) - dashLength * 0.5;
  distanceSegment = min(distanceSegment, dashLengthTotal - localDistance);
  if (capType == ${stringToGlsl("square")}) {
    distanceSegment -= v_width * 0.5;
  } else if (capType == ${stringToGlsl("round")}) {
    distanceSegment = min(distanceSegment, sqrt(distanceSegment * distanceSegment + radius * radius) - v_width * 0.5);
  }
  return distanceSegment;
}`;
    let dashPattern = style["stroke-line-dash"].map((v) => expressionToGlsl(fragContext, v, NumberType));
    if (dashPattern.length % 2 === 1) {
      dashPattern = [...dashPattern, ...dashPattern];
    }
    let offsetExpression = "0.";
    if ("stroke-line-dash-offset" in style) {
      offsetExpression = expressionToGlsl(vertContext, style["stroke-line-dash-offset"], NumberType);
    }
    const uniqueDashKey = computeHash(style["stroke-line-dash"]);
    const dashFunctionName = `dashDistanceField_${uniqueDashKey}`;
    const dashLengthsDef = dashPattern.map((v, i) => `float dashLength${i} = ${v};`);
    const totalLengthDef = dashPattern.map((v, i) => `dashLength${i}`).join(" + ");
    let currentDashOffset = "0.";
    let distanceExpression = `getSingleDashDistance(distance, radius, ${currentDashOffset}, dashLength0, totalDashLength, capType)`;
    for (let i = 2; i < dashPattern.length; i += 2) {
      currentDashOffset = `${currentDashOffset} + dashLength${i - 2} + dashLength${i - 1}`;
      distanceExpression = `min(${distanceExpression}, getSingleDashDistance(distance, radius, ${currentDashOffset}, dashLength${i}, totalDashLength, capType))`;
    }
    fragContext.functions[dashFunctionName] = `float ${dashFunctionName}(float distance, float radius, float capType) {
  ${dashLengthsDef.join("\n  ")}
  float totalDashLength = ${totalLengthDef};
  return ${distanceExpression};
}`;
    builder.setStrokeDistanceFieldExpression(`${dashFunctionName}(currentLengthPx + ${offsetExpression}, currentRadiusPx, capType)`);
  }
}
function parseFillProperties(style, builder, uniforms, vertContext, fragContext) {
  if ("fill-color" in style) {
    builder.setFillColorExpression(expressionToGlsl(fragContext, style["fill-color"], ColorType));
  }
  if ("fill-pattern-src" in style) {
    const textureId = computeHash(style["fill-pattern-src"]);
    const sizeExpression = parseImageProperties(style, builder, uniforms, "fill-pattern-", textureId);
    let sampleSizeExpression = sizeExpression;
    let offsetExpression = "vec2(0.)";
    if ("fill-pattern-offset" in style && "fill-pattern-size" in style) {
      sampleSizeExpression = expressionToGlsl(fragContext, style[`fill-pattern-size`], NumberArrayType);
      offsetExpression = parseImageOffsetProperties(style, "fill-pattern-", fragContext, sizeExpression, sampleSizeExpression);
    }
    fragContext.functions["sampleFillPattern"] = `vec4 sampleFillPattern(sampler2D texture, vec2 textureSize, vec2 textureOffset, vec2 sampleSize, vec2 pxOrigin, vec2 pxPosition) {
  float scaleRatio = pow(2., mod(u_zoom + 0.5, 1.) - 0.5);
  vec2 pxRelativePos = pxPosition - pxOrigin;
  // rotate the relative position from origin by the current view rotation
  pxRelativePos = vec2(pxRelativePos.x * cos(u_rotation) - pxRelativePos.y * sin(u_rotation), pxRelativePos.x * sin(u_rotation) + pxRelativePos.y * cos(u_rotation));
  // sample position is computed according to the sample offset & size
  vec2 samplePos = mod(pxRelativePos / scaleRatio, sampleSize);
  // also make sure that we're not sampling too close to the borders to avoid interpolation with outside pixels
  samplePos = clamp(samplePos, vec2(0.5), sampleSize - vec2(0.5));
  samplePos.y = sampleSize.y - samplePos.y; // invert y axis so that images appear upright
  return texture2D(texture, (samplePos + textureOffset) / textureSize);
}`;
    const textureName = `u_texture${textureId}`;
    let tintExpression = "1.";
    if ("fill-color" in style) {
      tintExpression = builder.getFillColorExpression();
    }
    builder.setFillColorExpression(`${tintExpression} * sampleFillPattern(${textureName}, ${sizeExpression}, ${offsetExpression}, ${sampleSizeExpression}, pxOrigin, pxPos)`);
  }
}
function parseLiteralStyle(style) {
  const vertContext = {
    inFragmentShader: false,
    properties: {},
    variables: {},
    functions: {},
    style
  };
  const fragContext = {
    inFragmentShader: true,
    variables: vertContext.variables,
    properties: {},
    functions: {},
    style
  };
  const builder = new ShaderBuilder();
  const uniforms = {};
  if ("icon-src" in style) {
    parseIconProperties(style, builder, uniforms, vertContext, fragContext);
  } else if ("shape-points" in style) {
    parseShapeProperties(style, builder, uniforms, vertContext, fragContext);
  } else if ("circle-radius" in style) {
    parseCircleProperties(style, builder, uniforms, vertContext, fragContext);
  }
  parseStrokeProperties(style, builder, uniforms, vertContext, fragContext);
  parseFillProperties(style, builder, uniforms, vertContext, fragContext);
  if (style.filter) {
    const parsedFilter = expressionToGlsl(fragContext, style.filter, BooleanType);
    builder.setFragmentDiscardExpression(`!${parsedFilter}`);
  }
  for (const varName in fragContext.variables) {
    const variable = fragContext.variables[varName];
    const uniformName = uniformNameForVariable(variable.name);
    builder.addUniform(`${getGlslTypeFromType(variable.type)} ${uniformName}`);
    uniforms[uniformName] = () => {
      const value = style.variables[variable.name];
      if (typeof value === "number") {
        return value;
      }
      if (typeof value === "boolean") {
        return value ? 1 : 0;
      }
      if (variable.type === ColorType) {
        return packColor([...asArray(value || "#eee")]);
      }
      if (typeof value === "string") {
        return getStringNumberEquivalent(value);
      }
      return value;
    };
  }
  for (const propName in fragContext.properties) {
    const property = fragContext.properties[propName];
    if (!vertContext.properties[propName]) {
      vertContext.properties[propName] = property;
    }
    let type = getGlslTypeFromType(property.type);
    let expression = `a_prop_${property.name}`;
    if (property.type === ColorType) {
      type = "vec4";
      expression = `unpackColor(${expression})`;
      builder.addVertexShaderFunction(UNPACK_COLOR_FN);
    }
    builder.addVarying(`v_prop_${property.name}`, type, expression);
  }
  for (const propName in vertContext.properties) {
    const property = vertContext.properties[propName];
    builder.addAttribute(`${getGlslTypeFromType(property.type)} a_prop_${property.name}`);
  }
  for (const functionName in vertContext.functions) {
    builder.addVertexShaderFunction(vertContext.functions[functionName]);
  }
  for (const functionName in fragContext.functions) {
    builder.addFragmentShaderFunction(fragContext.functions[functionName]);
  }
  const attributes = {};
  for (const propName in vertContext.properties) {
    const property = vertContext.properties[propName];
    let callback;
    if (property.evaluator) {
      callback = property.evaluator;
    } else {
      callback = (feature) => {
        const value = feature.get(property.name);
        if (property.type === ColorType) {
          return packColor([...asArray(value || "#eee")]);
        }
        if (typeof value === "string") {
          return getStringNumberEquivalent(value);
        }
        if (typeof value === "boolean") {
          return value ? 1 : 0;
        }
        return value;
      };
    }
    attributes[property.name] = {
      size: getGlslSizeFromType(property.type),
      callback
    };
  }
  return {
    builder,
    attributes,
    uniforms
  };
}

// node_modules/ol/layer/WebGLPoints.js
var WebGLPointsLayer = class extends Layer_default {
  /**
   * @param {Options<VectorSourceType>} options Options.
   */
  constructor(options) {
    const baseOptions = Object.assign({}, options);
    super(baseOptions);
    this.parseResult_ = parseLiteralStyle(options.style);
    this.styleVariables_ = options.style.variables || {};
    this.hitDetectionDisabled_ = !!options.disableHitDetection;
  }
  /**
   * @override
   */
  createRenderer() {
    const attributes = Object.keys(this.parseResult_.attributes).map((name) => __spreadValues({
      name
    }, this.parseResult_.attributes[name]));
    return new PointsLayer_default(this, {
      vertexShader: this.parseResult_.builder.getSymbolVertexShader(),
      fragmentShader: this.parseResult_.builder.getSymbolFragmentShader(),
      hitDetectionEnabled: !this.hitDetectionDisabled_,
      uniforms: this.parseResult_.uniforms,
      attributes: (
        /** @type {Array<import('../renderer/webgl/PointsLayer.js').CustomAttribute>} */
        attributes
      )
    });
  }
  /**
   * Update any variables used by the layer style and trigger a re-render.
   * @param {Object<string, number>} variables Variables to update.
   */
  updateStyleVariables(variables) {
    Object.assign(this.styleVariables_, variables);
    this.changed();
  }
};
var WebGLPoints_default = WebGLPointsLayer;

// node_modules/ol/layer/WebGLTile.js
function parseStyle(style, bandCount) {
  const vertexShader = `
    attribute vec2 ${Attributes.TEXTURE_COORD};
    uniform mat4 ${Uniforms2.TILE_TRANSFORM};
    uniform float ${Uniforms2.TEXTURE_PIXEL_WIDTH};
    uniform float ${Uniforms2.TEXTURE_PIXEL_HEIGHT};
    uniform float ${Uniforms2.TEXTURE_RESOLUTION};
    uniform float ${Uniforms2.TEXTURE_ORIGIN_X};
    uniform float ${Uniforms2.TEXTURE_ORIGIN_Y};
    uniform float ${Uniforms2.DEPTH};

    varying vec2 v_textureCoord;
    varying vec2 v_mapCoord;

    void main() {
      v_textureCoord = ${Attributes.TEXTURE_COORD};
      v_mapCoord = vec2(
        ${Uniforms2.TEXTURE_ORIGIN_X} + ${Uniforms2.TEXTURE_RESOLUTION} * ${Uniforms2.TEXTURE_PIXEL_WIDTH} * v_textureCoord[0],
        ${Uniforms2.TEXTURE_ORIGIN_Y} - ${Uniforms2.TEXTURE_RESOLUTION} * ${Uniforms2.TEXTURE_PIXEL_HEIGHT} * v_textureCoord[1]
      );
      gl_Position = ${Uniforms2.TILE_TRANSFORM} * vec4(${Attributes.TEXTURE_COORD}, ${Uniforms2.DEPTH}, 1.0);
    }
  `;
  const context = __spreadProps(__spreadValues({}, newCompilationContext()), {
    inFragmentShader: true,
    bandCount,
    style
  });
  const pipeline = [];
  if (style.color !== void 0) {
    const color = expressionToGlsl(context, style.color, ColorType);
    pipeline.push(`color = ${color};`);
  }
  if (style.contrast !== void 0) {
    const contrast = expressionToGlsl(context, style.contrast, NumberType);
    pipeline.push(`color.rgb = clamp((${contrast} + 1.0) * color.rgb - (${contrast} / 2.0), vec3(0.0, 0.0, 0.0), vec3(1.0, 1.0, 1.0));`);
  }
  if (style.exposure !== void 0) {
    const exposure = expressionToGlsl(context, style.exposure, NumberType);
    pipeline.push(`color.rgb = clamp((${exposure} + 1.0) * color.rgb, vec3(0.0, 0.0, 0.0), vec3(1.0, 1.0, 1.0));`);
  }
  if (style.saturation !== void 0) {
    const saturation = expressionToGlsl(context, style.saturation, NumberType);
    pipeline.push(`
      float saturation = ${saturation} + 1.0;
      float sr = (1.0 - saturation) * 0.2126;
      float sg = (1.0 - saturation) * 0.7152;
      float sb = (1.0 - saturation) * 0.0722;
      mat3 saturationMatrix = mat3(
        sr + saturation, sr, sr,
        sg, sg + saturation, sg,
        sb, sb, sb + saturation
      );
      color.rgb = clamp(saturationMatrix * color.rgb, vec3(0.0, 0.0, 0.0), vec3(1.0, 1.0, 1.0));
    `);
  }
  if (style.gamma !== void 0) {
    const gamma = expressionToGlsl(context, style.gamma, NumberType);
    pipeline.push(`color.rgb = pow(color.rgb, vec3(1.0 / ${gamma}));`);
  }
  if (style.brightness !== void 0) {
    const brightness = expressionToGlsl(context, style.brightness, NumberType);
    pipeline.push(`color.rgb = clamp(color.rgb + ${brightness}, vec3(0.0, 0.0, 0.0), vec3(1.0, 1.0, 1.0));`);
  }
  const uniforms = {};
  const numVariables = Object.keys(context.variables).length;
  if (numVariables > 1 && !style.variables) {
    throw new Error(`Missing variables in style (expected ${context.variables})`);
  }
  for (let i = 0; i < numVariables; ++i) {
    const variable = context.variables[Object.keys(context.variables)[i]];
    if (!(variable.name in style.variables)) {
      throw new Error(`Missing '${variable.name}' in style variables`);
    }
    const uniformName = uniformNameForVariable(variable.name);
    uniforms[uniformName] = function() {
      let value = style.variables[variable.name];
      if (typeof value === "string") {
        value = getStringNumberEquivalent(value);
      }
      return value !== void 0 ? value : -9999999;
    };
  }
  const uniformDeclarations = Object.keys(uniforms).map(function(name) {
    return `uniform float ${name};`;
  });
  const textureCount = Math.ceil(bandCount / 4);
  uniformDeclarations.push(`uniform sampler2D ${Uniforms2.TILE_TEXTURE_ARRAY}[${textureCount}];`);
  if (context.paletteTextures) {
    uniformDeclarations.push(`uniform sampler2D ${PALETTE_TEXTURE_ARRAY}[${context.paletteTextures.length}];`);
  }
  const functionDefintions = Object.keys(context.functions).map(function(name) {
    return context.functions[name];
  });
  const fragmentShader = `
    #ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    #else
    precision mediump float;
    #endif

    varying vec2 v_textureCoord;
    varying vec2 v_mapCoord;
    uniform vec4 ${Uniforms2.RENDER_EXTENT};
    uniform float ${Uniforms2.TRANSITION_ALPHA};
    uniform float ${Uniforms2.TEXTURE_PIXEL_WIDTH};
    uniform float ${Uniforms2.TEXTURE_PIXEL_HEIGHT};
    uniform float ${Uniforms2.RESOLUTION};
    uniform float ${Uniforms2.ZOOM};

    ${uniformDeclarations.join("\n")}

    ${functionDefintions.join("\n")}

    void main() {
      if (
        v_mapCoord[0] < ${Uniforms2.RENDER_EXTENT}[0] ||
        v_mapCoord[1] < ${Uniforms2.RENDER_EXTENT}[1] ||
        v_mapCoord[0] > ${Uniforms2.RENDER_EXTENT}[2] ||
        v_mapCoord[1] > ${Uniforms2.RENDER_EXTENT}[3]
      ) {
        discard;
      }

      vec4 color = texture2D(${Uniforms2.TILE_TEXTURE_ARRAY}[0],  v_textureCoord);

      ${pipeline.join("\n")}

      gl_FragColor = color;
      gl_FragColor.rgb *= gl_FragColor.a;
      gl_FragColor *= ${Uniforms2.TRANSITION_ALPHA};
    }`;
  return {
    vertexShader,
    fragmentShader,
    uniforms,
    paletteTextures: context.paletteTextures
  };
}
var WebGLTileLayer = class extends BaseTile_default {
  /**
   * @param {Options} options Tile layer options.
   */
  constructor(options) {
    options = options ? Object.assign({}, options) : {};
    const style = options.style || {};
    delete options.style;
    super(options);
    this.sources_ = options.sources;
    this.renderedSource_ = null;
    this.renderedResolution_ = NaN;
    this.style_ = style;
    this.styleVariables_ = this.style_.variables || {};
    this.addChangeListener(Property_default.SOURCE, this.handleSourceUpdate_);
  }
  /**
   * Gets the sources for this layer, for a given extent and resolution.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} resolution Resolution.
   * @return {Array<SourceType>} Sources.
   */
  getSources(extent, resolution) {
    const source = this.getSource();
    return this.sources_ ? typeof this.sources_ === "function" ? this.sources_(extent, resolution) : this.sources_ : source ? [source] : [];
  }
  /**
   * @return {SourceType} The source being rendered.
   * @override
   */
  getRenderSource() {
    return this.renderedSource_ || this.getSource();
  }
  /**
   * @return {import("../source/Source.js").State} Source state.
   * @override
   */
  getSourceState() {
    const source = this.getRenderSource();
    return source ? source.getState() : "undefined";
  }
  /**
   * @private
   */
  handleSourceUpdate_() {
    if (this.hasRenderer()) {
      this.getRenderer().clearCache();
    }
    if (this.getSource()) {
      this.setStyle(this.style_);
    }
  }
  /**
   * @private
   * @return {number} The number of source bands.
   */
  getSourceBandCount_() {
    const max = Number.MAX_SAFE_INTEGER;
    const sources = this.getSources([-max, -max, max, max], max);
    return sources && sources.length && "bandCount" in sources[0] ? sources[0].bandCount : 4;
  }
  /**
   * @override
   */
  createRenderer() {
    const parsedStyle = parseStyle(this.style_, this.getSourceBandCount_());
    return new TileLayer_default2(this, {
      vertexShader: parsedStyle.vertexShader,
      fragmentShader: parsedStyle.fragmentShader,
      uniforms: parsedStyle.uniforms,
      cacheSize: this.getCacheSize(),
      paletteTextures: parsedStyle.paletteTextures
    });
  }
  /**
   * @param {import("../Map").FrameState} frameState Frame state.
   * @param {Array<SourceType>} sources Sources.
   * @return {HTMLElement} Canvas.
   */
  renderSources(frameState, sources) {
    const layerRenderer = this.getRenderer();
    let canvas;
    for (let i = 0, ii = sources.length; i < ii; ++i) {
      this.renderedSource_ = sources[i];
      if (layerRenderer.prepareFrame(frameState)) {
        canvas = layerRenderer.renderFrame(frameState);
      }
    }
    return canvas;
  }
  /**
   * @param {?import("../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target which the renderer may (but need not) use
   * for rendering its content.
   * @return {HTMLElement} The rendered element.
   * @override
   */
  render(frameState, target) {
    this.rendered = true;
    const viewState = frameState.viewState;
    const sources = this.getSources(frameState.extent, viewState.resolution);
    let ready = true;
    for (let i = 0, ii = sources.length; i < ii; ++i) {
      const source = sources[i];
      const sourceState = source.getState();
      if (sourceState == "loading") {
        const onChange = () => {
          if (source.getState() == "ready") {
            source.removeEventListener("change", onChange);
            this.changed();
          }
        };
        source.addEventListener("change", onChange);
      }
      ready = ready && sourceState == "ready";
    }
    const canvas = this.renderSources(frameState, sources);
    if (this.getRenderer().renderComplete && ready) {
      this.renderedResolution_ = viewState.resolution;
      return canvas;
    }
    if (this.renderedResolution_ > 0.5 * viewState.resolution) {
      const altSources = this.getSources(frameState.extent, this.renderedResolution_).filter((source) => !sources.includes(source));
      if (altSources.length > 0) {
        return this.renderSources(frameState, altSources);
      }
    }
    return canvas;
  }
  /**
   * Update the layer style.  The `updateStyleVariables` function is a more efficient
   * way to update layer rendering.  In cases where the whole style needs to be updated,
   * this method may be called instead.  Note that calling this method will also replace
   * any previously set variables, so the new style also needs to include new variables,
   * if needed.
   * @param {Style} style The new style.
   */
  setStyle(style) {
    this.styleVariables_ = style.variables || {};
    this.style_ = style;
    if (this.hasRenderer()) {
      const parsedStyle = parseStyle(this.style_, this.getSourceBandCount_());
      const renderer = this.getRenderer();
      renderer.reset({
        vertexShader: parsedStyle.vertexShader,
        fragmentShader: parsedStyle.fragmentShader,
        uniforms: parsedStyle.uniforms,
        paletteTextures: parsedStyle.paletteTextures
      });
      this.changed();
    }
  }
  /**
   * Update any variables used by the layer style and trigger a re-render.
   * @param {Object<string, number>} variables Variables to update.
   * @api
   */
  updateStyleVariables(variables) {
    Object.assign(this.styleVariables_, variables);
    this.changed();
  }
};
WebGLTileLayer.prototype.dispose;
var WebGLTile_default = WebGLTileLayer;
export {
  Graticule_default as Graticule,
  Group_default as Group,
  Heatmap_default as Heatmap,
  Image_default as Image,
  Layer_default as Layer,
  Tile_default2 as Tile,
  Vector_default2 as Vector,
  VectorImage_default as VectorImage,
  VectorTile_default as VectorTile,
  WebGLPoints_default as WebGLPoints,
  WebGLTile_default as WebGLTile
};
//# sourceMappingURL=ol_layer.js.map
