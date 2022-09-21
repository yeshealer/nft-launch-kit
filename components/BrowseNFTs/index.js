import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const BrowseNFTs = () => {

    const [nftCollectionList, setNFTCollectionList] = useState()
    const router = useRouter()

    useEffect(() => {
        const options = { method: 'GET', headers: { accept: 'application/json', 'X-API-Key': 'Dtn7MAUqnS4GXJBGinl4TiW4d5IzYzuZRCkN4nhHkLMo9ysx2MJuPUVcGpMn1x6S' } };
        fetch('https://deep-index.moralis.io/api/v2/nft/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb?chain=eth&format=decimal&limit=20', options)
            .then(response => response.json())
            .then(response => {
                setNFTCollectionList(response.result)
            })
            .catch(err => console.error(err));
    }, [])

    const skeletonAssets = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <div className="flex flex-col items-center w-full bg-white dark:bg-[#1a202c]">
            <div className='flex flex-col max-w-screen-xl py-10 px-4 mt-12 md:mt-20'>
                <div className="font-bold text-lg sm:text-2xl md:text-3xl mb-8 text-[#1A202C] dark:text-white">CryptoPunks</div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {nftCollectionList && nftCollectionList.length > 0 ? nftCollectionList.map((nftCollection, index) => {
                        return (
                            <div key={index} className={`w-full dark:bg-[#1A202C] border border-white/[0.16] rounded-lg cursor-pointer shadow-lg dark:shadow-none`} onClick={() => router.push(`/collections/${nftCollection.token_id}`)}>
                                <div className="w-full h-auto">
                                    <img alt={nftCollection.name + index} src={`https://cryptopunks.app/cryptopunks/cryptopunk${nftCollection.token_id}.png`} className="rounded-t-lg"
                                        onError={({ currentTarget }) => {
                                            currentTarget.onerror = null;
                                            currentTarget.src = '/assets/image/default.png'
                                        }}
                                        width="292px"
                                    />
                                </div>
                                <div className="p-3">
                                    <div className="text-sm md:text-base font-[ubuntu] font-semibold mt-1 text-[#1A202C] dark:text-white">CryptoPunk {nftCollection.token_id}</div>
                                    <div className="flex items-center mt-4">
                                        <EthereumIcon />
                                        <div className="text-sm font-[ubuntu] text-[#1A202C] dark:text-white">1</div>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : (
                        skeletonAssets.map((skeletonAsset, index) => {
                            return (
                                <div key={index} className="w-[292px] max-w-sm animate-pulse">
                                    <div className="w-[292px] h-[292px] bg-gray-200 dark:bg-gray-700 mb-4 rounded-t-lg"></div>
                                    <div className="w-32 h-5 bg-gray-200 rounded-sm dark:bg-gray-700 mb-2.5"></div>
                                    <div className="h-3 bg-gray-200 rounded-sm dark:bg-gray-700 mb-2.5"></div>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            )
                        })
                    )}
                </div>
            </div>
        </div>
    )
}


const EthereumIcon = () => {
    return (
        <svg height="16" width="16" viewBox="420.1 80.7 1079.8 1758.6" xmlns="http://www.w3.org/2000/svg">
            <path d="m959.8 80.7-539.7 895.6 539.7-245.3z" fill="#8a92b2"></path>
            <path d="m959.8 731-539.7 245.3 539.7 319.1zm539.8 245.3-539.8-895.6v650.3z" fill="#62688f"></path>
            <path d="m959.8 1295.4 539.8-319.1-539.8-245.3z" fill="#454a75"></path>
            <path d="m420.1 1078.7 539.7 760.6v-441.7z" fill="#8a92b2"></path>
            <path d="m959.8 1397.6v441.7l540.1-760.6z" fill="#62688f"></path>
        </svg>
    )
}


export default BrowseNFTs