import {
  CollectionEventType_default,
  Collection_default,
  RBush
} from "./chunk-H7FSCGDP.js";
import {
  Source_default
} from "./chunk-YBIDJNRH.js";
import {
  interpolatePoint,
  linearRingss
} from "./chunk-PPKC2NZ7.js";
import {
  Layer_default2
} from "./chunk-EEMUAFYQ.js";
import {
  Layer_default
} from "./chunk-NXHNDBDV.js";
import {
  ImageState_default,
  Image_default
} from "./chunk-ZLXPRQ4U.js";
import {
  ViewHint_default
} from "./chunk-OPOXYUGB.js";
import {
  apply,
  compose,
  create,
  douglasPeucker,
  douglasPeuckerArray,
  getInteriorPointOfArray,
  getInteriorPointsOfMultiArray,
  inflateEnds,
  quantizeArray,
  transform2D
} from "./chunk-XMH4NNAN.js";
import {
  EventType_default,
  Event_default,
  ObjectEventType_default,
  TRUE,
  VOID,
  assert,
  extend,
  getUid,
  listen,
  memoizeOne,
  unlistenByKey
} from "./chunk-VBKY7ZCK.js";
import {
  containsCoordinate,
  containsExtent,
  createOrUpdate,
  createOrUpdateFromCoordinate,
  createOrUpdateFromFlatCoordinates,
  equals,
  fromUserExtent,
  get,
  getCenter,
  getHeight,
  getIntersection,
  getWidth,
  intersects,
  isEmpty as isEmpty2,
  wrapAndSliceX
} from "./chunk-RB4D37YD.js";
import {
  isEmpty
} from "./chunk-EVV36KLN.js";

// node_modules/ol/structs/RBush.js
var RBush2 = class {
  /**
   * @param {number} [maxEntries] Max entries.
   */
  constructor(maxEntries) {
    this.rbush_ = new RBush(maxEntries);
    this.items_ = {};
  }
  /**
   * Insert a value into the RBush.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {T} value Value.
   */
  insert(extent, value) {
    const item = {
      minX: extent[0],
      minY: extent[1],
      maxX: extent[2],
      maxY: extent[3],
      value
    };
    this.rbush_.insert(item);
    this.items_[getUid(value)] = item;
  }
  /**
   * Bulk-insert values into the RBush.
   * @param {Array<import("../extent.js").Extent>} extents Extents.
   * @param {Array<T>} values Values.
   */
  load(extents, values) {
    const items = new Array(values.length);
    for (let i = 0, l = values.length; i < l; i++) {
      const extent = extents[i];
      const value = values[i];
      const item = {
        minX: extent[0],
        minY: extent[1],
        maxX: extent[2],
        maxY: extent[3],
        value
      };
      items[i] = item;
      this.items_[getUid(value)] = item;
    }
    this.rbush_.load(items);
  }
  /**
   * Remove a value from the RBush.
   * @param {T} value Value.
   * @return {boolean} Removed.
   */
  remove(value) {
    const uid = getUid(value);
    const item = this.items_[uid];
    delete this.items_[uid];
    return this.rbush_.remove(item) !== null;
  }
  /**
   * Update the extent of a value in the RBush.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {T} value Value.
   */
  update(extent, value) {
    const item = this.items_[getUid(value)];
    const bbox = [item.minX, item.minY, item.maxX, item.maxY];
    if (!equals(bbox, extent)) {
      this.remove(value);
      this.insert(extent, value);
    }
  }
  /**
   * Return all values in the RBush.
   * @return {Array<T>} All.
   */
  getAll() {
    const items = this.rbush_.all();
    return items.map(function(item) {
      return item.value;
    });
  }
  /**
   * Return all values in the given extent.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {Array<T>} All in extent.
   */
  getInExtent(extent) {
    const bbox = {
      minX: extent[0],
      minY: extent[1],
      maxX: extent[2],
      maxY: extent[3]
    };
    const items = this.rbush_.search(bbox);
    return items.map(function(item) {
      return item.value;
    });
  }
  /**
   * Calls a callback function with each value in the tree.
   * If the callback returns a truthy value, this value is returned without
   * checking the rest of the tree.
   * @param {function(T): *} callback Callback.
   * @return {*} Callback return value.
   */
  forEach(callback) {
    return this.forEach_(this.getAll(), callback);
  }
  /**
   * Calls a callback function with each value in the provided extent.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {function(T): *} callback Callback.
   * @return {*} Callback return value.
   */
  forEachInExtent(extent, callback) {
    return this.forEach_(this.getInExtent(extent), callback);
  }
  /**
   * @param {Array<T>} values Values.
   * @param {function(T): *} callback Callback.
   * @private
   * @return {*} Callback return value.
   */
  forEach_(values, callback) {
    let result;
    for (let i = 0, l = values.length; i < l; i++) {
      result = callback(values[i]);
      if (result) {
        return result;
      }
    }
    return result;
  }
  /**
   * @return {boolean} Is empty.
   */
  isEmpty() {
    return isEmpty(this.items_);
  }
  /**
   * Remove all values from the RBush.
   */
  clear() {
    this.rbush_.clear();
    this.items_ = {};
  }
  /**
   * @param {import("../extent.js").Extent} [extent] Extent.
   * @return {import("../extent.js").Extent} Extent.
   */
  getExtent(extent) {
    const data = this.rbush_.toJSON();
    return createOrUpdate(data.minX, data.minY, data.maxX, data.maxY, extent);
  }
  /**
   * @param {RBush<T>} rbush R-Tree.
   */
  concat(rbush) {
    this.rbush_.load(rbush.rbush_.all());
    for (const i in rbush.items_) {
      this.items_[i] = rbush.items_[i];
    }
  }
};
var RBush_default = RBush2;

// node_modules/ol/render/Feature.js
var tmpTransform = create();
var RenderFeature = class _RenderFeature {
  /**
   * @param {Type} type Geometry type.
   * @param {Array<number>} flatCoordinates Flat coordinates. These always need
   *     to be right-handed for polygons.
   * @param {Array<number>} ends Ends.
   * @param {number} stride Stride.
   * @param {Object<string, *>} properties Properties.
   * @param {number|string|undefined} id Feature id.
   */
  constructor(type, flatCoordinates, ends, stride, properties, id) {
    this.styleFunction;
    this.extent_;
    this.id_ = id;
    this.type_ = type;
    this.flatCoordinates_ = flatCoordinates;
    this.flatInteriorPoints_ = null;
    this.flatMidpoints_ = null;
    this.ends_ = ends || null;
    this.properties_ = properties;
    this.squaredTolerance_;
    this.stride_ = stride;
    this.simplifiedGeometry_;
  }
  /**
   * Get a feature property by its key.
   * @param {string} key Key
   * @return {*} Value for the requested key.
   * @api
   */
  get(key) {
    return this.properties_[key];
  }
  /**
   * Get the extent of this feature's geometry.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */
  getExtent() {
    if (!this.extent_) {
      this.extent_ = this.type_ === "Point" ? createOrUpdateFromCoordinate(this.flatCoordinates_) : createOrUpdateFromFlatCoordinates(this.flatCoordinates_, 0, this.flatCoordinates_.length, 2);
    }
    return this.extent_;
  }
  /**
   * @return {Array<number>} Flat interior points.
   */
  getFlatInteriorPoint() {
    if (!this.flatInteriorPoints_) {
      const flatCenter = getCenter(this.getExtent());
      this.flatInteriorPoints_ = getInteriorPointOfArray(this.flatCoordinates_, 0, this.ends_, 2, flatCenter, 0);
    }
    return this.flatInteriorPoints_;
  }
  /**
   * @return {Array<number>} Flat interior points.
   */
  getFlatInteriorPoints() {
    if (!this.flatInteriorPoints_) {
      const ends = inflateEnds(this.flatCoordinates_, this.ends_);
      const flatCenters = linearRingss(this.flatCoordinates_, 0, ends, 2);
      this.flatInteriorPoints_ = getInteriorPointsOfMultiArray(this.flatCoordinates_, 0, ends, 2, flatCenters);
    }
    return this.flatInteriorPoints_;
  }
  /**
   * @return {Array<number>} Flat midpoint.
   */
  getFlatMidpoint() {
    if (!this.flatMidpoints_) {
      this.flatMidpoints_ = interpolatePoint(this.flatCoordinates_, 0, this.flatCoordinates_.length, 2, 0.5);
    }
    return this.flatMidpoints_;
  }
  /**
   * @return {Array<number>} Flat midpoints.
   */
  getFlatMidpoints() {
    if (!this.flatMidpoints_) {
      this.flatMidpoints_ = [];
      const flatCoordinates = this.flatCoordinates_;
      let offset = 0;
      const ends = (
        /** @type {Array<number>} */
        this.ends_
      );
      for (let i = 0, ii = ends.length; i < ii; ++i) {
        const end = ends[i];
        const midpoint = interpolatePoint(flatCoordinates, offset, end, 2, 0.5);
        extend(this.flatMidpoints_, midpoint);
        offset = end;
      }
    }
    return this.flatMidpoints_;
  }
  /**
   * Get the feature identifier.  This is a stable identifier for the feature and
   * is set when reading data from a remote source.
   * @return {number|string|undefined} Id.
   * @api
   */
  getId() {
    return this.id_;
  }
  /**
   * @return {Array<number>} Flat coordinates.
   */
  getOrientedFlatCoordinates() {
    return this.flatCoordinates_;
  }
  /**
   * For API compatibility with {@link module:ol/Feature~Feature}, this method is useful when
   * determining the geometry type in style function (see {@link #getType}).
   * @return {RenderFeature} Feature.
   * @api
   */
  getGeometry() {
    return this;
  }
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {RenderFeature} Simplified geometry.
   */
  getSimplifiedGeometry(squaredTolerance) {
    return this;
  }
  /**
   * Get a transformed and simplified version of the geometry.
   * @param {number} squaredTolerance Squared tolerance.
   * @param {import("../proj.js").TransformFunction} [transform] Optional transform function.
   * @return {RenderFeature} Simplified geometry.
   */
  simplifyTransformed(squaredTolerance, transform) {
    return this;
  }
  /**
   * Get the feature properties.
   * @return {Object<string, *>} Feature properties.
   * @api
   */
  getProperties() {
    return this.properties_;
  }
  /**
   * Get an object of all property names and values.  This has the same behavior as getProperties,
   * but is here to conform with the {@link module:ol/Feature~Feature} interface.
   * @return {Object<string, *>?} Object.
   */
  getPropertiesInternal() {
    return this.properties_;
  }
  /**
   * @return {number} Stride.
   */
  getStride() {
    return this.stride_;
  }
  /**
   * @return {import('../style/Style.js').StyleFunction|undefined} Style
   */
  getStyleFunction() {
    return this.styleFunction;
  }
  /**
   * Get the type of this feature's geometry.
   * @return {Type} Geometry type.
   * @api
   */
  getType() {
    return this.type_;
  }
  /**
   * Transform geometry coordinates from tile pixel space to projected.
   *
   * @param {import("../proj.js").ProjectionLike} projection The data projection
   */
  transform(projection) {
    projection = get(projection);
    const pixelExtent = projection.getExtent();
    const projectedExtent = projection.getWorldExtent();
    if (pixelExtent && projectedExtent) {
      const scale = getHeight(projectedExtent) / getHeight(pixelExtent);
      compose(tmpTransform, projectedExtent[0], projectedExtent[3], scale, -scale, 0, 0, 0);
      transform2D(this.flatCoordinates_, 0, this.flatCoordinates_.length, 2, tmpTransform, this.flatCoordinates_);
    }
  }
  /**
   * Apply a transform function to the coordinates of the geometry.
   * The geometry is modified in place.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   * @param {import("../proj.js").TransformFunction} transformFn Transform function.
   */
  applyTransform(transformFn) {
    transformFn(this.flatCoordinates_, this.flatCoordinates_, this.stride_);
  }
  /**
   * @return {RenderFeature} A cloned render feature.
   */
  clone() {
    return new _RenderFeature(this.type_, this.flatCoordinates_.slice(), this.ends_?.slice(), this.stride_, Object.assign({}, this.properties_), this.id_);
  }
  /**
   * @return {Array<number>|null} Ends.
   */
  getEnds() {
    return this.ends_;
  }
  /**
   * Add transform and resolution based geometry simplification to this instance.
   * @return {RenderFeature} This render feature.
   */
  enableSimplifyTransformed() {
    this.simplifyTransformed = memoizeOne((squaredTolerance, transform) => {
      if (squaredTolerance === this.squaredTolerance_) {
        return this.simplifiedGeometry_;
      }
      this.simplifiedGeometry_ = this.clone();
      if (transform) {
        this.simplifiedGeometry_.applyTransform(transform);
      }
      const simplifiedFlatCoordinates = this.simplifiedGeometry_.getFlatCoordinates();
      let simplifiedEnds;
      switch (this.type_) {
        case "LineString":
          simplifiedFlatCoordinates.length = douglasPeucker(simplifiedFlatCoordinates, 0, this.simplifiedGeometry_.flatCoordinates_.length, this.simplifiedGeometry_.stride_, squaredTolerance, simplifiedFlatCoordinates, 0);
          simplifiedEnds = [simplifiedFlatCoordinates.length];
          break;
        case "MultiLineString":
          simplifiedEnds = [];
          simplifiedFlatCoordinates.length = douglasPeuckerArray(simplifiedFlatCoordinates, 0, this.simplifiedGeometry_.ends_, this.simplifiedGeometry_.stride_, squaredTolerance, simplifiedFlatCoordinates, 0, simplifiedEnds);
          break;
        case "Polygon":
          simplifiedEnds = [];
          simplifiedFlatCoordinates.length = quantizeArray(simplifiedFlatCoordinates, 0, this.simplifiedGeometry_.ends_, this.simplifiedGeometry_.stride_, Math.sqrt(squaredTolerance), simplifiedFlatCoordinates, 0, simplifiedEnds);
          break;
        default:
      }
      if (simplifiedEnds) {
        this.simplifiedGeometry_ = new _RenderFeature(this.type_, simplifiedFlatCoordinates, simplifiedEnds, 2, this.properties_, this.id_);
      }
      this.squaredTolerance_ = squaredTolerance;
      return this.simplifiedGeometry_;
    });
    return this;
  }
};
RenderFeature.prototype.getFlatCoordinates = RenderFeature.prototype.getOrientedFlatCoordinates;
var Feature_default2 = RenderFeature;

// node_modules/ol/source/VectorEventType.js
var VectorEventType_default = {
  /**
   * Triggered when a feature is added to the source.
   * @event module:ol/source/Vector.VectorSourceEvent#addfeature
   * @api
   */
  ADDFEATURE: "addfeature",
  /**
   * Triggered when a feature is updated.
   * @event module:ol/source/Vector.VectorSourceEvent#changefeature
   * @api
   */
  CHANGEFEATURE: "changefeature",
  /**
   * Triggered when the clear method is called on the source.
   * @event module:ol/source/Vector.VectorSourceEvent#clear
   * @api
   */
  CLEAR: "clear",
  /**
   * Triggered when a feature is removed from the source.
   * See {@link module:ol/source/Vector~VectorSource#clear source.clear()} for exceptions.
   * @event module:ol/source/Vector.VectorSourceEvent#removefeature
   * @api
   */
  REMOVEFEATURE: "removefeature",
  /**
   * Triggered when features starts loading.
   * @event module:ol/source/Vector.VectorSourceEvent#featuresloadstart
   * @api
   */
  FEATURESLOADSTART: "featuresloadstart",
  /**
   * Triggered when features finishes loading.
   * @event module:ol/source/Vector.VectorSourceEvent#featuresloadend
   * @api
   */
  FEATURESLOADEND: "featuresloadend",
  /**
   * Triggered if feature loading results in an error.
   * @event module:ol/source/Vector.VectorSourceEvent#featuresloaderror
   * @api
   */
  FEATURESLOADERROR: "featuresloaderror"
};

// node_modules/ol/loadingstrategy.js
function all(extent, resolution) {
  return [[-Infinity, -Infinity, Infinity, Infinity]];
}

// node_modules/ol/featureloader.js
var withCredentials = false;
function loadFeaturesXhr(url, format, extent, resolution, projection, success, failure) {
  const xhr2 = new XMLHttpRequest();
  xhr2.open("GET", typeof url === "function" ? url(extent, resolution, projection) : url, true);
  if (format.getType() == "arraybuffer") {
    xhr2.responseType = "arraybuffer";
  }
  xhr2.withCredentials = withCredentials;
  xhr2.onload = function(event) {
    if (!xhr2.status || xhr2.status >= 200 && xhr2.status < 300) {
      const type = format.getType();
      try {
        let source;
        if (type == "text" || type == "json") {
          source = xhr2.responseText;
        } else if (type == "xml") {
          source = xhr2.responseXML || xhr2.responseText;
        } else if (type == "arraybuffer") {
          source = /** @type {ArrayBuffer} */
          xhr2.response;
        }
        if (source) {
          success(
            /** @type {Array<FeatureType>} */
            format.readFeatures(source, {
              extent,
              featureProjection: projection
            }),
            format.readProjection(source)
          );
        } else {
          failure();
        }
      } catch {
        failure();
      }
    } else {
      failure();
    }
  };
  xhr2.onerror = failure;
  xhr2.send();
}
function xhr(url, format) {
  return function(extent, resolution, projection, success, failure) {
    const source = (
      /** @type {import("./source/Vector").default<FeatureType>} */
      this
    );
    loadFeaturesXhr(
      url,
      format,
      extent,
      resolution,
      projection,
      /**
       * @param {Array<FeatureType>} features The loaded features.
       * @param {import("./proj/Projection.js").default} dataProjection Data
       * projection.
       */
      function(features, dataProjection) {
        source.addFeatures(features);
        if (success !== void 0) {
          success(features);
        }
      },
      /* FIXME handle error */
      failure ? failure : VOID
    );
  };
}

// node_modules/ol/source/Vector.js
var VectorSourceEvent = class extends Event_default {
  /**
   * @param {string} type Type.
   * @param {FeatureType} [feature] Feature.
   * @param {Array<FeatureType>} [features] Features.
   */
  constructor(type, feature, features) {
    super(type);
    this.feature = feature;
    this.features = features;
  }
};
var VectorSource = class extends Source_default {
  /**
   * @param {Options<FeatureType>} [options] Vector source options.
   */
  constructor(options) {
    options = options || {};
    super({
      attributions: options.attributions,
      interpolate: true,
      projection: void 0,
      state: "ready",
      wrapX: options.wrapX !== void 0 ? options.wrapX : true
    });
    this.on;
    this.once;
    this.un;
    this.loader_ = VOID;
    this.format_ = options.format || null;
    this.overlaps_ = options.overlaps === void 0 ? true : options.overlaps;
    this.url_ = options.url;
    if (options.loader !== void 0) {
      this.loader_ = options.loader;
    } else if (this.url_ !== void 0) {
      assert(this.format_, "`format` must be set when `url` is set");
      this.loader_ = xhr(this.url_, this.format_);
    }
    this.strategy_ = options.strategy !== void 0 ? options.strategy : all;
    const useSpatialIndex = options.useSpatialIndex !== void 0 ? options.useSpatialIndex : true;
    this.featuresRtree_ = useSpatialIndex ? new RBush_default() : null;
    this.loadedExtentsRtree_ = new RBush_default();
    this.loadingExtentsCount_ = 0;
    this.nullGeometryFeatures_ = {};
    this.idIndex_ = {};
    this.uidIndex_ = {};
    this.featureChangeKeys_ = {};
    this.featuresCollection_ = null;
    let collection;
    let features;
    if (Array.isArray(options.features)) {
      features = options.features;
    } else if (options.features) {
      collection = options.features;
      features = collection.getArray();
    }
    if (!useSpatialIndex && collection === void 0) {
      collection = new Collection_default(features);
    }
    if (features !== void 0) {
      this.addFeaturesInternal(features);
    }
    if (collection !== void 0) {
      this.bindFeaturesCollection_(collection);
    }
  }
  /**
   * Add a single feature to the source.  If you want to add a batch of features
   * at once, call {@link module:ol/source/Vector~VectorSource#addFeatures #addFeatures()}
   * instead. A feature will not be added to the source if feature with
   * the same id is already there. The reason for this behavior is to avoid
   * feature duplication when using bbox or tile loading strategies.
   * Note: this also applies if a {@link module:ol/Collection~Collection} is used for features,
   * meaning that if a feature with a duplicate id is added in the collection, it will
   * be removed from it right away.
   * @param {FeatureType} feature Feature to add.
   * @api
   */
  addFeature(feature) {
    this.addFeatureInternal(feature);
    this.changed();
  }
  /**
   * Add a feature without firing a `change` event.
   * @param {FeatureType} feature Feature.
   * @protected
   */
  addFeatureInternal(feature) {
    const featureKey = getUid(feature);
    if (!this.addToIndex_(featureKey, feature)) {
      if (this.featuresCollection_) {
        this.featuresCollection_.remove(feature);
      }
      return;
    }
    this.setupChangeEvents_(featureKey, feature);
    const geometry = feature.getGeometry();
    if (geometry) {
      const extent = geometry.getExtent();
      if (this.featuresRtree_) {
        this.featuresRtree_.insert(extent, feature);
      }
    } else {
      this.nullGeometryFeatures_[featureKey] = feature;
    }
    this.dispatchEvent(new VectorSourceEvent(VectorEventType_default.ADDFEATURE, feature));
  }
  /**
   * @param {string} featureKey Unique identifier for the feature.
   * @param {FeatureType} feature The feature.
   * @private
   */
  setupChangeEvents_(featureKey, feature) {
    if (feature instanceof Feature_default2) {
      return;
    }
    this.featureChangeKeys_[featureKey] = [listen(feature, EventType_default.CHANGE, this.handleFeatureChange_, this), listen(feature, ObjectEventType_default.PROPERTYCHANGE, this.handleFeatureChange_, this)];
  }
  /**
   * @param {string} featureKey Unique identifier for the feature.
   * @param {FeatureType} feature The feature.
   * @return {boolean} The feature is "valid", in the sense that it is also a
   *     candidate for insertion into the Rtree.
   * @private
   */
  addToIndex_(featureKey, feature) {
    let valid = true;
    if (feature.getId() !== void 0) {
      const id = String(feature.getId());
      if (!(id in this.idIndex_)) {
        this.idIndex_[id] = feature;
      } else if (feature instanceof Feature_default2) {
        const indexedFeature = this.idIndex_[id];
        if (!(indexedFeature instanceof Feature_default2)) {
          valid = false;
        } else {
          if (!Array.isArray(indexedFeature)) {
            this.idIndex_[id] = [indexedFeature, feature];
          } else {
            indexedFeature.push(feature);
          }
        }
      } else {
        valid = false;
      }
    }
    if (valid) {
      assert(!(featureKey in this.uidIndex_), "The passed `feature` was already added to the source");
      this.uidIndex_[featureKey] = feature;
    }
    return valid;
  }
  /**
   * Add a batch of features to the source.
   * @param {Array<FeatureType>} features Features to add.
   * @api
   */
  addFeatures(features) {
    this.addFeaturesInternal(features);
    this.changed();
  }
  /**
   * Add features without firing a `change` event.
   * @param {Array<FeatureType>} features Features.
   * @protected
   */
  addFeaturesInternal(features) {
    const extents = [];
    const newFeatures = [];
    const geometryFeatures = [];
    for (let i = 0, length = features.length; i < length; i++) {
      const feature = features[i];
      const featureKey = getUid(feature);
      if (this.addToIndex_(featureKey, feature)) {
        newFeatures.push(feature);
      }
    }
    for (let i = 0, length = newFeatures.length; i < length; i++) {
      const feature = newFeatures[i];
      const featureKey = getUid(feature);
      this.setupChangeEvents_(featureKey, feature);
      const geometry = feature.getGeometry();
      if (geometry) {
        const extent = geometry.getExtent();
        extents.push(extent);
        geometryFeatures.push(feature);
      } else {
        this.nullGeometryFeatures_[featureKey] = feature;
      }
    }
    if (this.featuresRtree_) {
      this.featuresRtree_.load(extents, geometryFeatures);
    }
    if (this.hasListener(VectorEventType_default.ADDFEATURE)) {
      for (let i = 0, length = newFeatures.length; i < length; i++) {
        this.dispatchEvent(new VectorSourceEvent(VectorEventType_default.ADDFEATURE, newFeatures[i]));
      }
    }
  }
  /**
   * @param {!Collection<FeatureType>} collection Collection.
   * @private
   */
  bindFeaturesCollection_(collection) {
    let modifyingCollection = false;
    this.addEventListener(
      VectorEventType_default.ADDFEATURE,
      /**
       * @param {VectorSourceEvent<FeatureType>} evt The vector source event
       */
      function(evt) {
        if (!modifyingCollection) {
          modifyingCollection = true;
          collection.push(evt.feature);
          modifyingCollection = false;
        }
      }
    );
    this.addEventListener(
      VectorEventType_default.REMOVEFEATURE,
      /**
       * @param {VectorSourceEvent<FeatureType>} evt The vector source event
       */
      function(evt) {
        if (!modifyingCollection) {
          modifyingCollection = true;
          collection.remove(evt.feature);
          modifyingCollection = false;
        }
      }
    );
    collection.addEventListener(
      CollectionEventType_default.ADD,
      /**
       * @param {import("../Collection.js").CollectionEvent<FeatureType>} evt The collection event
       */
      (evt) => {
        if (!modifyingCollection) {
          modifyingCollection = true;
          this.addFeature(evt.element);
          modifyingCollection = false;
        }
      }
    );
    collection.addEventListener(
      CollectionEventType_default.REMOVE,
      /**
       * @param {import("../Collection.js").CollectionEvent<FeatureType>} evt The collection event
       */
      (evt) => {
        if (!modifyingCollection) {
          modifyingCollection = true;
          this.removeFeature(evt.element);
          modifyingCollection = false;
        }
      }
    );
    this.featuresCollection_ = collection;
  }
  /**
   * Remove all features from the source.
   * @param {boolean} [fast] Skip dispatching of {@link module:ol/source/Vector.VectorSourceEvent#event:removefeature} events.
   * @api
   */
  clear(fast) {
    if (fast) {
      for (const featureId in this.featureChangeKeys_) {
        const keys = this.featureChangeKeys_[featureId];
        keys.forEach(unlistenByKey);
      }
      if (!this.featuresCollection_) {
        this.featureChangeKeys_ = {};
        this.idIndex_ = {};
        this.uidIndex_ = {};
      }
    } else {
      if (this.featuresRtree_) {
        const removeAndIgnoreReturn = (feature) => {
          this.removeFeatureInternal(feature);
        };
        this.featuresRtree_.forEach(removeAndIgnoreReturn);
        for (const id in this.nullGeometryFeatures_) {
          this.removeFeatureInternal(this.nullGeometryFeatures_[id]);
        }
      }
    }
    if (this.featuresCollection_) {
      this.featuresCollection_.clear();
    }
    if (this.featuresRtree_) {
      this.featuresRtree_.clear();
    }
    this.nullGeometryFeatures_ = {};
    const clearEvent = new VectorSourceEvent(VectorEventType_default.CLEAR);
    this.dispatchEvent(clearEvent);
    this.changed();
  }
  /**
   * Iterate through all features on the source, calling the provided callback
   * with each one.  If the callback returns any "truthy" value, iteration will
   * stop and the function will return the same value.
   * Note: this function only iterate through the feature that have a defined geometry.
   *
   * @param {function(FeatureType): T} callback Called with each feature
   *     on the source.  Return a truthy value to stop iteration.
   * @return {T|undefined} The return value from the last call to the callback.
   * @template T
   * @api
   */
  forEachFeature(callback) {
    if (this.featuresRtree_) {
      return this.featuresRtree_.forEach(callback);
    }
    if (this.featuresCollection_) {
      this.featuresCollection_.forEach(callback);
    }
  }
  /**
   * Iterate through all features whose geometries contain the provided
   * coordinate, calling the callback with each feature.  If the callback returns
   * a "truthy" value, iteration will stop and the function will return the same
   * value.
   *
   * For {@link module:ol/render/Feature~RenderFeature} features, the callback will be
   * called for all features.
   *
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {function(FeatureType): T} callback Called with each feature
   *     whose goemetry contains the provided coordinate.
   * @return {T|undefined} The return value from the last call to the callback.
   * @template T
   */
  forEachFeatureAtCoordinateDirect(coordinate, callback) {
    const extent = [coordinate[0], coordinate[1], coordinate[0], coordinate[1]];
    return this.forEachFeatureInExtent(extent, function(feature) {
      const geometry = feature.getGeometry();
      if (geometry instanceof Feature_default2 || geometry.intersectsCoordinate(coordinate)) {
        return callback(feature);
      }
      return void 0;
    });
  }
  /**
   * Iterate through all features whose bounding box intersects the provided
   * extent (note that the feature's geometry may not intersect the extent),
   * calling the callback with each feature.  If the callback returns a "truthy"
   * value, iteration will stop and the function will return the same value.
   *
   * If you are interested in features whose geometry intersects an extent, call
   * the {@link module:ol/source/Vector~VectorSource#forEachFeatureIntersectingExtent #forEachFeatureIntersectingExtent()} method instead.
   *
   * When `useSpatialIndex` is set to false, this method will loop through all
   * features, equivalent to {@link module:ol/source/Vector~VectorSource#forEachFeature #forEachFeature()}.
   *
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {function(FeatureType): T} callback Called with each feature
   *     whose bounding box intersects the provided extent.
   * @return {T|undefined} The return value from the last call to the callback.
   * @template T
   * @api
   */
  forEachFeatureInExtent(extent, callback) {
    if (this.featuresRtree_) {
      return this.featuresRtree_.forEachInExtent(extent, callback);
    }
    if (this.featuresCollection_) {
      this.featuresCollection_.forEach(callback);
    }
  }
  /**
   * Iterate through all features whose geometry intersects the provided extent,
   * calling the callback with each feature.  If the callback returns a "truthy"
   * value, iteration will stop and the function will return the same value.
   *
   * If you only want to test for bounding box intersection, call the
   * {@link module:ol/source/Vector~VectorSource#forEachFeatureInExtent #forEachFeatureInExtent()} method instead.
   *
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {function(FeatureType): T} callback Called with each feature
   *     whose geometry intersects the provided extent.
   * @return {T|undefined} The return value from the last call to the callback.
   * @template T
   * @api
   */
  forEachFeatureIntersectingExtent(extent, callback) {
    return this.forEachFeatureInExtent(
      extent,
      /**
       * @param {FeatureType} feature Feature.
       * @return {T|undefined} The return value from the last call to the callback.
       */
      function(feature) {
        const geometry = feature.getGeometry();
        if (geometry instanceof Feature_default2 || geometry.intersectsExtent(extent)) {
          const result = callback(feature);
          if (result) {
            return result;
          }
        }
      }
    );
  }
  /**
   * Get the features collection associated with this source. Will be `null`
   * unless the source was configured with `useSpatialIndex` set to `false`, or
   * with a {@link module:ol/Collection~Collection} as `features`.
   * @return {Collection<FeatureType>|null} The collection of features.
   * @api
   */
  getFeaturesCollection() {
    return this.featuresCollection_;
  }
  /**
   * Get a snapshot of the features currently on the source in random order. The returned array
   * is a copy, the features are references to the features in the source.
   * @return {Array<FeatureType>} Features.
   * @api
   */
  getFeatures() {
    let features;
    if (this.featuresCollection_) {
      features = this.featuresCollection_.getArray().slice(0);
    } else if (this.featuresRtree_) {
      features = this.featuresRtree_.getAll();
      if (!isEmpty(this.nullGeometryFeatures_)) {
        extend(features, Object.values(this.nullGeometryFeatures_));
      }
    }
    return features;
  }
  /**
   * Get all features whose geometry intersects the provided coordinate.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @return {Array<import("../Feature.js").default>} Features.
   * @api
   */
  getFeaturesAtCoordinate(coordinate) {
    const features = [];
    this.forEachFeatureAtCoordinateDirect(coordinate, function(feature) {
      features.push(feature);
    });
    return features;
  }
  /**
   * Get all features whose bounding box intersects the provided extent.  Note that this returns an array of
   * all features intersecting the given extent in random order (so it may include
   * features whose geometries do not intersect the extent).
   *
   * When `useSpatialIndex` is set to false, this method will return all
   * features.
   *
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {import("../proj/Projection.js").default} [projection] Include features
   * where `extent` exceeds the x-axis bounds of `projection` and wraps around the world.
   * @return {Array<FeatureType>} Features.
   * @api
   */
  getFeaturesInExtent(extent, projection) {
    if (this.featuresRtree_) {
      const multiWorld = projection && projection.canWrapX() && this.getWrapX();
      if (!multiWorld) {
        return this.featuresRtree_.getInExtent(extent);
      }
      const extents = wrapAndSliceX(extent, projection);
      return [].concat(...extents.map((anExtent) => this.featuresRtree_.getInExtent(anExtent)));
    }
    if (this.featuresCollection_) {
      return this.featuresCollection_.getArray().slice(0);
    }
    return [];
  }
  /**
   * Get the closest feature to the provided coordinate.
   *
   * This method is not available when the source is configured with
   * `useSpatialIndex` set to `false` and the features in this source are of type
   * {@link module:ol/Feature~Feature}.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {function(FeatureType):boolean} [filter] Feature filter function.
   *     The filter function will receive one argument, the {@link module:ol/Feature~Feature feature}
   *     and it should return a boolean value. By default, no filtering is made.
   * @return {FeatureType} Closest feature.
   * @api
   */
  getClosestFeatureToCoordinate(coordinate, filter) {
    const x = coordinate[0];
    const y = coordinate[1];
    let closestFeature = null;
    const closestPoint = [NaN, NaN];
    let minSquaredDistance = Infinity;
    const extent = [-Infinity, -Infinity, Infinity, Infinity];
    filter = filter ? filter : TRUE;
    this.featuresRtree_.forEachInExtent(
      extent,
      /**
       * @param {FeatureType} feature Feature.
       */
      function(feature) {
        if (filter(feature)) {
          const geometry = feature.getGeometry();
          const previousMinSquaredDistance = minSquaredDistance;
          minSquaredDistance = geometry instanceof Feature_default2 ? 0 : geometry.closestPointXY(x, y, closestPoint, minSquaredDistance);
          if (minSquaredDistance < previousMinSquaredDistance) {
            closestFeature = feature;
            const minDistance = Math.sqrt(minSquaredDistance);
            extent[0] = x - minDistance;
            extent[1] = y - minDistance;
            extent[2] = x + minDistance;
            extent[3] = y + minDistance;
          }
        }
      }
    );
    return closestFeature;
  }
  /**
   * Get the extent of the features currently in the source.
   *
   * This method is not available when the source is configured with
   * `useSpatialIndex` set to `false`.
   * @param {import("../extent.js").Extent} [extent] Destination extent. If provided, no new extent
   *     will be created. Instead, that extent's coordinates will be overwritten.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */
  getExtent(extent) {
    return this.featuresRtree_.getExtent(extent);
  }
  /**
   * Get a feature by its identifier (the value returned by feature.getId()). When `RenderFeature`s
   * are used, `getFeatureById()` can return an array of `RenderFeature`s. This allows for handling
   * of `GeometryCollection` geometries, where format readers create one `RenderFeature` per
   * `GeometryCollection` member.
   * Note that the index treats string and numeric identifiers as the same.  So
   * `source.getFeatureById(2)` will return a feature with id `'2'` or `2`.
   *
   * @param {string|number} id Feature identifier.
   * @return {FeatureClassOrArrayOfRenderFeatures<FeatureType>|null} The feature (or `null` if not found).
   * @api
   */
  getFeatureById(id) {
    const feature = this.idIndex_[id.toString()];
    return feature !== void 0 ? (
      /** @type {FeatureClassOrArrayOfRenderFeatures<FeatureType>} */
      feature
    ) : null;
  }
  /**
   * Get a feature by its internal unique identifier (using `getUid`).
   *
   * @param {string} uid Feature identifier.
   * @return {FeatureType|null} The feature (or `null` if not found).
   */
  getFeatureByUid(uid) {
    const feature = this.uidIndex_[uid];
    return feature !== void 0 ? feature : null;
  }
  /**
   * Get the format associated with this source.
   *
   * @return {import("../format/Feature.js").default<FeatureType>|null}} The feature format.
   * @api
   */
  getFormat() {
    return this.format_;
  }
  /**
   * @return {boolean} The source can have overlapping geometries.
   */
  getOverlaps() {
    return this.overlaps_;
  }
  /**
   * Get the url associated with this source.
   *
   * @return {string|import("../featureloader.js").FeatureUrlFunction|undefined} The url.
   * @api
   */
  getUrl() {
    return this.url_;
  }
  /**
   * @param {Event} event Event.
   * @private
   */
  handleFeatureChange_(event) {
    const feature = (
      /** @type {FeatureType} */
      event.target
    );
    const featureKey = getUid(feature);
    const geometry = feature.getGeometry();
    if (!geometry) {
      if (!(featureKey in this.nullGeometryFeatures_)) {
        if (this.featuresRtree_) {
          this.featuresRtree_.remove(feature);
        }
        this.nullGeometryFeatures_[featureKey] = feature;
      }
    } else {
      const extent = geometry.getExtent();
      if (featureKey in this.nullGeometryFeatures_) {
        delete this.nullGeometryFeatures_[featureKey];
        if (this.featuresRtree_) {
          this.featuresRtree_.insert(extent, feature);
        }
      } else {
        if (this.featuresRtree_) {
          this.featuresRtree_.update(extent, feature);
        }
      }
    }
    const id = feature.getId();
    if (id !== void 0) {
      const sid = id.toString();
      if (this.idIndex_[sid] !== feature) {
        this.removeFromIdIndex_(feature);
        this.idIndex_[sid] = feature;
      }
    } else {
      this.removeFromIdIndex_(feature);
      this.uidIndex_[featureKey] = feature;
    }
    this.changed();
    this.dispatchEvent(new VectorSourceEvent(VectorEventType_default.CHANGEFEATURE, feature));
  }
  /**
   * Returns true if the feature is contained within the source.
   * @param {FeatureType} feature Feature.
   * @return {boolean} Has feature.
   * @api
   */
  hasFeature(feature) {
    const id = feature.getId();
    if (id !== void 0) {
      return id in this.idIndex_;
    }
    return getUid(feature) in this.uidIndex_;
  }
  /**
   * @return {boolean} Is empty.
   */
  isEmpty() {
    if (this.featuresRtree_) {
      return this.featuresRtree_.isEmpty() && isEmpty(this.nullGeometryFeatures_);
    }
    if (this.featuresCollection_) {
      return this.featuresCollection_.getLength() === 0;
    }
    return true;
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} resolution Resolution.
   * @param {import("../proj/Projection.js").default} projection Projection.
   */
  loadFeatures(extent, resolution, projection) {
    const loadedExtentsRtree = this.loadedExtentsRtree_;
    const extentsToLoad = this.strategy_(extent, resolution, projection);
    for (let i = 0, ii = extentsToLoad.length; i < ii; ++i) {
      const extentToLoad = extentsToLoad[i];
      const alreadyLoaded = loadedExtentsRtree.forEachInExtent(
        extentToLoad,
        /**
         * @param {{extent: import("../extent.js").Extent}} object Object.
         * @return {boolean} Contains.
         */
        function(object) {
          return containsExtent(object.extent, extentToLoad);
        }
      );
      if (!alreadyLoaded) {
        ++this.loadingExtentsCount_;
        this.dispatchEvent(new VectorSourceEvent(VectorEventType_default.FEATURESLOADSTART));
        this.loader_.call(this, extentToLoad, resolution, projection, (features) => {
          --this.loadingExtentsCount_;
          this.dispatchEvent(new VectorSourceEvent(VectorEventType_default.FEATURESLOADEND, void 0, features));
        }, () => {
          --this.loadingExtentsCount_;
          this.dispatchEvent(new VectorSourceEvent(VectorEventType_default.FEATURESLOADERROR));
        });
        loadedExtentsRtree.insert(extentToLoad, {
          extent: extentToLoad.slice()
        });
      }
    }
    this.loading = this.loader_.length < 4 ? false : this.loadingExtentsCount_ > 0;
  }
  /**
   * @override
   */
  refresh() {
    this.clear(true);
    this.loadedExtentsRtree_.clear();
    super.refresh();
  }
  /**
   * Remove an extent from the list of loaded extents.
   * @param {import("../extent.js").Extent} extent Extent.
   * @api
   */
  removeLoadedExtent(extent) {
    const loadedExtentsRtree = this.loadedExtentsRtree_;
    let obj;
    loadedExtentsRtree.forEachInExtent(extent, function(object) {
      if (equals(object.extent, extent)) {
        obj = object;
        return true;
      }
    });
    if (obj) {
      loadedExtentsRtree.remove(obj);
    }
  }
  /**
   * Batch remove features from the source.  If you want to remove all features
   * at once, use the {@link module:ol/source/Vector~VectorSource#clear #clear()} method
   * instead.
   * @param {Array<FeatureType>} features Features to remove.
   * @api
   */
  removeFeatures(features) {
    let removed = false;
    for (let i = 0, ii = features.length; i < ii; ++i) {
      removed = this.removeFeatureInternal(features[i]) || removed;
    }
    if (removed) {
      this.changed();
    }
  }
  /**
   * Remove a single feature from the source. If you want to batch remove
   * features, use the {@link module:ol/source/Vector~VectorSource#removeFeatures #removeFeatures()} method
   * instead.
   * @param {FeatureType} feature Feature to remove.
   * @api
   */
  removeFeature(feature) {
    if (!feature) {
      return;
    }
    const removed = this.removeFeatureInternal(feature);
    if (removed) {
      this.changed();
    }
  }
  /**
   * Remove feature without firing a `change` event.
   * @param {FeatureType} feature Feature.
   * @return {boolean} True if the feature was removed, false if it was not found.
   * @protected
   */
  removeFeatureInternal(feature) {
    const featureKey = getUid(feature);
    if (!(featureKey in this.uidIndex_)) {
      return false;
    }
    if (featureKey in this.nullGeometryFeatures_) {
      delete this.nullGeometryFeatures_[featureKey];
    } else {
      if (this.featuresRtree_) {
        this.featuresRtree_.remove(feature);
      }
    }
    const featureChangeKeys = this.featureChangeKeys_[featureKey];
    featureChangeKeys?.forEach(unlistenByKey);
    delete this.featureChangeKeys_[featureKey];
    const id = feature.getId();
    if (id !== void 0) {
      const idString = id.toString();
      const indexedFeature = this.idIndex_[idString];
      if (indexedFeature === feature) {
        delete this.idIndex_[idString];
      } else if (Array.isArray(indexedFeature)) {
        indexedFeature.splice(indexedFeature.indexOf(feature), 1);
        if (indexedFeature.length === 1) {
          this.idIndex_[idString] = indexedFeature[0];
        }
      }
    }
    delete this.uidIndex_[featureKey];
    if (this.hasListener(VectorEventType_default.REMOVEFEATURE)) {
      this.dispatchEvent(new VectorSourceEvent(VectorEventType_default.REMOVEFEATURE, feature));
    }
    return true;
  }
  /**
   * Remove a feature from the id index.  Called internally when the feature id
   * may have changed.
   * @param {FeatureType} feature The feature.
   * @private
   */
  removeFromIdIndex_(feature) {
    for (const id in this.idIndex_) {
      if (this.idIndex_[id] === feature) {
        delete this.idIndex_[id];
        break;
      }
    }
  }
  /**
   * Set the new loader of the source. The next render cycle will use the
   * new loader.
   * @param {import("../featureloader.js").FeatureLoader<FeatureType>} loader The loader to set.
   * @api
   */
  setLoader(loader) {
    this.loader_ = loader;
  }
  /**
   * Points the source to a new url. The next render cycle will use the new url.
   * @param {string|import("../featureloader.js").FeatureUrlFunction} url Url.
   * @api
   */
  setUrl(url) {
    assert(this.format_, "`format` must be set when `url` is set");
    this.url_ = url;
    this.setLoader(xhr(url, this.format_));
  }
};
var Vector_default = VectorSource;

// node_modules/ol/layer/BaseImage.js
var BaseImageLayer = class extends Layer_default {
  /**
   * @param {Options<ImageSourceType>} [options] Layer options.
   */
  constructor(options) {
    options = options ? options : {};
    super(options);
  }
};
var BaseImage_default = BaseImageLayer;

// node_modules/ol/renderer/canvas/ImageLayer.js
var CanvasImageLayerRenderer = class extends Layer_default2 {
  /**
   * @param {import("../../layer/Image.js").default} imageLayer Image layer.
   */
  constructor(imageLayer) {
    super(imageLayer);
    this.image = null;
  }
  /**
   * @return {import('../../DataTile.js').ImageLike} Image.
   */
  getImage() {
    return !this.image ? null : this.image.getImage();
  }
  /**
   * Determine whether render should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   * @override
   */
  prepareFrame(frameState) {
    const layerState = frameState.layerStatesArray[frameState.layerIndex];
    const pixelRatio = frameState.pixelRatio;
    const viewState = frameState.viewState;
    const viewResolution = viewState.resolution;
    const imageSource = this.getLayer().getSource();
    const hints = frameState.viewHints;
    let renderedExtent = frameState.extent;
    if (layerState.extent !== void 0) {
      renderedExtent = getIntersection(renderedExtent, fromUserExtent(layerState.extent, viewState.projection));
    }
    if (!hints[ViewHint_default.ANIMATING] && !hints[ViewHint_default.INTERACTING] && !isEmpty2(renderedExtent)) {
      if (imageSource) {
        const projection = viewState.projection;
        const image = imageSource.getImage(renderedExtent, viewResolution, pixelRatio, projection);
        if (image) {
          if (this.loadImage(image)) {
            this.image = image;
          } else if (image.getState() === ImageState_default.EMPTY) {
            this.image = null;
          }
        }
      } else {
        this.image = null;
      }
    }
    return !!this.image;
  }
  /**
   * @param {import("../../pixel.js").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray} Data at the pixel location.
   * @override
   */
  getData(pixel) {
    const frameState = this.frameState;
    if (!frameState) {
      return null;
    }
    const layer = this.getLayer();
    const coordinate = apply(frameState.pixelToCoordinateTransform, pixel.slice());
    const layerExtent = layer.getExtent();
    if (layerExtent) {
      if (!containsCoordinate(layerExtent, coordinate)) {
        return null;
      }
    }
    const imageExtent = this.image.getExtent();
    const img = this.image.getImage();
    const imageMapWidth = getWidth(imageExtent);
    const col = Math.floor(img.width * ((coordinate[0] - imageExtent[0]) / imageMapWidth));
    if (col < 0 || col >= img.width) {
      return null;
    }
    const imageMapHeight = getHeight(imageExtent);
    const row = Math.floor(img.height * ((imageExtent[3] - coordinate[1]) / imageMapHeight));
    if (row < 0 || row >= img.height) {
      return null;
    }
    return this.getImageData(img, col, row);
  }
  /**
   * Render the layer.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target that may be used to render content to.
   * @return {HTMLElement} The rendered element.
   * @override
   */
  renderFrame(frameState, target) {
    const image = this.image;
    const imageExtent = image.getExtent();
    const imageResolution = image.getResolution();
    const [imageResolutionX, imageResolutionY] = Array.isArray(imageResolution) ? imageResolution : [imageResolution, imageResolution];
    const imagePixelRatio = image.getPixelRatio();
    const layerState = frameState.layerStatesArray[frameState.layerIndex];
    const pixelRatio = frameState.pixelRatio;
    const viewState = frameState.viewState;
    const viewCenter = viewState.center;
    const viewResolution = viewState.resolution;
    const scaleX = pixelRatio * imageResolutionX / (viewResolution * imagePixelRatio);
    const scaleY = pixelRatio * imageResolutionY / (viewResolution * imagePixelRatio);
    this.prepareContainer(frameState, target);
    const width = this.context.canvas.width;
    const height = this.context.canvas.height;
    const context = this.getRenderContext(frameState);
    let clipped = false;
    let render = true;
    if (layerState.extent) {
      const layerExtent = fromUserExtent(layerState.extent, viewState.projection);
      render = intersects(layerExtent, frameState.extent);
      clipped = render && !containsExtent(layerExtent, frameState.extent);
      if (clipped) {
        this.clipUnrotated(context, frameState, layerExtent);
      }
    }
    const img = image.getImage();
    const transform = compose(this.tempTransform, width / 2, height / 2, scaleX, scaleY, 0, imagePixelRatio * (imageExtent[0] - viewCenter[0]) / imageResolutionX, imagePixelRatio * (viewCenter[1] - imageExtent[3]) / imageResolutionY);
    this.renderedResolution = imageResolutionY * pixelRatio / imagePixelRatio;
    const dw = img.width * transform[0];
    const dh = img.height * transform[3];
    if (!this.getLayer().getSource().getInterpolate()) {
      context.imageSmoothingEnabled = false;
    }
    this.preRender(context, frameState);
    if (render && dw >= 0.5 && dh >= 0.5) {
      const dx = transform[4];
      const dy = transform[5];
      const opacity = layerState.opacity;
      if (opacity !== 1) {
        context.save();
        context.globalAlpha = opacity;
      }
      context.drawImage(img, 0, 0, +img.width, +img.height, dx, dy, dw, dh);
      if (opacity !== 1) {
        context.restore();
      }
    }
    this.postRender(this.context, frameState);
    if (clipped) {
      context.restore();
    }
    context.imageSmoothingEnabled = true;
    return this.container;
  }
};
var ImageLayer_default = CanvasImageLayerRenderer;

// node_modules/ol/layer/Image.js
var ImageLayer = class extends BaseImage_default {
  /**
   * @param {import("./BaseImage.js").Options<ImageSourceType>} [options] Layer options.
   */
  constructor(options) {
    super(options);
  }
  /**
   * @override
   */
  createRenderer() {
    return new ImageLayer_default(this);
  }
  /**
   * Get data for a pixel location.  A four element RGBA array will be returned.  For requests outside the
   * layer extent, `null` will be returned.  Data for an image can only be retrieved if the
   * source's `crossOrigin` property is set.
   *
   * ```js
   * // display layer data on every pointer move
   * map.on('pointermove', (event) => {
   *   console.log(layer.getData(event.pixel));
   * });
   * ```
   * @param {import("../pixel").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
   * @api
   * @override
   */
  getData(pixel) {
    return super.getData(pixel);
  }
};
var Image_default2 = ImageLayer;

// node_modules/ol/ImageCanvas.js
var ImageCanvas = class extends Image_default {
  /**
   * @param {import("./extent.js").Extent} extent Extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {HTMLCanvasElement} canvas Canvas.
   * @param {Loader} [loader] Optional loader function to
   *     support asynchronous canvas drawing.
   */
  constructor(extent, resolution, pixelRatio, canvas, loader) {
    const state = loader !== void 0 ? ImageState_default.IDLE : ImageState_default.LOADED;
    super(extent, resolution, pixelRatio, state);
    this.loader_ = loader !== void 0 ? loader : null;
    this.canvas_ = canvas;
    this.error_ = null;
  }
  /**
   * Get any error associated with asynchronous rendering.
   * @return {?Error} Any error that occurred during rendering.
   */
  getError() {
    return this.error_;
  }
  /**
   * Handle async drawing complete.
   * @param {Error} [err] Any error during drawing.
   * @private
   */
  handleLoad_(err) {
    if (err) {
      this.error_ = err;
      this.state = ImageState_default.ERROR;
    } else {
      this.state = ImageState_default.LOADED;
    }
    this.changed();
  }
  /**
   * Load not yet loaded URI.
   * @override
   */
  load() {
    if (this.state == ImageState_default.IDLE) {
      this.state = ImageState_default.LOADING;
      this.changed();
      this.loader_(this.handleLoad_.bind(this));
    }
  }
  /**
   * @return {HTMLCanvasElement} Canvas element.
   * @override
   */
  getImage() {
    return this.canvas_;
  }
};
var ImageCanvas_default = ImageCanvas;

// node_modules/ol/resolution.js
function fromResolutionLike(resolution) {
  if (Array.isArray(resolution)) {
    return Math.min(...resolution);
  }
  return resolution;
}

export {
  VectorEventType_default,
  loadFeaturesXhr,
  Vector_default,
  ImageLayer_default,
  Image_default2 as Image_default,
  ImageCanvas_default,
  fromResolutionLike
};
//# sourceMappingURL=chunk-XLSTPAWA.js.map
