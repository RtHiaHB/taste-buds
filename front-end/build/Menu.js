"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
//import MenuItem from './MenuItem'
const Category_1 = __importDefault(require("./Category"));
const Menu = () => {
    const [menu, setMenu] = (0, react_1.useState)([]);
    const fetchMenu = () => __awaiter(void 0, void 0, void 0, function* () {
        const url = 'http://localhost:4000/items';
        const response = yield fetch(url);
        const data = yield response.json();
        if (data) {
            setMenu(data);
        }
        else {
            let MNF = [(`Menu not found`)];
            setMenu(MNF);
        }
    });
    (0, react_1.useEffect)(() => {
        if (!menu) {
            fetchMenu();
        }
    });
    const display = () => {
        if (menu.length === 0) {
            fetchMenu();
        }
        return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Category_1.default, { category: 'Appetizers', data: menu }), (0, jsx_runtime_1.jsx)(Category_1.default, { category: 'Salads', data: menu }), (0, jsx_runtime_1.jsx)(Category_1.default, { category: 'Entrees', data: menu }), (0, jsx_runtime_1.jsx)(Category_1.default, { category: 'Sides', data: menu }), (0, jsx_runtime_1.jsx)(Category_1.default, { category: 'Kids\' Meals', data: menu }), (0, jsx_runtime_1.jsx)(Category_1.default, { category: 'Desserts', data: menu })] }));
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: display() }));
};
exports.default = Menu;
