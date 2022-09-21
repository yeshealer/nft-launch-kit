import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {
  WagmiConfig,
  createClient,
  configureChains,
  defaultChains,
} from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [darkToggle, setDarkToggle] = useState(false)

  const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
    alchemyProvider({ apiKey: 'sKGPLavSwb6I_v822zfLuIh4mKKdK__A' }),
    publicProvider(),
  ])

  const client = createClient({
    autoConnect: true,
    connectors: [
      new MetaMaskConnector({ chains }),
      new CoinbaseWalletConnector({
        chains,
        options: {
          appName: 'NFT Launch Kit',
        },
      }),
    ],
    provider,
    webSocketProvider,
  })

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkToggle(false)
      document.body.style.backgroundColor = 'white'
    } else {
      setDarkToggle(true)
      document.body.style.backgroundColor = '#1a202c'
    }
  }, [])
  return (
    <WagmiConfig client={client}>
      <div className={`flex flex-col items-center ${darkToggle ? 'dark' : 'white'}`}>
        <Header setDarkToggle={setDarkToggle} darkToggle={darkToggle} />
        <Component {...pageProps} />
        <Footer />
      </div>
    </WagmiConfig>
  )
}

export default MyApp
