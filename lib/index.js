"use strict";

/**
 * @project zansx-baileys
 * @author zansxart
 * @license MIT
 */

const chalk = require("chalk");
const gradient = require("gradient-string");

// Robust check for chalk-animation
let chalkAnimation;
try {
    const rawAnim = require("chalk-animation");
    chalkAnimation = rawAnim.default || rawAnim;
} catch (e) {
    chalkAnimation = null;
}

console.clear();

// Modern Solid ASCII
const logo = `
   ███████╗ █████╗ ███╗   ██╗███████╗██╗  ██╗
   ╚══███╔╝██╔══██╗████╗  ██║██╔════╝╚██╗██╔╝
     ███╔╝ ███████║██╔██╗ ██║███████╗ ╚███╔╝ 
    ███╔╝  ██╔══██║██║╚██╗██║╚════██║ ██╔██╗ 
   ███████╗██║  ██║██║ ╚████║███████║██╔╝ ██╗
   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝
`;

const systemInfo = () => {
    const primary = gradient(['#43e97b', '#38f9d7']); // Spring Green
    const accent = gradient(['#00c6ff', '#0072ff']);  // Cool Blue
    
    console.log(accent.bold("   » SYSTEM CORE LOADED «   "));
    console.log(chalk.gray("   ──────────────────────────────────────────"));
    
    const info = [
        { key: "LIBRARY ", val: "zansx-baileys", color: chalk.cyan },
        { key: "VERSION ", val: "v0.5.4 (Stable)", color: chalk.green },
        { key: "ENGINE  ", val: "Baileys Native", color: chalk.yellow },
        { key: "STATUS  ", val: "Online & Encrypted", color: chalk.blueBright }
    ];

    info.forEach(item => {
        console.log(`   ${chalk.white(item.key)} ${chalk.gray("→")} ${item.color(item.val)}`);
    });

    console.log(chalk.gray("   ──────────────────────────────────────────"));
    console.log(primary("   READY TO PROCESS INCOMING REQUESTS..."));
    console.log();
};

// Start Animation
let anim = null;
if (chalkAnimation && typeof chalkAnimation.glitch === 'function') {
    try {
        // GLITCH animation looks way more professional for dev tools
        anim = chalkAnimation.glitch(gradient(['#00c6ff', '#0072ff'])(logo));
    } catch (e) {
        console.log(gradient(['#00c6ff', '#0072ff'])(logo));
    }
} else {
    console.log(gradient(['#00c6ff', '#0072ff'])(logo));
}

setTimeout(() => {
    if (anim && typeof anim.stop === 'function') {
        anim.stop();
    }
    
    // Tampilkan System Dashboard
    systemInfo();

}, 1500);


// ==========================================================
// EXPORT BAILEYS (INTERNAL BINDINGS)
// ==========================================================

var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function () { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));

var __exportStar = (this && this.__exportStar) || function (m, exports) {
    for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.proto = exports.makeWASocket = void 0;

const WAProto_1 = require("../WAProto");
Object.defineProperty(exports, "proto", {
    enumerable: true,
    get: function () {
        return WAProto_1.proto;
    }
});

const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;

__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
