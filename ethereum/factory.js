import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json'


const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x5b1869D9A4C187F2EAa108f3062412ecf0526b24'
);

export default instance;