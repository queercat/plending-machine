import hre from "hardhat";

const main = async () => {
    const plendingMachine = await hre.ethers.deployContract("PlendingMachine");
    await plendingMachine.waitForDeployment();

    console.log(`Deployed plending machine to ${plendingMachine.target}`);
}

main().catch(e => console.error(e))