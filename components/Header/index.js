import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Icon } from '@iconify/react';
import Modal from 'react-modal';
import { useAccount, useDisconnect, useConnect } from 'wagmi'
import WalletConnectModal from './WalletConnectModal';

const Header = (props) => {
    const { setDarkToggle, darkToggle } = props;
    const { isConnected, address } = useAccount()
    const { disconnect } = useDisconnect()
    const { isLoading } = useConnect()
    const router = useRouter()
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [connected, setConnected] = React.useState(false);
    const [dropdownToggle, setDropdownToggle] = React.useState(false);

    useEffect(() => {
        setConnected(isConnected)
    }, [isConnected])

    const changeMode = () => {
        if (darkToggle) {
            localStorage.theme = 'dark'
            document.body.style.backgroundColor = 'white'
        } else {
            localStorage.theme = 'light'
            document.body.style.backgroundColor = '#1a202c'
        }
        setDarkToggle(!darkToggle)
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            padding: '0',
            backgroundColor: darkToggle ? '#2D3748' : 'white'
        },
    };
    Modal.setAppElement('body')
    Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }
    const NavbarClass = 'font-semibold text-sm text-[#4A5568] dark:text-white px-2 py-1 font-[ubuntu] rounded-md cursor-pointer transition-all hover:bg-[#E2E8F0] hover:dark:bg-[#2D3748]'
    return (
        <div className='fixed bg-white dark:bg-[#171923] w-full flex justify-center'>
            <div className="h-16 flex items-center justify-between w-[1248px] px-4">
                <div className="flex items-baseline">
                    <div className="font-bold text-xl text-[#1A202C] dark:text-white mr-0 md:mr-10">NFTLaunchKit</div>
                    <div className="hidden md:block flex items-center">
                        <button className={NavbarClass} onClick={() => router.push('/')}>Home</button>
                        <button className={`${NavbarClass} ml-4`} onClick={() => router.push('/collections')}>Collections</button>
                        <button className={`${NavbarClass} ml-4`}>About</button>
                        <button className={`${NavbarClass} ml-4`}>Contact</button>
                    </div>
                </div>
                <div className="flex items-center">
                    {darkToggle ? (<button className="flex items-center justify-center w-10 h-10 bg-white/[0.08] hover:bg-white/[0.16] transition-all duration-200 rounded-md" onClick={() => changeMode()}>
                        <Icon icon="bi:sun" width="20" height="20" />
                    </button>) : (<button className="flex items-center justify-center w-10 h-10 bg-[#EDF2F7] hover:bg-[#E2E8F0] transition-all duration-200 rounded-md" onClick={() => changeMode()}>
                        <Icon icon="bxs:moon" color="black" width="20" height="20" />
                    </button>)}

                    <div className='relative'>
                        {(connected && darkToggle) && (
                            <button className='h-10 bg-[#90cdf4] hover:bg-[#63b3ed] text-[#1A202C] font-semibold font-[ubuntu] ml-2 px-4 rounded-md transition-all' onClick={() => setDropdownToggle(!dropdownToggle)}>
                                {isLoading ? (<Icon icon="eos-icons:loading" />) : address ? (address.slice(0, 5) + '...' + address.slice(-4)) : 'Connect a wallet'}
                            </button>
                        )}
                        {(connected && !darkToggle) && (
                            <button className='h-10 bg-[#3182ce] hover:bg-[#2b6cb0] text-white font-semibold font-[ubuntu] ml-2 px-4 rounded-md transition-all' onClick={() => setDropdownToggle(!dropdownToggle)}>
                                {isLoading ? (<Icon icon="eos-icons:loading" />) : address ? (address.slice(0, 5) + '...' + address.slice(-4)) : 'Connect a wallet'}
                            </button>
                        )}
                        {!connected && (
                            <button className='h-10 font-semibold text-base border border-[#2b6cb0] dark:border-[#90cdf4] rounded-md text-[#2b6cb0] dark:text-[#90cdf4] px-4 ml-2 font-[ubuntu] hover:bg-[#ebf8ff] dark:hover:bg-[#90cdf41f] transition-all' onClick={openModal}>
                                Connect a Wallet
                            </button>
                        )}
                        {dropdownToggle && <div id="dropdown" class="absolute z-10 w-52 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 ml-2 mt-2 border border-white/[0.16]">
                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                <li onClick={() => {
                                    disconnect()
                                    setDropdownToggle(false)
                                }}>
                                    <a href="#" class="block py-2 px-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-[ubuntu] text-base">Disconnect</a>
                                </li>
                            </ul>
                        </div>}
                    </div>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                bodyOpenClassName='overflow-hidden'
            >
                <WalletConnectModal
                    closeModal={closeModal}
                    darkToggle={darkToggle}
                    setConnected={setConnected}
                    connected={connected}
                />
            </Modal>
        </div>
    )
}

export default Header