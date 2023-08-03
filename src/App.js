import logo from './logo.svg';
import './App.css';
import Side from './Components/Side';
import { Box, Flex } from '@chakra-ui/react';
import RenderPage from './Components/RenderPage';
import bgImage from "./Images/bgImage.png"
import MobSide from './Components/MobSide';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from './Components/Loading';


const chains = [arbitrum, mainnet, polygon]
const projectId = '198ba97f780e68b37284cf5ce75fc866'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)





function App() {
  const [state,setState] = useState(false)

  useEffect(()=>{
    setTimeout(() => {
      setState(true)
    }, 4000);
  },[])

  if(!state){
    return <Loading />
  }


  return (
    <Box>
      <Flex backgroundImage={`url(${bgImage})`}
        height={['auto', '100%', '100%', '92vh']}
        backgroundSize="cover"
        backgroundPosition="center"
        flexDirection={['column', 'column', 'column', 'row']}
        backgroundRepeat="no-repeat">
        <Box w={'20%'} display={['none', 'none', 'none', 'block']}>
          {/* <MobSide /> */}
          <Side />
        </Box>
        <Box display={['block', 'block', 'block', 'none']}>
        <WagmiConfig config={wagmiConfig}><MobSide /></WagmiConfig>
        </Box>
        <Box w={['100%', '100%', '100%', '80%']}>
          <WagmiConfig config={wagmiConfig}><RenderPage /></WagmiConfig>

        </Box>
      </Flex>
      <Box display={['none', 'none', 'none', 'block']} height={'8vh'} bgColor={'rgba(243, 0, 80, 1)'} position={'sticky'} bottom={"0px"}>

      </Box>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </Box>
  );
}

export default App;
