"use strict";

/**
 * @credit zansxart
 * tiktok: https://tiktok.com/zansxart
 * Instagram: https://instagram.com/zansxart
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

console.clear()

const title = `
      z  a  n  s  x  a  r  t
`

// Fungsi buat nampilin box minimalis
const showMinimalistLayout = () => {
    const boxWidth = 42;
    const line = "─".repeat(boxWidth);
    const softGradient = gradient(['#a18cd1', '#fbc2eb']); // Pastel Purple/Pink
    
    console.log(chalk.gray(`┌${line}┐`));
    console.log(chalk.gray(`│`) + chalk.bold(softGradient(`          ⚡ zansx-baileys v0.5.3         `)) + chalk.gray(`│`));
    console.log(chalk.gray(`├${line}┤`));
    console.log(chalk.gray(`│`) + chalk.cyan("  ✨  AI Integration     ") + chalk.magenta("  🤖  Automated   ") + chalk.gray(`│`));
    console.log(chalk.gray(`│`) + chalk.blue("  🚀  High Performance   ") + chalk.green("  🛡️   Safe Build  ") + chalk.gray(`│`));
    console.log(chalk.gray(`├${line}┤`));
    console.log(chalk.gray(`│`) + chalk.yellow(`  🌐  Visit: `) + chalk.underline.white("https://zansxart.me") + " ".repeat(boxWidth - 28) + chalk.gray(`│`));
    console.log(chalk.gray(`└${line}┘`));
    console.log(chalk.italic.gray("       \"coding with heart, bot with soul\""));
    console.log();
};

// Animasi logo dengan safety check
let anim = null;
if (chalkAnimation && typeof chalkAnimation.neon === 'function') {
    try {
        // Pake animasi NEON biar lebih modern/lucu
        anim = chalkAnimation.neon(title);
    } catch (e) {
        console.log(gradient.pastel(title));
    }
} else {
    console.log(gradient.pastel(title));
}

setTimeout(() => {
    if (anim && typeof anim.stop === 'function') {
        anim.stop();
    }
    
    // Tampilkan layout box minimalis
    showMinimalistLayout();

}, 2000);


// ==========================================================
// EXPORT BAILEYS (DO NOT REMOVE)
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
