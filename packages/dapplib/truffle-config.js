require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include enroll sure tribe stone cost situate uncle harvest muscle army gauge'; 
let testAccounts = [
"0x9b8a779b32b50b0287527452039df73a6de80abf44e0d4e41a650deeb48ce826",
"0xca10a2c1930e75243a6cade0850f47a71f40e7c6ff77808d2c9b7ebb51232cc8",
"0x0182c21390eb81948840d2dff457eee23ee70abbc0bf98c9567a1f1404a11924",
"0xc05e12d710226ad2fa3f930a34797316d7a9b16a66c5c52730fd4cc7ca543895",
"0x9cbc0d638237549c3b423525e1034c935a23f72a4c42068cc0a929d5ea2738cb",
"0x2d46eebdd3074f89cab6831cff108acbe9e4fd3e69968a4251ab2dc1b805fb55",
"0x039c35ec97cdb081171f667d45da0e8ffdf92324a2005fb3efefd4aa007ee816",
"0x5570929dcabe801be24dd8e83d0b65a65807ef11af283c180db741bf53bf28b6",
"0xeca574b68b6a8a99a75321edd0df8ab6eddfd2314593abd17ff4c49d5416c85c",
"0xcb89806b43650f859addec29db8fe49921a27b819fc9b4020e56f3e9b166a7e4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


