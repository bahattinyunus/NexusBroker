// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title NexusEscrow
 * @dev The Intelligent Intermediary Protocol settlement layer.
 * This contract handles the secure holding of funds until conditions are met.
 */
contract NexusEscrow {
    enum State { AWAITING_PAYMENT, AWAITING_DELIVERY, COMPLETE, REFUNDED }
    
    struct Transaction {
        address buyer;
        address seller;
        address broker;
        uint256 amount;
        uint256 brokerFee;
        State status;
    }

    mapping(bytes32 => Transaction) public transactions;
    address public nexusAdmin;

    event TransactionStarted(bytes32 indexed txId, address buyer, address seller, uint256 amount);
    event TransactionCompleted(bytes32 indexed txId);
    event CommissionPaid(bytes32 indexed txId, address broker, uint256 amount);

    constructor() {
        nexusAdmin = msg.sender;
    }

    function createTransaction(bytes32 _txId, address _seller, address _broker, uint256 _brokerFee) external payable {
        require(msg.value > _brokerFee, "Insufficient value for escrow and fee.");
        require(transactions[_txId].buyer == address(0), "Transaction ID already exists.");

        transactions[_txId] = Transaction({
            buyer: msg.sender,
            seller: _seller,
            broker: _broker,
            amount: msg.value - _brokerFee,
            brokerFee: _brokerFee,
            status: State.AWAITING_DELIVERY
        });

        emit TransactionStarted(_txId, msg.sender, _seller, msg.value);
    }

    function releaseFunds(bytes32 _txId) external {
        Transaction storage trx = transactions[_txId];
        require(msg.sender == trx.buyer || msg.sender == nexusAdmin, "Unauthorized.");
        require(trx.status == State.AWAITING_DELIVERY, "Invalid state.");

        trx.status = State.COMPLETE;
        
        payable(trx.seller).transfer(trx.amount);
        payable(trx.broker).transfer(trx.brokerFee);

        emit TransactionCompleted(_txId);
        emit CommissionPaid(_txId, trx.broker, trx.brokerFee);
    }
}
