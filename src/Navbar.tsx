'use client'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  color,
  Image,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

interface Props {
  children: React.ReactNode
}
const Links = 
[
    {
        "id": "1",
        "link": "#wartosci",
        "title": "Moje wartości"
    },
    {
        "id": "2",
        "link": "#postulaty",
        "title": "Najważniejsze postulaty"
    },
    {
        "id": "3",
        "link": "#wpisy",
        "title": "Najnowsze wpisy"
    }
]


const NavLink = (props: Props) => {
  const { children } = props
  return (
    <Box
      as="a"
      px={2}
      py={1}
      color={"white"}
      rounded={'0'}
      _hover={{
        textDecoration: 'none',
        color: "white",
        bg: "brand.200",
      }}>
      {children}
    </Box>
  )
}

export default function WithAction() {
    const { colorMode, toggleColorMode }  = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={useColorModeValue('brand.100', 'black')} px={4}>
        <Flex py={2} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
          color={"white"}
          rounded={0}
          _hover={{
            textDecoration: 'none',
            color: "white",
            bg: "brand.200",
          }}
          bgColor={useColorModeValue('brand.100', 'black')}
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box><Image src="./logo-mo.svg" color={"white"} height={"8"}></Image></Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.id}><a href={link.link}>{link.title}</a></NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
          <Button onClick={toggleColorMode}
          color={"white"}
          _hover={{
            textDecoration: 'none',
            color: "white",
            bg: "brand.200",
          }}
          rounded={0}
          bgColor={useColorModeValue('brand.100', 'black')}
 >
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
           
        
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.id}>{link.title}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}