import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json'


const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x4bf3A7dFB3b76b5B3E169ACE65f888A4b4FCa5Ee'
);

export default instance;