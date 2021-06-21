module.exports = {
  compilers: {
    solc: {
      version: "0.7.5",
      parser: "solcjs", //fits the situation for fast compile
      settings: {
        optimizer: {
          enabled: true,
          runs: 1000,
          details: { yul: true }
        }
      }
    }
  },
  // etherscan: {
  //   apiKey: "0123456789abcdef0123456789abcdef"    //for custom api for source
  // },
  contracts_build_directory: "./output", //artifacts to 'output'
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      gas: 6721975,        //lowered gas price by around 100x since I plan to deploy it on testnets if time allows.
      gasPrice: 20000000000
    },
    online: {
      host: "192.168.1.160",
      port: 8080,        //seperate network to experience blockchain application via a deployed host portfowarded from local router port 8080.
      network_id: "*",
      gas: 6721975,        //ganache, networkid: 69420
      gasPrice: 20000000000
    }
  },
  environments: {
    https: {
      ipfs: {
        address: 'https://ropsten.infura.io/v3/34a20c62326a4b76ae2eab803a635b8c'
      }
    },
    ws: {
      ipfs: {
        address: 'wss://ropsten.infura.io/ws/v3/34a20c62326a4b76ae2eab803a635b8c'
      }
    }
  }
};
