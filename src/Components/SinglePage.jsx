import { Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import dollar from "../Images/dollar.png"
import i from "../Images/i.png"

const SinglePage = ({ item }) => {
    let address1 = item.baseToken.address.substring(38, 42)
    let address2 = item.baseToken.address.substring(38, 42)
    let address3 = item.quoteToken.address.substring(38, 42)

    // console.log(address1, "address")
    // let address4 = item
    return (
        <Box >
            <SimpleGrid columns={['1', '1', '2', '3','4']} gap={'20px'} color={'white'}>
                <Box h={'180px'} position={'relative'} mt={'20px'} border={'1px solid white'} bgColor={'#390554'} borderRadius={'10px'} p={'15px 25px'} pb={'10px'}>
                    <Text fontSize={['16px']} m={'10px 0'}>
                        Basic Info
                    </Text>
                    <Flex>
                        {item.pairCreatedAt ? (
                            <Text fontSize={['12px']} fontWeight={600} w={'50%'}>
                                Pair created at
                            </Text>
                        ) : null}
                        <Text fontSize={['12px']} fontWeight={600} w={'50%'}>
                            {item.pairCreatedAt}
                        </Text>
                    </Flex>
                    <Flex>
                        <Text fontSize={['12px']} fontWeight={600} w={'50%'}>
                            Symbol
                        </Text>
                        <Text fontSize={['12px']} fontWeight={600} w={'50%'} textAlign={'left'}>
                            {item.baseToken.symbol}
                        </Text>
                    </Flex>
                    <Flex>
                        <Text fontSize={['12px']} fontWeight={600} w={'50%'}>
                            Dex ID
                        </Text>
                        <Text fontSize={['12px']} fontWeight={600} w={'50%'}>
                            {item.dexId}
                        </Text>
                    </Flex>
                    <Flex mb={'45px'}>
                        <Text fontSize={['12px']} fontWeight={600} w={'50%'}>
                            Pair Address
                        </Text>
                        <Text fontSize={['12px']} fontWeight={600} w={'50%'}>
                            {address1}
                        </Text>
                    </Flex>
                    <Box w={'50px'} h={'50px'} display={'flex'} justifyContent={'center'} alignItems={'center'} overflow={'hidden'} position={'absolute'} bottom={2} right={2} border={'1px solid #960252'} borderRadius={'50%'} bgColor={'#960252'} >
                        <span class="material-symbols-outlined">
                            info
                        </span>
                    </Box>
                </Box>



                <Box h={'180px'} position={'relative'} mt={'20px'} border={'1px solid white'} bgColor={'#390554;'} borderRadius={'10px'} p={'15px 25px'} pb={'20px'}>
                    <Text fontSize={['16px']} m={'10px 0'}>Base Token</Text>
                    <Flex>
                        <Text fontSize={['12px']} fontWeight={600} w={'50%'}>Name</Text>
                        <Text fontSize={['12px']} fontWeight={600} w={'50%'}>{item.baseToken.name}</Text>
                    </Flex>
                    <Flex>
                        <Text fontSize={['12px']} fontWeight={600} w={'50%'}>Symbol</Text>
                        <Text fontSize={['12px']} fontWeight={600} w={'50%'}>{item.baseToken.symbol}</Text>
                    </Flex>
                    <Flex>
                        <Text fontSize={['12px']} fontWeight={600} w={'50%'}>Address</Text>
                        <Text fontSize={['12px']} fontWeight={600} w={'50%'}>{address2}</Text>
                    </Flex>
                    <Box w={'50px'} h={'50px'} display={'flex'} justifyContent={'center'} alignItems={'center'} overflow={'hidden'} position={'absolute'} bottom={2} right={2} border={'1px solid #960252'} borderRadius={'50%'} bgColor={'#960252'} >
                        <span class="material-symbols-outlined">
                            token
                        </span>
                    </Box>
                </Box>

                <Box h={'180px'} position={'relative'} mt={'20px'} border={'1px solid white'} bgColor={'#390554;'} borderRadius={'10px'} p={'15px 25px'} pb={'10px'}>
                    <Text fontSize={['16px']} m={'10px 0'}>Quote Token</Text>
                    <Flex>
                        <Text fontSize={['12px']} fontWeight={600} w={'50%'}>Name</Text>
                        <Text fontSize={['12px']} fontWeight={600} w={'50%'}>{item.quoteToken.name}</Text>
                    </Flex>
                    <Flex>
                        <Text fontSize={['12px']} fontWeight={600} w={'50%'}>Symbol</Text>
                        <Text fontSize={['12px']} fontWeight={600} w={'50%'}>{item.quoteToken.symbol}</Text>
                    </Flex>
                    <Flex>
                        <Text fontSize={['12px']} fontWeight={600} w={'50%'}>Address</Text>
                        <Text fontSize={['12px']} fontWeight={600} w={'50%'}>{address3}</Text>
                    </Flex>
                    <Box w={'50px'} h={'50px'} display={'flex'} justifyContent={'center'} alignItems={'center'} overflow={'hidden'} position={'absolute'} bottom={2} right={2} border={'1px solid #960252'} borderRadius={'50%'} bgColor={'#960252'} >
                        <span class="material-symbols-outlined">
                            token
                        </span>
                    </Box>


                </Box>

                <Box h={'180px'} position={'relative'} mt={'20px'} border={'1px solid white'} bgColor={'#390554;'} borderRadius={'10px'} p={'15px 25px'} pb={'10px'}>
                    <Text fontSize={['16px']} m={'10px 0'}>Price</Text>
                    <Flex>
                        <Text fontSize={['12px']} fontWeight={600} w={'50%'}>Price Native</Text>
                        <Text fontSize={['12px']} fontWeight={600} w={'50%'}>{item.priceNative}</Text>
                    </Flex>
                    <Flex>
                        <Text fontSize={['12px']} fontWeight={600} w={'50%'}>Price USD</Text>
                        <Text fontSize={['12px']} fontWeight={600} w={'50%'}>{item.priceUsd}</Text>
                    </Flex>
                    <Box w={'50px'} h={'50px'} display={'flex'} justifyContent={'center'} alignItems={'center'} overflow={'hidden'} position={'absolute'} bottom={2} right={2} border={'1px solid #960252'} borderRadius={'50%'} bgColor={'#960252'} >
                        <span class="material-symbols-outlined">
                            attach_money
                        </span>
                    </Box>


                </Box>
            </SimpleGrid>

        </Box>
    )
}

export default SinglePage


