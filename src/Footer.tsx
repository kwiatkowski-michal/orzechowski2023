import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Image,
  Link,
  Show,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';


export default function Footer() {
  return (
    <Box
      userSelect={"none"}
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'5xl'} py={4} direction={{ base: 'column', sm: 'row' }} spacing={{ base: '2', md: '4' }} justify={{ base: 'left', sm: 'space-between' }} align={{ base: 'center' }}>
        <Show above='md'>
          <Text>Wykonanie: <Link href='https://kwiatkowskimichal.tech'>Michał Kwiatkowski</Link></Text>
          <Link href={'https://www.lewica2023.org'}><Image src='logolewica.svg' height={"1.5rem"} /></Link>
          <Text>Materiał KW Nowa Lewica</Text>
        </Show>
        <Show below='md'>
          <Text>Wykonanie: <Link href='https://kwiatkowskimichal.tech'>Michał Kwiatkowski</Link></Text>
          <Button size='xs' rounded={0} rightIcon={<ExternalLinkIcon />} color={"brand.100"} borderColor={"brand.100"} variant='outline'><Link target='_blank' href={'https://www.lewica2023.org'}>Materiał KW Nowa Lewica</Link></Button>
        </Show>
      </Container>
    </Box>
  );
}