import { Flex, Heading, Link } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Flex maxW="90%" justify="flex-start" margin="0 auto" align="center">
      <Heading>
        <Link> Platforms</Link>
      </Heading>
    </Flex>
  );
};

export default Navigation;
