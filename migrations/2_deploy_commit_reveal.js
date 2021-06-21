const CommitReveal = artifacts.require("CommitReveal.sol");
const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");

//added metacoin manipulation features to have control and view over balances.
module.exports = function (deployer) {
  deployer.deploy(CommitReveal, 120, "YES", "NO");
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
};
