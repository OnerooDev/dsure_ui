import { Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';


interface simpleHeaderProps {

}

export const SimpleHeader: React.FC<simpleHeaderProps> = ({}) => {

  return (
    <Flex mr={2} ml={2} mt={2} bg='white' p={4} boxShadow="0px 10px 32px 0px #00546F1A">
        <NextLink href="/">
          <Link fontSize="24px" fontWeight="bold" text-align="center">:DSURE</Link>
        </NextLink>
    </Flex>
  )
}
