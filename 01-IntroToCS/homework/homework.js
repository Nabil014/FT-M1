'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var binario = 0
  // "1011" ["1","0","1","1"]
  // sumatoria D*2**i
  for (let i = 0; i < num.length; i++) {
    binario += num[i] * 2 ** [num.length - 1 - i];
  }
  return binario;
}

function DecimalABinario(num) {
  // tu codigo aca
  // D/2%
  var division = []
  var decimal = num
  while (decimal != 0) {
    division.push(decimal % 2)
    decimal = Math.floor(decimal / 2)
  }
  return division.reverse().join("");
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}