import Web3 from "web3";
import dotenv from 'dotenv';
dotenv.config();



let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    // We are in the browser and metamask is running.
    window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.ethereum);
} else {
    console.log(process.env)
    // We are on the server *OR* the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        "https://sepolia.infura.io/v3/17e26f2e35554486b14d5416b489194b"
    );
    web3 = new Web3(provider);
}

export default web3;