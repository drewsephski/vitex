"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var Blobity_1 = __importDefault(require("../Blobity"));
exports.default = (function (options) {
    var instance = vue_1.ref(null);
    vue_1.onMounted(function () {
        if (!instance.value) {
            instance.value = new Blobity_1.default(options);
        }
    });
    return instance.value;
});
