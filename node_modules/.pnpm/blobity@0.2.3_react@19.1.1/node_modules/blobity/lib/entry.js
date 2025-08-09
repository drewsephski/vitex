"use strict";
/** @license Blobity
 * Copyright (c) Georgy Marchuk.
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// this is here for webpack to expose Blobity as window.Blobity
var Blobity_1 = __importDefault(require("./Blobity"));
module.exports = Blobity_1.default;
var autoStart = document.querySelector('script[src^="https://cdn.blobity.dev/by.js"]');
if (autoStart) {
    var url = new URL(autoStart.src);
    var params = url.searchParams;
    if (params.get('autoStart') !== null) {
        // @ts-ignore
        window.blobity = new Blobity_1.default({
            licenseKey: params.get('licenseKey'),
        });
    }
}
