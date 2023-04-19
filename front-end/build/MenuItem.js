"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const MenuItem = (props) => {
    const view = () => {
        return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { children: props.item.name }), (0, jsx_runtime_1.jsxs)("p", { children: [props.item.description, ": ", (0, jsx_runtime_1.jsx)("b", { children: props.item.price }), " "] })] }, props.id));
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: view() }));
};
exports.default = MenuItem;
