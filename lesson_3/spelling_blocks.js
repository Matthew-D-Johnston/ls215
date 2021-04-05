"use strict";

function letterBlock(char) {
  const Blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];

  for (let index = 0; index < Blocks.length; index += 1) {
    if (Blocks[index].includes(char.toUpperCase())) {
      return Blocks[index];
    }
  }
}

function isBlockWord(word) {
  let matchingBlocks = [];

  for (let index = 0; index < word.length; index += 1) {
    let currentBlock = letterBlock(word[index]);

    if (matchingBlocks.includes(currentBlock)) {
      return false;
    }

    matchingBlocks.push(currentBlock);
  }

  return true;
}

console.log(isBlockWord('BATCH'));
console.log(isBlockWord('BUTCH'));
console.log(isBlockWord('jest'));
console.log(isBlockWord(''));
console.log(isBlockWord('Matt'));
console.log(isBlockWord('BOWL'));
