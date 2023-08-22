'use client'

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import React from 'react'

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
      as="span"
      py="4"
      px={4}
      transition={"0.2s"}
      color={"white"}
      rounded={'0'}
      _hover={{
        textDecoration: 'none',
        color: "white",
        fontWeight: "800",
        bg: useColorModeValue('brand.200', 'brand.100'),
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
      <Box as="header"  position="absolute" w="100%">
        <Flex
              px={{md: '4'}}
              pt={{md: '2'}}
              pb={{s: "6", md: "0"}}
              alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
          color={"white"}
          
          rounded={0}
          _hover={{
            textDecoration: 'none',
            color: "white",
            bg: "brand.100",
          }}
          bgColor={"inherit"}
            size={'md'}
            _checked={{bg: "brand.100"}}
            transition={"0.2s"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box><Image src="./logo-mo.svg" color={"white"} mt={2} height={"8"}></Image></Box>
            <HStack as={'nav'}  spacing={4} display={{ base: 'none', md: 'flex' }}>
              {/* {Links.map((link) => (
                <NavLink key={link.id}><a href={link.link}>{link.title}</a></NavLink>
              ))} */}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
          <Button onClick={toggleColorMode}
          color={"white"}
          transition={"0.2s"}
          _hover={{
            textDecoration: 'none',
            color: "white",
            bg: useColorModeValue('brand.200', 'brand.100'),
          }}
          _checked={{bg: "brand.100"}}
          rounded={0}
          bgColor={"inherit"}
 >
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
           
        
          </Flex>
        </Flex>

        {isOpen ? (
          <Box  bgColor={'brand.100'} display={{ md: 'none' }}>
            <Stack as={'nav'}>
              {/* {Links.map((link) => (
                <NavLink key={link.id}><a href={link.link}>{link.title}</a></NavLink>
              ))} */}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}