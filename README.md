# VotingContractApplication

This project demonstrates a basic Hardhat use case. It includes a sample contract, a test for that contract, and a Hardhat Ignition module for deployment.

## Getting Started 

### Prerequisites
Ensure you have the following installed:
- **Node.js**
- **HardHat**

## Installation
1. Clone the repository:
```
git clone <repo-link>
```
2. Navigate to the project directory:
```
cd path/to/your/project
```
3. Install dependencies:
```
npm install
```


## Running Tasks

- View HardHat commands:
```
npx hardhat help
```
- Run tests:
```
npx hardhat test
```
- Run tests with gas reporting:
```
REPORT+GAS=true npx hardhat test
```
- start a local HardHat node:
```
npx hardhat node
```
- Deploy the contract using HardHat Ignition:
```
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

## Compiling Contracts

1. Navigate to the contracts directory:
```
cd contracts
```
2. Compile contracts
```
npx hardhat compile
```

## Running Smart Cotract Script
To run the smart contract script:
```
node ./scripts/smartcontractconnect.js
```

## Deploying the contract
- Deploy to a local HardHat node:
```
npx hardhat run ./scripts/deploy.js --network localhost
```
- Deploy to a Sepolia test network:
```
npx hardhat run scripts/deploy.js --network sepolia
```

## Version Information
- In HardHat version 6.6.2: We were able to deploy contracts successfully.
- In HardHat version 5.7.2: We can run tests.
