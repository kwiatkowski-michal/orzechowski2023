import { Text, useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useColorModeValue, Divider, Img } from "@chakra-ui/react"
import { FaCoins } from "react-icons/fa"

export default function ModalSupport() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen} leftIcon={<FaCoins/>} variant={'solid'} size={'lg'} rounded={0} color={"white"} bgColor={"brand.100"} _hover={{ bg: "brand.200" }}>Wesprzyj moją kampanię</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontWeight={"800"} color={useColorModeValue("brand.100", "white")}>Wesprzyj moją kampanię!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Chcesz zmienić Polskę na lepsze? Wesprzyj moje działania!
                        <Divider my={3}></Divider>
                        <Text>
                            <Text fontWeight={"800"} as={"span"}>
                                Numer konta:&nbsp;
                            </Text>
                            64 1020 1026 3174 2000 0000 0025
                        </Text>
                        <Text>
                            <Text fontWeight={"800"} as={"span"}>Tytułem: </Text>
                            Darowizna - Mateusz Orzechowski - Okręg 5
                        </Text>
                        <Divider my={3}></Divider>
                        <Text>
                        lub wpłać za pomocą kodu QR
                        </Text>
                        <Img mt={3} height={40} src="kod.png"></Img>

                    </ModalBody>

                    <ModalFooter>
                        {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button> */}
                        {/* <Button variant='ghost'>Secondary Action</Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}