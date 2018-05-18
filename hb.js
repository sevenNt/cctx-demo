const ccxt = require ('ccxt')
console.log (ccxt.exchanges)

const ccxt = require ('ccxt')
let exchange = new ccxt.kraken ()
let kraken1 = new ccxt.kraken ({ id: 'kraken1' })
let kraken2 = new ccxt.kraken ({ id: 'kraken2' })
let id = 'gdax'
let gdax = new ccxt[id] ();