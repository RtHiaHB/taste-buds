"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const SignIn = () => {
    const centeredtext = {
        'paddingLeft': '25%',
        'paddingRight': '25%',
    };
    const bottomspacing = {
        'paddingBottom': '.5em'
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ style: centeredtext }, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Sign In" }), (0, jsx_runtime_1.jsxs)("form", { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ style: bottomspacing }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: 'username' }, { children: "Email:\u00A0" })), (0, jsx_runtime_1.jsx)("input", { type: 'text', id: 'username' }), " ", (0, jsx_runtime_1.jsx)("br", {})] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: bottomspacing }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: 'password' }, { children: "Password:\u00A0" })), (0, jsx_runtime_1.jsx)("input", { type: 'password', id: 'password' }), (0, jsx_runtime_1.jsx)("br", {})] })), (0, jsx_runtime_1.jsx)("input", { type: 'submit', id: 'login', value: 'Submit' })] }), (0, jsx_runtime_1.jsx)("h2", { children: "Sign Up" }), (0, jsx_runtime_1.jsxs)("form", { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ style: bottomspacing }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: 'newusername' }, { children: "Email:\u00A0" })), (0, jsx_runtime_1.jsx)("input", { type: 'text', id: 'newusername' })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: bottomspacing }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: 'newpassword' }, { children: "New Password:\u00A0" })), (0, jsx_runtime_1.jsx)("input", { type: 'password', id: 'newpassword' })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ style: bottomspacing }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: 'newpasswordconfirm' }, { children: "Confirm Password:\u00A0" })), (0, jsx_runtime_1.jsx)("input", { type: 'password', id: 'newpasswordconfirm' })] })), (0, jsx_runtime_1.jsx)("input", { type: 'submit', value: 'Submit' })] }), (0, jsx_runtime_1.jsx)("p", { children: "Here, at Taste Bud's, we value your privacy.  Email is only used for identification purposes." })] })));
};
exports.default = SignIn;
