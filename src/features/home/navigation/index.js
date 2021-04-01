import React from "react";

import { Flex, Button, Text } from "@chakra-ui/react";

const NavigationBar = ({ allGames, show }) => {
  const platform = allGames.map((game) => {
    return game.platforms;
  });

  return (
    <Flex maxWidth="90%" margin="0 auto" flexWrap="wrap">
      <Button
        margin="8px"
        onClick={() => {
          if (platform === "PC") {
            return !show;
          }
        }}
      >
        <Text>PC</Text>
      </Button>
      <Button margin="8px">Steam</Button>
      <Button margin="8px">
        <Text>PlayStation 4</Text>
      </Button>
      <Button margin="8px">Nintendo Switch</Button>
      <Button margin="8px">XBox</Button>
      <Button margin="8px">iOS</Button>
      <Button margin="8px">Android</Button>
    </Flex>
  );
};

export default NavigationBar;
