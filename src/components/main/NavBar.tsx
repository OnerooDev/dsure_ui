import { Box, Flex, Text, useDisclosure, Link } from '@chakra-ui/react';
import ConnectButton from "../metamask/ConnectButton";
import AccountModal from "../metamask/AccountModal";
import NextLink from 'next/link';


interface NavBarProps {

}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex mr={2} ml={2} mt={2} bg='white' p={4} boxShadow="0px 10px 32px 0px #00546F1A">
      <Box mr={4}>
        <NextLink href="/">
          <Link fontSize="24px" fontWeight="bold">:DSURE</Link>
        </NextLink>
      </Box>
        <Box ml={"auto"}>
          <NextLink href="/dashboard">
            <Link mr={20}>Dashboard</Link>
          </NextLink>
          <NextLink href="/login">
            <Link mr={5}>How it works</Link>
          </NextLink>
          <NextLink href="/register">
            <Link mr={5}>Plans</Link>
          </NextLink>
          <NextLink href="/register">
            <Link mr={5}>FAQ</Link>
          </NextLink>

          <ConnectButton handleOpenModal={onOpen} />
          <AccountModal isOpen={isOpen} onClose={onClose} />
        </Box>
    </Flex>
  )
}
