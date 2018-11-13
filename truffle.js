var HDWalletProvider = require('truffle-hdwallet-provider')

const mnemonic = 'laundry garlic april just blur neutral stuff fade tail manual possible volume'
const infura = 'https://rinkeby.infura.io/v3/62479fc9ebd4410aaf1955f56cac2c31'

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*'
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, infura),
      network_id: 4,
      gas: 6700000,
      gasPrice: 10000000000
    }
  }
}
