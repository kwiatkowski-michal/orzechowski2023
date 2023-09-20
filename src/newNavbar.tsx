import { ChevronDownIcon, DownloadIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, ButtonGroup, Flex, HStack, Heading, IconButton, Image, Link, ListIcon, Menu, MenuButton, MenuDivider, MenuItem, MenuItemOption, MenuList, MenuOptionGroup, Show, Spacer, background, useColorMode, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { FaUser, FaVoteYea } from "react-icons/fa";
import { FaList, FaListCheck } from "react-icons/fa6";
declare const self: ServiceWorkerGlobalScope;
const Tabs =
    [
        {
            "id": "1",
            "link": "#kim-jestem",
            "title": "Kim jestem?",
            "icon": <FaUser />
        },
        {
            "id": "2",
            "link": "#glosowanie",
            "title": "Jak głosować?",
            "icon": <FaVoteYea />
        },
        {
            "id": "3",
            "link": "#postulaty",
            "title": "Najważniejsze postulaty",
            "icon": <FaListCheck />
        },
        //   {
        //     "id": "4",
        //     "link": "#moje-dzialania",
        //     "title": "Moje działania"
        // }

    ]

export default function Navbar() {
    const bgbutton = useColorModeValue("brand.200", "brand.100")
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Show above="md">
                <Box bgColor={useColorModeValue("brand.100", "gray.900")}>
                    <Box pt={4} px={4}>
                        <HStack as={'nav'} spacing={4}>
                            <Image src="logo-mo.svg" alt="Mateusz Orzechowski" w={20} />
                            {Tabs.map((tab, i) => (
                                <Link key={i} href={tab.link}><Button transition={"0.2s"} color={"white"} backgroundColor={"inherit"} rounded={'0'} _hover={{ bg: bgbutton }} variant="ghost" ml={4}>{tab.title}</Button></Link>
                            ))}
                            <Spacer />
                            <IconButton aria-label="color mode" color={"white"} rounded={0} bg={useColorModeValue("brand.100", "gray.900")} _hover={{ bg: useColorModeValue("brand.200", "brand.100") }} onClick={self.skipWaiting}>{<DownloadIcon/>}</IconButton>
                            <IconButton aria-label="color mode" color={"white"} rounded={0} bg={useColorModeValue("brand.100", "gray.900")} _hover={{ bg: useColorModeValue("brand.200", "brand.100") }} onClick={toggleColorMode}>{colorMode === 'light' ? <SunIcon /> : <MoonIcon />}</IconButton>
                        </HStack>
                    </Box>
                </Box>
            </Show>
            <Show below="md">
                <Flex p={5} pos={"absolute"} w={"100%"} justifyContent={'space-between'} minWidth='max-content' alignItems='center' gap='2'>
                    <Box>
                        <Image src="logo-mo.svg" alt="Mateusz Orzechowski" height={10} />
                    </Box>
                    <Spacer />
                    <Box>
                        <Menu>
                            <MenuButton color={"white"} as={Button} bg={"brand.100"} _hover={{ bg: 'brand.200' }} _expanded={{ bg: 'brand.200' }} leftIcon={<FaList />} rounded={0}>
                                Menu
                            </MenuButton>
                            <MenuList rounded={0} >
                                {Tabs.map((tab, i) => (
                                    <MenuItem as={"a"} href={tab.link} icon={tab.icon}>{tab.title}</MenuItem>
                                ))}
                                <MenuDivider />
                                <MenuItem onClick={toggleColorMode} icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}>Zmień motyw (obecny: {colorMode === 'light' ? 'jasny' : 'ciemny'})</MenuItem>
                                <MenuItem onClick={toggleColorMode} icon={<DownloadIcon/>}>Pobierz najnowszą wersję</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Flex>
            </Show>
        </>
    )
}