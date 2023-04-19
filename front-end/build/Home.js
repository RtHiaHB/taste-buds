"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./css/style.css");
const burger_mp4_1 = __importDefault(require("./video/burger.mp4"));
const Home = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Taste Buds" }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("video", Object.assign({ autoPlay: true, loop: true, muted: true, className: "back-video" }, { children: (0, jsx_runtime_1.jsx)("source", { src: burger_mp4_1.default, type: "video/mp4" }) })) })] }));
};
exports.default = Home;
