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
                        <Stack w={"100%"} as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
                            <Card rounded={0} p={20} boxShadow={"2xl"} bg={useColorModeValue("brand.300", "gray.900")}>
                                <CardHeader>
                                    <Heading fontSize={{ base: '5xl', md: '6xl' }} color={useColorModeValue("brand.100", "white")} mb={15} lineHeight={'110%'} sx={{
                                        transform: "rotate(-7deg) skewX(-7deg)"}}><Text fontWeight={400}>POLSKA</Text>DLA POKOLEŃ</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text fontWeight={400} color={useColorModeValue('gray.500', 'gray.100')}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus commodi tenetur autem iure,
                                        natus aliquam omnis adipisci voluptas consequatur reiciendis ea dolor et eveniet
                                        doloribus libero a quidem quia. Consequuntur et mollitia labore tempore facere illum
                                        quibusdam minima amet, dolorem tenetur fugiat nisi iusto molestiae natus quos velit nemo
                                        culpa eius possimus quod? Odit a aliquam facere accusantium impedit recusandae similique
                                        necessitatibus fugiat illo commodi est vero repellendus ab, assumenda libero omnis
                                        qui nulla eaque alias? Numquam modi enim nemo.
                                    </Text>
                                </CardBody>
                                <CardBody>
                                    <Stack direction={'column'} spacing={3} align={'center'} alignSelf={'center'} position={'relative'}>
                                        <Stack direction='column' align={'center'}
                                            alignSelf={'center'}>
                                            <Wrap spacing={4} justify={'center'}>
                                                <WrapItem>
                                                    <Link target="_blank" href="https://facebook.com/orzechowski.mat"><Button variant={'solid'} size={'lg'} rounded={0} colorScheme={'facebook'} leftIcon={<FaFacebookSquare />}>Facebook</Button></Link>
                                                </WrapItem>
                                                <WrapItem>
                                                    <Link target="_blank" href="https://x.com/orzechowski_mat"><Button variant={'solid'} size={'lg'} rounded={0} color={useColorModeValue('white', 'black')} bgColor={useColorModeValue('black', 'gray.200')} _hover={{ bg: useColorModeValue('gray.700', 'gray.400') }}>Platforma X</Button></Link>
                                                </WrapItem>
                                                <WrapItem>
                                                    <Link target="_blank" href="https://instagram.com/mateusz.orzechowski"><Button variant={'solid'} rounded={0} size={'lg'} colorScheme={'pink'} leftIcon={<FaInstagramSquare />}>Instagram</Button></Link>
                                                </WrapItem>
                                                <WrapItem>
                                                    <Link target="_blank" href="https://tiktok.com/@orzechowski_mat"><Button variant={'solid'} rounded={0} size={'lg'} color={useColorModeValue('white', 'black')} bgColor={useColorModeValue('black', 'gray.200')} _hover={{ bg: useColorModeValue('gray.700', 'gray.400') }} leftIcon={<IonIcon name="logo-tiktok"></IonIcon>}>TikTok</Button></Link>
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
                <Box bgColor={useColorModeValue("brand.100", "gray.900")}>
                    <Container maxW={'4xl'}>
                        <Stack w={"100%"} as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
                        <Heading color={"white"} fontSize={{ base: '5xl', md: '6xl' }} mb={15} lineHeight={'110%'} sx={{
                                        transform: "rotate(-7deg) skewX(-7deg)"}}><Text fontWeight={400}>POLSKA</Text>DLA POKOLEŃ</Heading>
                            
                            <Text color={useColorModeValue('white', 'gray.300')}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus commodi tenetur autem iure,
                                natus aliquam omnis adipisci voluptas consequatur reiciendis ea dolor et eveniet
                                doloribus libero a quidem quia. Consequuntur et mollitia labore tempore facere illum
                                quibusdam minima amet, dolorem tenetur fugiat nisi iusto molestiae natus quos velit nemo
                                culpa eius possimus quod? Odit a aliquam facere accusantium impedit recusandae similique
                                necessitatibus fugiat illo commodi est vero repellendus ab, assumenda libero omnis
                                qui nulla eaque alias? Numquam modi enim nemo.
                            </Text>
                            <Stack direction={'column'} spacing={3} align={'center'} alignSelf={'center'} position={'relative'}>
                                <Stack direction='column' align={'center'}
                                    alignSelf={'center'}>
                                    <Wrap spacing={4} justify={'center'}>
                                        <WrapItem>
                                            <Link target="_blank" href="https://facebook.com/orzechowski.mat"><Button variant={'solid'} rounded={0} size={'lg'} colorScheme={'facebook'} leftIcon={<FaFacebookSquare />}>Facebook</Button></Link>
                                        </WrapItem>
                                        <WrapItem>
                                                    <Link target="_blank" href="https://x.com/orzechowski_mat"><Button variant={'solid'} rounded={0} size={'lg'} color={useColorModeValue('white', 'black')} bgColor={useColorModeValue('black', 'gray.200')} _hover={{ bg: useColorModeValue('gray.700', 'gray.400') }}>Platforma X</Button></Link>
                                                </WrapItem>
                                        <WrapItem>
                                            <Link target="_blank" href="https://instagram.com/mateusz.orzechowski"><Button variant={'solid'} rounded={0} size={'lg'} colorScheme={'pink'} leftIcon={<FaInstagramSquare />}>Instagram</Button></Link>
                                        </WrapItem>
                                        <WrapItem>
                                            <Link target="_blank" href="https://tiktok.com/@orzechowski_mat"><Button variant={'solid'} rounded={0} size={'lg'} color={useColorModeValue('white', 'black')} bgColor={useColorModeValue('black', 'gray.200')} _hover={{ bg: useColorModeValue('gray.700', 'gray.400') }} leftIcon={<IonIcon name="logo-tiktok"></IonIcon>}>TikTok</Button></Link>
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