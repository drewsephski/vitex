"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var kinet_1 = __importDefault(require("kinet"));
var throttle_1 = __importDefault(require("lodash/throttle"));
var Magnetic = /** @class */ (function () {
    function Magnetic(element) {
        var _this = this;
        this.destroying = false;
        this.onTick = null;
        this.destroy = function () {
            window.removeEventListener('mousemove', _this.throttledMouseMove);
            _this.destroying = true;
            _this.kinetInstance.animate('x', 0);
            _this.kinetInstance.animate('y', 0);
        };
        this.mouseMove = function (event) {
            var distance = _this.getDistance(event.clientX + window.scrollX, event.clientY + window.scrollY);
            _this.render(distance, -1 * (_this.center.x - event.clientX - window.scrollX), -1 * (_this.center.y - event.clientY - window.scrollY));
        };
        this.kinetInstance = new kinet_1.default({
            names: ['x', 'y'],
            acceleration: 0.1,
            friction: 0.4,
        });
        this.element = element;
        this.rect = this.element.getBoundingClientRect();
        this.center = {
            x: this.rect.x + window.scrollX + this.element.offsetWidth / 2,
            y: this.rect.y + window.scrollY + this.element.offsetHeight / 2,
        };
        this.maxDistanceX = this.element.offsetWidth / 2;
        this.maxDistanceY = this.element.offsetWidth / 2;
        this.throttledMouseMove = throttle_1.default(this.mouseMove);
        window.addEventListener('mousemove', this.throttledMouseMove, {
            passive: true,
        });
        this.kinetInstance.on('tick', function (instances) {
            _this.element.style.transform = "translate3d(" + instances.x.current + "px, " + instances.y.current + "px, 0) rotateY(" + instances.x.current / 2 + "deg) rotateX(" + instances.y.current / 2 + "deg)";
            _this.onTick && _this.onTick();
        });
        this.kinetInstance.on('end', function () {
            if (_this.destroying) {
                _this.element.style.transform = '';
            }
        });
    }
    Magnetic.prototype.getDistance = function (x, y) {
        return Math.round(Math.sqrt(Math.pow(this.center.x - x, 2) + Math.pow(this.center.y - y, 2)));
    };
    Magnetic.prototype.render = function (distance, x, y) {
        if (Math.abs(x) < this.maxDistanceX &&
            Math.abs(y) < this.maxDistanceY) {
            var percentX = x / this.maxDistanceX;
            var percentY = y / this.maxDistanceY;
            this.kinetInstance.animate('x', Math.round(20 * percentX));
            this.kinetInstance.animate('y', Math.round(20 * percentY));
        }
        else {
            this.kinetInstance.animate('x', 0);
            this.kinetInstance.animate('y', 0);
        }
    };
    return Magnetic;
}());
exports.default = Magnetic;
