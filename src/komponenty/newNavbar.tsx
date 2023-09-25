import { DownloadIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, HStack, IconButton, Image, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Show, Spacer, Tooltip, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaUser, FaVoteYea } from "react-icons/fa";
import { FaList, FaListCheck } from "react-icons/fa6";

function przejdzDoGlosowanie() {
    const glosowanieSection = document.getElementById("glosowanie");
    if (glosowanieSection) {
      glosowanieSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  
  function przejdzDoPostulaty() {
    const postulatySection = document.getElementById("postulaty");
    if (postulatySection) {
      postulatySection.scrollIntoView({ behavior: "smooth" });
    }
  }
  
  function przejdzDoKimJestem() {
    const kimJestemSection = document.getElementById("kim-jestem");
    if (kimJestemSection) {
      kimJestemSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  

async function clearCacheAndInstallServiceWorker() {

    try {
        await caches.delete('my-page-cache');
        const registration = await navigator.serviceWorker.register('/service-worker.js');
        console.log('Service Worker zainstalowany:', registration);
        await registration.update();
        console.log('Cache strony wyczyszczone, a Service Worker zainstalowany i zaktualizowany.');
    } catch (error) {
        console.error('Wystąpił błąd podczas czyszczenia cache i instalacji Service Workera:', error);
    }
}


const Tabs =
    [
        {
            "id": "1",
            "link": przejdzDoKimJestem,
            "title": "Kim jestem?",
            "icon": <FaUser />
        },
        {
            "id": "2",
            "link": przejdzDoGlosowanie,
            "title": "Jak głosować?",
            "icon": <FaVoteYea />
        },
        {
            "id": "3",
            "link": przejdzDoPostulaty,
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
    return (
        <>
            <Show above="md">
                <Box bgColor={useColorModeValue("brand.100", "gray.900")}>
                    <Box pt={4} px={4}>
                        <HStack as={'nav'}>
                            <Image src="logo-mo.svg" alt="Mateusz Orzechowski" w={20} mr={5}/>
                            {Tabs.map((tab, i) => (
                                <Link key={i} onClick={tab.link}><Button leftIcon={tab.icon} transition={"0.2s"} color={"white"} backgroundColor={"inherit"} rounded={'0'} _hover={{ bg: bgbutton }} variant="ghost" ml={0}>{tab.title}</Button></Link>
                            ))}
                            <Spacer />
                            <Tooltip label="Zainstaluj najnowszą wersję strony" aria-label='A tooltip'>
                                <IconButton aria-label="Update" color={"white"} rounded={0} bg={useColorModeValue("brand.100", "gray.900")} _hover={{ bg: useColorModeValue("brand.200", "brand.100") }} onClick={clearCacheAndInstallServiceWorker}>{<DownloadIcon />}</IconButton>
                            </Tooltip>
                            <Tooltip label="Przełącz tryb strony" aria-label='A tooltip'>
                                <IconButton aria-label="color mode" color={"white"} rounded={0} bg={useColorModeValue("brand.100", "gray.900")} _hover={{ bg: useColorModeValue("brand.200", "brand.100") }} onClick={toggleColorMode}>{colorMode === 'light' ? <SunIcon /> : <MoonIcon />}</IconButton>
                            </Tooltip>
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
                                    <MenuItem as={"a"} onClick={tab.link} icon={tab.icon}>{tab.title}</MenuItem>
                                ))}
                                <MenuDivider />
                                <MenuItem onClick={toggleColorMode} icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}>Zmień motyw (obecny: {colorMode === 'light' ? 'jasny' : 'ciemny'})</MenuItem>
                                <MenuItem onClick={clearCacheAndInstallServiceWorker} icon={<DownloadIcon />}>Pobierz najnowszą wersję</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Flex>
            </Show>
        </>
    )
}