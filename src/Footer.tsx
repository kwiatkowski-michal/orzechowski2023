import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
    Box,
    Container,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'5xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'left', md: 'space-between' }}
          align={{ base: 'left', md: 'center' }}>
          <Text>Wykonanie: Michał Kwiatkowski</Text>
          <Link href={'https://www.lewica.org.pl'}><Image src='logolewica.svg' height={"1.5rem"}/></Link>
          <Text bgClip='text' bgGradient='linear(to-l, #4e2b8a, #ac145a, #d6001c)'>Sfinansowano przez KW Nowa Lewica</Text>
        </Container>
      </Box>
    );
  }