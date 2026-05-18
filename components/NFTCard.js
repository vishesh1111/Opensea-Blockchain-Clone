import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const style = {
  wrapper: `bg-[#303339] flex-auto w-[14rem] h-[22rem] m-2 ml-4 rounded-2xl overflow-hidden cursor-pointer`,
  imgContainer: `h-2/3 overflow-hidden flex justify-center items-center`,
  nftImg: `w-full object-cover`,
  details: `p-3`,
  info: `flex justify-between drop-shadow-xl`,
  infoLeft: `flex-0.6 flex-wrap`,
  collectionName: `font-semibold text-sm text-[#8a939b]`,
  assetName: `font-bold text-lg mt-2`,
  infoRight: `flex-0.4 text-right`,
  priceTag: `font-semibold text-sm text-[#8a939b]`,
  priceValue: `flex items-center text-xl font-bold mt-2`,
  ethLogo: `h-5 mr-2`,
}

const NFTCard = ({ nftItem, title, listings }) => {
  const [isListed, setIsListed] = useState(false)
  const [price, setPrice] = useState(0)

  useEffect(() => {
    if (!listings) return
    const listing = listings.find(
      (listing) => listing.asset?.id === nftItem?.id
    )

    if (listing) {
      setIsListed(true)
      setPrice(listing.buyoutCurrencyValuePerToken?.displayValue || 0)
    }
  }, [listings, nftItem])

  return (
    <Link
      href={{
        pathname: `/nfts/${nftItem?.id}`,
        query: { isListed: isListed.toString() },
      }}
    >
      <div className={style.wrapper}>
        <div className={style.imgContainer}>
          <img
            src={nftItem?.image}
            alt={nftItem?.name || 'NFT'}
            className={style.nftImg}
          />
        </div>
        <div className={style.details}>
          <div className={style.info}>
            <div className={style.infoLeft}>
              <div className={style.collectionName}>{title}</div>
              <div className={style.assetName}>{nftItem?.name}</div>
            </div>
            {isListed && (
              <div className={style.infoRight}>
                <div className={style.priceTag}>Price</div>
                <div className={style.priceValue}>
                  <img
                    src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
                    alt="eth"
                    className={style.ethLogo}
                  />
                  {price}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default NFTCard
