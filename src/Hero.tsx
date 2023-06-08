import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Container, Stack, Heading, Button, Text, Box, Link, Wrap, WrapItem, useColorModeValue, Show, IconButton, useColorMode, Card, CardBody, CardHeader } from "@chakra-ui/react";
import IonIcon from "@reacticons/ionicons";

import { FaFacebookSquare, FaInstagramSquare, FaMoon, FaSun, FaTwitterSquare } from "react-icons/fa";
export default function Hero() {
    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <>
         
            <Show above="md">
            <IconButton
        aria-label="toggle theme"
        rounded="full"
        size="xs"
        position="absolute"
        top={4}
        left={4}
        onClick={toggleColorMode} icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
      />
            <Box bgColor={useColorModeValue("brand.100","gray.800")}>
                <Container maxW={'4xl'}>
                    <Stack w={"100%"} as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
                        <Card p={20} boxShadow={"2xl"} bg={useColorModeValue("white","gray.700")}>
                            <CardHeader>
                            <Heading fontWeight={800} fontSize={{ base: '5xl', md: '6xl' }} lineHeight={'110%'} >Witajcie na mojej stronie!</Heading>
                            </CardHeader>
                            <CardBody>
                        <Text color={useColorModeValue('gray.500', 'gray.100')}>
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
                                        <Button variant={'solid'} size={'lg'} colorScheme={'facebook'} leftIcon={<FaFacebookSquare />}><Link target="_blank" href="https://facebook.com/orzechowski.mat">Facebook</Link></Button>
                                    </WrapItem>
                                    <WrapItem>
                                        <Button variant={'solid'} size={'lg'} colorScheme={'twitter'} leftIcon={<FaTwitterSquare />}><Link target="_blank" href="https://twitter.com/orzechowski_mat">Twitter</Link></Button>
                                    </WrapItem>
                                    <WrapItem>
                                        <Button variant={'solid'} size={'lg'} colorScheme={'pink'} leftIcon={<FaInstagramSquare />}><Link target="_blank" href="https://instagram.com/mateusz.orzechowski">Instagram</Link></Button>
                                    </WrapItem>
                                    <WrapItem>
                                        <Button variant={'solid'} size={'lg'} color={useColorModeValue('white', 'black')} bgColor={useColorModeValue('black', 'gray.200')} _hover={{ bg: useColorModeValue('gray.700', 'gray.400')}} leftIcon={<IonIcon name="logo-tiktok"></IonIcon>}><Link target="_blank" href="https://tiktok.com/@orzechowski_mat">TikTok</Link></Button>
                                    </WrapItem>
                                </Wrap>
                            </Stack>
                            <Button variant={'solid'} colorScheme={"gray"} rightIcon={<ExternalLinkIcon />} size={'sm'}>
                                <Link href={'https://m.me/112361920273367'}>Napisz na Messengerze!</Link>
                            </Button>
                            
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
            <Box bgColor={useColorModeValue("brand.100","gray.700")}>
                <Container maxW={'4xl'}>
                    <Stack w={"100%"} as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
                        <Heading fontWeight={800} fontSize={{ base: '5xl', md: '6xl' }} lineHeight={'110%'} color={"white"}>Witajcie na mojej stronie!</Heading>
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
                                        <Button variant={'solid'} size={'lg'} colorScheme={'facebook'} leftIcon={<FaFacebookSquare />}><Link target="_blank" href="https://facebook.com/orzechowski.mat">Facebook</Link></Button>
                                    </WrapItem>
                                    <WrapItem>
                                        <Button variant={'solid'} size={'lg'} colorScheme={'twitter'} leftIcon={<FaTwitterSquare />}><Link target="_blank" href="https://twitter.com/orzechowski_mat">Twitter</Link></Button>
                                    </WrapItem>
                                    <WrapItem>
                                        <Button variant={'solid'} size={'lg'} colorScheme={'pink'} leftIcon={<FaInstagramSquare />}><Link target="_blank" href="https://instagram.com/mateusz.orzechowski">Instagram</Link></Button>
                                    </WrapItem>
                                    <WrapItem>
                                        <Button variant={'solid'} size={'lg'} color={useColorModeValue('white', 'black')} bgColor={useColorModeValue('black', 'gray.200')} _hover={{ bg: 'gray.700'}} leftIcon={<IonIcon name="logo-tiktok"></IonIcon>}><Link target="_blank" href="https://tiktok.com/@orzechowski_mat">TikTok</Link></Button>
                                    </WrapItem>
                                </Wrap>
                            </Stack>
                            <Button variant={'solid'} colorScheme={"gray"} rightIcon={<ExternalLinkIcon />} size={'sm'}>
                                <Link href={'https://m.me/112361920273367'}>Napisz na Messengerze!</Link>
                            </Button>
                            
                        </Stack>
                    </Stack>
                </Container>
            </Box>
            </Show>
        </>
    )
}