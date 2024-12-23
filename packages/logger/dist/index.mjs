// src/index.ts
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
import { createLogger, format, transports } from "winston";
var Logger = /*#__PURE__*/ function() {
    "use strict";
    function Logger(config) {
        _class_call_check(this, Logger);
        this.service = config.service;
        this.correlationId = config.correlationId;
        this.logger = createLogger({
            level: config.level || "info",
            format: format.combine(format.timestamp(), format.json()),
            defaultMeta: {
                service: this.service,
                correlationId: this.correlationId
            },
            transports: [
                new transports.Console(),
                new transports.File({
                    filename: "logs/".concat(this.service, "-error.log"),
                    level: "error"
                }),
                new transports.File({
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
export { createBaseLogger };
