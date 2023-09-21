import { Icon } from "@chakra-ui/icons";
import { Container, Stack, Heading, Button, Text, Box, Link, Wrap, WrapItem, useColorModeValue, Show, IconButton, useColorMode, Card, CardBody, CardHeader, Image, background } from "@chakra-ui/react";

import { FaFacebookMessenger, FaFacebookSquare, FaInstagramSquare, FaMoon, FaPeopleCarry, FaSun, FaTiktok, FaTwitter, FaTwitterSquare } from "react-icons/fa";
import ModalSupport from "./Modal-wsparcie";
import { RiTwitterXFill } from "react-icons/ri";
export default function Hero() {
    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <>
            <Show above="md">
                
                <Box bgColor={useColorModeValue("brand.100", "gray.900")}>
                    <Container maxW={'5xl'}>
                        <Stack w={"100%"} as={Box} textAlign={'left'} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 31 }}>
                            <Card rounded={0} p={20} boxShadow={"dark-lg"} bgImage={"./image3.jpg"} bgPosition="top"
  bgRepeat="no-repeat" bgSize={"cover"}>
                                <CardHeader>
                                    <Heading fontWeight={400} userSelect={"none"} fontSize={{ base: '5xl', md: '6xl' }} color={"white"} mb={15} lineHeight={'110%'} sx={{
                                        transform: "rotate(-7deg) skewX(-7deg)"}}>POLSKA<br></br><Text as={"span"} transition={"0.2s"} _hover={{background:"brand.100"}} sx={{background: "brand.200", lineHeight: "1.4", paddingInline: "3"}} fontWeight={800}>DLA POKOLEŃ</Text></Heading>
                                </CardHeader>
                                <CardBody>
                                    <Stack direction={'column'} spacing={3} align={'left'} alignSelf={'center'} position={'relative'}>
                                        <Stack direction='column' align={'left'}
                                            alignSelf={'left'}>
                                            <Wrap spacing={4} justify={'left'}>
                                                <WrapItem>
                                                    <Link target="_blank" href="https://ekipalewicy.pl"><Button leftIcon={<FaPeopleCarry/>} variant={'solid'} size={'lg'} rounded={0} color={"white"} bgColor={"brand.100"} _hover={{ bg: "brand.200" }}>Dołącz do Ekipy Lewicy</Button></Link>
                                                </WrapItem>
                                                <WrapItem>
                                                    <ModalSupport></ModalSupport>
                                                </WrapItem>
                                            </Wrap>
                                        </Stack>
                                        <Wrap spacing={2} justify={'left'}>
                                        <Link target="_blank" href={'https://m.me/112361920273367'}><IconButton aria-label="messenger" rounded={0} color={"brand.100"} bgColor={"brand.300"} _hover={{ bg: "brand.100", color: "white"}} icon={<FaFacebookMessenger></FaFacebookMessenger>}></IconButton></Link>
                                        <Link target="_blank" href={'https://www.tiktok.com/@orzechowski_mat'}><IconButton aria-label="tiktok" rounded={0} color={"brand.100"} bgColor={"brand.300"} _hover={{ bg: "brand.100", color: "white" }} icon={<FaTiktok></FaTiktok>}></IconButton></Link>
                                        <Link target="_blank" href={'https://facebook.com/orzechowski.mat'}><IconButton aria-label="facebook" rounded={0} color={"brand.100"} bgColor={"brand.300"} _hover={{ bg: "brand.100", color: "white" }} icon={<FaFacebookSquare></FaFacebookSquare>}></IconButton></Link>
                                        <Link target="_blank" href={'https://x.com/orzechowski_mat'}><IconButton aria-label="x" rounded={0} color={"brand.100"} bgColor={"brand.300"} _hover={{ bg: "brand.100", color: "white" }} icon={<RiTwitterXFill/>}></IconButton></Link>
                                        </Wrap>
                                        
                                    </Stack>
                                </CardBody>
                            </Card>
                        </Stack>
                    </Container>
                </Box>
            </Show>
            <Show below="md">
                
                <Box  bgImage={"./image2.jpg"} bgPosition="top"
  bgRepeat="no-repeat" bgSize={"cover"} py={"100"}>
                
                    <Container maxW={'4xl'}>
                        
                        <Stack w={"100%"} as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }} pt={{ base: 20, md: 36 }} mt={"50%"}>
                        <Heading color={"white"} userSelect={"none"} fontSize={{ base: '5xl', md: '6xl' }} fontWeight={400} mb={15}  sx={{
                                        transform: "rotate(-7deg) skewX(-7deg)"}}>POLSKA<br></br><Text as={"span"} transition={"0.2s"} _hover={{background:"brand.100", transition: "0.2s"}} sx={{background: "brand.200", lineHeight: "1", paddingInline: "3"}} fontWeight={800}>DLA POKOLEŃ</Text></Heading>
                            
                            
                            <Stack direction={'column'} spacing={3} align={'center'} alignSelf={'center'} position={'relative'}>
                                <Stack direction='column' align={'bottom'}
                                    alignSelf={'center'}>
                                    <Wrap spacing={4} justify={'center'}>
                                    <WrapItem>
                                                    <Link target="_blank" href="https://ekipalewicy.pl"><Button variant={'solid'} leftIcon={<FaPeopleCarry/>} size={'lg'} rounded={0} color={"white"} bgColor={"brand.100"} _hover={{ bg: "brand.200" }}>Dołącz do Ekipy Lewicy</Button></Link>
                                                </WrapItem>
                                                <WrapItem>
                                                <ModalSupport></ModalSupport>
                                                </WrapItem>
                                            </Wrap>
                                </Stack>
                                <Wrap spacing={2} justify={'left'}>
                                        <Link target="_blank" href={'https://m.me/112361920273367'}><IconButton aria-label="messenger" rounded={0} color={"brand.100"} bgColor={"brand.300"} _hover={{ bg: "brand.100", color: "white" }} icon={<FaFacebookMessenger></FaFacebookMessenger>}></IconButton></Link>
                                        <Link target="_blank" href={'https://tiktok.com/@orzechowski_mat'}><IconButton aria-label="tiktok" rounded={0} color={"brand.100"} bgColor={"brand.300"} _hover={{ bg: "brand.100", color: "white" }} icon={<FaTiktok></FaTiktok>}></IconButton></Link>
                                        <Link target="_blank" href={'https://www.facebook.com/orzechowski.mat'}><IconButton aria-label="facebook" rounded={0} color={"brand.100"} bgColor={"brand.300"} _hover={{ bg: "brand.100", color: "white" }} icon={<FaFacebookSquare></FaFacebookSquare>}></IconButton></Link>
                                        <Link target="_blank" href={'https://x.com/orzechowski_mat'}><IconButton aria-label="x" rounded={0} color={"brand.100"} bgColor={"brand.300"} _hover={{ bg: "brand.100", color: "white" }} icon={<RiTwitterXFill/>}></IconButton></Link>
                                        </Wrap>
                            </Stack>
                        </Stack>
                    </Container>
                </Box>
            </Show>
        </>
    )
}