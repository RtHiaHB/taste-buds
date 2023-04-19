"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const MenuItem_1 = __importDefault(require("./MenuItem"));
const Category = (props) => {
    const filteredData = props.data.filter((item) => {
        return (item.category === props.category);
    });
    const menuItems = filteredData.map((item) => {
        return ((0, jsx_runtime_1.jsx)(MenuItem_1.default, { id: item.item_id, item: item }));
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h2", { children: props.category }), menuItems] }));
};
exports.default = Category;
