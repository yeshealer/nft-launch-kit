import React from "react";
import { Icon } from '@iconify/react';
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
                    <CoinbaseIcon />
                    <div className={walletName}>Coinbase Wallet</div>
                </button>
            </div>
        </div>
    )
}

const MetamaskIcon = () => {
    return (
        <svg viewBox="0 0 40 40" width="50px" color="text" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.0112 3.33337L22.1207 13.6277L24.7012 7.56091L36.0112 3.33337Z" fill="#E17726"></path>
            <path d="M4.00261 3.33337L17.7558 13.7238L15.2989 7.56091L4.00261 3.33337Z" fill="#E27625"></path>
            <path d="M31.0149 27.2023L27.3227 32.8573L35.2287 35.0397L37.4797 27.3258L31.0149 27.2023Z" fill="#E27625"></path>
            <path d="M2.53386 27.3258L4.77116 35.0397L12.6772 32.8573L8.9987 27.2023L2.53386 27.3258Z" fill="#E27625"></path>
            <path d="M12.2518 17.6496L10.0419 20.9712L17.8793 21.3281L17.6048 12.8867L12.2518 17.6496Z" fill="#E27625"></path>
            <path d="M27.762 17.6494L22.3129 12.7905L22.1207 21.3279L29.9581 20.9711L27.762 17.6494Z" fill="#E27625"></path>
            <path d="M12.6772 32.8574L17.3989 30.5652L13.336 27.3809L12.6772 32.8574Z" fill="#E27625"></path>
            <path d="M22.6009 30.5652L27.3226 32.8574L26.6637 27.3809L22.6009 30.5652Z" fill="#E27625"></path>
            <path d="M27.3226 32.8575L22.6009 30.5653L22.9715 33.6399L22.9303 34.9301L27.3226 32.8575Z" fill="#D5BFB2"></path>
            <path d="M12.6772 32.8575L17.0694 34.9301L17.042 33.6399L17.3989 30.5653L12.6772 32.8575Z" fill="#D5BFB2"></path>
            <path d="M17.1518 25.3495L13.2262 24.1965L15.9988 22.92L17.1518 25.3495Z" fill="#233447"></path>
            <path d="M22.848 25.3495L24.001 22.92L26.801 24.1965L22.848 25.3495Z" fill="#233447"></path>
            <path d="M12.6773 32.8573L13.3635 27.2023L8.99876 27.3258L12.6773 32.8573Z" fill="#CC6228"></path>
            <path d="M26.6364 27.2023L27.3227 32.8573L31.0149 27.3258L26.6364 27.2023Z" fill="#CC6228"></path>
            <path d="M29.9581 20.9709L22.1207 21.3278L22.8482 25.3495L24.0011 22.92L26.8012 24.1965L29.9581 20.9709Z" fill="#CC6228"></path>
            <path d="M13.2263 24.1965L15.9989 22.92L17.1519 25.3495L17.8793 21.3278L10.0419 20.9709L13.2263 24.1965Z" fill="#CC6228"></path>
            <path d="M10.0419 20.9709L13.3361 27.3809L13.2263 24.1965L10.0419 20.9709Z" fill="#E27525"></path>
            <path d="M26.8011 24.1965L26.6638 27.3809L29.958 20.9709L26.8011 24.1965Z" fill="#E27525"></path>
            <path d="M17.8793 21.3278L17.1519 25.3494L18.0715 30.0985L18.2637 23.8396L17.8793 21.3278Z" fill="#E27525"></path>
            <path d="M22.1205 21.3278L21.7499 23.8258L21.9283 30.0985L22.848 25.3494L22.1205 21.3278Z" fill="#E27525"></path>
            <path d="M22.848 25.3496L21.9284 30.0987L22.601 30.5654L26.6638 27.381L26.8011 24.1967L22.848 25.3496Z" fill="#F5841F"></path>
            <path d="M13.2262 24.1967L13.336 27.381L17.3989 30.5654L18.0714 30.0987L17.1518 25.3496L13.2262 24.1967Z" fill="#F5841F"></path>
            <path d="M22.9303 34.93L22.9715 33.6398L22.6284 33.3378H17.3714L17.042 33.6398L17.0694 34.93L12.6772 32.8574L14.2145 34.1202L17.3302 36.2751H22.6696L25.7853 34.1202L27.3226 32.8574L22.9303 34.93Z" fill="#C0AC9D"></path>
            <path d="M22.601 30.5653L21.9284 30.0986H18.0715L17.3989 30.5653L17.0421 33.6399L17.3715 33.3379H22.6285L22.9716 33.6399L22.601 30.5653Z" fill="#161616"></path>
            <path d="M36.5875 14.3003L37.7542 8.61779L36.011 3.33337L22.6009 13.2846L27.7618 17.6493L35.0365 19.7768L36.6424 17.8964L35.9424 17.3886L37.0679 16.3728L36.2169 15.7003L37.3287 14.863L36.5875 14.3003Z" fill="#763E1A"></path>
            <path d="M2.24573 8.61779L3.42615 14.3003L2.67123 14.863L3.78302 15.7003L2.93202 16.3728L4.05753 17.3886L3.35752 17.8964L4.96343 19.7768L12.2518 17.6493L17.399 13.2846L4.00263 3.33337L2.24573 8.61779Z" fill="#763E1A"></path>
            <path d="M35.0365 19.777L27.7619 17.6495L29.958 20.9712L26.6638 27.3811L31.0149 27.3262H37.4797L35.0365 19.777Z" fill="#F5841F"></path>
            <path d="M12.2517 17.6495L4.96332 19.777L2.53386 27.3262H8.99869L13.336 27.3811L10.0419 20.9712L12.2517 17.6495Z" fill="#F5841F"></path>
            <path d="M22.1205 21.3276L22.6009 13.2843L24.701 7.56067H15.2988L17.3988 13.2843L17.8792 21.3276L18.0577 23.8531L18.0714 30.0984H21.9283L21.9421 23.8531L22.1205 21.3276Z" fill="#F5841F"></path>
        </svg>
    )
}

const CoinbaseIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0, 0, 400,400" width="50px" color="text">
            <g stroke="none" fillRule="evenodd">
                <path d="M193.4 60.265C87.303 66.651 25.782 181.12 79.826 271.586c57.163 95.688 198.154 89.201 246.382-11.336C371.654 165.512 297.595 53.993 193.4 60.265m47.221 95.946c1.213.75 2.418 1.955 3.168 3.168l1.211 1.958v77.326l-1.211 1.958c-.75 1.213-1.955 2.418-3.168 3.168L238.663 245h-77.326l-1.958-1.211c-1.213-.75-2.418-1.955-3.168-3.168L155 238.663l-.119-37.831c-.08-25.344.018-38.306.297-39.267.685-2.365 2.559-4.562 4.876-5.717l2.127-1.06 38.241.106 38.241.106 1.958 1.211" fill="#fbfbfc"></path>
                <path d="M183.6.43C41.847 12.741-42.613 163.705 21.396 290.354c49.819 98.572 170.31 138.107 268.958 88.25 98.572-49.819 138.107-170.31 88.25-268.958C348.052 49.197 290.688 9.389 222 .97c-6.325-.775-31.6-1.13-38.4-.54M218 60.975c81.04 11.263 135.239 87.02 119.351 166.825-15.844 79.589-97.673 129.334-175.893 106.929-74.141-21.237-117.409-99.181-96.187-173.271C81.09 106.232 129.39 66.081 186.8 60.433c5.76-.567 25.716-.22 31.2.542m-57.4 94.781c-1.92.838-3.855 2.682-4.648 4.427-.974 2.145-1.175 76.834-.213 79.13.828 1.974 2.657 3.923 4.444 4.735 2.145.974 76.834 1.175 79.13.213 1.974-.828 3.923-2.657 4.735-4.444.974-2.145 1.175-76.834.213-79.13-.828-1.974-2.657-3.923-4.444-4.735-2.115-.96-77.043-1.146-79.217-.196" fill="#0454fc"></path>
                <path d="M181.5 155.1c10.175.059 26.825.059 37 0 10.175-.06 1.85-.108-18.5-.108s-28.675.048-18.5.108M154.992 200c0 20.35.048 28.675.108 18.5.059-10.175.059-26.825 0-37-.06-10.175-.108-1.85-.108 18.5m90 0c0 20.35.048 28.675.108 18.5.059-10.175.059-26.825 0-37-.06-10.175-.108-1.85-.108 18.5M181.5 245.1c10.175.059 26.825.059 37 0 10.175-.06 1.85-.108-18.5-.108s-28.675.048-18.5.108" fill="#5286fc"></path>
                <path d="M192.7 60.282a5.661 5.661 0 001.8 0c.495-.095.09-.173-.9-.173s-1.395.078-.9.173m12.8 0a5.661 5.661 0 001.8 0c.495-.095.09-.173-.9-.173s-1.395.078-.9.173M60.109 193.6c0 .99.078 1.395.173.9a5.661 5.661 0 000-1.8c-.095-.495-.173-.09-.173.9m279.6 0c0 .99.078 1.395.173.9a5.661 5.661 0 000-1.8c-.095-.495-.173-.09-.173.9m-279.6 12.8c0 .99.078 1.395.173.9a5.661 5.661 0 000-1.8c-.095-.495-.173-.09-.173.9m279.6 0c0 .99.078 1.395.173.9a5.661 5.661 0 000-1.8c-.095-.495-.173-.09-.173.9m-238.926 92.5c1.658 1.766 2.017 2.084 2.017 1.783 0-.064-.855-.919-1.9-1.9L99 297l1.783 1.9m198.017.1c-.972.99-1.677 1.8-1.567 1.8.11 0 .995-.81 1.967-1.8.972-.99 1.677-1.8 1.567-1.8-.11 0-.995.81-1.967 1.8m-106.1 40.882a5.661 5.661 0 001.8 0c.495-.095.09-.173-.9-.173s-1.395.078-.9.173m12.8 0a5.661 5.661 0 001.8 0c.495-.095.09-.173-.9-.173s-1.395.078-.9.173" fill="#84acfc"></path>
                <path d="M100.786 101.1l-2.186 2.3 2.3-2.186c2.137-2.032 2.483-2.414 2.186-2.414-.062 0-1.097 1.035-2.3 2.3M298.8 101c1.195 1.21 2.263 2.2 2.373 2.2.11 0-.778-.99-1.973-2.2-1.195-1.21-2.263-2.2-2.373-2.2-.11 0 .778.99 1.973 2.2" fill="#7cacfc"></path>
            </g>
        </svg>
    )
}

export default WalletConnectModal