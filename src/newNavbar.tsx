import { ChevronDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, ButtonGroup, Flex, HStack, Heading, IconButton, Image, Link, ListIcon, Menu, MenuButton, MenuDivider, MenuItem, MenuItemOption, MenuList, MenuOptionGroup, Show, Spacer, background, useColorMode, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { FaUser, FaVoteYea } from "react-icons/fa";
import { FaList, FaListCheck } from "react-icons/fa6";
import { IoInvertModeOutline } from "react-icons/io5";
import { IconBase } from "react-icons/lib";

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
            "link": "#jak-glosowac",
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
    const { colorMode, toggleColorMode }  = useColorMode()
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
<IconButton aria-label="color mode" color={"white"} rounded={0} bg={useColorModeValue("brand.100", "gray.900")} _hover={{ bg: useColorModeValue("brand.200", "brand.100") }} onClick={toggleColorMode}>{colorMode === 'light' ? <SunIcon /> : <MoonIcon />}</IconButton>
                        </HStack>
                    </Box>
                </Box>
            </Show>
            <Show below="md">
                <Flex p={5} pos={"absolute"} w={"100%"} justifyContent={'space-between'} minWidth='max-content' alignItems='center'  gap='2'>
                    <Box>
                    <Image src="logo-mo.svg" alt="Mateusz Orzechowski" height={10} />
                    </Box>
                    <Spacer />
                    <Box>
                    <Menu>
                        <MenuButton as={Button} bg={"brand.100"} _hover={{ bg: 'brand.200' }} _expanded={{ bg: 'brand.200' }} leftIcon={<FaList />} rounded={0}>
                            Menu
                        </MenuButton>
                        <MenuList rounded={0} >
                        {Tabs.map((tab, i) => (
                                <Link key={i} _hover={{ textDecoration: "none" }} href={tab.link}><MenuItem icon={tab.icon}>{tab.title}</MenuItem></Link>
                            ))}
                            <MenuDivider />
                            <MenuItem onClick={toggleColorMode} icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}>Zmień motyw (obecny: {colorMode === 'light' ? 'jasny' : 'ciemny'})</MenuItem>
                        </MenuList>
                    </Menu>
                    </Box>
                </Flex>
            </Show>
        </>
    )
}