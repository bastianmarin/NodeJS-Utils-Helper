/**************************************************************************
*   
*   Proyect: NodeJS-Utils-Helper
*   License: See LICENSE in the top level directory
*   Author: iroaK
*   File: utils.js
*   
**************************************************************************/

/**
*   Recursively retrieves all file paths from the given directory.
*   @param {string} currentPath - The path of the directory to read files from.
*   @returns {string[]} An array of unique file paths.
*/
function getAllFiles(currentPath) {
    const fs = require('fs');
    let currentFiles = [];
    for (const thatFile of fs.readdirSync(currentPath)) {
        let filePath = currentPath + '/' + thatFile;
        if (fs.lstatSync(filePath).isDirectory()) {
            currentFiles = currentFiles.concat(currentFiles, getAllFiles(filePath));
        } else {
            currentFiles.push(filePath);
        }
    }
    return [...new Set(currentFiles)];
}
exports.getAllFiles = getAllFiles;

/**
*   Delays the execution of code for a specified number of milliseconds.
*   @param {number} ms - The number of milliseconds to delay.
*   @returns {Promise<void>} A promise that resolves after the specified delay.
*/
async function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
exports.delay = delay;

/**
*   Generates a random integer between the specified minimum and maximum values, inclusive.
*   @param {number} min - The minimum value of the random number.
*   @param {number} max - The maximum value of the random number.
*   @returns {number} A random integer between min and max, inclusive.
*/
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.getRandomNumber = getRandomNumber;

/**
*   Shuffles the elements of an array in place using the Fisher-Yates algorithm.
*   @param {Array} array - The array to shuffle.
*   @returns {Array} The shuffled array.
*/
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}
exports.shuffleArray = shuffleArray;

/**
*   Converts a given country code to its corresponding flag emoji.
*   @param {string} countryCode - The ISO 3166-1 alpha-2 country code.
*   @returns {string} The flag emoji corresponding to the given country code.
*/
function getFlagEmoji(countryCode) {
    const codePoints = countryCode.toUpperCase().split('').map(char => 0x1F1E6 - 65 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}
exports.getFlagEmoji = getFlagEmoji;

/**
*   Generates a random string of the specified length using uppercase letters and digits.
*   @param {number} length - The length of the random string to generate.
*   @returns {string} A random string of the specified length.
*/
function randomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
exports.randomString = randomString;

/**
*   Converts a number to a money format string with commas as thousand separators.
*   @param {number} number - The number to be formatted.
*   @returns {string} The formatted money string.
*/
function numberToMoneyFormat(number) {
    if(typeof number == 'number') number = number.toString();
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
exports.numberToMoneyFormat = numberToMoneyFormat;

/**
 * Generates an MD5 hash for a given string.
 * @param {string} string - The input string to hash.
 * @returns {string} The MD5 hash of the input string in hexadecimal format.
 */
function getMD5Hash(string) {
    const crypto = require('crypto');
    return crypto.createHash('md5').update(string).digest('hex');
}
exports.getMD5Hash = getMD5Hash;

/**
*   Verifica si una cadena es un emoji válido.
*   @param {string} emoji - El emoji a verificar.
*   @returns {boolean} - true si el emoji es válido, false de lo contrario.
*/
function isEmoji(emoji) {
    const emojiRegex = /^(\p{Emoji_Modifier_Base}|\p{Emoji_Presentation}|\p{Emoji}\uFE0F|\p{Emoji_Modifier}|\p{Emoji_Component}|\p{Extended_Pictographic})+$/u;
    return emojiRegex.test(emoji);
}
exports.isEmoji = isEmoji;