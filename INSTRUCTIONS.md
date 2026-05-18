# What was fixed

This document tracks the bug fixes applied to make the repo runnable.

## Code bugs

1. **`pages/collections/[collectionid].js`** — the `nftModule` `useMemo` had unbalanced parens with code commented out mid-expression, causing a parse error. Sanity fetch was also commented out, and `setCollection(collectionId[0])` was setting state to the wrong value. Rewrote the page to be syntactically valid and to actually populate `collection` from Sanity.
2. **`pages/nfts/[nftid].js`** — read `router.query.nftId` but the file is `[nftid].js`, so the param key is lowercase. Also Thirdweb v1 returns `id` as a BigNumber-like object, so the strict-equals comparison never matched. Fixed both.
3. **`components/NFTCard.js`** — the component was empty (`return` with no JSX), so the collection grid rendered nothing. Implemented a proper card with image, title, and price.
4. **`components/nft/ItemActivity.js`** — imported `./itemActivity/EventItem`, but the actual folder is `ItemActivity` (capital I and A). Builds break on case-sensitive filesystems (Linux, Vercel). Fixed the import path.
5. **`static/dummyEvents.js`** — file was missing entirely, breaking the Item Activity panel. Added with sample data.
6. **`pages/collections/[collectionid].js` & `[nftid].js`** — both pointed at hardcoded Rinkeby Alchemy URLs. Rinkeby is decommissioned. Removed those URLs; the Thirdweb v1 SDK now uses the wallet's current network.

## Config / security

7. **`lib/sanityClient.js`** — a Sanity write token was hardcoded and committed to the repo. Replaced with `process.env.SANITY_TOKEN` and added `.env.local.example`.
8. **`tsconfig.json`** — `pages/index.js` was listed twice in `include`. Deduped.
9. **`next.config.js`** — added image domains (`storage.opensea.io`, `i.seadn.io`, `cdn.sanity.io`, etc.) so the `<Image>` component doesn't error at runtime.

## Documentation

10. **`SETUP.md` / `INSTRUCTIONS.md`** — old docs claimed Thirdweb v5 / Sanity v6 / Mumbai testnet, none of which match the actual code (Thirdweb v1, Sanity v3, originally Rinkeby). Rewrote with the real stack and accurate setup steps.

## Action items left for the user

- **Rotate the Sanity token** that was previously committed in `lib/sanityClient.js` — assume it is compromised. Generate a new one in the Sanity dashboard.
- **Replace contract addresses** in the page files with your own deployed contracts on a live testnet (Sepolia or Polygon Mumbai/Amoy).
- Run `npm install` and `npm run dev` locally.
