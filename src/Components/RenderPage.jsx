import { Box, Button, Flex, Image, Input, InputGroup, InputRightElement, background } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import searchIcon from "../Images/Vector.png"
import { ContextApi } from '../ContextApi/ContextApi';
import axios from 'axios';
import SinglePage from './SinglePage';
import { useWeb3Modal } from '@web3modal/react'
import { useAccount, useContract } from 'wagmi'
import { useAuth0 } from "@auth0/auth0-react";


const RenderPage = () => {
    const { loginWithRedirect, isAuthenticated,logout  } = useAuth0();
    const { open, close } = useWeb3Modal()
    const [data, setData] = useState([])
    const { state, setState } = useContext(ContextApi)
    // console.log(state,data)
    useEffect(() => {
        if (!state) {
            axios.get("https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095").then((res) => setData(res.data.pairs)).catch((err) => console.log(err))
        } else {
            axios.get("https://api.dexscreener.com/latest/dex/pairs/bsc/0x7213a321F1855CF1779f42c0CD85d3D95291D34C,0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae").then((res) => setData(res.data.pairs)).catch((err) => console.log(err))
        }
    }, [state])


    function getFetch(e) {
        let datas = e.target.value
        if (datas.length === 0) {
            
            if (!state) {
               
                axios.get("https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095").then((res) => setData(res.data.pairs)).catch((err) => console.log(err))
                
            } else {
                
                axios.get("https://api.dexscreener.com/latest/dex/pairs/bsc/0x7213a321F1855CF1779f42c0CD85d3D95291D34C,0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae").then((res) => setData(res.data.pairs)).catch((err) => console.log(err))
                
            }
        } else {
            // let arr= []
            
            axios.get(`https://api.dexscreener.com/latest/dex/search?q=${datas}`).then((res) => setData(res.data.pairs.sort((a,b)=>b.priceUsd - a.priceUsd))).catch((err) => console.log(err))
            // console.log(arr)
            
        }
        console.log(datas)


    }


    return (
        <Box
            width="100%"
            height="100%"
            backgroundColor="rgba(0, 0, 0, 0.6)"
            p={'24px 44px'}
            overflow={'scroll'}
            overflowX={'hidden'}

        >
            <Flex justifyContent={'space-between'}>
                <InputGroup width={['100%', '100%', '100%', '50%']} borderRadius={'20px'} >
                    <Input borderRadius={'20px'} color={'white'} placeholder='Search' onChange={(e) => getFetch(e)} />
                    <InputRightElement >
                        <Image src={searchIcon} />
                    </InputRightElement>
                </InputGroup>
                <Flex justifyContent={'space-around'} w={['20%','20%','25%','25%','20%']} display={['none', 'none', 'none', 'flex']}>
                    {isAuthenticated? <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} display={['none', 'none', 'none', 'inline']} color={'white'} borderRadius={'20px'} background={'linear-gradient(131deg, #7C0F35 0%, #581266 100%);'}>Logout</Button>:<Button onClick={() => loginWithRedirect()} display={['none', 'none', 'none', 'inline']} color={'white'} borderRadius={'20px'} background={'linear-gradient(131deg, #7C0F35 0%, #581266 100%);'}>Login</Button>}
                    <Button onClick={() => open()} display={['none', 'none', 'none', 'inline']} color={'white'} borderRadius={'20px'} background={'linear-gradient(131deg, #7C0F35 0%, #581266 100%);'}>Connect</Button>
                </Flex>
            </Flex>

            <Box>
                {data.length > 0 ? data.map((el, i) => {
                    return <SinglePage item={el} key={i} />
                }) : ''}

            </Box>

        </Box>
    );
}

export default RenderPage;
