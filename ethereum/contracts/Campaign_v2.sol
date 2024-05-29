// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Fundraising {
    // State variables
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    address[] public approversList;
    uint public approversCount;
    
    struct Request {
        string description;
        uint value;
        address payable recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    Request[] public requests;

    // Modifier to restrict functions to the manager
    modifier onlyManager() {
        require(msg.sender == manager, "Only the manager can call this function");
        _;
    }

    // Constructor to initialize the contract
    constructor(uint minimum) {
        manager = msg.sender;
        minimumContribution = minimum;
    }

    // Function to contribute to the contract and become an approver
    function contribute() public payable {
        require(msg.value >= minimumContribution, "Contribution is less than the minimum amount");

        if (!approvers[msg.sender]) {
            approvers[msg.sender] = true;
            approversList.push(msg.sender);
            approversCount++;
        }
    }

    // Function for the manager to create a new request
    function createRequest(string memory description, uint value, address payable recipient) public onlyManager {
        Request storage newRequest = requests.push();
        newRequest.description = description;
        newRequest.value = value;
        newRequest.recipient = recipient;
        newRequest.complete = false;
        newRequest.approvalCount = 0;
    }

    // Function for an approver to approve a request
    function approveRequest(uint index) public {
        Request storage request = requests[index];

        require(approvers[msg.sender], "Only approvers can approve requests");
        require(!request.approvals[msg.sender], "Approver has already voted");

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    // Function to finalize a request if more than half of the approvers approved it
    function finalizeRequest(uint index) public onlyManager {
        Request storage request = requests[index];

        require(request.approvalCount > (approversCount / 2), "Not enough approvals");
        require(!request.complete, "Request is already complete");

        request.recipient.transfer(request.value);
        request.complete = true;
    }

    // Function to get details of a request
    function getRequestDetails(uint index) public view returns (string memory, uint, address, bool, uint) {
        Request storage request = requests[index];
        return (
            request.description,
            request.value,
            request.recipient,
            request.complete,
            request.approvalCount
        );
    }

    // Function to get the list of approvers
    function getApprovers() public view returns (address[] memory) {
        return approversList;
    }
}