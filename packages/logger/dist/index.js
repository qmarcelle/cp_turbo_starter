"use strict";
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/index.ts
var index_exports = {};
__export(index_exports, {
    createBaseLogger: function() {
        return createBaseLogger;
    }
});
module.exports = __toCommonJS(index_exports);
var import_winston = require("winston");
var Logger = /*#__PURE__*/ function() {
    function Logger(config) {
        _class_call_check(this, Logger);
        this.service = config.service;
        this.correlationId = config.correlationId;
        this.logger = (0, import_winston.createLogger)({
            level: config.level || "info",
            format: import_winston.format.combine(import_winston.format.timestamp(), import_winston.format.json()),
            defaultMeta: {
                service: this.service,
                correlationId: this.correlationId
            },
            transports: [
                new import_winston.transports.Console(),
                new import_winston.transports.File({
                    filename: "logs/".concat(this.service, "-error.log"),
                    level: "error"
                }),
                new import_winston.transports.File({
                    filename: "logs/".concat(this.service, ".log")
                })
            ]
        });
    }
    _create_class(Logger, [
        {
            key: "log",
            value: function log(level, message, metadata) {
                var logEntry = _object_spread({
                    message: message,
                    level: level,
                    timestamp: /* @__PURE__ */ new Date().toISOString(),
                    correlationId: this.correlationId,
                    service: this.service
                }, metadata && {
                    metadata: metadata
                });
                this.logger.log(level, message, logEntry);
            }
        },
        {
            key: "error",
            value: function error(message, metadata) {
                this.log("error", message, metadata);
            }
        },
        {
            key: "warn",
            value: function warn(message, metadata) {
                this.log("warn", message, metadata);
            }
        },
        {
            key: "info",
            value: function info(message, metadata) {
                this.log("info", message, metadata);
            }
        },
        {
            key: "debug",
            value: function debug(message, metadata) {
                this.log("debug", message, metadata);
            }
        },
        {
            key: "setCorrelationId",
            value: function setCorrelationId(correlationId) {
                this.correlationId = correlationId;
            }
        }
    ]);
    return Logger;
}();
var createBaseLogger = function(config) {
    return new Logger(config);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    createBaseLogger: createBaseLogger
});
