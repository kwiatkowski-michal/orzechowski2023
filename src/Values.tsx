import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Link,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactElement } from 'react';
  import {
    FcAbout,
    FcAssistant,
    FcCollaboration,
    FcDonate,
    FcManager,
  } from 'react-icons/fc';
  
  interface CardProps {
    heading: string;
    description: string;
    icon: ReactElement;
    href: string;
  }
  
  const Card = ({ heading, description, icon, href }: CardProps) => {
    return (
      <Box
        maxW={{ base: 'full', md: '314px' }}
        w={'full'}
        bg="white"
        rounded={'lg'}
        boxShadow={'md'}
        overflow="hidden"
        p={5}>
        <Stack align={'start'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={useColorModeValue('gray.100', 'gray.700')}>
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
          <Button variant={'link'} color={'brand.100'} rightIcon={<ExternalLinkIcon/>} size={'sm'}>
            <Link>Zobacz więcej
            </Link>
          </Button>
        </Stack>
      </Box>
    );
  };
  
  export default function Values() {
    return (
      <Box mb={10}>
        <Stack spacing={4} as={Container} maxW={'5xl'}>
          <Heading fontWeight={'extrabold'}>
            Short heading
          </Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
          </Text>
        </Stack>
  
        <Container maxW={'5xl'} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Card
              heading={'Heading'}
              icon={<Icon as={FcAssistant} w={10} h={10} />}
              description={
                'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
              }
              href={'#'}
            />
            <Card
              heading={'Heading'}
              icon={<Icon as={FcCollaboration} w={10} h={10} />}
              description={
                'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
              }
              href={'#'}
            />
            <Card
              heading={'Heading'}
              icon={<Icon as={FcDonate} w={10} h={10} />}
              description={
                'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
              }
              href={'#'}
            />
            <Card
              heading={'Heading'}
              icon={<Icon as={FcManager} w={10} h={10} />}
              description={
                'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
              }
              href={'#'}
            />
            <Card
              heading={'Heading'}
              icon={<Icon as={FcAbout} w={10} h={10} />}
              description={
                'Lorem ipsum dolor sit amet catetur, adipisicing elit.'
              }
              href={'#'}
            />
          </Flex>
        </Container>
      </Box>
    );
  }