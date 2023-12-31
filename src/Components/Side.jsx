import { Box, Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react'
import logo from "../Images/ic_baseline-token.svg"
import logo2 from "../Images/Vector.svg"
import logo3 from "../Images/fluent_pair-24-filled.svg"
import React, { useContext, useEffect, useState } from 'react'
import { ContextApi } from '../ContextApi/ContextApi'
import axios from "axios"
import { BiLogoFacebook,BiLogoTwitter,BiLogoLinkedin } from 'react-icons/bi';

// BiLogoFacebookCircle

const Side = () => {
    const { state, setState } = useContext(ContextApi)

    let bgColor1
    let bgColor2

    if(state){
        bgColor2="#F30050"
        bgColor1=""
    } else{
        bgColor1="#F30050"
        bgColor2=""
    }

    // const changes=()=>{
    //     setST
    // }

    



    return (
        <Box border={'1px solid black'} bgColor={'#292929;'} color={'#F7F9F9'} h={'100vh'}>
            <Flex p={'8%'} fontWeight={400} justifyContent={'space-around'} alignItems={'center'} w={'90%'}>
                <Image src={logo2} />
                <Heading fontSize={'25px'} fontWeight={400} fontFamily="Pacifico, cursive">NFTify</Heading>
            </Flex>
            <Flex _hover={{cursor:"pointer"}} onClick={()=>setState(!state)} bgColor={bgColor1} p={'5% 8%'} mt={'8%'} justifyContent={'space-around'} alignItems={'center'} w={'100%'}>
                <Image src={logo} w={['24px']} />
                <Text fontSize={'16px'} fontWeight={400} >Token Address</Text>
            </Flex>

            <Flex _hover={{cursor:"pointer"}} onClick={()=>setState(!state)} bgColor={bgColor2} p={'5% 8%'} mt={'8%'} justifyContent={'space-around'} alignItems={'center'} w={'100%'}>
                <Image src={logo3} />
                <Text fontSize={'16px'} fontWeight={400} >Pair Address &nbsp;&nbsp;&nbsp;</Text>
            </Flex>

            <Flex justifyContent={'space-around'} mt={'120%'}>
                <IconButton borderRadius={'50%'} bgColor={'#F30050'} w={'5%'}>
                    <BiLogoFacebook color='white'/>
                </IconButton>
                <IconButton borderRadius={'50%'} bgColor={'#F30050'} w={'5%'}>
                    <BiLogoTwitter  color='white'/>
                </IconButton>
                <IconButton borderRadius={'50%'} bgColor={'#F30050'} w={'5%'}>
                    <BiLogoLinkedin color='white' />
                </IconButton>
            </Flex>

        </Box>
    )
}

export default Side
