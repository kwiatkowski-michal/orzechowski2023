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
import { Link } from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}
const Links = 
[
    {
        "id": "1",
        "link": "#kim-jestem",
        "title": "Kim jestem?"
    },
    {
        "id": "2",
        "link": "#jak-glosowac",
        "title": "Jak głosować?"
    },
    {
        "id": "3",
        "link": "#postulaty",
        "title": "Najważniejsze postulaty"
    },
  //   {
  //     "id": "4",
  //     "link": "#moje-dzialania",
  //     "title": "Moje działania"
  // }

]


const NavLink = (props: Props) => {
  const { children } = props
  return (
    <Button
      variant={'text'}
      py="4"
      px={4}
      transition={"0.2s"}
      color={"white"}
      backgroundColor={"inherit"}
      rounded={'0'}
      _hover={{
        bg: useColorModeValue('brand.200', 'brand.100'),
      }}>
      {children}
    </Button>
  )
}

export default function WithAction() {
    const { colorMode, toggleColorMode }  = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <>
      <Box userSelect={"none"} as="header"  position="absolute" w="100%">
        <Flex
              px={{md: '4'}}
              pt={{md: '4'}}
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
            <Box><Image userSelect={"none"} src="./logo-mo.svg" color={"white"} mt={2} height={"8"}></Image></Box>
            <HStack as={'nav'}  spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <Link key={link.id} href={link.link}><NavLink>{link.title}</NavLink></Link>
              ))}
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
          <Box bgColor={'brand.100'} display={{ md: 'none' }} mb={10}>
            <Stack as={'nav'}>
              {Links.map((link) => (
                <Link key={link.id} href={link.link}><NavLink>{link.title}</NavLink></Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}