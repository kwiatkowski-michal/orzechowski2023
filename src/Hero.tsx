import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Container, Stack, Heading, Button, Text, Box, Link, Wrap, WrapItem, useColorModeValue, Show, IconButton, useColorMode, Card, CardBody, CardHeader, Image, background } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IonIcon from "@reacticons/ionicons";

import { FaFacebookSquare, FaInstagramSquare, FaMoon, FaSun, FaTwitter, FaTwitterSquare } from "react-icons/fa";
export default function Hero() {
    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <>
            <Show above="md">
                <IconButton
                    aria-label="włącz tryb ciemny"

                    size="xs"
                    position="absolute"
                    top={4}
                    left={4}
                    onClick={toggleColorMode} icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
                />
                <Box bgColor={useColorModeValue("brand.100", "gray.800")}>
                    <Container maxW={'4xl'}>
                        <Stack w={"100%"} as={Box} textAlign={'left'} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
                            <Card rounded={0} p={20} boxShadow={"2xl"} bgImage={"./image1.jpeg"} bgPosition="top"
  bgRepeat="no-repeat" bgSize={"cover"}>
                                <CardHeader>
                                    <Heading fontSize={{ base: '5xl', md: '6xl' }} color={"white"} mb={15} lineHeight={'110%'} sx={{
                                        transform: "rotate(-7deg) skewX(-7deg)"}}><Text fontWeight={400}>POLSKA</Text>DLA POKOLEŃ</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Stack direction={'column'} spacing={3} align={'left'} alignSelf={'center'} position={'relative'}>
                                        <Stack direction='column' align={'left'}
                                            alignSelf={'left'}>
                                            <Wrap spacing={4} justify={'left'}>
                                                <WrapItem>
                                                    <Link target="_blank" href="https://ekipalewicy.pl"><Button variant={'solid'} size={'lg'} rounded={0} color={useColorModeValue('white', 'black')} bgColor={useColorModeValue('brand.100', 'gray.200')} _hover={{ bg: useColorModeValue('brand.200', 'gray.400') }}>Dołącz do Ekipy Lewicy</Button></Link>
                                                </WrapItem>
                                                <WrapItem>
                                                    <Link target="_blank" href="https://x.com/orzechowski_mat"><Button variant={'solid'} size={'lg'} rounded={0} color={useColorModeValue('white', 'black')} bgColor={useColorModeValue('brand.100', 'gray.200')} _hover={{ bg: useColorModeValue('brand.200', 'gray.400') }}>Platforma X</Button></Link>
                                                </WrapItem>
                                            </Wrap>
                                        </Stack>
                                        <Link target="_blank" href={'https://m.me/112361920273367'}><Button variant={'solid'} rounded={0} colorScheme={"messenger"} rightIcon={<ExternalLinkIcon />} size={'sm'}>Napisz na Messengerze!</Button></Link>
                                    </Stack>
                                </CardBody>
                            </Card>
                        </Stack>
                    </Container>
                </Box>
            </Show>
            <Show below="md">
                <IconButton
                    aria-label="toggle theme"
                    rounded="full"
                    size="xs"
                    position="absolute"
                    top={4}
                    left={4}
                    onClick={toggleColorMode} icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
                />
                <Box bgImage={"./image2.jpg"} bgPosition="top"
  bgRepeat="no-repeat" bgSize={"cover"} py={"100"}>
                
                    <Container maxW={'4xl'}>
                        
                        <Stack w={"100%"} as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }} pt={{ base: 20, md: 36 }} mt={"50%"}>
                        <Heading color={"white"} fontSize={{ base: '5xl', md: '6xl' }} mb={15} lineHeight={'110%'} sx={{
                                        transform: "rotate(-7deg) skewX(-7deg)"}}><Text fontWeight={400}>POLSKA</Text>DLA POKOLEŃ</Heading>
                            
                            
                            <Stack direction={'column'} spacing={3} align={'center'} alignSelf={'center'} position={'relative'}>
                                <Stack direction='column' align={'bottom'}
                                    alignSelf={'center'}>
                                    <Wrap spacing={4} justify={'center'}>
                                                <WrapItem>
                                                    <Link target="_blank" href="https://ekipalewicy.pl"><Button variant={'solid'} size={'lg'} rounded={0} color={useColorModeValue('white', 'black')} bgColor={useColorModeValue('brand.100', 'gray.200')} _hover={{ bg: useColorModeValue('brand.200', 'gray.400') }}>Dołącz do Ekipy Lewicy</Button></Link>
                                                </WrapItem>
                                                <WrapItem>
                                                    <Link target="_blank" href="https://x.com/orzechowski_mat"><Button variant={'solid'} size={'lg'} rounded={0} color={useColorModeValue('white', 'black')} bgColor={useColorModeValue('brand.100', 'gray.200')} _hover={{ bg: useColorModeValue('brand.200', 'gray.400') }}>Platforma X</Button></Link>
                                                </WrapItem>
                                            </Wrap>
                                </Stack>
                                <Button variant={'solid'} colorScheme={"messenger"} rounded={0} rightIcon={<ExternalLinkIcon />} size={'sm'}>
                                    <Link target="_blank" href={'https://m.me/112361920273367'}>Napisz na Messengerze!</Link>
                                </Button>
                            </Stack>
                        </Stack>
                    </Container>
                </Box>
            </Show>
        </>
    )
}