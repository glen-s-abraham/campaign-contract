const dotenv = require('dotenv')
dotenv.config()
const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');

console.log(process.env)

const compiledFactory = require('../ethereum/build/CampaignFactory.json');




const provider = new HDWalletProvider(
    process.env.WALLET_MNEMONICS,
    process.env.PROVIDER_URL
);

const web3 = new Web3(provider);

const deploy = async () => {
    try {
        const accounts = await web3.eth.getAccounts();
        console.log('Attempting to deploy from account', accounts[0]);

        const res = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
            .deploy({ data: compiledFactory.bytecode })
            .send({ gas: '1000000', from: accounts[0] });

        console.log('Contract deployed to', res.options.address);
    } catch (err) {
        console.log(err)
    } finally {
        provider.engine.stop();
    }
}

deploy();