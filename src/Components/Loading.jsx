import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import Typed from "react-typed"

const Loading = () => {
    return (
        <Box bgColor={'#292929;'} color={'#F7F9F9'} textAlign={'center'} h={'100vh'}>
            <Box  fontWeight={400} fontFamily="Pacifico, cursive" bgColor={'#292929;'}  color={'white'} fontSize={['2rem','2.5rem','3rem','4rem']} pt={['80%','70%','50%','23%']} >
                <Typed strings={[
                    "NFTify"
                ]}
                    typeSpeed={80}
                    backSpeed={80}
                    loop
                />
            </Box>
            

        </Box>
    )
}

export default Loading
