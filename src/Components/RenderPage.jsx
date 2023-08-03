import { Box, Button, Flex, Image, Input, InputGroup, InputRightElement, background } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import searchIcon from "../Images/Vector.png"
import { ContextApi } from '../ContextApi/ContextApi';
import axios from 'axios';
import SinglePage from './SinglePage';


const RenderPage = () => {

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
            axios.get(`https://api.dexscreener.com/latest/dex/search?q=${datas}`).then((res) => setData(res.data.pairs)).catch((err) => console.log(err))
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
                    <Input borderRadius={'20px'} color={'white'}  placeholder='Search' onChange={(e) => getFetch(e)} />
                    <InputRightElement >
                        <Image src={searchIcon} />
                    </InputRightElement>
                </InputGroup>
                <Button display={['none', 'none', 'none', 'inline']} color={'white'} borderRadius={'20px'} background={'linear-gradient(131deg, #7C0F35 0%, #581266 100%);'}>Connect</Button>
            </Flex>

            <Box>
                {data.length > 0 ? data.map((el) => {
                    return <SinglePage item={el} />
                }) : ''}

            </Box>

        </Box>
    );
}

export default RenderPage;
