pragma solidity ^0.8.9;

contract PlendingMachine {
    mapping(address => uint) private _balances;

    function checkBalance(address userAddress) public view returns (uint) {
        return _balances[userAddress];
    }
}