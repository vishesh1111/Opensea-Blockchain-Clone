# OpenSea Clone — Setup Guide

A Next.js + Thirdweb + Sanity OpenSea clone.

## Tech Stack (actual versions)

- **Next.js** 12.3
- **React** 18.1
- **Thirdweb SDK v1** (`@3rdweb/sdk@1.42.1`, `@3rdweb/hooks@1.9.2`)
- **Sanity Client v3** (`@sanity/client@3.3.5`) for the frontend
- **Sanity Studio v2** (in `Studio/`) for content management
- **Tailwind CSS** 3.1
- **react-hot-toast**, **react-icons**

> Note: this repo targets the older Thirdweb v1 SDK. Newer Thirdweb tutorials use v5 and a completely different API (`createThirdwebClient`, React hooks etc.). Don't mix the two.

## Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- MetaMask browser extension
- A funded testnet wallet on the chain you target

## Install & run

```bash
# 1. Install deps
npm install

# 2. Copy env template and fill in values
cp .env.local.example .env.local

# 3. Run dev server
npm run dev
```

Then open http://localhost:3000.

## Environment variables

See `.env.local.example`. The most important ones:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset (usually `production`) |
| `SANITY_TOKEN` | Optional Sanity token (only if dataset is private) |

## Networks

The original code referenced Rinkeby (now decommissioned). The Thirdweb v1 SDK in this repo will use whichever network MetaMask is connected to. For testing, point MetaMask at **Sepolia** or **Polygon Mumbai** and update the contract addresses in:

- `pages/nfts/[nftid].js` — `NFT_COLLECTION_ADDRESS`, `MARKETPLACE_ADDRESS`
- `pages/collections/[collectionid].js` — marketplace address constant

## Sanity Studio

The `Studio/` folder holds a Sanity v2 studio with the `users` and `marketItems` schemas. To run it:

```bash
cd Studio
npm install
npm start
```

## Troubleshooting

- **`npm install` fails** — delete `node_modules` and `package-lock.json`, retry.
- **Wallet won't connect** — confirm MetaMask is installed, unlocked, and on a supported network.
- **Image optimization errors** — add the offending hostname to the `images.domains` array in `next.config.js`.
- **Sanity 401/403** — your token is missing or wrong; check `.env.local`.
