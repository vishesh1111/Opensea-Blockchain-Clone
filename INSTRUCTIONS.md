# OpenSea Clone - Setup Instructions

## What was Fixed

✅ **Updated Sanity Client API** - Fixed import from deprecated `sanityClient` to `createClient`
✅ **Fixed async/await bug** - Added proper error handling for user creation
✅ **Updated to Thirdweb SDK v5** - Migrated from deprecated v2 to latest v5
✅ **Fixed network configuration** - Changed from deprecated Rinkeby to Mumbai/Polygon testnet
✅ **Updated dependencies** - All packages updated to latest compatible versions
✅ **Added React Query** - Required for Thirdweb SDK v5
✅ **Fixed wallet connection** - Added proper wallet connect button functionality

## Tech Stack

- **Next.js 13** - React framework
- **Thirdweb SDK v5** - Web3 blockchain integration  
- **Sanity CMS v6** - Content management
- **Tailwind CSS** - Styling
- **React Hot Toast** - Notifications
- **React Icons** - UI icons

## Prerequisites

1. **Node.js** (v18 or higher)
2. **MetaMask** browser extension installed
3. **npm** or **yarn**

## Installation & Run

```bash
# Navigate to project directory
cd Opensea-Blockchain-Clone

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser at http://localhost:3000
```

## How to Use

1. Click "Connect Wallet" button
2. Select MetaMask wallet
3. Connect your wallet (use Mumbai testnet)
4. Browse the NFT marketplace

## Supported Networks

- **Mumbai Testnet** (Polygon) - Default
- **Sepolia Testnet** (Ethereum)

## Getting Testnet Tokens

- Mumbai: https://mumbaifaucet.com/
- Sepolia: https://sepoliafaucet.com/

Enjoy! 🚀
