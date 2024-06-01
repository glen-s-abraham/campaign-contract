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

    campaign = await new web3.eth.Contract(JSON.parse(campiledCampaign.interface), campaignAddress)

})

describe('Campaigns', () => {
    it('deploys factory and a campaign', () => {
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    })

    it('marks caller as the manager of the campaign', async () => {
        const manager = await campaign.methods.manager().call();
        assert.equal(accounts[0], manager);
    })

    it('allows people to contribute money and mark them as approvers', async () => {
        await campaign.methods.contribute().send({ from: accounts[1], value: '200' });

        assert(await campaign.methods.approvers(accounts[1]).call());

    })

    it('requires a minimum contribution', async () => {
        try {
            await campaign.methods.contribute().send({ from: accounts[1], value: '99' });
            assert(false);
        } catch (err) {
            assert(err);
        }
    })

    it('allows a manager to make a payment request', async () => {
        await campaign.methods
            .createRequest('Buy Batteries', '100', accounts[1])
            .send({ from: accounts[0], gas: '1000000' });

        const request = await campaign.methods.requests(0).call();

        assert.equal('Buy Batteries', request.description);
    })

    it('process requests', async () => {
        await campaign.methods.contribute().send({
            from: accounts[0],
            value: web3.utils.toWei('10', 'ether')
        })

        await campaign.methods
            .createRequest('Buy Batteries', web3.utils.toWei('5', 'ether'), accounts[1])
            .send({ from: accounts[0], gas: '1000000' });

        await campaign.methods.approveRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        });

        await campaign.methods.finalizeReuqest(0).send({
            from: accounts[0],
            gas: '1000000'
        })

        let balance = await web3.eth.getBalance(accounts[1]);
        balance = parseFloat(web3.utils.fromWei(balance,'ether'));
        console.log(balance)
        assert(balance > 104)

    })

})