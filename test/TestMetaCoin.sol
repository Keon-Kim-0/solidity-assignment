pragma solidity 0.7.5;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/MetaCoin.sol";

contract TestMetaCoin {

  function testInitialBalanceUsingDeployedContract() public {
    MetaCoin meta = MetaCoin(DeployedAddresses.MetaCoin());

    uint expected = 1000; //ganache is set up to have 1000 each

    Assert.equal(meta.getBalance(tx.origin), expected, "balance should be 1000");
  }

  function testInitialBalanceWithNewMetaCoin() public {
    MetaCoin meta = new MetaCoin();

    uint expected = 1000; 

    Assert.equal(meta.getBalance(tx.origin), expected, "balance should be 1000"); 
  }

}
