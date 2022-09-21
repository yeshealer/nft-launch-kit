import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const NFTDetailPage = () => {
    const [nftCollection, setNFTCollection] = useState()
    const router = useRouter()
    const tokenId = router.query.tokenId
    useEffect(() => {
        if (tokenId) {
            const options = { method: 'GET', headers: { accept: 'application/json', 'X-API-Key': 'Dtn7MAUqnS4GXJBGinl4TiW4d5IzYzuZRCkN4nhHkLMo9ysx2MJuPUVcGpMn1x6S' } };
            fetch(`https://deep-index.moralis.io/api/v2/nft/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/${tokenId}`, options)
                .then(response => response.json())
                .then(response => {
                    setNFTCollection(response)
                })
                .catch(err => console.error(err));
        }
    }, [tokenId])

    const duringDays = useMemo(() => {
        if (nftCollection) {
            const today = new Date()
            let metadataSyncDate = nftCollection.last_metadata_sync?.slice(0, 10)
            metadataSyncDate = metadataSyncDate?.split('-')
            if (metadataSyncDate) {
                if ((today.getFullYear() - metadataSyncDate[0]) > 0) {
                    return today.getFullYear() - metadataSyncDate[0] + ' ' + 'years ago'
                } else if ((today.getMonth() + 1 - metadataSyncDate[1]) > 0) {
                    return today.getMonth() + 1 - metadataSyncDate[1] + ' ' + 'months ago'
                } else if ((today.getDate() - metadataSyncDate[2]) > 0) {
                    return today.getDate() - metadataSyncDate[2] + ' ' + 'days ago'
                }
            }
        }
    }, [nftCollection])

    const attributes = nftCollection && nftCollection.metadata && JSON.parse(nftCollection.metadata).attributes
    const nftType = nftCollection && nftCollection.metadata && JSON.parse(nftCollection.metadata).description
    return (
        <div className="flex flex-col items-center w-full bg-white dark:bg-[#1a202c]">
            <div className='flex flex-col max-w-screen-xl py-10 px-4 mt-20'>
                <div className="block md:grid grid-cols-2 gap-10 py-12 px-4">
                    {tokenId ? (
                        <img src={`https://cryptopunks.app/cryptopunks/cryptopunk${tokenId}.png`} width='480px' height='480px' alt={"CryptoPunk" + tokenId} className="rounded-md" />
                    ) : (
                        <div class="w-[480px] animate-pulse">
                            <div class="w-[480px] h-[480px] bg-gray-200 dark:bg-gray-700 mb-4"></div>
                        </div>
                    )}
                    <div>
                        <div className="text-2xl md:text-3xl font-bold text-[#1A202C] dark:text-white mt-10 md:mt-0">CryptoPunk {tokenId}</div>
                        <div className="mt-5">
                            <div className="text-basic font-semibold font-[ubuntu] text-[#718096] dark:text-[#CBD5E0]">Details</div>
                            <div className="my-2 border-b border-[#EDF2F7] dark:border-[#2D3748]" />
                            <div className="flex items-center justify-between text-sm font-[ubuntu] text-[#1A202C] dark:text-[#FFFFFFEB]">
                                <div>Contract Address</div>
                                {nftCollection && nftCollection.token_address ?
                                    <div>{nftCollection.token_address?.slice(0, 5)}...{nftCollection.token_address?.slice(-4)}</div> :
                                    <div class="animate-pulse">
                                        <div class="w-[200px] h-4 bg-gray-200 dark:bg-gray-700"></div>
                                    </div>
                                }
                            </div>
                            <div className="flex items-center justify-between text-sm font-[ubuntu] text-[#1A202C] dark:text-[#FFFFFFEB] mt-2">
                                <div>Token ID</div>
                                {tokenId ?
                                    <div>{tokenId}</div> :
                                    <div class="animate-pulse">
                                        <div class="w-[200px] h-4 bg-gray-200 dark:bg-gray-700"></div>
                                    </div>
                                }
                            </div>
                            <div className="flex items-center justify-between text-sm font-[ubuntu] text-[#1A202C] dark:text-[#FFFFFFEB] mt-2">
                                <div>Token Standard</div>
                                {nftCollection && nftCollection.name ?
                                    <div>{nftCollection.name}</div> :
                                    <div class="animate-pulse">
                                        <div class="w-[200px] h-4 bg-gray-200 dark:bg-gray-700"></div>
                                    </div>
                                }
                            </div>
                            <div className="flex items-center justify-between text-sm font-[ubuntu] text-[#1A202C] dark:text-[#FFFFFFEB] mt-2">
                                <div>Last Metadata Updated</div>
                                {duringDays ?
                                    <div>{duringDays}</div> :
                                    <div class="animate-pulse">
                                        <div class="w-[200px] h-4 bg-gray-200 dark:bg-gray-700"></div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="text-basic font-semibold font-[ubuntu] text-[#718096] dark:text-[#CBD5E0]">Attributes</div>
                            <div className="my-2 border-b border-[#EDF2F7] dark:border-[#2D3748]" />
                            <div className="flex gap-3 items-center">
                                {attributes ? attributes.map((attribute, index) => {
                                    return (
                                        <div key={index} className="rounded-md px-2 py-0.5 text-sm bg-[#C4F1F9] dark:bg-[#9decf9]/[0.16] text-[#086F83] dark:text-[#9DECF9] font-[ubuntu]">
                                            {attribute}
                                        </div>
                                    )
                                }) : (
                                    <div class="flex gap-5 animate-pulse">
                                        <div class="w-16 h-5 bg-gray-200 rounded-md dark:bg-gray-700"></div>
                                        <div class="w-16 h-5 bg-gray-200 rounded-md dark:bg-gray-700"></div>
                                        <div class="w-16 h-5 bg-gray-200 rounded-md dark:bg-gray-700"></div>
                                        <div class="w-16 h-5 bg-gray-200 rounded-md dark:bg-gray-700"></div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="text-basic font-semibold font-[ubuntu] text-[#718096] dark:text-[#CBD5E0]">Type</div>
                            <div className="my-2 border-b border-[#EDF2F7] dark:border-[#2D3748]" />
                            <div className="flex gap-3 items-center">
                                {nftType ? <div className="rounded-md px-2 py-0.5 text-sm bg-[#C4F1F9] dark:bg-[#9decf9]/[0.16] text-[#086F83] dark:text-[#9DECF9] font-[ubuntu]">
                                    {nftType}
                                </div> : <div class="animate-pulse">
                                    <div class="w-16 h-5 bg-gray-200 rounded-md dark:bg-gray-700"></div>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFTDetailPage