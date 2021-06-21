// File: contracts\Migrations.sol


pragma solidity 0.7.5;


contract Migrations {
  address public owner;
  uint public last_completed_migration;

  constructor() {
    owner = msg.sender;
  }

  modifier restricted() {
    if (msg.sender == owner) _;
  }

  function setCompleted(uint completed) public restricted {
    last_completed_migration = completed;
  }

//ntf, when upgraded they change ownder with the new address, then change put the old"last_completed_migration" into "upgraded.setCompleted"
  function upgrade(address new_address) public restricted {
    Migrations upgraded = Migrations(new_address);
    upgraded.setCompleted(last_completed_migration);
  }
}
