// SPDX-License-Identifier: MIT
pragma solidity ^0.4.17;

contract CampaignFactory{
    address[] deployedCampaigns;

    function createCampaign(uint minimum) public{
        address campaignAddress = new Campaign(minimum,msg.sender);
        deployedCampaigns.push(campaignAddress);
    }

    function getDeployedCampaigns() public view returns (address[]){
        return deployedCampaigns;
    }
}

contract Campaign {

    struct Request {
        string description;
        uint value;
        address recipient;
        bool completed;
        uint approvalsCount;
        mapping(address=>bool) approvals;
    }

    address public manager;
    uint256 public minimumContribution;
    mapping(address => bool) public approvers;
    Request[] public requests;
    uint public approversCount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Campaign(uint256 minimum,address owner) public {
        manager = owner;
        minimumContribution = minimum;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);
        approvers[msg.sender]=true;
        approversCount++;
    }

    function createRequest(string description,uint value,address recipient) public restricted{
        Request memory request = Request({
            description:description,
            value:value,
            recipient:recipient,
            completed:false,
            approvalsCount:0
        });

        requests.push(request);
    }

    function approveRequest(uint idx) public {
        Request storage request = requests[idx];
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender]=true;
        request.approvalsCount++;

    }

    function finalizeReuqest(uint idx) public restricted {
        Request storage request = requests[idx];
        require(!request.completed);
        require(request.approvalsCount>(approversCount/2));
        request.recipient.transfer(request.value);
        request.completed = true;
    }
    
}
