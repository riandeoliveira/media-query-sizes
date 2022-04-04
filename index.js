"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var size = {
    desktop: 2560,
    laptopL: 1440,
    laptop: 1024,
    tablet: 768,
    mobileL: 425,
    mobileM: 375,
    mobileS: 320,
};
var device = {
    desktop: "(max-width: ".concat(size.desktop, "px)"),
    laptopL: "(max-width: ".concat(size.laptopL, "px)"),
    laptop: "(max-width: ".concat(size.laptop, "px)"),
    tablet: "(max-width: ".concat(size.tablet, "px)"),
    mobileL: "(max-width: ".concat(size.mobileL, "px)"),
    mobileM: "(max-width: ".concat(size.mobileM, "px)"),
    mobileS: "(max-width: ".concat(size.mobileS, "px)"),
};
module.exports = device;