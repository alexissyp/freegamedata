import React from "react";
import { useLocation } from "wouter";

import { Flex, Button, Text, Heading, Link } from "@chakra-ui/react";

const NavigationBar = () => {
  const [, setLocation] = useLocation();

  return (
    <Flex
      maxWidth="100%"
      margin="24px auto"
      flexWrap="wrap"
      justifyContent="center"
    >
      <Heading>
        <Link href="/"> Home </Link>
      </Heading>
      <Button margin="8px" onClick={() => setLocation(`/games`)}>
        <Text> All </Text>
      </Button>
      <Button margin="8px" onClick={() => setLocation(`/platform/pc`)}>
        <Text>PC</Text>
      </Button>
      <Button margin="8px" onClick={() => setLocation(`/platform/steam`)}>
        Steam
      </Button>
      <Button
        margin="8px"
        onClick={() => setLocation(`/platform/playstation4`)}
      >
        <Text>PlayStation 4</Text>
      </Button>
      <Button
        margin="8px"
        onClick={() => setLocation(`/platform/nintendoswitch`)}
      >
        Nintendo Switch
      </Button>
      <Button margin="8px" onClick={() => setLocation(`/platform/xbox`)}>
        XBox
      </Button>
      <Button margin="8px" onClick={() => setLocation(`/platform/ios`)}>
        iOS
      </Button>
      <Button margin="8px" onClick={() => setLocation(`/platform/android`)}>
        Android
      </Button>
    </Flex>
  );
};

export default NavigationBar;
