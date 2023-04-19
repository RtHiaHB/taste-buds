"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./App.css");
const NavBar_1 = __importDefault(require("./NavBar"));
const react_router_dom_1 = require("react-router-dom");
const About_1 = __importDefault(require("./About"));
const Home_1 = __importDefault(require("./Home"));
const Locations_1 = __importDefault(require("./Locations"));
const Contact_1 = __importDefault(require("./Contact"));
const Menu_1 = __importDefault(require("./Menu"));
const Events_1 = __importDefault(require("./Events"));
const SignIn_1 = __importDefault(require("./SignIn"));
require("./css/style.css");
function App() {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'App' }, { children: [(0, jsx_runtime_1.jsx)(NavBar_1.default, {}), (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/about", element: (0, jsx_runtime_1.jsx)(About_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/locations", element: (0, jsx_runtime_1.jsx)(Locations_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/contact", element: (0, jsx_runtime_1.jsx)(Contact_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/menu", element: (0, jsx_runtime_1.jsx)(Menu_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/events", element: (0, jsx_runtime_1.jsx)(Events_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/signin", element: (0, jsx_runtime_1.jsx)(SignIn_1.default, {}) })] }) })] })));
}
exports.default = App;
