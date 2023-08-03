import {
    Box,
    Flex,
    Spacer,
    IconButton,
    Icon,
    Collapse,
    Text,
    ChakraProvider,
    Heading,
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Input,
    Image
} from '@chakra-ui/react';
import logo from "../Images/ic_baseline-token.svg"
import logo2 from "../Images/Vector.svg"
import logo3 from "../Images/fluent_pair-24-filled.svg"
import React, { useContext } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';
import { ContextApi } from '../ContextApi/ContextApi';
import { useAuth0 } from "@auth0/auth0-react";
import { useWeb3Modal } from '@web3modal/react'
import { useAccount, useContract } from 'wagmi'

const MobSide = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { state, setState } = useContext(ContextApi)
    const { loginWithRedirect, isAuthenticated,logout  } = useAuth0();
    const { open, close } = useWeb3Modal()


    let bgColor1
    let bgColor2

    if (state) {
        bgColor2 = "#F30050"
        bgColor1 = ""
    } else {
        bgColor1 = "#F30050"
        bgColor2 = ""
    }
    const chnageState = () => {
        setState(!state)
        onClose()
    }
    return (
        <Box>
            <Flex p={'24px 20px'} backgroundColor="rgba(0, 0, 0, 0.6)" justifyContent={'space-between'} alignItems={'center'}>
                <Flex alignItems={'center'} justifyContent={'space-between'} w={['20%','20%','15%']}>
                    <IconButton variant="unstyled" onClick={onOpen}>
                        <RxHamburgerMenu color='white' />
                    </IconButton>
                    <Heading color={'#F7F9F9'} fontSize={'25px'} fontWeight={400} fontFamily="Pacifico, cursive">NFTify</Heading>
                </Flex>
                <Flex justifyContent={'space-between'} w={['50%','40%','20%']}>
                    {isAuthenticated ? <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} color={'white'} borderRadius={'20px'} background={'linear-gradient(131deg, #7C0F35 0%, #581266 100%);'}>Logout</Button> : <Button onClick={() => loginWithRedirect()} color={'white'} borderRadius={'20px'} background={'linear-gradient(131deg, #7C0F35 0%, #581266 100%);'}>Login</Button>}
                    <Button onClick={() => open()} color={'white'} borderRadius={'20px'} background={'linear-gradient(131deg, #7C0F35 0%, #581266 100%);'}>Connect</Button>
                </Flex>



            </Flex>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}

            >
                <DrawerOverlay />
                <DrawerContent bgColor={'#292929;'} color={'white'}>
                    <DrawerCloseButton />
                    <DrawerHeader><Heading color={'#F7F9F9'} fontSize={'25px'} fontWeight={400} fontFamily="Pacifico, cursive">NFTify</Heading></DrawerHeader>

                    <DrawerBody>
                        <Flex _hover={{ cursor: "pointer" }} onClick={() => chnageState()} bgColor={bgColor1} p={'5% 8%'} mt={'8%'} justifyContent={'space-around'} alignItems={'center'} w={'100%'}>
                            <Image src={logo} w={['24px']} />
                            <Text fontSize={'16px'} fontWeight={400} >Token Address</Text>
                        </Flex>

                        <Flex _hover={{ cursor: "pointer" }} onClick={() => chnageState()} bgColor={bgColor2} p={'5% 8%'} mt={'8%'} justifyContent={'space-around'} alignItems={'center'} w={'100%'}>
                            <Image src={logo3} />
                            <Text fontSize={'16px'} fontWeight={400} >Pair Address &nbsp;&nbsp;&nbsp;</Text>
                        </Flex>
                    </DrawerBody>


                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default MobSide
