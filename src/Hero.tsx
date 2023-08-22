import { ExternalLinkIcon, Icon } from "@chakra-ui/icons";
import { Container, Stack, Heading, Button, Text, Box, Link, Wrap, WrapItem, useColorModeValue, Show, IconButton, useColorMode, Card, CardBody, CardHeader, Image, background } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IonIcon from "@reacticons/ionicons";
import { relative } from "path";

import { FaFacebook, FaFacebookMessenger, FaFacebookSquare, FaInstagramSquare, FaMoon, FaSun, FaTiktok, FaTwitter, FaTwitterSquare } from "react-icons/fa";
export default function Hero() {
    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <>
            <Show above="md">
                
                <Box bgColor={useColorModeValue("brand.100", "gray.900")}>
                    <Container maxW={'4xl'} pt={12}>
                        <Stack w={"100%"} as={Box} textAlign={'left'} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 31 }}>
                            <Card rounded={0} p={20} boxShadow={"dark-lg"} bgImage={"./image3.jpg"} bgPosition="top"
  bgRepeat="no-repeat" bgSize={"cover"}>
                                <CardHeader>
                                    <Heading fontWeight={400}  fontSize={{ base: '5xl', md: '6xl' }} color={"white"} mb={15} lineHeight={'110%'} sx={{
                                        transform: "rotate(-7deg) skewX(-7deg)"}}>POLSKA<br></br><Text as={"span"} transition={"0.2s"} _hover={{background:"brand.100"}} sx={{background: "brand.200", lineHeight: "1.4", paddingInline: "3"}} fontWeight={800}>DLA POKOLEŃ</Text></Heading>
                                </CardHeader>
                                <CardBody>
                                    <Stack direction={'column'} spacing={3} align={'left'} alignSelf={'center'} position={'relative'}>
                                        <Stack direction='column' align={'left'}
                                            alignSelf={'left'}>
                                            <Wrap spacing={4} justify={'left'}>
                                                <WrapItem>
                                                    <Link target="_blank" href="https://ekipalewicy.pl"><Button variant={'solid'} size={'lg'} rounded={0} color={"white"} bgColor={"brand.100"} _hover={{ bg: "brand.200" }}>Dołącz do Ekipy Lewicy</Button></Link>
                                                </WrapItem>
                                                <WrapItem>
                                                    <Link target="_blank" href="https://ekipalewicy.pl"><Button variant={'solid'} size={'lg'} rounded={0} color={"white"} bgColor={"brand.100"} _hover={{ bg: "brand.200" }}>Wesprzyj moją kampanię</Button></Link>
                                                </WrapItem>
                                            </Wrap>
                                        </Stack>
                                        <Wrap spacing={2} justify={'left'}>
                                        <Link target="_blank" href={'https://m.me/112361920273367'}><IconButton aria-label="messenger" rounded={0} color={"brand.100"} bgColor={"brand.300"} _hover={{ bg: "brand.100", color: "white"}} icon={<FaFacebookMessenger></FaFacebookMessenger>}></IconButton></Link>
                                        <Link target="_blank" href={'https://www.tiktok.com/@orzechowski_mat'}><IconButton aria-label="tiktok" rounded={0} color={"brand.100"} bgColor={"brand.300"} _hover={{ bg: "brand.100", color: "white" }} icon={<FaTiktok></FaTiktok>}></IconButton></Link>
                                        <Link target="_blank" href={'https://facebook.com/orzechowski.mat'}><IconButton aria-label="facebook" rounded={0} color={"brand.100"} bgColor={"brand.300"} _hover={{ bg: "brand.100", color: "white" }} icon={<FaFacebookSquare></FaFacebookSquare>}></IconButton></Link>
                                        <Link target="_blank" href={'https://x.com/orzechowski_mat'}><IconButton aria-label="x" rounded={0} color={"brand.100"} bgColor={"brand.300"} _hover={{ bg: "brand.100", color: "white" }} icon={<Icon viewBox="0 0 500 500" _hover={{ bg: "brand.100", color: "white" }}><path fill="currentColor" d="M389 48h71L306 224l181 240H345L234 319 107 464H36l165-188L27 48h145l101 133L389 48zm-25 374h39L152 88h-42l255 334z"/></Icon>}></IconButton></Link>
                                        </Wrap>
                                        
                                    </Stack>
                                </CardBody>
                            </Card>
                        </Stack>
                    </Container>
                </Box>
            </Show>
            <Show below="md">
                
                <Box bgImage={"./image2.jpg"} bgPosition="top"
  bgRepeat="no-repeat" bgSize={"cover"} py={"100"}>
                
                    <Container maxW={'4xl'}>
                        
                        <Stack w={"100%"} as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }} pt={{ base: 20, md: 36 }} mt={"50%"}>
                        <Heading color={"white"} fontSize={{ base: '5xl', md: '6xl' }} fontWeight={400} mb={15}  sx={{
                                        transform: "rotate(-7deg) skewX(-7deg)"}}>POLSKA<br></br><Text as={"span"} transition={"0.2s"} _hover={{background:"brand.100", transition: "0.2s"}} sx={{background: "brand.200", lineHeight: "1", paddingInline: "3"}} fontWeight={800}>DLA POKOLEŃ</Text></Heading>
                            
                            
                            <Stack direction={'column'} spacing={3} align={'center'} alignSelf={'center'} position={'relative'}>
                                <Stack direction='column' align={'bottom'}
                                    alignSelf={'center'}>
                                    <Wrap spacing={4} justify={'center'}>
                                    <WrapItem>
                                                    <Link target="_blank" href="https://ekipalewicy.pl"><Button variant={'solid'} size={'lg'} rounded={0} color={"white"} bgColor={"brand.100"} _hover={{ bg: "brand.200" }}>Dołącz do Ekipy Lewicy</Button></Link>
                                                </WrapItem>
                                                <WrapItem>
                                                <Link target="_blank" href="https://ekipalewicy.pl"><Button variant={'solid'} size={'lg'} rounded={0} color={"white"} bgColor={"brand.100"} _hover={{ bg: "brand.200" }}>Wesprzyj moją kampanię</Button></Link>
                                                </WrapItem>
                                            </Wrap>
                                </Stack>
                                <Wrap spacing={2} justify={'left'}>
                                        <Link target="_blank" href={'https://m.me/112361920273367'}><IconButton aria-label="messenger" rounded={0} color={"brand.100"} bgColor={"brand.300"} _hover={{ bg: "brand.100", color: "white" }} icon={<FaFacebookMessenger></FaFacebookMessenger>}></IconButton></Link>
                                        <Link target="_blank" href={'https://tiktok.com/orzechowski_mat'}><IconButton aria-label="tiktok" rounded={0} color={"brand.100"} bgColor={"brand.300"} _hover={{ bg: "brand.100", color: "white" }} icon={<FaTiktok></FaTiktok>}></IconButton></Link>
                                        <Link target="_blank" href={'https://www.tiktok.com/@orzechowski_mat'}><IconButton aria-label="facebook" rounded={0} color={"brand.100"} bgColor={"brand.300"} _hover={{ bg: "brand.100", color: "white" }} icon={<FaFacebookSquare></FaFacebookSquare>}></IconButton></Link>
                                        <Link target="_blank" href={'https://x.com/orzechowski_mat'}><IconButton aria-label="x" rounded={0} color={"brand.100"} bgColor={"brand.300"} _hover={{ bg: "brand.100", color: "white" }} icon={<Icon viewBox="0 0 500 500" _hover={{ bg: "brand.100", color: "white" }}><path fill="currentColor" d="M389 48h71L306 224l181 240H345L234 319 107 464H36l165-188L27 48h145l101 133L389 48zm-25 374h39L152 88h-42l255 334z"/></Icon>}></IconButton></Link>
                                        </Wrap>
                            </Stack>
                        </Stack>
                    </Container>
                </Box>
            </Show>
        </>
    )
}