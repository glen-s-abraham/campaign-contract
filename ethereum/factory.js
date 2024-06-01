import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json'


const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xA53B023FBa43Be7000054C8a470126A8DC28AF58'
);

export default instance;