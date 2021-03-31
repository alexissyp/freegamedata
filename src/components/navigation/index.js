import { Flex, Button, Link } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Flex maxW="80%" justify="space-evenly" margin="0 auto" align="center">
      <Button colorScheme="orange"> FREE</Button>

      <Link>LINK THIS</Link>

      <Link>LINK THIS</Link>

      <Link>LINK THIS</Link>

      <Link>LINK THIS</Link>
    </Flex>
  );
};

export default Navigation;
