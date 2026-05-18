import Header from '../../components/Header'
import { useEffect, useMemo, useState } from 'react'
import { useWeb3 } from '@3rdweb/hooks'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { useRouter } from 'next/router'
import NFTImage from '../../components/nft/NFTImage'
import GeneralDetails from '../../components/nft/GeneralDetails'
import ItemActivity from '../../components/nft/ItemActivity'
import Purchase from '../../components/nft/Purchase'

const style = {
  wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
  container: `container p-6`,
  topContent: `flex`,
  nftImgContainer: `flex-1 mr-4`,
  detailsContainer: `flex-[2] ml-4`,
}

// TODO: Move these to environment variables (NEXT_PUBLIC_NFT_COLLECTION_ADDRESS,
// NEXT_PUBLIC_MARKETPLACE_ADDRESS) before deploying.
const NFT_COLLECTION_ADDRESS = '0x66a576A977b7Bccf510630E0aA5e450EC11361Fa'
const MARKETPLACE_ADDRESS = '0x93A771F7ce845C33381f677489cF21a5964EDD0b'

const Nft = () => {
  const { provider } = useWeb3()
  const [selectedNft, setSelectedNft] = useState()
  const [listings, setListings] = useState([])
  const router = useRouter()

  const nftModule = useMemo(() => {
    if (!provider) return
    const sdk = new ThirdwebSDK(provider.getSigner())
    return sdk.getNFTModule(NFT_COLLECTION_ADDRESS)
  }, [provider])

  // Get all NFTs in the collection and find the selected one
  useEffect(() => {
    if (!nftModule) return
    ;(async () => {
      try {
        const nfts = await nftModule.getAll()
        // The dynamic route file is `[nftid].js`, so the param key is lowercase.
        // Thirdweb v1 returns `id` as a BigNumber-like object, so coerce to string for comparison.
        const targetId = router.query.nftid
        const selectedNftItem = nfts.find(
          (nft) => nft.id?.toString() === targetId
        )
        setSelectedNft(selectedNftItem)
      } catch (err) {
        console.error('Failed to fetch NFT:', err)
      }
    })()
  }, [nftModule, router.query.nftid])

  const marketPlaceModule = useMemo(() => {
    if (!provider) return
    const sdk = new ThirdwebSDK(provider.getSigner())
    return sdk.getMarketplaceModule(MARKETPLACE_ADDRESS)
  }, [provider])

  useEffect(() => {
    if (!marketPlaceModule) return
    ;(async () => {
      try {
        setListings(await marketPlaceModule.getAllListings())
      } catch (err) {
        console.error('Failed to fetch listings:', err)
      }
    })()
  }, [marketPlaceModule])

  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.topContent}>
            <div className={style.nftImgContainer}>
              <NFTImage selectedNft={selectedNft} />
            </div>
            <div className={style.detailsContainer}>
              <GeneralDetails selectedNft={selectedNft} />
              <Purchase
                isListed={router.query.isListed}
                selectedNft={selectedNft}
                listings={listings}
                marketPlaceModule={marketPlaceModule}
              />
            </div>
          </div>
          <ItemActivity />
        </div>
      </div>
    </div>
  )
}

export default Nft
