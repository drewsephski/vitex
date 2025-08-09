"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Blobity_1 = __importDefault(require("../Blobity"));
exports.default = (function (options) {
    var instance = react_1.useRef(null);
    react_1.useEffect(function () {
        if (!instance.current) {
            instance.current = new Blobity_1.default(options);
        }
    }, []);
    return instance;
});
