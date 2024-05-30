const assert = require('assert');
const ganache = require('ganache')
const { Web3 } = require('web3');

const web3 = new Web3(ganache.provider());

const campiledFactory = require('../ethereum/build/CampaignFactory.json');
const campiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    factory = await new web3.eth.Contract(JSON.parse(campiledFactory.interface))
        .deploy({ data: campiledFactory.bytecode })
        .send({ from: accounts[0], gas: '1000000' });
    await factory.methods.createCampaign('100').send({ from: accounts[0], gas: '1000000' });

    [campaignAddress] = await factory.methods.getDeployedCampaigns('100').call();

    campaign = await new web3.eth.Contract(JSON.parse(campiledCampaign.interface),campaignAddress)

})

describe('Campaigns',()=>{
    it('deploys factory and a campaign',()=>{
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    })
})