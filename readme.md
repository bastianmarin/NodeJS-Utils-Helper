# NodeJS Utils Helper

NodeJS Utils Helper is a library that provides a set of utility functions to simplify common tasks in Node.js development.

## Installation

You can install the library using npm:

```bash
npm install @bastianmarin/nodejs-utils-helper
```

## Usage

Here is an example of how to use the library:

```javascript
const utils = require('@bastianmarin/nodejs-utils-helper');

// Example usage of getAllFiles
const allFiles = utils.getAllFiles('/path/to/directory');
console.log('All Files:', allFiles);

// Example usage of delay
async function exampleDelay() {
    console.log('Waiting for 2 seconds...');
    await utils.delay(2000);
    console.log('2 seconds have passed');
}
exampleDelay();

// Example usage of getRandomNumber
const randomNumber = utils.getRandomNumber(1, 100);
console.log('Random Number:', randomNumber);

// Example usage of shuffleArray
const array = [1, 2, 3, 4, 5];
const shuffledArray = utils.shuffleArray(array);
console.log('Shuffled Array:', shuffledArray);

// Example usage of getFlagEmoji
const flagEmoji = utils.getFlagEmoji('us');
console.log('Flag Emoji:', flagEmoji);

// Example usage of randomString
const randomStr = utils.randomString(10);
console.log('Random String:', randomStr);
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License.