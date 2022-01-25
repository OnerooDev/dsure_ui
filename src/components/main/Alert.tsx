import {
  Box,
  Button,
  Flex,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";

type Props = {
  isOpen: any;
  onClose: any;
  func: any;
};

export default function Alert({ isOpen, onClose, func }: Props) {

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
      <ModalOverlay />
      <ModalContent
        background="linear-gradient(101.56deg, #98FFE6 0%, #50EFF5 100%)"
        border="2px"
        borderStyle="solid"
        borderColor="black"
        borderRadius="3xl"
      >
        <ModalHeader color="black" px={4} fontSize="lg" fontWeight="medium" isCentered>
          Cancel confirmation
        </ModalHeader>
        <ModalBody pt={0} px={4}>
          <Box
            background="white"
            borderRadius="3xl"
            border="2px"
            borderStyle="solid"
            borderColor="black"
            px={5}
            pt={4}
            pb={2}
            mb={3}
          >
            <Flex justifyContent="space-between" alignItems="center" mb={3}>
              <Text color="black" fontSize="md">
                Now you apply to cancel your current insurance certificate before 1 year staking. Fee amount - 2500 USDT
              </Text>
            </Flex>
          </Box>
        </ModalBody>

        <ModalFooter
          justifyContent="end"
          background="white"
          borderRadius="3xl"
          borderWidth="2px"
          borderColor="black"
          p={6}
          mb={2}
          ml={2}
          mr={2}
        >
          <Flex alignContent="center">
            <ModalCloseButton
              color="black"
              fontSize="sm"
              _hover={{
                color: "white",
              }}
            >
              Cancel
            </ModalCloseButton>
            <Button
              variant="link"
              color="gray.500"
              fontWeight="normal"
              fontSize="sm"
              _hover={{
                textDecoration: "none",
                color: "black",
              }}
              onClick={func}
            >
              <CopyIcon mr={1} />
              Confirm
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
