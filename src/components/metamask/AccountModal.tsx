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
import { ExternalLinkIcon, CopyIcon } from "@chakra-ui/icons";
import { useEthers } from "@usedapp/core";
import Identicon from "./Identicon";

type Props = {
  isOpen: any;
  onClose: any;
};

export default function AccountModal({ isOpen, onClose }: Props) {
  const { account, deactivate } = useEthers();

  function handleDeactivateAccount() {
    deactivate();
    onClose();
  }

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
        <ModalHeader color="black" px={4} fontSize="lg" fontWeight="medium">
          Account
        </ModalHeader>
        <ModalCloseButton
          color="black"
          fontSize="sm"
          _hover={{
            color: "white",
          }}
        />
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
                Connected with MetaMask
              </Text>
              <Button
                background="white"
                variant="outline"
                size="sm"
                borderColor="black"
                borderRadius="3xl"
                color="black"
                fontSize="13px"
                fontWeight="medium"
                px={2}
                height="26px"
                _hover={{
                  background: "black",
                  borderColor: "black",
                  color: "white",
                }}
                onClick={handleDeactivateAccount}
              >
                Change
              </Button>
            </Flex>
            <Flex alignItems="center" mt={2} mb={4} lineHeight={1}>
              <Identicon />
              <Text
                color="black"
                fontSize="xl"
                fontWeight="semibold"
                ml="2"
                lineHeight="1.1"
              >
                {account &&
                  `${account.slice(0, 6)}...${account.slice(
                    account.length - 4,
                    account.length
                  )}`}
              </Text>
            </Flex>
            <Flex alignContent="center" m={3}>
              <Button
                variant="link"
                color="gray.500"
                fontWeight="normal"
                fontSize="sm"
                _hover={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <CopyIcon mr={1} />
                Copy Address
              </Button>
              <Link
                fontSize="sm"
                display="flex"
                alignItems="center"
                href={`https://etherscan.io/address/${account}`}
                isExternal
                color="gray.500"
                ml={6}
                _hover={{
                  color: "black",
                  textDecoration: "underline",
                }}
              >
                <ExternalLinkIcon mr={1} />
                View on Explorer
              </Link>
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
          <Text
            color="black"
            textAlign="left"
            fontWeight="medium"
            fontSize="md"
          >
            Your transactions will appear here...
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
