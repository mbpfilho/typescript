"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { areaCircunferencia } from "./circunferencia"
const circunferencia_1 = require("./circunferencia");
// import { areaRetangulo } from "./retangulo"
const retangulo_1 = __importDefault(require("./retangulo"));
// console.log(areaRetangulo(7, 8))
console.log((0, retangulo_1.default)(7, 8));
// console.log(areaCircunferencia(2))
console.log((0, circunferencia_1.areaCircunferencia)(2));
const { digaOi } = require("./novo");
console.log(digaOi("Ana"));
