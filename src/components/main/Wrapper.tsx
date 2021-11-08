import { Box } from '@chakra-ui/react';

interface WraperProps {
  variant?: 'small' | 'regular';
}

export const Wraper: React.FC<WraperProps> = ({children, variant}) => {
  return (
    <Box
      mt={3}
      mx="auto"
      maxW={variant === "regular" ? "800px" : "400px"}
      w="100%"
    >
    {children}
    </Box>
  );
}
