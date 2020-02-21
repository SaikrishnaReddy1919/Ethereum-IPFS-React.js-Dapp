import web3 from './web3';

//access our local copy to contract deployed on rinkeby testnet
//use your own contract address
const address = '0x5015e0Da5447d42B4DDBFd472c8022cD23b6F063';

// const address = '0x44B20098E0B9eAdAf656C0439887AD5e99f12D3b';
//use the ABI from your contract
const abi = [{
        "inputs": [{
            "internalType": "string",
            "name": "x",
            "type": "string"
        }],
        "name": "sendHash",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getHash",
        "outputs": [{
            "internalType": "string",
            "name": "x",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    }
]
export default new web3.eth.Contract(abi, address);