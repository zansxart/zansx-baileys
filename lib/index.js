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
███████╗  █████╗  ███╗   ██╗ ███████╗ ██╗  ██╗  █████╗  ██████╗  ████████╗
z a n s x a r t
`

// animasi logo dengan safety check super ketat
let anim = null;
if (chalkAnimation && typeof chalkAnimation.rainbow === 'function') {
    try {
        anim = chalkAnimation.rainbow(title);
    } catch (e) {
        console.log(gradient.rainbow(title));
    }
} else {
    console.log(gradient.rainbow(title));
}

setTimeout(() => {

    if (anim && typeof anim.stop === 'function') {
        anim.stop();
    }

    console.log(
        chalk.bold(
            gradient(['#ff00ff', '#00ffff'])(
                "⚡ zansxart BOT SYSTEM"
            )
        )
    )

    console.log(chalk.gray("────────────────────────────────"))

    console.log(
        chalk.cyan("• AI Integration")
    )

    console.log(
        chalk.magenta("• WhatsApp Automation")
    )

    console.log(
        chalk.blue("• Plugin Loader Ready")
    )

    console.log(chalk.gray("────────────────────────────────"))

    console.log(
        chalk.bold.green("Hosting murah bergaransi")
    )

    console.log(
        chalk.bold.cyan("zansxart.me")
    )

    console.log(chalk.gray("────────────────────────────────"))
    console.log()

}, 2500)


// EXPORT BAILEYS (biar tetap jalan seperti file asli)

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
