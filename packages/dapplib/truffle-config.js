require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gloom process outside venture stuff regret range proud hundred light army giant'; 
let testAccounts = [
"0xfd8d457bb588eb6c4b88f8512345f9923f5b736a92e1091e6cfbd0c0230f68c3",
"0x15e476c1d205b5e79f2c6ce69519587e10a6b0500487d4237739ce2ce3443cec",
"0x962beda0d7bdb5bc44c52debe7cd129c99444b1c0af7fe8c5f94c5893502b40c",
"0xef420d51270ff3ca51d881fd08c6808b1f7e8fbe8f014f1467368637546f030b",
"0x4f407cbb595dc1a8da346c9868e987fb4905bde900555c0d10526093953caed7",
"0x3c626fc645ea97733f365a54a1ea1a9fc4e5c7deef9f8fb9ecc4ebc9f29b97b0",
"0xe4c4944a291a9a149fb4baf5b34f4eebb4670849d5eddf29153ebbaa7cfeb221",
"0x02ae0c9b08f42993d4cfd468b2b463c5e6a79f4c16975d0da919bcfcc55a04f8",
"0xaa292433b7e9a3b652cdb2607585d2011f784fa47ad0db56da5cc32c1480d847",
"0x9f312bbdc8606663c2bd6030576b18cf0794e28cffee95147d8d8586d7089586"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

