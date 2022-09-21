import React from "react";
import { Icon } from '@iconify/react';
import { MetamaskIcon, Coinbase } from "../WalletIcon";
import { useConnect } from 'wagmi'

const WalletConnectModal = (props) => {
    const { closeModal, darkToggle, setConnected, connected } = props
    const buttonClass = `flex flex-col items-center min-w-[120px] md:min-w-[176px] p-4 bg-transparent ${darkToggle ? 'hover:bg-white/[0.08]' : 'hover:bg-[#EDF2F7]'} rounded-md transition-all duration-200`
    const walletName = `${darkToggle ? 'text-white' : 'text-black'} text-sm py-2 font-semibold font-[ubuntu]`

    const { connect, connectors } = useConnect()

    return (
        <div>
            <div className="flex items-center justify-between px-6 py-4">
                <div className={`${darkToggle ? 'text-white' : 'text-black'} text-xl font-semibold font-[ubuntu]`}>Select Wallet</div>
                <div className={`flex items-center justify-center w-8 h-8 bg-transparent ${darkToggle ? 'hover:bg-white/[0.08]' : 'hover:bg-[#EDF2F7]'} rounded-md cursor-pointer  transition-all duration-200`} onClick={closeModal}>
                    <Icon icon="ep:close" color={`${darkToggle ? 'white' : 'black'}`} width="20" height="20" />
                </div>
            </div>
            <div className="flex items-center px-8 py-10">
                <button disabled={!connectors[0].ready} className={buttonClass} onClick={() => {
                    connect({ connector: connectors[0] });
                    setConnected(!connected)
                    closeModal();
                }}>
                    <MetamaskIcon />
                    <div className={walletName}>Metamask</div>
                </button>
                <button className={`${buttonClass} ml-8`} onClick={() => {
                    connect({ connector: connectors[1] });
                    setConnected(!connected)
                    closeModal()
                }}>
                    <Coinbase />
                    <div className={walletName}>Coinbase Wallet</div>
                </button>
            </div>
        </div>
    )
}

export default WalletConnectModal