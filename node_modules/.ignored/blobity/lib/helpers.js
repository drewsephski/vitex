"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.negative = exports.positive = exports.isGradient = exports.convertColor = exports.extractRgbFromRgb = exports.extractRgbFromHex = void 0;
var extractRgbFromHex = function (hex) {
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    return { r: r, g: g, b: b };
};
exports.extractRgbFromHex = extractRgbFromHex;
var extractRgbFromRgb = function (rgb) {
    var match = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/.exec(rgb);
    if (match === null) {
        throw new Error("Couldn't convert color string " + rgb);
    }
    return {
        r: parseInt(match[1]),
        g: parseInt(match[2]),
        b: parseInt(match[3]),
    };
};
exports.extractRgbFromRgb = extractRgbFromRgb;
var convertColor = function (color) {
    if (color.includes('rgb')) {
        return exports.extractRgbFromRgb(color);
    }
    else if (color.startsWith('#')) {
        return exports.extractRgbFromHex(color);
    }
    throw new Error("Couldn't convert color string " + color);
};
exports.convertColor = convertColor;
var isGradient = function (color) {
    return Array.isArray(color);
};
exports.isGradient = isGradient;
var positive = function (n) { return Math.max(n, 0); };
exports.positive = positive;
var negative = function (n) { return Math.min(n, 0); };
exports.negative = negative;
